#!/usr/bin/env node
import { readFileSync } from "node:fs";
import pg from "pg";

const source = "https://data.ny.gov/Transportation/MTA-Subway-Entrances-and-Exits-2024/i9wp-a4ja";
const threshold = 500; // User-approved straight-line metres, not walking distance.
for (const filename of [".env.local", ".env"]) {
  try {
    for (const line of readFileSync(filename, "utf8").split("\n")) {
      const match = line.match(/^\s*([\w.]+)\s*=\s*(.*)\s*$/);
      if (match && !(match[1] in process.env)) process.env[match[1]] = match[2].trim().replace(/^["']|["']$/g, "");
    }
  } catch (error) { if (error.code !== "ENOENT") throw error; }
}

function distance(lat1, lon1, lat2, lon2) {
  const radians = (degrees) => degrees * Math.PI / 180;
  const a = Math.sin(radians(lat2 - lat1) / 2) ** 2 + Math.cos(radians(lat1)) * Math.cos(radians(lat2)) * Math.sin(radians(lon2 - lon1) / 2) ** 2;
  return 6371000 * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(Math.max(0, 1 - a)));
}

async function main() {
  if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL is required");
  const response = await fetch("https://data.ny.gov/resource/i9wp-a4ja.json?$limit=5000&$where=entry_allowed%3D%27YES%27", { signal: AbortSignal.timeout(30000) });
  if (!response.ok) throw new Error(`MTA dataset HTTP ${response.status}`);
  const data = await response.json();
  if (!Array.isArray(data) || data.length === 5000) throw new Error("MTA dataset is incomplete");
  const entrances = data.filter((entry) => entry.entrance_latitude != null && entry.entrance_longitude != null && Number.isFinite(Number(entry.entrance_latitude)) && Number.isFinite(Number(entry.entrance_longitude)));
  if (entrances.length < 100) throw new Error("Too few valid MTA entrances; tags unchanged");
  const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false }, max: 1, connectionTimeoutMillis: 10000 });
  let client;
  try {
    client = await pool.connect();
    await client.query("BEGIN");
    await client.query(readFileSync(new URL("./hotels-schema.sql", import.meta.url), "utf8"));
    const hotels = await client.query("SELECT id, name, latitude, longitude FROM hotels WHERE city_slug = 'nyc' AND active = TRUE");
    // Only refresh this dataset's assignments; preserve unrelated editorial tags.
    await client.query("DELETE FROM hotel_tags WHERE tag = 'NearSubway' AND source_url = $1 AND hotel_id IN (SELECT id FROM hotels WHERE city_slug = 'nyc')", [source]);
    let tagged = 0;
    for (const hotel of hotels.rows) {
      if (hotel.latitude == null || hotel.longitude == null) continue;
      let nearest = null;
      let metres = Infinity;
      for (const entrance of entrances) {
        const candidate = distance(Number(hotel.latitude), Number(hotel.longitude), Number(entrance.entrance_latitude), Number(entrance.entrance_longitude));
        if (candidate < metres) { metres = candidate; nearest = entrance; }
      }
      if (metres > threshold || !nearest) continue;
      const rationale = `${Math.round(metres)} metres in a straight line from ${nearest.stop_name} entrance (${nearest.entrance_latitude}, ${nearest.entrance_longitude}), using provider hotel coordinates and MTA entrance data. Threshold: 500 metres. Walking distance may be longer; current entrance access is not verified.`;
      await client.query(`INSERT INTO hotel_tags (hotel_id, tag, source_url, rationale) VALUES ($1,'NearSubway',$2,$3)
        ON CONFLICT (hotel_id, tag) DO UPDATE SET source_url = EXCLUDED.source_url, rationale = EXCLUDED.rationale, updated_at = NOW()`, [hotel.id, source, rationale]);
      tagged++;
    }
    await client.query("COMMIT");
    console.log(`Tagged ${tagged} of ${hotels.rowCount} NYC hotels NearSubway using ${entrances.length} MTA entrances.`);
  } catch (error) {
    if (client) await client.query("ROLLBACK");
    throw error;
  } finally { client?.release(); await pool.end(); }
}
main().catch((error) => { console.error("Subway tagging failed:", error.code ?? error.message); process.exitCode = 1; });
