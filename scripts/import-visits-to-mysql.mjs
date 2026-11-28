// Copies the site visit log from Upstash Redis into a local MySQL database for analytics.
// Safe to run as often as you like: visits already imported are skipped.
//
//   npm run visits:import            -> import every day Upstash still has (up to 30)
//   npm run visits:import -- 3       -> import only the last 3 days
//
// Needs in .env.local:  KV_REST_API_URL + KV_REST_API_TOKEN (or UPSTASH_REDIS_REST_*),
//                       MYSQL_URL=mysql://user:password@localhost:3306/travel_analytics
// Visitor types (human / bot / suspicious) use the same rules as /admin/visits.
import { createHash } from "node:crypto";
import { readFileSync, existsSync } from "node:fs";
import mysql from "mysql2/promise";
import { classifyVisitor, visitDay } from "../app/lib/visit-log.ts";

const root = new URL("../", import.meta.url);
if (existsSync(new URL(".env.local", root))) {
  for (const line of readFileSync(new URL(".env.local", root), "utf8").split(/\r?\n/)) {
    const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].trim().replace(/^["']|["']$/g, "");
  }
}
const redisUrl = (process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL || "").replace(/\/$/, "");
const redisToken = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
if (!redisUrl || !redisToken) fail("Upstash settings missing. Copy KV_REST_API_URL and KV_REST_API_TOKEN from Vercel (Settings > Environment Variables) into .env.local.");
if (!process.env.MYSQL_URL) fail("MYSQL_URL missing. Add e.g. MYSQL_URL=mysql://root:password@localhost:3306/travel_analytics to .env.local.");

function fail(message) { console.error(message); process.exit(1); }

async function redis(commands) {
  const response = await fetch(`${redisUrl}/pipeline`, {
    method: "POST",
    headers: { Authorization: `Bearer ${redisToken}`, "Content-Type": "application/json" },
    body: JSON.stringify(commands),
  });
  if (!response.ok) fail(`Upstash error ${response.status}: ${await response.text()}`);
  return response.json();
}

// Create the database if it doesn't exist, then the table.
const target = new URL(process.env.MYSQL_URL);
const database = decodeURIComponent(target.pathname.replace(/^\//, "")) || "travel_analytics";
if (!/^[A-Za-z0-9_]+$/.test(database)) fail(`Invalid database name "${database}".`);
target.pathname = "/";
const server = await mysql.createConnection(target.toString());
await server.query(`CREATE DATABASE IF NOT EXISTS \`${database}\` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci`);
await server.end();
target.pathname = `/${database}`;
const db = await mysql.createConnection(target.toString());

await db.query(`CREATE TABLE IF NOT EXISTS visits (
  id            BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  visit_hash    CHAR(64)     NOT NULL UNIQUE COMMENT 'sha256 of the raw log entry; prevents duplicates',
  visited_at    DATETIME(3)  NOT NULL COMMENT 'UTC',
  visited_at_ny DATETIME(3)  NOT NULL COMMENT 'New York time',
  visit_day     DATE         NOT NULL COMMENT 'Day in New York time',
  ip            VARCHAR(45)  NOT NULL,
  country       VARCHAR(8)   NULL,
  city          VARCHAR(100) NULL,
  path          VARCHAR(255) NOT NULL,
  visitor_type  ENUM('human','bot','suspicious') NOT NULL,
  identified_as VARCHAR(50)  NOT NULL,
  user_agent    VARCHAR(400) NOT NULL,
  imported_at   TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_day (visit_day), INDEX idx_ip (ip), INDEX idx_path (path(100)), INDEX idx_type (visitor_type), INDEX idx_country (country)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci`);

const nyParts = (date) => {
  const p = Object.fromEntries(new Intl.DateTimeFormat("en-US", { timeZone: "America/New_York", hourCycle: "h23",
    year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit" })
    .formatToParts(date).map((x) => [x.type, x.value]));
  return `${p.year}-${p.month}-${p.day} ${p.hour}:${p.minute}:${p.second}.${String(date.getUTCMilliseconds()).padStart(3, "0")}`;
};
const sqlTime = (date) => date.toISOString().replace("T", " ").replace("Z", "");

const dayCount = Math.min(Math.max(Number.parseInt(process.argv[2] ?? "31", 10) || 31, 1), 90);
const days = Array.from({ length: dayCount }, (_, i) => visitDay(new Date(Date.now() - i * 86_400_000)));
const results = await redis(days.map((day) => ["LRANGE", `log:${day}`, 0, -1]));

let read = 0, added = 0;
for (const [i, day] of days.entries()) {
  const entries = Array.isArray(results[i]?.result) ? results[i].result : [];
  if (!entries.length) continue;
  const rows = [];
  for (const raw of entries) {
    let e;
    try { e = JSON.parse(raw); } catch { continue; }
    const when = new Date(e.t);
    if (Number.isNaN(when.getTime())) continue;
    const comma = (e.l ?? "").lastIndexOf(",");
    const city = comma >= 0 ? e.l.slice(0, comma).trim() : null;
    const country = comma >= 0 ? e.l.slice(comma + 1).trim() : (e.l && e.l !== "unknown" ? e.l : null);
    const { kind, label } = classifyVisitor(e.ua ?? "");
    rows.push([createHash("sha256").update(raw).digest("hex"), sqlTime(when), nyParts(when), day,
      e.ip ?? "unknown", country, city, (e.p ?? "").slice(0, 255), kind, label, (e.ua ?? "").slice(0, 400)]);
  }
  for (let start = 0; start < rows.length; start += 500) {
    const [result] = await db.query(`INSERT IGNORE INTO visits
      (visit_hash, visited_at, visited_at_ny, visit_day, ip, country, city, path, visitor_type, identified_as, user_agent) VALUES ?`,
      [rows.slice(start, start + 500)]);
    added += result.affectedRows;
  }
  read += rows.length;
  console.log(`${day}: ${rows.length} visits in log`);
}
await db.end();
console.log(`\nDone: ${read} visits read, ${added} new rows added to ${database}.visits (${read - added} were already imported).`);
