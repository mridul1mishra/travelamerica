import assert from "node:assert/strict";
import test from "node:test";
import { loadTypescriptModule } from "./load-typescript-module.mjs";

const { validateStay, fetchHotelPrices, priceCacheKey, lookupHotelPrices, fetchHotelPriceSnapshot } = await loadTypescriptModule("../../app/lib/serpapi-hotel-prices.ts", { resolveImports: true, omitServerOnly: true });
const future = days => new Date(Date.now() + days * 86400000).toISOString().slice(0, 10);
const stay = { checkIn: future(7), checkOut: future(9), adults: 2, childrenAges: [5, 8] };

test("cache keys separate hotels, queries, dates and occupancy", () => {
  const key = priceCacheKey("42", "Example NYC", stay);
  assert.equal(key, priceCacheKey("42", "Example NYC", { ...stay }));
  for (const changed of [{ checkIn: future(8) }, { checkOut: future(10) }, { adults: 3 }, { childrenAges: [6, 8] }]) {
    assert.notEqual(key, priceCacheKey("42", "Example NYC", { ...stay, ...changed }));
  }
  assert.notEqual(key, priceCacheKey("43", "Example NYC", stay));
  assert.notEqual(key, priceCacheKey("42", "Example LA", stay));
});

test("cache hits preserve timestamps and bypass all provider and usage work", async () => {
  const snapshot = { results: [{ name: "Example", total: "$200" }], checkedAt: new Date().toISOString() };
  const forbidden = async () => { throw new Error("Cache hit must not invoke this dependency"); };
  const result = await lookupHotelPrices("key", "query", stay, "member", { read: async () => snapshot, write: forbidden, reserve: forbidden, fetch: forbidden });
  assert.deepEqual(result, { ...snapshot, cached: true });
});

test("misses reserve once, store successful responses and never cache failures", async () => {
  const calls = [];
  const snapshot = { results: [], checkedAt: new Date().toISOString() };
  const deps = { read: async () => null, reserve: async () => { calls.push("reserve"); return true; },
    fetch: async () => { calls.push("fetch"); return snapshot; }, write: async () => { calls.push("write"); } };
  assert.deepEqual(await lookupHotelPrices("key", "query", stay, "member", deps), { ...snapshot, cached: false });
  assert.deepEqual(calls, ["reserve", "fetch", "write"]);
  calls.length = 0;
  assert.equal(await lookupHotelPrices("key", "query", stay, "member", { ...deps, reserve: async () => false }), null);
  assert.deepEqual(calls, []);
  await assert.rejects(lookupHotelPrices("key", "query", stay, "member", { ...deps, fetch: async () => { throw new Error("provider failure"); } }));
  assert.deepEqual(calls, ["reserve"]);
});

test("SerpApi cached responses retain their original source timestamp", async () => {
  const original = globalThis.fetch;
  const checkedAt = new Date(Date.now() - 30 * 60000).toISOString();
  try {
    globalThis.fetch = async () => Response.json({ search_metadata: { created_at: checkedAt }, properties: [] });
    assert.equal((await fetchHotelPriceSnapshot("query", stay)).checkedAt, checkedAt);
  } finally { globalThis.fetch = original; }
});

test("rejects invalid calendar dates, reversed stays, long stays and guest counts", () => {
  assert.deepEqual(validateStay(stay), stay);
  for (const change of [{ checkIn: "2099-02-30" }, { checkOut: stay.checkIn }, { checkOut: future(50) }, { adults: 0 }, { adults: 1.5 }, { childrenAges: [18] }, { childrenAges: "5" }]) {
    assert.throws(() => validateStay({ ...stay, ...change }));
  }
});

test("sends occupancy and dates, returns only named price results, excludes provider secrets", async () => {
  const originalFetch = globalThis.fetch;
  const originalKey = process.env.SERPAPI_API_KEY;
  process.env.SERPAPI_API_KEY = "test-secret";
  try {
    globalThis.fetch = async (url, options) => {
      const params = new URL(url).searchParams;
      assert.equal(params.get("engine"), "google_hotels");
      assert.equal(params.get("check_in_date"), stay.checkIn);
      assert.equal(params.get("children_ages"), "5,8");
      assert.equal(params.get("children"), "2");
      assert.equal(options.cache, "no-store");
      return Response.json({ properties: [{ name: "Example Hotel", rate_per_night: { lowest: "$100" }, total_rate: { lowest: "$200" }, secret: "test-secret" }, { name: "Unavailable Hotel" }] });
    };
    const results = await fetchHotelPrices("Example Hotel NYC", validateStay(stay));
    assert.equal(results.length, 1);
    assert.equal(results[0].total, "$200");
    assert.ok(!JSON.stringify(results).includes("test-secret"));
    globalThis.fetch = async () => Response.json({ error: "private provider error" });
    await assert.rejects(fetchHotelPrices("Example", validateStay(stay)), /temporarily unavailable/);
  } finally {
    globalThis.fetch = originalFetch;
    if (originalKey === undefined) delete process.env.SERPAPI_API_KEY;
    else process.env.SERPAPI_API_KEY = originalKey;
  }
});
