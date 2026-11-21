#!/usr/bin/env node
/**
 * Refresh all Las Vegas booking data in one go:
 *
 *   node scripts/refresh-lasvegas.mjs
 *
 * Runs in sequence:
 *   1. fetch-lasvegas-flights.mjs    (Travelpayouts/Aviasales — cheapest fares to LAS)
 *   2. fetch-lasvegas-hotels.mjs     (RapidAPI Travel Advisor)
 *   3. fetch-lasvegas-thingstodo.mjs (WeGoTrip)
 *
 * Restart the dev server afterward — JSON is imported at build time.
 */
import { spawn } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const SCRIPTS = [
  ["Flights (LAS)", "fetch-lasvegas-flights.mjs"],
  ["Hotels", "fetch-lasvegas-hotels.mjs"],
  ["Things to Do", "fetch-lasvegas-thingstodo.mjs"],
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
console.log(
  failed
    ? `\n${failed} feed(s) failed — see logs above.`
    : "\nAll Las Vegas feeds refreshed. Restart the dev server to see changes."
);
process.exit(failed ? 1 : 0);
