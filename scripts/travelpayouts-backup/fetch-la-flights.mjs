#!/usr/bin/env node
/**
 * Fetch cheapest fares on popular US routes to New York from the
 * Travelpayouts Aviasales v3 "prices_for_dates" API, then rewrite
 * content/cities/newyork/bookflights.json (the rows array powering the
 * /destination/nyc/booking page).
 *
 * Usage:
 *   node scripts/fetch-nyc-flights.mjs
 *
 * Requires TRAVELPAYOUTS_TOKEN in the environment (.env.local is loaded
 * automatically if present).
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const JSON_PATH = path.join(ROOT, "content", "cities", "losangeles", "booking", "bookflights.json");

// --- minimal .env.local loader (no dependency) ---
function loadEnv(file) {
  const p = path.join(ROOT, file);
  if (!fs.existsSync(p)) return;
  for (const line of fs.readFileSync(p, "utf8").split("\n")) {
    const m = line.match(/^\s*([\w.]+)\s*=\s*(.*)\s*$/);
    if (!m || line.trim().startsWith("#")) continue;
    let val = m[2].trim().replace(/^["']|["']$/g, "");
    if (!(m[1] in process.env)) process.env[m[1]] = val;
  }
}
loadEnv(".env.local");
loadEnv(".env");

const TOKEN = process.env.TRAVELPAYOUTS_TOKEN;
if (!TOKEN || TOKEN === "your_token_here") {
  console.error("ERROR: set TRAVELPAYOUTS_TOKEN in .env.local first.");
  process.exit(1);
}

const MARKER = process.env.TRAVELPAYOUTS_MARKER || "733422";
if (!MARKER || MARKER === "your_marker") {
  console.error("ERROR: set TRAVELPAYOUTS_MARKER in .env.local first.");
  process.exit(1);
}

// Popular US origins -> New York. We query each, then keep the cheapest
// overall and surface the top N rows for the table.
const ORIGINS = {
  LAS: "Las Vegas (LAS)",
  SFO: "San Francisco (SFO)",
  ORD: "Chicago (ORD)",
  SEA: "Seattle (SEA)",
  DEN: "Denver (DEN)",
  DFW: "Dallas (DFW)",
  JFK: "New York (JFK)",
  ATL: "Atlanta (ATL)",
};
const MAX_ROWS = 6;
const DESTINATION = "LAX";

const AIRLINE_NAMES = {
  AA: "American", DL: "Delta", UA: "United", B6: "JetBlue", WN: "Southwest",
  NK: "Spirit", F9: "Frontier", AS: "Alaska", G4: "Allegiant", SY: "Sun Country",
  MX: "Breeze",
};

// Display names keyed by the actual departure airport the API returns.
const AIRPORT_NAMES = {
  LAS: "Las Vegas (LAS)", SFO: "San Francisco (SFO)", ORD: "Chicago (ORD)",
  SEA: "Seattle (SEA)", DEN: "Denver (DEN)", DFW: "Dallas (DFW)",
  JFK: "New York (JFK)", ATL: "Atlanta (ATL)", LAX: "Los Angeles (LAX)",
  ONT: "Los Angeles (ONT)", BUR: "Los Angeles (BUR)",
};

function fmtTime(iso) {
  if (!iso) return null;
  const m = iso.match(/T(\d{2}:\d{2})/);
  return m ? m[1] : null;
}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
function fmtDate(iso) {
  // departure_at like "2026-09-08T19:04:00-04:00" -> "Sep 8"
  if (!iso) return null;
  const m = iso.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (!m) return null;
  return `${MONTHS[Number(m[2]) - 1]} ${Number(m[3])}`;
}

function addMinutes(iso, mins) {
  // departure_at carries the origin's UTC offset, so `new Date` gives the
  // correct instant. We add the flight duration and render the arrival in
  // Los Angeles local time (Pacific), regardless of the origin timezone.
  if (!iso || mins == null) return null;
  const d = new Date(iso);
  if (isNaN(d)) return null;
  d.setMinutes(d.getMinutes() + mins);
  return new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Los_Angeles",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(d);
}
function fmtDuration(mins) {
  if (mins == null) return null;
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  return `${h}h ${String(m).padStart(2, "0")}m`;
}

// Target the upcoming month so fares stay near-term (~30–60 days out) instead
// of the absolute-cheapest fare on any future date.
function nextMonth() {
  const d = new Date();
  d.setDate(1);
  d.setMonth(d.getMonth() + 1);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
}
const DEPARTURE_AT = process.env.FLIGHTS_DEPARTURE_MONTH || nextMonth();

async function cheapestFor(origin) {
  const url = `https://api.travelpayouts.com/aviasales/v3/prices_for_dates?` +
    new URLSearchParams({
      origin,
      destination: DESTINATION,
      departure_at: DEPARTURE_AT,
      currency: "usd",
      sorting: "price",
      direct: "false",
      one_way: "true",
      limit: "1",
      page: "1",
      token: TOKEN,
    });
  const res = await fetch(url);
  if (!res.ok) {
    console.warn(`  ${origin}: HTTP ${res.status}`);
    return null;
  }
  const json = await res.json();
  const item = json?.data?.[0];
  if (!item) {
    console.warn(`  ${origin}: no fares returned`);
    return null;
  }
  return item;
}

function buildRow(item, prev) {
  const dep = fmtTime(item.departure_at);
  const depDate = fmtDate(item.departure_at);
  const arr = addMinutes(item.departure_at, item.duration);
  const dur = fmtDuration(item.duration);
  const airlineCode = item.airline || prev?.airline?.logo?.replace(".png", "") || "";
  const originAirport = item.origin_airport || item.origin;
  const destAirport = item.destination_airport || "JFK";
  return {
    airline: {
      name: AIRLINE_NAMES[airlineCode] || prev?.airline?.name || airlineCode,
      logo: airlineCode ? `https://pics.avs.io/100/100/${airlineCode}.png` : prev?.airline?.logo || "",
    },
    departure: {
      time: dep || prev?.departure?.time || "",
      date: depDate || prev?.departure?.date || "",
      city: AIRPORT_NAMES[originAirport] || prev?.departure?.city || originAirport,
    },
    arrival: {
      time: arr || prev?.arrival?.time || "",
      city: `Los Angeles (${destAirport})`,
    },
    duration: dur || prev?.duration || "",
    price: `from $${Math.round(item.price)}`,
    buttonText: "View Prices",
    // Aviasales returns a deep link like "/search/ATL0809NYC1?t=...". The part
    // before "?" is a clean, shareable search URL (origin+DDMM+dest+pax).
    buttonUrl: aviasalesUrl(item, prev),
  };
}

function aviasalesUrl(item, prev) {
  const link = item.link || "";
  const code = link.replace(/^\/search\//, "").split("?")[0];
  if (code) return `https://www.aviasales.com/search/${code}?marker=${MARKER}`;
  return prev?.buttonUrl || `https://www.aviasales.com/?marker=${MARKER}`;
}

async function main() {
  console.log("Fetching cheapest fares to Los Angeles...");
  const results = [];
  for (const origin of Object.keys(ORIGINS)) {
    const item = await cheapestFor(origin);
    if (item) {
      console.log(`  ${origin} -> NYC: $${Math.round(item.price)} (${item.airline})`);
      results.push(item);
    }
  }
  if (!results.length) {
    console.error("No fares returned for any route. Aborting (JSON unchanged).");
    process.exit(1);
  }

  results.sort((a, b) => a.price - b.price);
  const top = results.slice(0, MAX_ROWS);

  const data = JSON.parse(fs.readFileSync(JSON_PATH, "utf8"));
  const oldRows = data.rows || [];

  data.rows = top.map((item, i) => {
    const row = buildRow(item, oldRows[i]);
    if (i % 2 === 0) row.highlight = true; // alternate highlight, cheapest first
    return row;
  });

  fs.writeFileSync(JSON_PATH, JSON.stringify(data, null, 2) + "\n");
  console.log(`\nUpdated ${path.relative(ROOT, JSON_PATH)} with ${data.rows.length} rows.`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});