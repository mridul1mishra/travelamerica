#!/usr/bin/env node
// Apply a reviewed tag file without fetching or overwriting hotel directory data.
import { readFileSync } from "node:fs";
import pg from "pg";

const supported = new Set(["SafeArea", "NearSubway", "NearTransit", "CityCenter", "FirstTimeVisitor", "SoloTraveler", "FamilyFriendly", "BestValue", "BudgetFriendly", "Premium", "Luxury", "NightlifeAccess", "WalkableArea", "BusinessFriendly", "EditorsChoice", "CouplesFriendly"]);
for (const filename of [".env.local", ".env"]) {
  try {
    for (const line of readFileSync(filename, "utf8").split("\n")) {
      const match = line.match(/^\s*([\w.]+)\s*=\s*(.*)\s*$/);
      if (match && !(match[1] in process.env)) process.env[match[1]] = match[2].trim().replace(/^["']|["']$/g, "");
    }
  } catch (error) { if (error.code !== "ENOENT") throw error; }
}

async function main() {
  if (!process.argv[2]) throw new Error("Usage: node scripts/apply-hotel-tags.mjs reviewed-tags.json");
  if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL is required");
  const entries = JSON.parse(readFileSync(process.argv[2], "utf8"));
  if (!Array.isArray(entries)) throw new Error("Tag file must contain an array");
  for (const entry of entries) {
    if (!entry.sourceId || !Array.isArray(entry.tags)) throw new Error("Each hotel requires sourceId and tags");
    for (const [field, value] of Object.entries(entry.classification ?? {})) {
      if (!["hotelTier", "firstTimeVisitor", "safeArea"].includes(field)) throw new Error("Unknown classification field");
      if (!value.rationale?.trim() || !/^https:\/\//.test(value.sourceUrl ?? "")) throw new Error("Classification requires HTTPS evidence and rationale");
      if (field === "hotelTier" ? !["Budget", "Premium", "Luxury"].includes(value.value) : typeof value.value !== "boolean") throw new Error("Invalid classification value");
    }
    for (const tag of entry.tags) {
      if (!supported.has(tag.key) || !tag.rationale?.trim() || !/^https:\/\//.test(tag.sourceUrl ?? "")) throw new Error("Each tag requires a supported key, rationale, and HTTPS evidence URL");
    }
  }
  const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false }, max: 1, connectionTimeoutMillis: 10000 });
  let client;
  try {
    client = await pool.connect();
    await client.query("BEGIN");
    await client.query(readFileSync(new URL("./hotels-schema.sql", import.meta.url), "utf8"));
    let count = 0;
    for (const entry of entries) {
      const result = await client.query("SELECT id FROM hotels WHERE city_slug = 'nyc' AND source = 'travel-advisor' AND source_id = $1", [String(entry.sourceId)]);
      if (result.rowCount !== 1) throw new Error(`Unknown hotel source ID: ${entry.sourceId}`);
      const id = result.rows[0].id;
      if (entry.neighborhood) await client.query("UPDATE hotels SET neighborhood = $1, updated_at = NOW() WHERE id = $2", [entry.neighborhood, id]);
      const classificationColumns = { hotelTier: "hotel_tier", firstTimeVisitor: "first_time_visitor", safeArea: "safe_area" };
      for (const [field, evidence] of Object.entries(entry.classification ?? {})) {
        await client.query(`UPDATE hotels SET ${classificationColumns[field]} = $1,
          classification_evidence = classification_evidence || $2::jsonb, updated_at = NOW() WHERE id = $3`,
          [evidence.value, JSON.stringify({ [field]: evidence }), id]);
        const classificationTags = field === "hotelTier" ? ["BudgetFriendly", "Premium", "Luxury"] : [field === "safeArea" ? "SafeArea" : "FirstTimeVisitor"];
        await client.query("DELETE FROM hotel_tags WHERE hotel_id = $1 AND tag = ANY($2::text[])", [id, classificationTags]);
        const positiveTag = field === "hotelTier" ? { Budget: "BudgetFriendly", Premium: "Premium", Luxury: "Luxury" }[evidence.value] : evidence.value ? classificationTags[0] : null;
        if (positiveTag) await client.query("INSERT INTO hotel_tags (hotel_id, tag, source_url, rationale) VALUES ($1,$2,$3,$4)", [id, positiveTag, evidence.sourceUrl, evidence.rationale]);
      }
      for (const tag of entry.tags) {
        await client.query(`INSERT INTO hotel_tags (hotel_id, tag, source_url, rationale) VALUES ($1,$2,$3,$4)
          ON CONFLICT (hotel_id, tag) DO UPDATE SET source_url = EXCLUDED.source_url, rationale = EXCLUDED.rationale, updated_at = NOW()`,
        [id, tag.key, tag.sourceUrl, tag.rationale]);
        count++;
      }
    }
    await client.query("COMMIT");
    console.log(`Saved ${count} evidenced hotel tags for ${entries.length} hotels.`);
  } catch (error) {
    if (client) await client.query("ROLLBACK");
    throw error;
  } finally { client?.release(); await pool.end(); }
}
main().catch((error) => { console.error("Hotel tagging failed:", error.code ?? error.message); process.exitCode = 1; });
