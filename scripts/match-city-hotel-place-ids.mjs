import fs from "node:fs";
import https from "node:https";
import nextEnv from "@next/env";
nextEnv.loadEnvConfig(process.cwd());
const hotels = JSON.parse(fs.readFileSync("content/cities/hotel-catalog.json", "utf8"));
const resultPath = "content/cities/hotel-google-place-ids.json";
const key = process.env.GOOGLE_PLACES_API_KEY;
if (!key) throw new Error("Google Places credential is missing");
const cityNames = { la: "Los Angeles California", orlando: "Orlando Florida", lasvegas: "Las Vegas Nevada" };
const normalized = s => s.toLowerCase().normalize("NFKD").replace(/[^a-z0-9 ]/g, " ").replace(/\s+/g, " ").trim();
const stop = new Set("the at by and of in hotel hotels resort resorts casino las vegas los angeles orlando california florida nevada collection autograph tribute portfolio unbound lxr ihg an official walt disney world r suites suite spa".split(" "));
const tokens = s => new Set(normalized(s).split(" ").filter(t => !stop.has(t)));
function matchingName(a, b) {
  const left = tokens(a), right = tokens(b);
  return left.size > 0 && right.size > 0 && [...left].filter(t => right.has(t)).length / Math.min(left.size, right.size) >= 0.75;
}
function distance(h, p) {
  if (!Number.isFinite(h.latitude) || !Number.isFinite(h.longitude) || !p.location) return Infinity;
  const radians = n => n * Math.PI / 180;
  const a = Math.sin(radians(p.location.latitude - h.latitude) / 2) ** 2
    + Math.cos(radians(h.latitude)) * Math.cos(radians(p.location.latitude)) * Math.sin(radians(p.location.longitude - h.longitude) / 2) ** 2;
  return 6371000 * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}
function identityMatches(h, p) {
  if (!p.id || !p.types?.includes("lodging") || !matchingName(h.name, p.displayName?.text ?? "")) return false;
  const address = normalized(h.address ?? "");
  const candidate = normalized(p.formattedAddress ?? "");
  const house = address.match(/^\d+/)?.[0];
  const zip = address.match(/\b\d{5}\b/)?.[0];
  return Boolean(house && candidate.startsWith(house + " ") && (!zip || candidate.includes(zip)) && distance(h, p) < 350);
}
function search(hotel) {
  const body = JSON.stringify({ textQuery: `${hotel.name} ${hotel.address ?? cityNames[hotel.city]}`, pageSize: 3, regionCode: "US" });
  // Explicit IPv4 uses the authorized local outbound address. Default IPv6
  // remains restricted until the account owner adds it to the allowlist.
  return new Promise((resolve, reject) => {
    const request = https.request("https://places.googleapis.com/v1/places:searchText", {
      method: "POST", family: 4,
      headers: { "Content-Type": "application/json", "Content-Length": Buffer.byteLength(body), "X-Goog-Api-Key": key,
        "X-Goog-FieldMask": "places.id,places.displayName,places.formattedAddress,places.location,places.types" },
    }, response => {
      let raw = "";
      response.on("data", chunk => { raw += chunk; if (raw.length > 100000) request.destroy(new Error("Google identity response too large")); });
      response.on("end", () => {
        if (response.statusCode !== 200) { reject(new Error(`Google identity lookup HTTP ${response.statusCode}`)); return; }
        try { resolve(JSON.parse(raw).places ?? []); } catch { reject(new Error("Invalid Google identity response")); }
      });
    });
    request.setTimeout(15000, () => request.destroy(new Error("Google identity lookup timed out")));
    request.on("error", reject);
    request.end(body);
  });
}
const previous = fs.existsSync(resultPath) ? JSON.parse(fs.readFileSync(resultPath, "utf8")).hotels : [];
const results = [];
const used = new Set();
for (const [index, hotel] of hotels.entries()) {
  const saved = previous.find(r => r.city === hotel.city && r.sourceId === hotel.sourceId && r.googlePlaceId);
  if (saved) { results.push(saved); used.add(saved.googlePlaceId); continue; }
  const candidates = await search(hotel); // Identity fields exist only in memory.
  const matches = candidates.filter(p => identityMatches(hotel, p));
  const match = matches.length === 1 && !used.has(matches[0].id) ? matches[0] : null;
  const row = { city: hotel.city, sourceId: hotel.sourceId, googlePlaceId: match?.id ?? null,
    matchedOn: new Date().toISOString().slice(0, 10), status: match ? "MatchedNameAddressAndLocation" : "NeedsHumanReview" };
  results.push(row);
  if (match) used.add(match.id);
  // Store IDs and our own verification status only, never Google ratings,
  // review counts, addresses, names, photos or other returned content.
  fs.writeFileSync(resultPath, JSON.stringify({ source: "saved-listing", hotels: results }, null, 2) + "\n");
  console.log(`${index + 1}/${hotels.length}: ${hotel.city} ${hotel.name}: ${row.status}`);
}
console.log(`Matched ${results.filter(r => r.googlePlaceId).length}/${results.length} unique Google Place IDs.`);
