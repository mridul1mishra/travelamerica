#!/usr/bin/env node
/**
 * Fetch "Things to Do" in Orlando from the WeGoTrip API (a Travelpayouts
 * tours & activities partner) and write content/cities/orlando/thingstodo.json
 * (Things to Do tab on /destination/orlando/bookings).
 *
 * Usage:
 *   node scripts/fetch-orlando-thingstodo.mjs
 *
 * Env (loaded from .env.local / .env):
 *   WEGOTRIP_API         - optional, default https://app.wegotrip.com/api/v2
 *   WEGOTRIP_ORLANDO_CITY_ID - optional, default 4167147 (Orlando, GeoNames)
 *   TRAVELPAYOUTS_MARKER - optional, appended to product links for attribution
 *   THINGSTODO_LIMIT     - optional, default 12
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const JSON_PATH = path.join(ROOT, "content", "cities", "orlando", "thingstodo.json");

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

const BASE = (process.env.WEGOTRIP_API || "https://app.wegotrip.com/api/v2").replace(/\/$/, "");
const CITY_ID = process.env.WEGOTRIP_ORLANDO_CITY_ID || "4167147"; // Orlando (GeoNames)
const MARKER = process.env.TRAVELPAYOUTS_MARKER || "";
const LIMIT = Number(process.env.THINGSTODO_LIMIT || 12);

const AFFILIATE_PATH = path.join(ROOT, "content", "cities", "orlando", "thingstodo.affiliate.json");
let AFFILIATE = {};
try {
  AFFILIATE = JSON.parse(fs.readFileSync(AFFILIATE_PATH, "utf8"));
} catch {
  /* no affiliate map yet */
}

async function getJson(url) {
  const res = await fetch(url, { headers: { Accept: "application/json" } });
  const text = await res.text();
  if (!res.ok) throw new Error(`WeGoTrip HTTP ${res.status} for ${url}: ${text.slice(0, 200)}`);
  return JSON.parse(text);
}

async function getProducts() {
  const url =
    `${BASE}/products/popular/?` +
    new URLSearchParams({ lang: "en", city: CITY_ID, currency: "USD" });
  const json = await getJson(url);
  const items = json?.data?.results || json?.results || [];
  if (!items.length) {
    console.warn("  products response had no usable items; raw sample:");
    console.warn("  " + JSON.stringify(json).slice(0, 600));
  }
  return items;
}

function num(n) {
  const v = Number(n);
  return Number.isFinite(v) ? v : null;
}

function productUrl(item) {
  const tracked = AFFILIATE[String(item.id)];
  if (tracked) return tracked;
  const citySlug = item?.city?.slug || "orlando";
  const cityId = item?.city?.id || CITY_ID;
  const base = `https://wegotrip.com/${citySlug}-d${cityId}/${item.slug}-p${item.id}/`;
  return MARKER ? `${base}?marker=${MARKER}` : base;
}

function toCard(item) {
  const price = num(item?.price);
  return {
    img: item?.preview || item?.cover || "/data/majorcities/orlando/assets/magic-kingdom.jpg",
    title: item?.title || "Tour",
    category: item?.category || "Tour",
    rating: num(item?.rating),
    reviews: num(item?.reviewsCount),
    ranking: null,
    priceLevel: price != null ? `from $${Math.round(price)} per person` : "See prices",
    description: "",
    url: productUrl(item),
  };
}

async function main() {
  console.log(`Fetching Orlando things to do from WeGoTrip (${BASE}, city ${CITY_ID})...`);
  const products = await getProducts();
  if (!products.length) {
    console.error("No products returned. Aborting (thingstodo.json unchanged).");
    process.exit(1);
  }
  const cards = products.slice(0, LIMIT).map(toCard);
  fs.writeFileSync(JSON_PATH, JSON.stringify(cards, null, 2) + "\n");
  console.log(`Updated ${path.relative(ROOT, JSON_PATH)} with ${cards.length} activities.`);
  cards.forEach((c) => console.log(`  ${(c.priceLevel || "").padEnd(22)} ${c.title}`));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
