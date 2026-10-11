import fs from "node:fs";
import nextEnv from "@next/env";
nextEnv.loadEnvConfig(process.cwd());
const cities = [
  { city: "la", name: "Los Angeles", geoId: "32655" },
  { city: "orlando", name: "Orlando", geoId: "34515" },
  { city: "lasvegas", name: "Las Vegas", geoId: "45963" },
];
const host = "travel-advisor.p.rapidapi.com";
const key = process.env.RAPIDAPI_KEY;
if (!key) throw new Error("Hotel directory credential is missing");
fs.mkdirSync(".scratch", { recursive: true });
for (const city of cities) {
  const found = new Map();
  for (let offset = 0; offset < 300 && found.size < 50; offset += 30) {
    const params = new URLSearchParams({ query: city.name + " hotels", location_id: city.geoId, limit: "30", offset: String(offset), currency: "USD", lang: "en_US" });
    const response = await fetch(`https://${host}/locations/search?${params}`, {
      headers: { "X-RapidAPI-Key": key, "X-RapidAPI-Host": host }, signal: AbortSignal.timeout(20000),
    });
    if (!response.ok) throw new Error(`Hotel directory returned HTTP ${response.status}`);
    const json = await response.json();
    const results = json.data ?? [];
    if (!results.length) break;
    for (const result of results) {
      const hotel = result.result_object;
      if (result.result_type !== "lodging" || hotel?.category?.key !== "hotel" || !hotel.location_id || !hotel.name || hotel.is_closed || hotel.is_long_closed) continue;
      if (!hotel.ancestors?.some(ancestor => String(ancestor.location_id) === city.geoId)) continue;
      found.set(String(hotel.location_id), hotel);
    }
    console.log(`${city.name}: ${found.size} verified city directory entries (offset ${offset})`);
  }
  fs.writeFileSync(`.scratch/${city.city}-hotel-directory.json`, JSON.stringify({ ...city, hotels: [...found.values()] }, null, 2) + "\n");
  if (found.size < 50) console.log(`${city.name}: needs additional directory queries to reach 50.`);
}
