#!/usr/bin/env node
// Fetch 50 unique NYC hotels, then atomically save the listing in PostgreSQL.
// Usage: node scripts/import-nyc-hotels.mjs
import { readFileSync } from "node:fs";
import pg from "pg";
import { getHotelDirectory, toCard } from "./fetch-nyc-hotels.mjs";

const TARGET = 50;
const number = (value) => value == null || value === "" || !Number.isFinite(Number(value)) ? null : Number(value);

async function main() {
  if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL is required");
  const hotels = await getHotelDirectory(TARGET);
  if (hotels.length !== TARGET) throw new Error(`Expected ${TARGET} unique hotels; received ${hotels.length}. Database unchanged.`);
  const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false }, max: 1, connectionTimeoutMillis: 10000 });
  let client;
  try {
    client = await pool.connect();
    await client.query("BEGIN");
    await client.query(readFileSync(new URL("./hotels-schema.sql", import.meta.url), "utf8"));
    await client.query("SELECT pg_advisory_xact_lock(7066350)");
    await client.query("UPDATE hotels SET active = FALSE, updated_at = NOW() WHERE city_slug = $1", ["nyc"]);
    for (const [index, item] of hotels.entries()) {
      const card = toCard(item);
      const address = item.address ?? item.address_obj?.address_string ?? null;
      await client.query(`INSERT INTO hotels
        (city_slug, source, source_id, name, area, address, latitude, longitude, image_url,
         rating, review_count, price_text, booking_url, description, amenities, raw_data, sort_order, price_checkin)
        VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15::jsonb,$16::jsonb,$17,$18)
        ON CONFLICT (city_slug, source, source_id) DO UPDATE SET
          name = EXCLUDED.name, area = EXCLUDED.area, address = EXCLUDED.address,
          latitude = EXCLUDED.latitude, longitude = EXCLUDED.longitude, image_url = EXCLUDED.image_url,
          rating = EXCLUDED.rating, review_count = EXCLUDED.review_count, price_text = EXCLUDED.price_text,
          booking_url = EXCLUDED.booking_url, description = EXCLUDED.description,
          amenities = EXCLUDED.amenities, raw_data = EXCLUDED.raw_data, sort_order = EXCLUDED.sort_order,
          price_checkin = EXCLUDED.price_checkin, active = TRUE, fetched_at = NOW(), updated_at = NOW()`,
      ["nyc", "travel-advisor", String(item.location_id), card.title, card.area,
        typeof address === "string" ? address : null, number(item.latitude), number(item.longitude),
        card.img, card.rating, card.reviews, card.price, card.url, item.description ?? null,
        JSON.stringify(item.amenities ?? []), JSON.stringify(item), index, null]);
    }
    const result = await client.query("SELECT COUNT(*)::int AS count FROM hotels WHERE city_slug = $1 AND active = TRUE", ["nyc"]);
    if (result.rows[0].count !== TARGET) throw new Error("Hotel count verification failed");
    await client.query("COMMIT");
    console.log(`Saved and verified ${TARGET} active NYC hotels in PostgreSQL.`);
  } catch (error) {
    if (client) await client.query("ROLLBACK");
    throw error;
  } finally {
    client?.release();
    await pool.end();
  }
}

main().catch((error) => {
  // Avoid printing provider responses or connection strings containing secrets.
  console.error("Hotel import failed:", error.code || error.message.replace(/postgres(?:ql)?:\/\/\S+/g, "[database]"));
  process.exitCode = 1;
});
