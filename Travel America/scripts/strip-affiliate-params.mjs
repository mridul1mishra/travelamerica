#!/usr/bin/env node
/**
 * Day 1 — Strip stale affiliate params from public/data/**\/*.json
 *
 * Targets every Booking.com URL inside any JSON file under public/data/
 * and removes these query params (someone else's affiliate IDs):
 *   - aid=304142
 *   - aid=2276674
 *   - aid=<anything>   (defensive — there should be NO aid= in source data)
 *   - label=msn-*      (Microsoft/MSN tracking)
 *   - label=<anything> (defensive)
 *   - sid=<anything>   (Booking session ID — pollutes URL and leaks user state)
 *   - srpvid=<anything> (search result page view ID — same problem)
 *
 * Behavior:
 *   - Dry run by default. Pass --write to actually overwrite files.
 *   - Reports every change. Writes a JSON report to ./scripts/strip-report.json.
 *   - Leaves non-Booking.com URLs untouched.
 *   - Preserves JSON formatting style (uses JSON.parse + JSON.stringify with 2-space indent).
 *
 * Usage:
 *   node scripts/strip-affiliate-params.mjs           # dry-run
 *   node scripts/strip-affiliate-params.mjs --write   # apply changes
 */

import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = process.cwd();
const DATA_DIR = join(ROOT, 'public', 'data');
const WRITE = process.argv.includes('--write');

// Params to strip from any Booking.com URL
const STRIP_PARAMS = new Set([
  'aid',
  'label',
  'sid',
  'srpvid',
  // Common Booking.com tracking that also leaks state — strip defensively:
  'lang',
  'no_rooms',
  'group_adults',
  'group_children',
  'sb_price_type',
  'src',
  'src_elem',
  'from_sn',
  'checkin',
  'checkout',
  'highlighted_hotels',
  'hpos',
  'dest_id',
  'dest_type',
  'soz',
  'lp',
  'app_hotel_id',
  'lang_click',
]);

// Only the params above that should be ALWAYS removed regardless of value.
// (We keep this small intentionally — only strip the ones the 90-day plan called out
//  PLUS the affiliate-leak params; tracking params kept above are added defensively.)
const HARD_STRIP = new Set(['aid', 'label', 'sid', 'srpvid']);

function isBookingHost(host) {
  return /(^|\.)booking\.com$/i.test(host);
}

function cleanBookingUrl(rawUrl) {
  let url;
  try {
    url = new URL(rawUrl);
  } catch {
    return { changed: false, url: rawUrl };
  }
  if (!isBookingHost(url.hostname)) return { changed: false, url: rawUrl };

  let changed = false;
  // Iterate over a snapshot of keys because we mutate during loop
  const keys = Array.from(url.searchParams.keys());
  for (const key of keys) {
    if (HARD_STRIP.has(key.toLowerCase())) {
      url.searchParams.delete(key);
      changed = true;
    }
  }
  // Also remove hash like #affiliate-... if present
  if (url.hash && /aid=|label=|sid=|srpvid=/i.test(url.hash)) {
    url.hash = '';
    changed = true;
  }

  // Normalize: drop trailing ? when no params remain
  const cleaned = url.toString().replace(/\?$/, '');
  return { changed, url: cleaned };
}

function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    const s = statSync(p);
    if (s.isDirectory()) walk(p, out);
    else if (s.isFile() && p.endsWith('.json')) out.push(p);
  }
  return out;
}

function walkObject(obj, onString) {
  if (obj === null || obj === undefined) return obj;
  if (typeof obj === 'string') return onString(obj);
  if (Array.isArray(obj)) return obj.map((v) => walkObject(v, onString));
  if (typeof obj === 'object') {
    const out = {};
    for (const [k, v] of Object.entries(obj)) out[k] = walkObject(v, onString);
    return out;
  }
  return obj;
}

function main() {
  let files;
  try {
    files = walk(DATA_DIR);
  } catch (e) {
    console.error(`ERROR: cannot read ${DATA_DIR}.`);
    console.error('Expected to be run from the project root containing public/data/.');
    console.error(e.message);
    process.exit(1);
  }

  const report = {
    dryRun: !WRITE,
    scannedFiles: files.length,
    changedFiles: 0,
    totalUrlsChanged: 0,
    changes: [],
  };

  for (const file of files) {
    const rel = relative(ROOT, file);
    let raw;
    try {
      raw = readFileSync(file, 'utf8');
    } catch (e) {
      console.error(`Skipping unreadable file ${rel}: ${e.message}`);
      continue;
    }
    let data;
    try {
      data = JSON.parse(raw);
    } catch (e) {
      console.error(`Skipping non-JSON file ${rel}: ${e.message}`);
      continue;
    }

    const fileChanges = [];
    const next = walkObject(data, (s) => {
      // Quick reject: only consider strings that look like Booking URLs
      if (!/booking\.com/i.test(s)) return s;
      const { changed, url } = cleanBookingUrl(s);
      if (changed) fileChanges.push({ from: s, to: url });
      return url;
    });

    if (fileChanges.length > 0) {
      report.changedFiles += 1;
      report.totalUrlsChanged += fileChanges.length;
      report.changes.push({ file: rel, count: fileChanges.length, examples: fileChanges.slice(0, 3) });
      if (WRITE) {
        writeFileSync(file, JSON.stringify(next, null, 2) + '\n');
      }
    }
  }

  // Console summary
  console.log(`Mode: ${WRITE ? 'WRITE (files updated)' : 'DRY RUN (no files changed) — pass --write to apply'}`);
  console.log(`Scanned: ${report.scannedFiles} JSON files under ${relative(ROOT, DATA_DIR)}`);
  console.log(`Files with changes: ${report.changedFiles}`);
  console.log(`Total Booking.com URLs cleaned: ${report.totalUrlsChanged}`);
  for (const c of report.changes) {
    console.log(`  - ${c.file}: ${c.count} URL(s) cleaned`);
    for (const ex of c.examples) {
      console.log(`      from: ${ex.from}`);
      console.log(`        to: ${ex.to}`);
    }
  }

  writeFileSync(join(ROOT, 'scripts', 'strip-report.json'), JSON.stringify(report, null, 2) + '\n');
  console.log(`\nFull report written to scripts/strip-report.json`);

  if (!WRITE && report.totalUrlsChanged > 0) {
    console.log('\nReview the report, then re-run with --write to apply.');
  }
}

main();
