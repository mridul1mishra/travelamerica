#!/usr/bin/env node
// Persist the reviewed scorecards without running migrations or changing tags.
import assert from "node:assert/strict";
import { readFileSync, writeFileSync } from "node:fs";
import pg from "pg";
import { calculateTier, tierModel } from "./hotel-tier-scoring.mjs";

for (const filename of [".env.local", ".env"]) {
  try {
    for (const line of readFileSync(filename, "utf8").split("\n")) {
      const match = line.match(/^\s*([\w.]+)\s*=\s*(.*)\s*$/);
      if (match && !(match[1] in process.env)) process.env[match[1]] = match[2].trim().replace(/^["']|["']$/g, "");
    }
  } catch (error) { if (error.code !== "ENOENT") throw error; }
}

const scorecardPath = "content/cities/newyork/hotel-tier-scorecards.json";
const syncPath = "content/cities/newyork/hotel-tier-database-sync.json";
const flags = process.argv.slice(2);
assert(flags.every(flag => ["--dry-run", "--verify"].includes(flag)), "Use --dry-run, --verify, or no flags to apply");
assert(flags.length <= 1, "Choose only one mode");
const dryRun = flags.includes("--dry-run");
const verifyOnly = flags.includes("--verify");
const scorecards = JSON.parse(readFileSync(scorecardPath, "utf8"));
const selection = JSON.parse(readFileSync("content/cities/newyork/hotel-selection.json", "utf8"));
assert.deepEqual(scorecards.model, tierModel, "Unexpected scoring model");
assert.equal(scorecards.hotels.length, 50, "Expected all 50 reviewed hotels");
const sourceIds = scorecards.hotels.map(hotel => hotel.sourceId);
assert(sourceIds.every(id => typeof id === "string" && id), "Provider IDs must be nonempty strings");
assert.equal(new Set(sourceIds).size, 50, "Duplicate provider IDs");
assert.deepEqual([...sourceIds].sort(), [...selection.sourceIds].sort(), "Scorecards do not match the curated inventory");

const payloads = new Map(scorecards.hotels.map(hotel => {
  for (const dimension of tierModel.dimensions) {
    const value = hotel[dimension.key];
    assert(value === null || (Number.isInteger(value) && value >= 0 && value <= 4), "Invalid dimension score");
    const evidence = hotel.evidence[dimension.key];
    assert(evidence?.note?.trim() && new URL(evidence.sourceUrl).protocol === "https:", "Missing official evidence");
    if (value !== null) assert.equal(evidence.status, "Scored", "Scored dimension has insufficient evidence");
  }
  const calculated = calculateTier(hotel);
  for (const key of ["score", "tier", "isProvisional", "evidenceCoverage", "scoredDimensions"]) {
    assert.equal(hotel[key], calculated[key], "Scorecard calculation mismatch: " + key);
  }
  assert(calculated.tier, "Cannot persist an unassigned tier");
  const dimensions = Object.fromEntries(tierModel.dimensions.map(dimension => [dimension.key, hotel[dimension.key]]));
  assert.deepEqual(hotel.pendingDimensions, tierModel.dimensions.filter(dimension => hotel[dimension.key] === null).map(dimension => dimension.key));
  const sourceUrl = tierModel.dimensions.map(dimension => hotel.evidence[dimension.key]).find(evidence => evidence.status === "Scored").sourceUrl;
  return [hotel.sourceId, {
    value: hotel.tier,
    score: hotel.score,
    modelVersion: tierModel.version,
    isProvisional: hotel.isProvisional,
    evidenceCoverage: hotel.evidenceCoverage,
    scoredDimensions: hotel.scoredDimensions,
    dimensions,
    pendingDimensions: hotel.pendingDimensions,
    rationale: hotel.tierReason,
    sourceUrl,
    evidence: hotel.evidence,
    sources: hotel.sources,
    assessedOn: scorecards.assessedOn,
    scoringPolicyUpdatedOn: scorecards.scoringPolicyUpdatedOn,
  }];
}));

const select = `SELECT id::text AS "hotelId", source_id AS "sourceId", name, hotel_tier AS tier,
  classification_evidence -> 'hotelTier' AS evidence
  FROM hotels WHERE city_slug = 'nyc' AND source = 'travel-advisor'
    AND active = TRUE AND source_id = ANY($1::text[]) ORDER BY id`;

function verify(rows) {
  assert.equal(rows.length, 50, "Expected exactly 50 active database matches");
  assert.equal(new Set(rows.map(row => row.sourceId)).size, 50, "Ambiguous database matches");
  for (const row of rows) {
    const expected = payloads.get(row.sourceId);
    assert.equal(row.tier, expected.value, "Stored tier mismatch for provider ID " + row.sourceId);
    assert.deepEqual(row.evidence, expected, "Stored evidence mismatch for provider ID " + row.sourceId);
  }
}

async function main() {
  if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL is required");
  const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false }, max: 1, connectionTimeoutMillis: 10000 });
  let client;
  let transaction = false;
  let committed = false;
  try {
    client = await pool.connect();
    await client.query(dryRun || verifyOnly ? "BEGIN READ ONLY" : "BEGIN");
    transaction = true;
    const current = await client.query(select + (dryRun || verifyOnly ? "" : " FOR UPDATE"), [sourceIds]);
    assert.equal(current.rowCount, 50, "Expected exactly 50 active database matches");
    assert.equal(new Set(current.rows.map(row => row.sourceId)).size, 50, "Ambiguous database matches");
    if (dryRun) {
      const changes = current.rows.filter(row => row.tier !== payloads.get(row.sourceId).value);
      console.log(JSON.stringify({ mode: "dry-run", matched: current.rowCount, tierChanges: changes.length,
        metadataUpdates: current.rowCount, tiers: scorecards.summary.tiers, provisional: scorecards.summary.hotelsWithProvisionalTier,
        changes: changes.map(row => ({ hotelId: row.hotelId, name: row.name, previousTier: row.tier, newTier: payloads.get(row.sourceId).value })) }, null, 2));
      await client.query("ROLLBACK");
      transaction = false;
      return;
    }
    if (!verifyOnly) {
      for (const row of current.rows) {
        const evidence = payloads.get(row.sourceId);
        const result = await client.query(`UPDATE hotels SET hotel_tier = $1,
          classification_evidence = COALESCE(classification_evidence, '{}'::jsonb) || $2::jsonb,
          updated_at = NOW()
          WHERE id = $3 AND city_slug = 'nyc' AND source = 'travel-advisor' AND source_id = $4 AND active = TRUE
          RETURNING id`, [evidence.value, JSON.stringify({ hotelTier: evidence }), row.hotelId, row.sourceId]);
        assert.equal(result.rowCount, 1, "Expected exactly one updated hotel");
      }
    }
    const saved = await client.query(select, [sourceIds]);
    verify(saved.rows);
    await client.query("COMMIT");
    transaction = false;
    committed = !verifyOnly;
    // Check again after commit, from persisted rows rather than transaction state.
    const persisted = await client.query(select, [sourceIds]);
    verify(persisted.rows);
    const snapshot = { city: "nyc", source: "travel-advisor", modelVersion: tierModel.version,
      verifiedAt: new Date().toISOString(), summary: scorecards.summary,
      hotels: persisted.rows.map(row => ({ hotelId: row.hotelId, sourceId: row.sourceId, name: row.name,
        tier: row.tier, score: row.evidence.score, isProvisional: row.evidence.isProvisional,
        evidenceCoverage: row.evidence.evidenceCoverage, scoredDimensions: row.evidence.scoredDimensions })) };
    writeFileSync(syncPath, JSON.stringify(snapshot, null, 2) + "\n");
    console.log(JSON.stringify({ mode: verifyOnly ? "verified" : "saved-and-verified", hotels: persisted.rowCount,
      tiers: snapshot.summary.tiers, complete: snapshot.summary.hotelsFullyScored,
      provisional: snapshot.summary.hotelsWithProvisionalTier, syncReport: syncPath }));
  } catch (error) {
    if (transaction) await client.query("ROLLBACK");
    if (committed) console.error("Database changes were committed; subsequent verification/report generation failed.");
    throw error;
  } finally { client?.release(); await pool.end(); }
}

main().catch(error => {
  // Avoid printing credentials or provider payloads from database error objects.
  console.error("Hotel tier synchronization failed:", error.code ?? error.message);
  process.exitCode = 1;
});
