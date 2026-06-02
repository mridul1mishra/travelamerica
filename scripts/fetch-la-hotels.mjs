#!/usr/bin/env node
/**
 * Fetch New York hotels from the RapidAPI "Travel Advisor" API (apidojo) and
 * write content/cities/newyork/hotels.json (consumed by the Hotels tab on
 * /destination/nyc/booking).
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
const JSON_PATH = path.join(ROOT, "content", "cities", "losangeles", "booking", "hotels.json");

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

const LIMIT = Number(process.env.HOTELS_LIMIT || 12); // cards to keep
const NYC_LOCATION_ID = "32655"; // Los Angeles (Tripadvisor geo id), fallback only
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
      query: "Los Angeles",
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

async function getHotels(locationId) {
  const url =
    `https://${HOST}/hotels/list?` +
    new URLSearchParams({
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
    });

  // /hotels/list is an async search: the first call returns progress "0" with
  // empty data while the auction runs. Poll until progress hits 100 (or we get
  // usable items, or we run out of attempts).
  let json;
  let auctionKey = null;
  for (let attempt = 1; attempt <= 12; attempt++) {
    const pollUrl = auctionKey
      ? url + "&auction_key=" + encodeURIComponent(auctionKey)
      : url;
    json = await getJson(pollUrl);
    const items = (json?.data || []).filter((d) => d?.name);
    const progress = Number(json?.status?.progress ?? 0);
    auctionKey = json?.status?.auction_key || auctionKey;
    console.log(`  attempt ${attempt}: progress ${progress}%, ${items.length} items`);
    if (items.length) return items;
    if (progress >= 100) break; // search finished with nothing
    await sleep(2000);
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

function toCard(item) {
  const img =
    item?.photo?.images?.medium?.url ||
    item?.photo?.images?.original?.url ||
    "/majorcities/hotel-edison.jpg";
  const rating = num(item?.rating) ?? num(item?.bubble_rating?.rating);
  const reviews = num(item?.num_reviews);
  const area = item?.parent_display_name || item?.location_string || "Los Angeles";
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

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
