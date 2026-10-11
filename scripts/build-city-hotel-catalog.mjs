import fs from "node:fs";
import nextEnv from "@next/env";
nextEnv.loadEnvConfig(process.cwd());
const existing = JSON.parse(fs.readFileSync("content/cities/hotel-catalog.json", "utf8"));
const norm = value => value.toLowerCase().replace(/[^a-z0-9]/g, "");
const aliases = new Map([
  ["The Venetian Resort", "The Venetian Resort Las Vegas"],
  ["The Cosmopolitan of Las Vegas", "The Cosmopolitan"],
  ["Hotel Figueroa, Unbound Collection by Hyatt", "Hotel Figueroa - The Unbound Collection by Hyatt"],
  ["Hotel Monreale Express I-Drive Orlando", "Hotel Monreale Express International Drive Orlando"],
  ["Hotel Erwin", "Hotel Erwin Venice Beach"],
]);
const catalog = [];
const pending = [];
for (const city of ["la", "orlando", "lasvegas"]) {
  const directory = JSON.parse(fs.readFileSync(`.scratch/${city}-hotel-directory.json`, "utf8"));
  const hotels = directory.hotels;
  const selected = [];
  const used = new Set();
  const valid = h => h?.location_id && h.name && !h.is_closed && !h.is_long_closed && !/^formerly\b/i.test(h.name);
  async function lookup(query) {
    const params = new URLSearchParams({ query, location_id: directory.geoId, limit: "10", offset: "0", currency: "USD", lang: "en_US" });
    const response = await fetch(`https://travel-advisor.p.rapidapi.com/locations/search?${params}`, {
      headers: { "X-RapidAPI-Key": process.env.RAPIDAPI_KEY, "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com" }, signal: AbortSignal.timeout(20000),
    });
    if (!response.ok) throw new Error(`Hotel directory HTTP ${response.status}`);
    return (await response.json()).data.filter(r => r.result_type === "lodging" && r.result_object?.category?.key === "hotel").map(r => r.result_object).filter(valid);
  }
  function entry(h, previous) {
    return {
      city, sourceId: previous?.sourceId ?? `ta-${h.location_id}`, providerSourceId: String(h.location_id),
      name: h.name, imageUrl: h.photo?.images?.large?.url ?? h.photo?.images?.medium?.url ?? previous?.imageUrl ?? `/data/majorcities/${city === "la" ? "losangeles" : city}/assets/${city === "la" ? "losangeles" : city}.webp`,
      area: h.location_string ?? previous?.area ?? directory.name,
      address: h.address ?? null,
      latitude: Number(h.latitude) || null, longitude: Number(h.longitude) || null,
      bookingUrl: previous?.bookingUrl && !previous.bookingUrl.startsWith("https://www.google.com/travel/hotels/")
        ? previous.bookingUrl : `https://www.google.com/travel/hotels/${encodeURIComponent(h.name + " " + directory.name)}`,
      directorySourceUrl: `https://www.tripadvisor.com/Hotel_Review-g${directory.geoId}-d${h.location_id}-Reviews.html`,
    };
  }
  for (const previous of existing.filter(h => h.city === city)) {
    const names = [previous.name, aliases.get(previous.name)].filter(Boolean).map(norm);
    let match = hotels.find(h => valid(h) && names.includes(norm(h.name)));
    if (!match) {
      const candidates = await lookup(previous.name + " " + directory.name);
      match = candidates.find(h => names.includes(norm(h.name)));
      if (!match) {
        pending.push({ city, name: previous.name, candidates: candidates.map(h => ({ name: h.name, address: h.address, providerSourceId: h.location_id })) });
        console.log(`${directory.name}: existing hotel requires manual name review: ${previous.name}`);
        // Preserve it rather than silently remove or guess a renamed property.
        selected.push(previous);
        continue;
      }
      hotels.push(match);
    }
    if (!used.has(String(match.location_id))) { selected.push(entry(match, previous)); used.add(String(match.location_id)); }
  }
  for (const h of hotels) {
    if (selected.length === 50) break;
    if (!valid(h) || used.has(String(h.location_id))) continue;
    selected.push(entry(h)); used.add(String(h.location_id));
  }
  if (selected.length !== 50) throw new Error(`${directory.name}: expected 50 unique hotels, received ${selected.length}; catalog unchanged`);
  catalog.push(...selected);
  console.log(`${directory.name}: prepared ${selected.length} hotels`);
}
fs.writeFileSync(".scratch/city-hotel-name-review.json", JSON.stringify(pending, null, 2) + "\n");
fs.writeFileSync("content/cities/hotel-catalog.json", JSON.stringify(catalog, null, 2) + "\n");
console.log(`Saved ${catalog.length} hotels; ${pending.length} legacy names require review.`);
