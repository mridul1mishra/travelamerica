#!/usr/bin/env node
/**
 * Fetch cheapest fares on popular US routes TO Orlando (MCO) from the
 * Travelpayouts Aviasales v3 "prices_for_dates" API, then rewrite
 * content/cities/orlando/bookflights.json (powers /destination/orlando/bookings).
 *
 * Usage:
 *   node scripts/fetch-orlando-flights.mjs
 *
 * Requires TRAVELPAYOUTS_TOKEN in the environment (.env.local is loaded automatically).
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const JSON_PATH = path.join(ROOT, "content", "cities", "orlando", "bookflights.json");

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

// Popular US origins -> Orlando (MCO)
const ORIGINS = {
  ATL: "Atlanta (ATL)",
  ORD: "Chicago (ORD)",
  LAX: "Los Angeles (LAX)",
  MIA: "Miami (MIA)",
  SFO: "San Francisco (SFO)",
  BOS: "Boston (BOS)",
  NYC: "New York (NYC)",
  DCA: "Washington (DCA)",
  DFW: "Dallas (DFW)",
  LAS: "Las Vegas (LAS)",
  PHX: "Phoenix (PHX)",
};
const MAX_ROWS = 6;
const DESTINATION = "MCO";

const AIRLINE_NAMES = {
  AA: "American", DL: "Delta", UA: "United", B6: "JetBlue", WN: "Southwest",
  NK: "Spirit", F9: "Frontier", AS: "Alaska", G4: "Allegiant", SY: "Sun Country",
  MX: "Breeze",
};

const AIRPORT_NAMES = {
  ATL: "Atlanta (ATL)", ORD: "Chicago (ORD)", LAX: "Los Angeles (LAX)",
  MIA: "Miami (MIA)", FLL: "Fort Lauderdale (FLL)", SFO: "San Francisco (SFO)",
  BOS: "Boston (BOS)", JFK: "New York (JFK)", LGA: "New York (LGA)",
  EWR: "Newark (EWR)", DCA: "Washington (DCA)", IAD: "Washington (IAD)",
  DFW: "Dallas (DFW)", DAL: "Dallas (DAL)", LAS: "Las Vegas (LAS)",
  PHX: "Phoenix (PHX)",
};

function fmtTime(iso) {
  if (!iso) return null;
  const m = iso.match(/T(\d{2}:\d{2})/);
  return m ? m[1] : null;
}

const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
function fmtDate(iso) {
  if (!iso) return null;
  const m = iso.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (!m) return null;
  return `${MONTHS[Number(m[2]) - 1]} ${Number(m[3])}`;
}

function addMinutes(iso, mins) {
  if (!iso || mins == null) return null;
  const d = new Date(iso);
  if (isNaN(d)) return null;
  d.setMinutes(d.getMinutes() + mins);
  return new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
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
  const airlineCode = item.airline || "";
  const originAirport = item.origin_airport || item.origin;
  const destAirport = item.destination_airport || "MCO";
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
      city: `Orlando (${destAirport})`,
    },
    duration: dur || prev?.duration || "",
    price: `from $${Math.round(item.price)}`,
    buttonText: "View Prices",
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
  console.log("Fetching cheapest fares to Orlando (MCO)...");
  const results = [];
  for (const origin of Object.keys(ORIGINS)) {
    const item = await cheapestFor(origin);
    if (item) {
      console.log(`  ${origin} -> MCO: $${Math.round(item.price)} (${item.airline})`);
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
    if (i % 2 === 0) row.highlight = true;
    return row;
  });

  fs.writeFileSync(JSON_PATH, JSON.stringify(data, null, 2) + "\n");
  console.log(`\nUpdated ${path.relative(ROOT, JSON_PATH)} with ${data.rows.length} rows.`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
