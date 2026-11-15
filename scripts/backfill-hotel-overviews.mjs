import { readFileSync } from "node:fs";
import pg from "pg";
import nextEnv from "@next/env";

const loadJson = path => JSON.parse(readFileSync(new URL(path, import.meta.url), "utf8"));
const selection = loadJson("../content/cities/newyork/hotel-selection.json");
const catalog = loadJson("../content/cities/hotel-catalog.json");
const editorialOverviews = {
  nyc: loadJson("../content/cities/newyork/hotel-overviews.json"),
  la: loadJson("../content/cities/losangeles/hotel-overviews.json"),
  lasvegas: loadJson("../content/cities/lasvegas/hotel-overviews.json"),
  orlando: loadJson("../content/cities/orlando/hotel-overviews.json"),
};
for (const [city, sourceIds] of Object.entries({
  nyc: selection.sourceIds,
  la: catalog.filter(hotel => hotel.city === "la").map(hotel => hotel.sourceId),
  lasvegas: catalog.filter(hotel => hotel.city === "lasvegas").map(hotel => hotel.sourceId),
  orlando: catalog.filter(hotel => hotel.city === "orlando").map(hotel => hotel.sourceId),
})) {
  if (sourceIds.some(id => !editorialOverviews[city][id]?.trim())) {
    throw new Error(`A published hotel in ${city} is missing its editorial overview.`);
  }
}
const cityNames = { nyc: "New York City", la: "Los Angeles", orlando: "Orlando", lasvegas: "Las Vegas" };
const cityAdvice = {
  nyc: "Check the subway routes to the places you plan to visit and factor in travel time between boroughs.",
  la: "Check travel times to your planned stops when comparing hotels. A convenient location for one part of Los Angeles can mean a longer drive to another.",
  orlando: "Compare the hotel's location with the parks or attractions on your itinerary. Check transportation and parking before you book.",
  lasvegas: "Check the walking route to the venues you plan to visit, especially for evening plans.",
};

function starterOverviewFor(hotel) {
  if (hotel.city_slug === "nyc" && hotel.source_id === "8515751") {
    return "Hotel Riu Plaza New York Times Square is on West 46th Street in Midtown Manhattan. It’s a practical base if your plans center on Broadway shows and Times Square. The trade-off is a busy part of Midtown. If quiet evenings are a priority, compare it with hotels farther from the theater district.";
  }
  const city = cityNames[hotel.city_slug];
  const neighborhood = hotel.neighborhood?.trim();
  const location = neighborhood && neighborhood.toLowerCase() !== city.toLowerCase()
    ? `in ${neighborhood}, ${city}` : `in ${city}`;
  return `${hotel.name} is ${location}. ${cityAdvice[hotel.city_slug]}`;
}

nextEnv.loadEnvConfig(process.cwd(), true);
if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL is required.");
const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: true },
  max: 1,
  connectionTimeoutMillis: 10000,
});

try {
  const client = await pool.connect();
  try {
    await client.query("BEGIN");
    await client.query("ALTER TABLE hotels ADD COLUMN IF NOT EXISTS editorial_overview TEXT");
    const { rows } = await client.query(`
      SELECT h.id, h.city_slug, h.source_id, h.name,
        COALESCE(n.name, h.neighborhood) AS neighborhood, h.editorial_overview
      FROM hotels h LEFT JOIN neighborhoods n ON n.neighborhood_id = h.neighborhood_id
      WHERE h.active AND (
        (h.city_slug = 'nyc' AND h.source = 'travel-advisor' AND h.source_id = ANY($1::text[]))
        OR (h.source = 'saved-listing' AND EXISTS (
          SELECT 1 FROM jsonb_to_recordset($2::jsonb) AS listed(city text, "sourceId" text)
          WHERE listed.city = h.city_slug AND listed."sourceId" = h.source_id
        ))
      )`, [selection.sourceIds, JSON.stringify(catalog.map(({ city, sourceId }) => ({ city, sourceId })))]);
    if (!rows.length) throw new Error("No published hotels matched the catalog.");
    let updated = 0;
    for (const hotel of rows) {
      const starter = starterOverviewFor(hotel);
      const editorial = editorialOverviews[hotel.city_slug]?.[hotel.source_id];
      const overview = editorial ?? starter;
      const current = hotel.editorial_overview;
      if (current === overview || (current?.trim() && (!editorial || current !== starter))) continue;
      const result = await client.query(`
        UPDATE hotels SET editorial_overview = $2
        WHERE id = $1 AND editorial_overview IS NOT DISTINCT FROM $3`, [hotel.id, overview, current]);
      updated += result.rowCount;
    }
    const editorialRows = rows.filter(hotel => editorialOverviews[hotel.city_slug]);
    const coverage = await client.query(`
      SELECT city_slug, COUNT(*)::integer AS count FROM hotels
      WHERE id = ANY($1::bigint[]) AND NULLIF(BTRIM(editorial_overview), '') IS NOT NULL
      GROUP BY city_slug ORDER BY city_slug`,
    [editorialRows.map(hotel => hotel.id)]);
    await client.query("COMMIT");
    console.log(`Matched ${rows.length} hotels and updated ${updated} overviews.`);
    for (const { city_slug, count } of coverage.rows) {
      console.log(`${city_slug}: ${count}/${editorialRows.filter(hotel => hotel.city_slug === city_slug).length} published hotels have overviews.`);
    }
  } catch (error) {
    await client.query("ROLLBACK");
    throw error;
  } finally {
    client.release();
  }
} catch (error) {
  console.error(`Hotel overview backfill failed (${error.code ?? error.name}).`);
  process.exitCode = 1;
} finally {
  await pool.end();
}
