import { readFileSync } from "node:fs";

// Reviewed hotel-planning areas for saved Orlando and Las Vegas inventory.
// Same evidence rules as the LA seed: assignments are geographic only and do
// not make safety, amenity or hotel-tier claims. Hotels absent from a file
// keep a NULL neighborhood and simply do not match article area links.
const folders = { orlando: "orlando", lasvegas: "lasvegas" };
const catalog = JSON.parse(readFileSync(new URL("../content/cities/hotel-catalog.json", import.meta.url), "utf8"));

export function loadCityNeighborhoodAssignments(city) {
  const folder = folders[city];
  if (!folder) throw new Error("Unsupported city for neighborhood assignments: " + city);
  return JSON.parse(readFileSync(new URL(`../content/cities/${folder}/hotel-neighborhood-assignments.json`, import.meta.url), "utf8"));
}

export function validateCityNeighborhoodAssignments(city, entries = loadCityNeighborhoodAssignments(city)) {
  const hotels = new Map(catalog.filter(hotel => hotel.city === city).map(hotel => [hotel.sourceId, hotel]));
  const seen = new Set();
  for (const entry of entries) {
    const hotel = hotels.get(entry.sourceId);
    if (!hotel || seen.has(entry.sourceId) || entry.name !== hotel.name || entry.address !== hotel.address ||
        entry.latitude !== hotel.latitude || entry.longitude !== hotel.longitude ||
        !entry.neighborhood?.trim() || !entry.rationale?.trim() || entry.planningZone !== true ||
        new URL(entry.sourceUrl).protocol !== "https:") {
      throw new Error(`Invalid or outdated ${city} hotel neighborhood evidence: ${entry.sourceId}`);
    }
    seen.add(entry.sourceId);
  }
  return entries;
}

// Called inside seedCityHotels' existing transaction. Mirrors the LA seed and
// preserves separately reviewed hotel tiers, tags and neighborhoods.
export async function seedCityHotelNeighborhoods(client, city) {
  const entries = validateCityNeighborhoodAssignments(city);
  const cityRow = (await client.query("SELECT city_id FROM cities WHERE slug = $1", [city])).rows[0];
  if (!cityRow) throw new Error(`${city} city must exist before neighborhood assignments`);
  for (const name of new Set(entries.map(entry => entry.neighborhood))) {
    await client.query(`INSERT INTO neighborhoods (city_id, name) VALUES ($1, $2)
      ON CONFLICT (city_id, LOWER(TRIM(name))) DO NOTHING`, [cityRow.city_id, name]);
  }
  let assigned = 0;
  for (const entry of entries) {
    const result = await client.query(`UPDATE hotels h SET city_id = $1,
      neighborhood_id = n.neighborhood_id, neighborhood = n.name,
      classification_evidence = h.classification_evidence || $5::jsonb
      FROM neighborhoods n
      WHERE n.city_id = $1 AND n.name = $2
        AND h.city_slug = $9 AND h.source = 'saved-listing' AND h.source_id = $3
        AND h.name = $4 AND h.active
        AND h.address = $6 AND h.latitude = $7 AND h.longitude = $8
        AND h.neighborhood_id IS NULL
        AND (h.neighborhood IS NULL OR h.neighborhood = n.name)
        AND (h.city_id IS NULL OR h.city_id = $1)`,
    [cityRow.city_id, entry.neighborhood, entry.sourceId, entry.name,
      JSON.stringify({ neighborhood: { source: "saved-listing", sourceId: entry.sourceId,
        sourceUrl: entry.sourceUrl, address: entry.address, latitude: entry.latitude,
        longitude: entry.longitude, rationale: entry.rationale, planningZone: true } }),
      entry.address, entry.latitude, entry.longitude, city]);
    assigned += result.rowCount ?? result.affectedRows ?? 0;
  }
  return { assigned, reviewed: entries.length };
}
