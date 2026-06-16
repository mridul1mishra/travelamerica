#!/usr/bin/env node
/**
 * healthcheck.mjs
 * Tests all site routes against a running Next.js server and writes healthcheck.html.
 *
 * Usage:
 *   node scripts/healthcheck.mjs                  # defaults to http://localhost:3000
 *   node scripts/healthcheck.mjs http://localhost:3001
 *   node scripts/healthcheck.mjs https://www.travelsamericas.com
 */

import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const BASE_URL = process.argv[2] || 'http://localhost:3000';
const OUT_FILE = resolve(__dirname, '../healthcheck.html');

const ROUTES = [
  '/',
  '/about',
  '/privacy',
  '/termsandcondition',
  // LA
  '/destination/la',
  '/destination/la/best-areas-to-stay',
  '/destination/la/bookings',
  '/destination/la/food',
  '/destination/la/group-travel',
  '/destination/la/is-la-safe-at-night',
  '/destination/la/itinerary',
  '/destination/la/la-female-solo-travel-guide',
  '/destination/la/la-metro-map',
  '/destination/la/la-metro-map/full',
  '/destination/la/landmark',
  '/destination/la/metro-safety-guide',
  '/destination/la/neighborhood-guide',
  '/destination/la/safety-guide',
  '/destination/la/solo-itinerary',
  '/destination/la/solo-trip-to-la',
  '/destination/la/things-to-do',
  // Las Vegas
  '/destination/lasvegas',
  '/destination/lasvegas/best-areas-to-stay',
  '/destination/lasvegas/bookings',
  '/destination/lasvegas/food',
  '/destination/lasvegas/group-travel',
  '/destination/lasvegas/is-lasvegas-safe-at-night',
  '/destination/lasvegas/itinerary',
  '/destination/lasvegas/landmark',
  '/destination/lasvegas/lasvegas-female-solo-travel-guide',
  '/destination/lasvegas/neighborhood-guide',
  '/destination/lasvegas/safety-guide',
  '/destination/lasvegas/solo-itinerary',
  '/destination/lasvegas/solo-trip-to-lasvegas',
  '/destination/lasvegas/things-to-do',
  // NYC
  '/destination/nyc',
  '/destination/nyc/best-areas-to-stay',
  '/destination/nyc/best-time-to-visit',
  '/destination/nyc/booking',
  '/destination/nyc/food',
  '/destination/nyc/free-things-to-do',
  '/destination/nyc/getting-to-nyc',
  '/destination/nyc/group-travel',
  '/destination/nyc/is-nyc-safe-at-night',
  '/destination/nyc/landmark',
  '/destination/nyc/neighborhood-guide',
  '/destination/nyc/nyc-female-solo-travel-guide',
  '/destination/nyc/nyc-safety-guide',
  '/destination/nyc/nyc-subway-map',
  '/destination/nyc/nyc-subway-map/full',
  '/destination/nyc/solo-itinerary',
  '/destination/nyc/solo-trip-to-nyc',
  '/destination/nyc/subway-safety-guide',
  '/destination/nyc/things-to-do',
  // Orlando
  '/destination/orlando',
  '/destination/orlando/best-areas-to-stay',
  '/destination/orlando/best-time-to-visit',
  '/destination/orlando/bookings',
  '/destination/orlando/food',
  '/destination/orlando/free-things-to-do',
  '/destination/orlando/getting-to-orlando',
  '/destination/orlando/group-travel',
  '/destination/orlando/is-orlando-safe-at-night',
  '/destination/orlando/itinerary',
  '/destination/orlando/landmark',
  '/destination/orlando/neighborhood-guide',
  '/destination/orlando/orlando-female-solo-travel-guide',
  '/destination/orlando/safety-guide',
  '/destination/orlando/solo-itinerary',
  '/destination/orlando/solo-trip-to-orlando',
  '/destination/orlando/things-to-do',
];

const CONCURRENCY = 5;
const TIMEOUT_MS = 10_000;

async function checkUrl(route) {
  const url = `${BASE_URL}${route}`;
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  const start = Date.now();
  try {
    const res = await fetch(url, {
      signal: controller.signal,
      redirect: 'follow',
      headers: { 'User-Agent': 'TravelAmerica-Healthcheck/1.0' },
    });
    clearTimeout(timer);
    const ms = Date.now() - start;
    if (res.ok) {
      return { route, status: res.status, pass: true, detail: '', ms };
    } else {
      return { route, status: res.status, pass: false, detail: `HTTP ${res.status} ${res.statusText}`, ms };
    }
  } catch (err) {
    clearTimeout(timer);
    const ms = Date.now() - start;
    const detail = err.name === 'AbortError' ? `Timeout after ${TIMEOUT_MS}ms` : err.message;
    return { route, status: 0, pass: false, detail, ms };
  }
}

async function runAll() {
  const results = [];
  // Process in batches of CONCURRENCY
  for (let i = 0; i < ROUTES.length; i += CONCURRENCY) {
    const batch = ROUTES.slice(i, i + CONCURRENCY);
    const batchResults = await Promise.all(batch.map(checkUrl));
    results.push(...batchResults);
    process.stdout.write(`Checked ${Math.min(i + CONCURRENCY, ROUTES.length)}/${ROUTES.length}\r`);
  }
  console.log(`\nDone. ${results.filter(r => r.pass).length} passed, ${results.filter(r => !r.pass).length} failed.`);
  return results;
}

function buildHtml(results, baseUrl) {
  const ts = new Date().toLocaleString();
  const passed = results.filter(r => r.pass).length;
  const failed = results.filter(r => !r.pass).length;

  const rows = results.map((r, i) => {
    const statusClass = r.pass ? 'pass' : 'fail';
    const statusLabel = r.pass ? '✓ Pass' : '✗ Error';
    const httpBadge = r.status ? `<span class="badge">${r.status}</span>` : '';
    return `
      <tr class="${statusClass}">
        <td class="num">${i + 1}</td>
        <td class="url"><a href="${baseUrl}${r.route}" target="_blank">${r.route}</a></td>
        <td class="status">${statusLabel} ${httpBadge}</td>
        <td class="detail">${r.detail || '—'}</td>
        <td class="ms">${r.ms}ms</td>
      </tr>`;
  }).join('');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Site Healthcheck — ${baseUrl}</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: system-ui, sans-serif; font-size: 14px; background: #f8f9fa; color: #1a1a1a; padding: 24px; }
    h1 { font-size: 20px; margin-bottom: 4px; }
    .meta { color: #666; font-size: 13px; margin-bottom: 20px; }
    .summary { display: flex; gap: 12px; margin-bottom: 20px; flex-wrap: wrap; }
    .chip { padding: 6px 14px; border-radius: 20px; font-size: 13px; font-weight: 600; }
    .chip.total  { background: #e9ecef; color: #333; }
    .chip.ok     { background: #d1fae5; color: #065f46; }
    .chip.err    { background: #fee2e2; color: #991b1b; }
    table { border-collapse: collapse; width: 100%; background: #fff; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 4px rgba(0,0,0,.08); }
    thead th { background: #f0f2f5; padding: 10px 12px; text-align: left; font-weight: 600; font-size: 13px; border-bottom: 1px solid #e0e0e0; }
    td { padding: 9px 12px; border-bottom: 1px solid #f0f0f0; vertical-align: middle; }
    tr:last-child td { border-bottom: none; }
    .num  { color: #999; width: 36px; text-align: right; }
    .url  a { color: #2563eb; text-decoration: none; font-family: monospace; font-size: 13px; }
    .url  a:hover { text-decoration: underline; }
    .ms   { color: #888; font-size: 12px; white-space: nowrap; }
    .detail { font-size: 12px; color: #c00; font-family: monospace; }
    tr.pass .status { color: #059669; font-weight: 600; }
    tr.fail .status { color: #dc2626; font-weight: 600; }
    tr.fail { background: #fffbfb; }
    tr.fail:hover { background: #fff0f0; }
    tr.pass:hover { background: #f9fafb; }
    .badge { background: #e9ecef; border-radius: 4px; padding: 1px 5px; font-size: 11px; font-weight: 600; color: #555; margin-left: 4px; }
    .filter-bar { margin-bottom: 14px; display: flex; gap: 8px; align-items: center; }
    .filter-bar button { padding: 5px 12px; border: 1px solid #d0d0d0; border-radius: 4px; background: #fff; cursor: pointer; font-size: 13px; }
    .filter-bar button.active { background: #2563eb; color: #fff; border-color: #2563eb; }
  </style>
</head>
<body>
  <h1>Site Healthcheck</h1>
  <p class="meta">Base URL: <strong>${baseUrl}</strong> &nbsp;·&nbsp; Run at: ${ts}</p>

  <div class="summary">
    <span class="chip total">Total: ${results.length}</span>
    <span class="chip ok">Pass: ${passed}</span>
    ${failed ? `<span class="chip err">Failed: ${failed}</span>` : ''}
  </div>

  <div class="filter-bar">
    <button class="active" onclick="filter('all')">All</button>
    <button onclick="filter('fail')">Errors only</button>
    <button onclick="filter('pass')">Passing only</button>
  </div>

  <table id="results-table">
    <thead>
      <tr>
        <th class="num">#</th>
        <th>URL</th>
        <th>Status</th>
        <th>Error Details</th>
        <th>Time</th>
      </tr>
    </thead>
    <tbody>${rows}</tbody>
  </table>

  <script>
    function filter(mode) {
      document.querySelectorAll('.filter-bar button').forEach(b => b.classList.remove('active'));
      event.target.classList.add('active');
      document.querySelectorAll('#results-table tbody tr').forEach(row => {
        if (mode === 'all') row.style.display = '';
        else if (mode === 'fail') row.style.display = row.classList.contains('fail') ? '' : 'none';
        else row.style.display = row.classList.contains('pass') ? '' : 'none';
      });
    }
  </script>
</body>
</html>`;
}

// Main
const results = await runAll();
const html = buildHtml(results, BASE_URL);
writeFileSync(OUT_FILE, html, 'utf8');
console.log(`Report written to: ${OUT_FILE}`);
