import assert from "node:assert/strict";
import { randomUUID } from "node:crypto";
import { readFileSync } from "node:fs";
import test from "node:test";
import pg from "pg";
import { loadTypescriptModule } from "./load-typescript-module.mjs";

const { reserveHotelRatingBudget } = await loadTypescriptModule("../../app/lib/google-hotel-rating-budget.ts");

test("invalid budgets fail before acquiring a database connection", async () => {
  let connected = false;
  const pool = { connect: async () => { connected = true; throw new Error("Must not connect"); } };
  const hash = "a".repeat(64);
  for (const [ipHash, limits] of [
    ["raw-client-IP", { daily: 2, monthly: 3, ipHourly: 1 }],
    [hash, { daily: -1, monthly: 3, ipHourly: 1 }],
    [hash, { daily: 2, monthly: Infinity, ipHourly: 1 }],
    [hash, { daily: 2, monthly: 3, ipHourly: 1.5 }],
  ]) await assert.rejects(reserveHotelRatingBudget(pool, ipHash, limits));
  assert.equal(connected, false);
});

test("quota failures roll back and release the client instead of permitting a lookup", async () => {
  for (const failure of ["clock", "counters", "increment"]) {
    const queries = [];
    let released = false;
    const pool = { connect: async () => ({
      query: async (sql) => {
        queries.push(sql);
        if (sql.includes("WITH current_clock")) return { rows: failure === "clock" ? [] : [{ day_start: new Date(), month_start: new Date(), hour_start: new Date() }] };
        if (sql.includes("INSERT INTO hotel_rating_usage")) return { rows: failure === "counters" ? [] : ["day", "month", "ip"].map((scope) => ({ scope, attempts: 0 })) };
        if (sql.includes("UPDATE hotel_rating_usage SET attempts")) return { rows: [] };
        return { rows: [] };
      },
      release: () => { released = true; },
    }) };
    await assert.rejects(reserveHotelRatingBudget(pool, "a".repeat(64), { daily: 2, monthly: 3, ipHourly: 1 }));
    assert.equal(queries.at(-1), "ROLLBACK");
    assert.equal(queries.includes("COMMIT"), false);
    assert.equal(released, true);
  }
});

test("gallery reserves four attempts atomically and refuses insufficient remaining quota", async () => {
  for (const current of [0, 2]) {
    const increments = [];
    const pool = { connect: async () => ({
      query: async (sql, values) => {
        if (sql.includes("WITH current_clock")) return { rows: [{ day_start: new Date(), month_start: new Date(), hour_start: new Date() }] };
        if (sql.includes("INSERT INTO hotel_rating_usage")) return { rows: ["day", "month", "ip"].map(scope => ({ scope, attempts: current })) };
        if (sql.includes("UPDATE hotel_rating_usage SET attempts")) { increments.push(values); return { rows: ["day", "month", "ip"].map(scope => ({ scope })) }; }
        return { rows: [] };
      }, release: () => {},
    }) };
    const result = await reserveHotelRatingBudget(pool, "a".repeat(64), { daily: 5, monthly: 5, ipHourly: 5 }, 4);
    assert.equal(result, current === 0 ? "allowed" : "ip_limit");
    assert.deepEqual(increments, current === 0 ? [["a".repeat(64), 4]] : []);
  }
});

// Opt-in integration coverage touches only a unique temporary schema and never
// imports the rating route/providers or queries/modifies the hotel inventory.
test("PostgreSQL reservations enforce shared day/month/IP caps under concurrency", {
  skip: process.env.HOTEL_RATING_BUDGET_DB_TEST !== "1",
  timeout: 120_000,
}, async (t) => {
  if (!process.env.DATABASE_URL) {
    for (const filename of [".env.local", ".env"]) {
      try { process.loadEnvFile(filename); } catch (error) { if (error.code !== "ENOENT") throw error; }
      if (process.env.DATABASE_URL) break;
    }
  }
  assert.ok(process.env.DATABASE_URL, "DATABASE_URL is required for the opt-in isolated integration test");
  const schema = `hotel_rating_test_${randomUUID().replaceAll("-", "")}`;
  assert.match(schema, /^hotel_rating_test_[a-f0-9]{32}$/);
  const poolOptions = { connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false }, connectionTimeoutMillis: 10_000 };
  const admin = new pg.Pool({ ...poolOptions, max: 1 });
  let isolated;
  let created = false;
  try {
    await admin.query(`CREATE SCHEMA "${schema}"`);
    created = true;
    isolated = new pg.Pool({ ...poolOptions, max: 4 });
    const table = `"${schema}".hotel_rating_usage`;
    const ddl = readFileSync(new URL("../../scripts/hotel-rating-limits-schema.sql", import.meta.url), "utf8")
      .replaceAll(/\bhotel_rating_usage\b/g, table);
    await isolated.query(ddl);
    // Transaction poolers disallow startup search_path. Set it transaction-
    // locally immediately after the production adapter begins each transaction.
    const adapterPool = { connect: async () => {
      const client = await isolated.connect();
      return {
        query: async (sql, values) => {
          const result = await client.query(sql, values);
          if (sql === "BEGIN") await client.query(`SET LOCAL search_path TO "${schema}"`);
          return result;
        },
        release: () => client.release(),
      };
    } };
    const counters = async () => (await isolated.query(`SELECT scope, requester_key, attempts FROM ${table} ORDER BY scope, requester_key`)).rows;
    const hash = (index) => index.toString(16).padStart(64, "0");
    const burst = (limits, sameIp = false) => Promise.all(Array.from({ length: 20 }, (_, index) =>
      reserveHotelRatingBudget(adapterPool, hash(sameIp ? 1 : index + 1), limits)));
    await t.test("day budget cannot be exceeded by concurrent clients", async () => {
      const outcomes = await burst({ daily: 3, monthly: 100, ipHourly: 100 });
      assert.equal(outcomes.filter((outcome) => outcome === "allowed").length, 3);
      assert.equal(outcomes.filter((outcome) => outcome === "global_limit").length, 17);
      const rows = await counters();
      assert.equal(rows.find((row) => row.scope === "day").attempts, 3);
      assert.equal(rows.find((row) => row.scope === "month").attempts, 3);
    });
    await t.test("month budget cannot be exceeded by concurrent clients", async () => {
      await isolated.query(`TRUNCATE ${table}`);
      const outcomes = await burst({ daily: 100, monthly: 2, ipHourly: 100 });
      assert.equal(outcomes.filter((outcome) => outcome === "allowed").length, 2);
      assert.equal(outcomes.filter((outcome) => outcome === "global_limit").length, 18);
      const rows = await counters();
      assert.equal(rows.find((row) => row.scope === "month").attempts, 2);
      assert.equal(rows.find((row) => row.scope === "day").attempts, 2);
    });
    await t.test("shared IP budget cannot be exceeded by concurrent clients", async () => {
      await isolated.query(`TRUNCATE ${table}`);
      const outcomes = await burst({ daily: 100, monthly: 100, ipHourly: 2 }, true);
      assert.equal(outcomes.filter((outcome) => outcome === "allowed").length, 2);
      assert.equal(outcomes.filter((outcome) => outcome === "ip_limit").length, 18);
      assert.equal((await counters()).find((row) => row.scope === "ip").attempts, 2);
    });
    await t.test("zero global cap stops every reservation", async () => {
      await isolated.query(`TRUNCATE ${table}`);
      const outcomes = await burst({ daily: 0, monthly: 100, ipHourly: 100 });
      assert.equal(outcomes.filter((outcome) => outcome === "allowed").length, 0);
      assert.ok((await counters()).every((row) => row.attempts === 0));
    });
    await t.test("a new day resets the day counter while preserving this month's attempts", async () => {
      await isolated.query(`TRUNCATE ${table}`);
      assert.equal(await reserveHotelRatingBudget(adapterPool, hash(1), { daily: 1, monthly: 2, ipHourly: 100 }), "allowed");
      await isolated.query(`UPDATE ${table} SET window_started = window_started - INTERVAL '1 day' WHERE scope = 'day'`);
      assert.equal(await reserveHotelRatingBudget(adapterPool, hash(2), { daily: 1, monthly: 2, ipHourly: 100 }), "allowed");
      assert.equal(await reserveHotelRatingBudget(adapterPool, hash(3), { daily: 100, monthly: 2, ipHourly: 100 }), "global_limit");
      const rows = await counters();
      assert.equal(rows.find((row) => row.scope === "day").attempts, 1);
      assert.equal(rows.find((row) => row.scope === "month").attempts, 2);
    });
  } finally {
    await isolated?.end();
    if (created) {
      // Drop only the exact validated random schema created by this test.
      assert.match(schema, /^hotel_rating_test_[a-f0-9]{32}$/);
      await admin.query(`DROP SCHEMA "${schema}" CASCADE`);
      const remaining = await admin.query("SELECT 1 FROM pg_namespace WHERE nspname = $1", [schema]);
      assert.equal(remaining.rowCount, 0, "Temporary test schema cleanup failed");
    }
    await admin.end();
  }
});
