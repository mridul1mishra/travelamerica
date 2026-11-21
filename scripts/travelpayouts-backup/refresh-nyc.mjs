#!/usr/bin/env node
/**
 * Refresh all New York booking data in one go — run this manually every
 * fortnight (or whenever you want fresh prices):
 *
 *   node scripts/refresh-nyc.mjs
 *
 * It runs the three fetch scripts in sequence:
 *   - fetch-nyc-flights.mjs      (Travelpayouts/Aviasales, next-month fares)
 *   - fetch-nyc-hotels.mjs       (RapidAPI Travel Advisor)
 *   - fetch-nyc-thingstodo.mjs   (WeGoTrip, keeps affiliate links)
 *
 * Each runs independently; if one fails the others still run, and a summary is
 * printed at the end. Restart the dev server afterward (JSON is imported at
 * build time). Credentials are read from .env.local by each script.
 */
import { spawn } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const SCRIPTS = [
  ["Flights", "fetch-nyc-flights.mjs"],
  ["Hotels", "fetch-nyc-hotels.mjs"],
  ["Things to Do", "fetch-nyc-thingstodo.mjs"],
];

function run(file) {
  return new Promise((resolve) => {
    const child = spawn(process.execPath, [path.join(__dirname, file)], {
      stdio: "inherit",
    });
    child.on("close", (code) => resolve(code));
    child.on("error", () => resolve(1));
  });
}

const results = [];
for (const [label, file] of SCRIPTS) {
  console.log(`\n=== ${label} (${file}) ===`);
  const code = await run(file);
  results.push([label, code === 0]);
}

console.log("\n=== Summary ===");
for (const [label, ok] of results) {
  console.log(`  ${ok ? "✓" : "✗"} ${label}`);
}
const failed = results.filter(([, ok]) => !ok).length;
console.log(failed ? `\n${failed} feed(s) failed — see logs above.` : "\nAll feeds refreshed. Restart the dev server to see changes.");
process.exit(failed ? 1 : 0);
