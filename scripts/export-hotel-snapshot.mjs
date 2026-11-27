// Copies the live hotel data into content/cities/hotel-snapshot.json, the
// backup app/lib/hotels.ts serves when the database is unreachable.
// Run whenever hotels change:  npm run snapshot:hotels
// Uses the exact SQL from app/lib/hotels.ts so the backup can't drift from it.
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import pg from "pg";

const root = new URL("../", import.meta.url);
const read = (path) => readFileSync(new URL(path, root), "utf8");

if (!process.env.DATABASE_URL && existsSync(new URL(".env.local", root))) {
  const line = read(".env.local").match(/^DATABASE_URL=(.*)$/m);
  if (line) process.env.DATABASE_URL = line[1].trim().replace(/^["']|["']$/g, "");
}
if (!process.env.DATABASE_URL) { console.error("DATABASE_URL is not set."); process.exit(1); }

const source = read("app/lib/hotels.ts");
const sqlConst = (name) => {
  const match = source.match(new RegExp(`export const ${name} = \`([\\s\\S]*?)\`;`));
  if (!match) throw new Error(`Could not find ${name} in app/lib/hotels.ts`);
  return match[1];
};
const CITY_HOTELS_SQL = sqlConst("CITY_HOTELS_SQL");
const HOTEL_BOOKING_SQL = sqlConst("HOTEL_BOOKING_SQL");

const catalog = JSON.parse(read("content/cities/hotel-catalog.json"));
const selection = JSON.parse(read("content/cities/newyork/hotel-selection.json"));
const cities = ["nyc", "la", "orlando", "lasvegas"];

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false }, max: 1 });
try {
  const snapshot = { generatedAt: new Date().toISOString(), hotels: {}, bookings: {} };
  for (const city of cities) {
    const params = [city, null, selection.sourceIds, catalog.filter((h) => h.city === city).map((h) => h.sourceId)];
    const { rows } = await pool.query(CITY_HOTELS_SQL, params);
    snapshot.hotels[city] = rows;
    for (const row of rows) {
      const booking = await pool.query(HOTEL_BOOKING_SQL,
        [row.hotelId, selection.sourceIds, ["la", "orlando", "lasvegas"], catalog.map((h) => h.sourceId)]);
      if (booking.rows[0]) snapshot.bookings[row.hotelId] = booking.rows[0];
    }
    console.log(`${city}: ${rows.length} hotels`);
  }
  if (cities.some((city) => !snapshot.hotels[city].length)) throw new Error("A city returned no hotels; backup not written.");
  writeFileSync(new URL("content/cities/hotel-snapshot.json", root), JSON.stringify(snapshot, null, 2) + "\n");
  console.log(`Wrote content/cities/hotel-snapshot.json (${Object.keys(snapshot.bookings).length} booking links).`);
} finally {
  await pool.end();
}
