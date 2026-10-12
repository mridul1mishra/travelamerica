import { readFileSync } from "node:fs";

const assignments = JSON.parse(readFileSync(new URL("../content/cities/losangeles/hotel-neighborhood-assignments.json", import.meta.url), "utf8"));
const catalog = JSON.parse(readFileSync(new URL("../content/cities/hotel-catalog.json", import.meta.url), "utf8"));

export function validateLaNeighborhoodAssignments(entries = assignments) {
  const hotels = new Map(catalog.filter(hotel => hotel.city === "la").map(hotel => [hotel.sourceId, hotel]));
  const seen = new Set();
  for (const entry of entries) {
    const hotel = hotels.get(entry.sourceId);
    if (!hotel || seen.has(entry.sourceId) || entry.name !== hotel.name || entry.address !== hotel.address ||
        entry.latitude !== hotel.latitude || entry.longitude !== hotel.longitude ||
        !entry.neighborhood?.trim() || !entry.rationale?.trim() || entry.planningZone !== true ||
        new URL(entry.sourceUrl).protocol !== "https:") {
      throw new Error("Invalid or outdated LA hotel neighborhood evidence: " + entry.sourceId);
    }
    seen.add(entry.sourceId);
  }
  return entries;
}

// Called inside seedCityHotels' existing transaction. Reuses NYC's relational
// schema; preserves separately reviewed hotel tiers, tags and neighborhoods.
export async function seedLaHotelNeighborhoods(client) {
  const entries = validateLaNeighborhoodAssignments();
  const city = (await client.query("SELECT city_id FROM cities WHERE slug = 'la'")).rows[0];
  if (!city) throw new Error("LA city must exist before neighborhood assignments");
  for (const name of new Set(entries.map(entry => entry.neighborhood))) {
    await client.query(`INSERT INTO neighborhoods (city_id, name) VALUES ($1, $2)
      ON CONFLICT (city_id, LOWER(TRIM(name))) DO NOTHING`, [city.city_id, name]);
  }
  let assigned = 0;
  for (const entry of entries) {
    const result = await client.query(`UPDATE hotels h SET city_id = $1,
      neighborhood_id = n.neighborhood_id, neighborhood = n.name,
      classification_evidence = h.classification_evidence || $5::jsonb
      FROM neighborhoods n
      WHERE n.city_id = $1 AND n.name = $2
        AND h.city_slug = 'la' AND h.source = 'saved-listing' AND h.source_id = $3
        AND h.name = $4 AND h.active
        AND h.address = $6 AND h.latitude = $7 AND h.longitude = $8
        AND h.neighborhood_id IS NULL
        AND (h.neighborhood IS NULL OR h.neighborhood = n.name)
        AND (h.city_id IS NULL OR h.city_id = $1)`,
    [city.city_id, entry.neighborhood, entry.sourceId, entry.name,
      JSON.stringify({ neighborhood: { source: "saved-listing", sourceId: entry.sourceId,
        sourceUrl: entry.sourceUrl, address: entry.address, latitude: entry.latitude,
        longitude: entry.longitude, rationale: entry.rationale, planningZone: true } }),
      entry.address, entry.latitude, entry.longitude]);
    assigned += result.rowCount ?? result.affectedRows ?? 0;
  }
  return { assigned, reviewed: entries.length };
}
