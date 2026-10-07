#!/usr/bin/env node
/**
 * Fetch New York hotels from the RapidAPI "Travel Advisor" API (apidojo) and
 * write content/cities/newyork/hotels.json (consumed by the Hotels tab on
 * legacy JSON consumers). Hotel page listings use PostgreSQL via import-nyc-hotels.mjs.
 *
 * Reuses the same RapidAPI subscription as the Things to Do script — no extra
 * signup needed. Replaced the previous Hotelbeds integration, whose free key
 * only returned test/simulated data.
 *
 * Usage:
 *   node scripts/fetch-nyc-hotels.mjs
 *
 * Env (loaded from .env.local / .env):
 *   RAPIDAPI_KEY    - required
 *   RAPIDAPI_HOST   - optional, defaults to travel-advisor.p.rapidapi.com
 *
 * NOTE: RapidAPI response shapes vary; the mapping lives in `toCard` and the
 * endpoints in `getLocationId` / `getHotels`. Adjust if you switch APIs.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const JSON_PATH = path.join(ROOT, "content", "cities", "newyork", "hotels.json");

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

const LIMIT = Number(process.env.HOTELS_LIMIT || 50); // cards to keep
const NYC_LOCATION_ID = "60763"; // New York City (Tripadvisor geo id)
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
      query: "New York City",
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
  console.warn(`  falling back to known NYC location_id ${NYC_LOCATION_ID}`);
  return NYC_LOCATION_ID;
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export async function getHotels(locationId = NYC_LOCATION_ID) {
  const found = new Map();
  for (let offset = 0; offset < 300 && found.size < LIMIT; offset += 30) {
    const url = `https://${HOST}/hotels/list?` + new URLSearchParams({
      location_id: String(locationId), adults: "2", rooms: "1", nights: "1",
      checkin: CHECK_IN, currency: "USD", order: "asc", limit: "30",
      offset: String(offset), sort: "recommended", lang: "en_US",
    });
    let auctionKey = null;
    let items = [];
    for (let attempt = 1; attempt <= 12; attempt++) {
      const json = await getJson(auctionKey ? url + "&auction_key=" + encodeURIComponent(auctionKey) : url);
      items = (json?.data || []).filter((item) => item?.name && item?.location_id);
      const progress = Number(json?.status?.progress ?? 0);
      auctionKey = json?.status?.auction_key || auctionKey;
      console.log(`  offset ${offset}, attempt ${attempt}: ${items.length} hotels, progress ${progress}%`);
      if (items.length || progress >= 100) break;
      await sleep(2000);
    }
    const before = found.size;
    for (const item of items) found.set(String(item.location_id), item);
    if (found.size === before) break;
  }
  return [...found.values()].slice(0, LIMIT);
}
export { CHECK_IN };

// Directory search provides hotel details even when dated availability is empty.
export async function getHotelDirectory(limit = 50) {
  const found = new Map();
  for (let offset = 0; offset < 600 && found.size < limit; offset += 30) {
    const json = await getJson(`https://${HOST}/locations/search?` + new URLSearchParams({
      query: "New York City hotels", location_id: NYC_LOCATION_ID,
      limit: "30", offset: String(offset), currency: "USD", lang: "en_US",
    }));
    const results = json?.data ?? [];
    if (!results.length) break;
    for (const result of results) {
      const item = result.result_object;
      if (result.result_type !== "lodging" || item?.category?.key !== "hotel" ||
          !item.location_id || !item.name || item.is_closed || item.is_long_closed) continue;
      if (!item.ancestors?.some((ancestor) => String(ancestor.location_id) === NYC_LOCATION_ID)) continue;
      found.set(String(item.location_id), item);
    }
    console.log(`  directory offset ${offset}: ${found.size} unique NYC hotels`);
  }
  return [...found.values()].slice(0, limit);
}

function num(n) {
  if (n == null || n === "") return null;
  const v = Number(n);
  return Number.isFinite(v) ? v : null;
}

function priceText(item) {
  // Travel Advisor exposes price a few different ways depending on plan.
  const p =
    item?.price ||
    item?.priceForDisplay ||
    (item?.price_level ? item.price_level : null) ||
    (item?.offers?.[0]?.display_price ?? null);
  if (!p) return null;
  let s = String(p).replace(/\s+/g, " ").trim();
  s = s.replace(/\s*-\s*/g, " – "); // normalise range dash
  return /\$|\bUSD\b/.test(s) ? s : `$${s}`;
}

export function toCard(item) {
  const img =
    item?.photo?.images?.medium?.url ||
    item?.photo?.images?.original?.url ||
    "/destination/nyc-neighborhoods.png";
  const rating = num(item?.rating) ?? num(item?.bubble_rating?.rating);
  const reviews = num(item?.num_reviews);
  const area = item?.parent_display_name || item?.location_string || "New York City";
  return {
    img,
    title: item.name,
    area,
    rating,
    reviews,
    price: priceText(item) || "See prices",
    url:
      item?.web_url ||
      `https://www.google.com/travel/hotels/${encodeURIComponent(item.name + " New York")}`,
  };
}

async function main() {
  console.log(`Fetching NYC hotels via RapidAPI (${HOST}) for check-in ${CHECK_IN}...`);
  const locationId = await getLocationId();
  console.log(`  New York location_id = ${locationId}`);
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

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) main().catch((e) => {
  console.error(e);
  process.exit(1);
});
