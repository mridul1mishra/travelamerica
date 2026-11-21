#!/usr/bin/env node
/**
 * Refresh the sample routes on the NYC flight page using SerpApi's
 * Google Flights engine (no Travelpayouts / Aviasales API).
 *
 * Rewrites content/cities/newyork/bookflights.json (the `rows` array).
 *
 * Usage (from the repo root):
 *   node scripts/fetch-nyc-flights-serpapi.mjs            # fetch and write
 *   node scripts/fetch-nyc-flights-serpapi.mjs --dry-run  # fetch, print, do not write
 *
 * Needs SERPAPI_API_KEY (read from .env.local / .env, or the environment).
 *
 * Cost: one SerpApi search per origin, so ORIGINS.length (10) searches per
 * run. These come out of your SerpApi plan quota. The site's own
 * SERPAPI_DAILY_LIMIT / SERPAPI_MONTHLY_LIMIT counters live in the database
 * and are NOT touched by this script, so keep the run count in mind.
 *
 * Optional env:
 *   FLIGHTS_DEPARTURE_DATE=YYYY-MM-DD   date to price (default: ~4 weeks out, a Tuesday)
 *   FLIGHTS_MAX_SEARCHES=N              hard cap on searches this run (default 10)
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const JSON_PATH = path.join(ROOT, "content", "cities", "newyork", "bookflights.json");
const DRY_RUN = process.argv.includes("--dry-run");

function loadEnv(file) {
  const p = path.join(ROOT, file);
  if (!fs.existsSync(p)) return;
  for (const line of fs.readFileSync(p, "utf8").split(/\r?\n/)) {
    if (line.trim().startsWith("#")) continue;
    const m = line.match(/^\s*([\w.]+)\s*=\s*(.*)\s*$/);
    if (!m) continue;
    if (!(m[1] in process.env)) process.env[m[1]] = m[2].trim().replace(/^["']|["']$/g, "");
  }
}
loadEnv(".env.local");
loadEnv(".env");

const API_KEY = process.env.SERPAPI_API_KEY;
if (!API_KEY) {
  console.error("ERROR: set SERPAPI_API_KEY in .env.local first.");
  process.exit(1);
}

const ORIGINS = {
  ATL: "Atlanta (ATL)",
  ORD: "Chicago (ORD)",
  LAX: "Los Angeles (LAX)",
  MIA: "Miami (MIA)",
  SFO: "San Francisco (SFO)",
  BOS: "Boston (BOS)",
  MCO: "Orlando (MCO)",
  DCA: "Washington (DCA)",
  DFW: "Dallas (DFW)",
  LAS: "Las Vegas (LAS)",
};
const NYC_AIRPORTS = "JFK,LGA,EWR";
const MAX_ROWS = 6;
const MIN_ROWS_TO_WRITE = 3; // don't replace the table with a thin one
const MAX_SEARCHES = Number(process.env.FLIGHTS_MAX_SEARCHES) || Object.keys(ORIGINS).length;

function defaultDate() {
  const d = new Date();
  d.setUTCDate(d.getUTCDate() + 28);
  while (d.getUTCDay() !== 2) d.setUTCDate(d.getUTCDate() + 1); // Tuesday
  return d.toISOString().slice(0, 10);
}
const OUTBOUND_DATE = process.env.FLIGHTS_DEPARTURE_DATE || defaultDate();
if (!/^\d{4}-\d{2}-\d{2}$/.test(OUTBOUND_DATE)) {
  console.error("ERROR: FLIGHTS_DEPARTURE_DATE must be YYYY-MM-DD.");
  process.exit(1);
}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const fmtDate = (s) => {
  const m = s?.match(/^(\d{4})-(\d{2})-(\d{2})/);
  return m ? `${MONTHS[Number(m[2]) - 1]} ${Number(m[3])}` : "";
};
const fmtTime = (s) => s?.match(/(\d{2}:\d{2})$/)?.[1] ?? "";
const fmtDuration = (mins) =>
  Number.isFinite(mins) ? `${Math.floor(mins / 60)}h ${String(mins % 60).padStart(2, "0")}m` : "";

// Google Flights has no stable deep-link for a single result, so link to a
// search for the same route and date; Google resolves the query text.
function googleFlightsUrl(origin) {
  const q = `Flights from ${origin} to New York on ${OUTBOUND_DATE} one way`;
  return `https://www.google.com/travel/flights?hl=en&gl=us&curr=USD&q=${encodeURIComponent(q)}`;
}

async function cheapestFor(origin) {
  const params = new URLSearchParams({
    engine: "google_flights",
    departure_id: origin,
    arrival_id: NYC_AIRPORTS,
    outbound_date: OUTBOUND_DATE,
    type: "2", // one way
    stops: "1", // nonstop only
    currency: "USD",
    hl: "en",
    gl: "us",
    api_key: API_KEY,
  });
  const res = await fetch(`https://serpapi.com/search.json?${params}`, {
    signal: AbortSignal.timeout(30000),
  });
  if (!res.ok) {
    console.warn(`  ${origin}: HTTP ${res.status}`);
    return null;
  }
  const json = await res.json();
  if (json.error) {
    console.warn(`  ${origin}: ${json.error}`);
    return null;
  }
  const options = [...(json.best_flights ?? []), ...(json.other_flights ?? [])].filter(
    (o) => Number.isFinite(o.price) && o.flights?.length === 1,
  );
  if (!options.length) {
    console.warn(`  ${origin}: no nonstop fares returned`);
    return null;
  }
  options.sort((a, b) => a.price - b.price);
  return { origin, option: options[0] };
}

function buildRow({ origin, option }) {
  const seg = option.flights[0];
  const destId = seg.arrival_airport?.id || "NYC";
  return {
    airline: {
      name: seg.airline || "",
      logo: seg.airline_logo || option.airline_logo || "",
    },
    departure: {
      time: fmtTime(seg.departure_airport?.time),
      date: fmtDate(seg.departure_airport?.time),
      city: ORIGINS[origin],
    },
    arrival: {
      time: fmtTime(seg.arrival_airport?.time),
      city: `New York (${destId})`,
    },
    duration: fmtDuration(option.total_duration ?? seg.duration),
    price: `from $${Math.round(option.price)}`,
    buttonText: "View Prices",
    buttonUrl: googleFlightsUrl(origin),
  };
}

async function main() {
  const origins = Object.keys(ORIGINS).slice(0, MAX_SEARCHES);
  console.log(`Pricing nonstop one-way fares to New York for ${OUTBOUND_DATE} (${origins.length} searches)...`);
  const found = [];
  for (const origin of origins) {
    try {
      const r = await cheapestFor(origin);
      if (r) {
        console.log(`  ${origin} -> NYC: $${Math.round(r.option.price)} (${r.option.flights[0].airline})`);
        found.push(r);
      }
    } catch (e) {
      console.warn(`  ${origin}: ${e.message}`);
    }
  }

  if (found.length < MIN_ROWS_TO_WRITE) {
    console.error(`Only ${found.length} routes returned fares (need ${MIN_ROWS_TO_WRITE}). JSON unchanged.`);
    process.exit(1);
  }

  found.sort((a, b) => a.option.price - b.option.price);
  const rows = found.slice(0, MAX_ROWS).map((r, i) => {
    const row = buildRow(r);
    if (i % 2 === 0) row.highlight = true;
    return row;
  });

  if (DRY_RUN) {
    console.log("\n--dry-run: not writing. Rows would be:\n" + JSON.stringify(rows, null, 2));
    return;
  }

  const data = JSON.parse(fs.readFileSync(JSON_PATH, "utf8"));
  data.rows = rows;
  fs.writeFileSync(JSON_PATH, JSON.stringify(data, null, 2) + "\n");
  console.log(`\nUpdated ${path.relative(ROOT, JSON_PATH)} with ${rows.length} rows.`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
