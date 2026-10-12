import { readFileSync } from "node:fs";
import { pathToFileURL } from "node:url";
import pg from "pg";
import nextEnv from "@next/env";
import { seedLaHotelNeighborhoods } from "./seed-la-hotel-neighborhoods.mjs";
import { seedLaHotelTags } from "./seed-la-hotel-tags.mjs";

const catalog = JSON.parse(readFileSync(new URL("../content/cities/hotel-catalog.json", import.meta.url), "utf8"));
let placeIds = [];
try { placeIds = JSON.parse(readFileSync(new URL("../content/cities/hotel-google-place-ids.json", import.meta.url), "utf8")).hotels; }
catch (error) { if (error.code !== "ENOENT") throw error; }

// Existing saved inventory only: no provider calls or inferred classifications.
// Stable source IDs preserve database IDs and later assessments on re-runs.
export async function seedCityHotels(client) {
  await client.query("BEGIN");
  try {
    await client.query("SELECT pg_advisory_xact_lock(7066351)");
    for (const city of ["la", "orlando", "lasvegas"]) {
      const rows = catalog.filter(h => h.city === city);
      const cityResult = await client.query("SELECT city_id FROM cities WHERE slug = $1", [city]);
      if (cityResult.rows.length !== 1) throw new Error("City must exist before hotel import");
      for (const [index, hotel] of rows.entries()) {
        const url = new URL(hotel.bookingUrl);
        if (url.protocol !== "https:" || url.username || url.password || !hotel.name.trim()) throw new Error("Invalid saved hotel");
        const googlePlaceId = placeIds.find(h => h.city === city && h.sourceId === hotel.sourceId && h.status === "MatchedNameAddressAndLocation")?.googlePlaceId ?? null;
        if (googlePlaceId && !/^[A-Za-z0-9_-]{10,256}$/.test(googlePlaceId)) throw new Error("Invalid matched Place ID");
        await client.query(`INSERT INTO hotels
          (city_slug, city_id, source, source_id, name, area, image_url, booking_url, price_text, sort_order, address, latitude, longitude, google_place_id)
          VALUES ($1, $2, 'saved-listing', $3, $4, $5, $6, $7, 'See prices', $8, $9, $10, $11, $12)
          ON CONFLICT (city_slug, source, source_id) DO UPDATE SET
            city_id = EXCLUDED.city_id, name = EXCLUDED.name, area = EXCLUDED.area,
            image_url = EXCLUDED.image_url, booking_url = EXCLUDED.booking_url,
            price_text = EXCLUDED.price_text, sort_order = EXCLUDED.sort_order,
            address = COALESCE(EXCLUDED.address, hotels.address),
            latitude = COALESCE(EXCLUDED.latitude, hotels.latitude),
            longitude = COALESCE(EXCLUDED.longitude, hotels.longitude),
            google_place_id = COALESCE(EXCLUDED.google_place_id, hotels.google_place_id)
          WHERE (hotels.city_id, hotels.name, hotels.area, hotels.image_url, hotels.booking_url, hotels.price_text, hotels.sort_order, hotels.address, hotels.latitude, hotels.longitude, hotels.google_place_id)
            IS DISTINCT FROM (EXCLUDED.city_id, EXCLUDED.name, EXCLUDED.area, EXCLUDED.image_url, EXCLUDED.booking_url, EXCLUDED.price_text, EXCLUDED.sort_order, COALESCE(EXCLUDED.address, hotels.address), COALESCE(EXCLUDED.latitude, hotels.latitude), COALESCE(EXCLUDED.longitude, hotels.longitude), COALESCE(EXCLUDED.google_place_id, hotels.google_place_id))`,
        [city, cityResult.rows[0].city_id, hotel.sourceId, hotel.name, hotel.area, hotel.imageUrl, url.href, index, hotel.address ?? null, hotel.latitude ?? null, hotel.longitude ?? null, googlePlaceId]);
      }
    }
    await seedLaHotelNeighborhoods(client);
    await seedLaHotelTags(client);
    await client.query("COMMIT");
  } catch (error) {
    await client.query("ROLLBACK");
    throw error;
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  nextEnv.loadEnvConfig(process.cwd());
  const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: true }, max: 1, connectionTimeoutMillis: 10000 });
  let client;
  try {
    if (!process.env.DATABASE_URL) throw new Error("Hotel database is not configured");
    client = await pool.connect();
    await seedCityHotels(client);
    console.log(`Imported ${catalog.length} saved hotels for LA, Orlando and Las Vegas.`);
  } catch {
    console.error("City hotel import failed; check database configuration and schema.");
    process.exitCode = 1;
  } finally {
    client?.release();
    await pool.end();
  }
}
