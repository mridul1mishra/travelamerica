import { readFileSync } from "node:fs";

const assignments = JSON.parse(readFileSync(new URL("../content/cities/losangeles/hotel-tags.json", import.meta.url), "utf8"));
const catalog = JSON.parse(readFileSync(new URL("../content/cities/hotel-catalog.json", import.meta.url), "utf8"));
const allowed = new Set(["BusinessFriendly", "FamilyFriendly", "NearTransit", "NightlifeAccess", "WalkableArea"]);

export function validateLaHotelTags(entries = assignments) {
  const hotels = new Map(catalog.filter(h => h.city === "la").map(h => [h.sourceId, h.name]));
  const seen = new Set();
  for (const entry of entries) {
    if (hotels.get(entry.sourceId) !== entry.name || seen.has(entry.sourceId) || !Array.isArray(entry.tags)) throw new Error("Invalid LA hotel identity");
    seen.add(entry.sourceId);
    const keys = new Set();
    for (const tag of entry.tags) {
      if (!allowed.has(tag.key) || keys.has(tag.key) || !tag.rationale?.trim() || new URL(tag.sourceUrl).protocol !== "https:") throw new Error("Invalid LA tag evidence");
      keys.add(tag.key);
    }
    if (!entry.tags.length && !entry.pendingReason) throw new Error("Missing review status");
  }
  if (seen.size !== hotels.size) throw new Error("Incomplete LA hotel review");
  return entries;
}

// Caller owns the transaction. Reuses active catalog IDs without changing tags
// or replacing previously assigned hotel tags or hotel classifications.
export async function seedLaHotelTags(client) {
  const entries = validateLaHotelTags();
  const tags = new Map((await client.query("SELECT tag_name, tag_id FROM tags WHERE is_active")).rows.map(t => [t.tag_name, t.tag_id]));
  let changed = 0;
  for (const entry of entries) {
    const hotels = (await client.query("SELECT id FROM hotels WHERE city_slug='la' AND source='saved-listing' AND source_id=$1 AND name=$2 AND active", [entry.sourceId, entry.name])).rows;
    if (hotels.length !== 1) throw new Error("LA hotel missing or ambiguous: " + entry.sourceId);
    for (const tag of entry.tags) {
      if (!tags.has(tag.key)) throw new Error("Required tag is missing or inactive: " + tag.key);
      const result = await client.query(`INSERT INTO hotel_tags (hotel_id, tag, tag_id, source_url, rationale)
        VALUES ($1,$2,$3,$4,$5) ON CONFLICT (hotel_id,tag) DO UPDATE
        SET tag_id=EXCLUDED.tag_id, source_url=EXCLUDED.source_url, rationale=EXCLUDED.rationale, updated_at=NOW()
        WHERE (hotel_tags.tag_id,hotel_tags.source_url,hotel_tags.rationale)
          IS DISTINCT FROM (EXCLUDED.tag_id,EXCLUDED.source_url,EXCLUDED.rationale)`,
      [hotels[0].id, tag.key, tags.get(tag.key), tag.sourceUrl, tag.rationale]);
      changed += result.rowCount ?? 0;
    }
  }
  return { changed, reviewedHotels: entries.length, taggedHotels: entries.filter(e => e.tags.length).length, assignments: entries.reduce((n,e) => n+e.tags.length,0) };
}
