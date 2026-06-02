#!/usr/bin/env node
/**
 * Fetch Las Vegas hotels from the RapidAPI "Travel Advisor" API and write
 * content/cities/lasvegas/hotels.json (Hotels tab on /destination/lasvegas/bookings).
 *
 * Usage:
 *   node scripts/fetch-lasvegas-hotels.mjs
 *
 * Env (loaded from .env.local / .env):
 *   RAPIDAPI_KEY    - required
 *   RAPIDAPI_HOST   - optional, defaults to travel-advisor.p.rapidapi.com
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const JSON_PATH = path.join(ROOT, "content", "cities", "lasvegas", "hotels.json");

function loadEnv(file) {
  const p = path.join(ROOT, file);
  if (!fs.existsSync(p)) return;
  for (const line of fs.readFileSync(p, "utf8").split("\n")) {
    const m = line.match(/^\s*([\w.]+)\s*=\s*(.*)\s*$/);
    if (!m || line.trim().startsWith("#")) continue;
    const val = m[2].trim().replace(/^["']|["']$/g, "");
    if (!(m[1] in process.env)) process.env[m[1]] = val;
  }
}
loadEnv(".env.local");
loadEnv(".env");

const KEY = process.env.RAPIDAPI_KEY;
const HOST = process.env.RAPIDAPI_HOST || "travel-advisor.p.rapidapi.com";
if (!KEY || KEY === "your_rapidapi_key") {
  console.error("ERROR: set RAPIDAPI_KEY in .env.local first.");
  process.exit(1);
}

const LIMIT = Number(process.env.HOTELS_LIMIT || 12);
const LAS_VEGAS_LOCATION_ID = "45963"; // Las Vegas, NV (Tripadvisor geo id)
const headers = { "X-RapidAPI-Key": KEY, "X-RapidAPI-Host": HOST };

function ymd(d) {
  return d.toISOString().slice(0, 10);
}
const checkin = new Date();
checkin.setDate(checkin.getDate() + 30);
const CHECK_IN = ymd(checkin);

async function getJson(url) {
  const res = await fetch(url, { headers });
  const text = await res.text();
  if (!res.ok) throw new Error(`RapidAPI HTTP ${res.status} for ${url}: ${text.slice(0, 200)}`);
  return JSON.parse(text);
}

function digits(s) {
  const m = String(s || "").match(/(\d{3,})/);
  return m ? m[1] : null;
}

async function getLocationId() {
  const url =
    `https://${HOST}/locations/search?` +
    new URLSearchParams({
      query: "Las Vegas Nevada",
      limit: "10",
      offset: "0",
      units: "km",
      location_id: "1",
      currency: "USD",
      sort: "relevance",
      lang: "en_US",
    });
  try {
    const json = await getJson(url);
    const results = json?.data || [];
    const geo =
      results.find((r) => r?.result_type === "geos" && r?.result_object?.location_id) ||
      results.find((r) => r?.result_object?.location_id);
    const id = geo?.result_object?.location_id || digits(results[0]?.result_object?.documentId);
    if (id) return id;
  } catch (e) {
    console.warn(`  location lookup failed: ${e.message}`);
  }
  console.warn(`  falling back to known Las Vegas location_id ${LAS_VEGAS_LOCATION_ID}`);
  return LAS_VEGAS_LOCATION_ID;
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function getHotels(locationId) {
  // Build the initial search URL (no auction_key yet)
  const baseParams = {
    location_id: String(locationId),
    adults: "2",
    rooms: "1",
    nights: "1",
    checkin: CHECK_IN,
    currency: "USD",
    order: "asc",
    limit: String(LIMIT * 4),
    sort: "recommended",
    lang: "en_US",
  };

  let json;
  let auctionKey = null;

  for (let attempt = 1; attempt <= 12; attempt++) {
    // On poll attempts, pass the auction_key so the API resumes the same search
    const params = auctionKey
      ? { ...baseParams, auction_key: auctionKey }
      : baseParams;
    const url = `https://${HOST}/hotels/list?` + new URLSearchParams(params);

    json = await getJson(url);
    const items = (json?.data || []).filter((d) => d?.name);
    const progress = Number(json?.status?.progress ?? 0);
    auctionKey = json?.status?.auction_key || auctionKey;
    console.log(`  attempt ${attempt}: progress ${progress}%, ${items.length} items${auctionKey ? " (key=" + auctionKey.slice(0, 8) + "…)" : ""}`);
    if (items.length) return items;
    if (progress >= 100) break;
    await sleep(3000);
  }
  console.warn("  hotels search returned no usable items; last raw sample:");
  console.warn("  " + JSON.stringify(json).slice(0, 600));
  return [];
}

function num(n) {
  const v = Number(n);
  return Number.isFinite(v) ? v : null;
}

function priceText(item) {
  const p =
    item?.price ||
    item?.priceForDisplay ||
    (item?.price_level ? item.price_level : null) ||
    (item?.offers?.[0]?.display_price ?? null);
  if (!p) return null;
  let s = String(p).replace(/\s+/g, " ").trim();
  s = s.replace(/\s*-\s*/g, " – ");
  return /\$|\bUSD\b/.test(s) ? s : `$${s}`;
}

function toCard(item) {
  const img =
    item?.photo?.images?.medium?.url ||
    item?.photo?.images?.original?.url ||
    "/data/majorcities/lasvegas/assets/hotel.png";
  const rating = num(item?.rating) ?? num(item?.bubble_rating?.rating);
  const reviews = num(item?.num_reviews);
  const area = item?.parent_display_name || item?.location_string || "Las Vegas, NV";
  return {
    img,
    title: item.name,
    area,
    rating,
    reviews,
    price: priceText(item) || "See prices",
    url:
      item?.web_url ||
      `https://www.google.com/travel/hotels/${encodeURIComponent(item.name + " Las Vegas")}`,
  };
}

async function main() {
  console.log(`Fetching Las Vegas hotels via RapidAPI (${HOST}) for check-in ${CHECK_IN}...`);
  const locationId = await getLocationId();
  console.log(`  Las Vegas location_id = ${locationId}`);
  const hotels = await getHotels(locationId);
  if (!hotels.length) {
    console.error("No hotels returned. Aborting (hotels.json unchanged).");
    process.exit(1);
  }
  const cards = hotels.slice(0, LIMIT).map(toCard);
  fs.writeFileSync(JSON_PATH, JSON.stringify(cards, null, 2) + "\n");
  console.log(`Updated ${path.relative(ROOT, JSON_PATH)} with ${cards.length} hotels.`);
  cards.forEach((c) => console.log(`  ${c.price.padEnd(28)} ${c.title}`));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
