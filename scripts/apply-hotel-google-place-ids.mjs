#!/usr/bin/env node
// Apply reviewed Place IDs without fetching Google data or changing hotel details.
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import pg from "pg";

const mappingPath = "content/cities/newyork/hotel-google-place-ids.json";
const selectionPath = "content/cities/newyork/hotel-selection.json";
const select = `SELECT h.id::text AS "hotelId", h.source_id AS "sourceId",
  h.google_place_id AS "googlePlaceId",
  to_jsonb(h) - 'google_place_id' - 'updated_at' AS preserved,
  (SELECT COALESCE(jsonb_agg(to_jsonb(t) ORDER BY t.tag), '[]'::jsonb)
    FROM hotel_tags t WHERE t.hotel_id = h.id) AS tags
  FROM hotels h WHERE h.city_slug = $1 AND h.source = $2
    AND h.active = TRUE AND h.source_id = ANY($3::text[]) ORDER BY h.id`;

async function main() {
  const flags = process.argv.slice(2);
  assert(flags.length <= 1 && flags.every(flag => ["--dry-run", "--verify", "--apply"].includes(flag)),
    "Use no flags, --dry-run, --verify, or --apply");
  const mode = flags[0] ?? "--dry-run";
  const apply = mode === "--apply";
  for (const filename of [".env.local", ".env"]) {
    try { process.loadEnvFile(filename); }
    catch (error) { if (error.code !== "ENOENT") throw error; }
  }
  const mapping = JSON.parse(readFileSync(mappingPath, "utf8"));
  const selection = JSON.parse(readFileSync(selectionPath, "utf8"));
  assert.equal(mapping.city, "nyc", "Expected NYC Place ID mapping");
  assert.equal(mapping.source, "travel-advisor", "Unexpected hotel provider");
  assert(Array.isArray(mapping.hotels) && mapping.hotels.length === 50, "Expected 50 Place ID matches");
  assert(Array.isArray(selection.sourceIds) && selection.sourceIds.length === 50, "Expected 50 curated provider IDs");
  const validId = value => typeof value === "string" && value.trim().length > 0 && value === value.trim();
  const sourceIds = mapping.hotels.map(hotel => hotel.sourceId);
  const placeIds = mapping.hotels.map(hotel => hotel.googlePlaceId);
  assert(sourceIds.every(validId) && selection.sourceIds.every(validId), "Provider IDs must be nonempty strings");
  assert.equal(new Set(sourceIds).size, 50, "Duplicate mapped provider IDs");
  assert.equal(new Set(selection.sourceIds).size, 50, "Duplicate curated provider IDs");
  assert.deepEqual([...sourceIds].sort(), [...selection.sourceIds].sort(), "Mapping differs from curated hotel selection");
  assert(placeIds.every(validId), "Place IDs must be nonempty strings");
  assert.equal(new Set(placeIds).size, 50, "Duplicate Google Place IDs");
  const expected = new Map(mapping.hotels.map(hotel => [hotel.sourceId, hotel.googlePlaceId]));
  const parameters = [mapping.city, mapping.source, sourceIds];

  function verifyMatches(rows) {
    assert.equal(rows.length, 50, "Expected exactly 50 active database matches");
    assert.equal(new Set(rows.map(row => row.sourceId)).size, 50, "Ambiguous database matches");
    assert.deepEqual(rows.map(row => row.sourceId).sort(), [...sourceIds].sort(), "Database inventory differs from mapping");
  }
  function verifyIds(rows) {
    verifyMatches(rows);
    for (const row of rows) {
      assert.equal(row.googlePlaceId, expected.get(row.sourceId), "Saved Place ID mismatch for provider ID " + row.sourceId);
    }
  }
  function verifyPreserved(before, after) {
    const snapshots = new Map(before.map(row => [row.sourceId, row]));
    for (const row of after) {
      const previous = snapshots.get(row.sourceId);
      assert.deepEqual(row.preserved, previous.preserved, "Other hotel columns changed for provider ID " + row.sourceId);
      assert.deepEqual(row.tags, previous.tags, "Hotel tags changed for provider ID " + row.sourceId);
    }
  }

  assert(process.env.DATABASE_URL, "DATABASE_URL is required");
  const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }, max: 1, connectionTimeoutMillis: 10000 });
  let client;
  let transaction = false;
  let committed = false;
  try {
    client = await pool.connect();
    await client.query(apply ? "BEGIN" : "BEGIN READ ONLY");
    transaction = true;
    const before = (await client.query(select + (apply ? " FOR UPDATE OF h" : ""), parameters)).rows;
    verifyMatches(before);
    for (const row of before) {
      assert(!row.googlePlaceId?.trim() || row.googlePlaceId === expected.get(row.sourceId),
        "Conflicting saved Place ID for provider ID " + row.sourceId);
    }
    const changes = before.filter(row => row.googlePlaceId !== expected.get(row.sourceId));
    if (mode === "--dry-run") {
      await client.query("ROLLBACK");
      transaction = false;
      console.log(JSON.stringify({ mode: "dry-run", matched: before.length,
        updates: changes.length, alreadyCorrect: before.length - changes.length }));
      return;
    }
    if (apply) {
      for (const row of changes) {
        const saved = await client.query(`UPDATE hotels SET google_place_id = $1
          WHERE id = $2 AND city_slug = $3 AND source = $4 AND source_id = $5
            AND active = TRUE AND NULLIF(BTRIM(google_place_id), '') IS NULL
          RETURNING id`, [expected.get(row.sourceId), row.hotelId, mapping.city, mapping.source, row.sourceId]);
        assert.equal(saved.rowCount, 1, "Expected one Place ID update for provider ID " + row.sourceId);
      }
    }
    const after = (await client.query(select, parameters)).rows;
    verifyIds(after);
    verifyPreserved(before, after);
    await client.query("COMMIT");
    transaction = false;
    committed = apply;
    const persisted = (await client.query(select, parameters)).rows;
    verifyIds(persisted);
    verifyPreserved(before, persisted);
    console.log(JSON.stringify({ mode: apply ? "saved-and-verified" : "verified", matched: persisted.length,
      updated: apply ? changes.length : 0, alreadyCorrect: before.length - changes.length }));
  } catch (error) {
    if (transaction) {
      try { await client.query("ROLLBACK"); }
      catch (rollbackError) { console.error("Place ID rollback failed:", rollbackError.code ?? rollbackError.name); }
    }
    if (committed) console.error("Place IDs were committed; subsequent verification failed.");
    throw error;
  } finally { client?.release(); await pool.end(); }
}

main().catch(error => {
  // Report validation messages and database codes without exposing connection details.
  const reason = error instanceof assert.AssertionError ? error.message.split("\n")[0] : error.code ?? error.name;
  console.error("Hotel Place ID synchronization failed:", reason);
  process.exitCode = 1;
});
