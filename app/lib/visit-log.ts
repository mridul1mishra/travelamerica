// Hotel page visit log, stored in Upstash Redis (not Neon, so visits never wake the database).
// Per day (New York time) it keeps, for each IP: visit count, last user agent,
// last path and last visit time. Each day's data expires after 30 days.

const RETENTION_SECONDS = 31 * 24 * 60 * 60;

function redisConfig() {
  const url = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
  return url && token ? { url: url.replace(/\/$/, ""), token } : null;
}

export function visitLogEnabled() { return redisConfig() !== null; }

async function pipeline(commands: (string | number)[][]): Promise<{ result?: unknown; error?: string }[]> {
  const config = redisConfig();
  if (!config) throw new Error("Visit log storage is not configured");
  const response = await fetch(`${config.url}/pipeline`, {
    method: "POST",
    headers: { Authorization: `Bearer ${config.token}`, "Content-Type": "application/json" },
    body: JSON.stringify(commands),
    cache: "no-store",
  });
  if (!response.ok) throw new Error(`Visit log storage error ${response.status}`);
  return response.json();
}

export function visitDay(date = new Date()): string {
  // en-CA formats as YYYY-MM-DD.
  return new Intl.DateTimeFormat("en-CA", { timeZone: "America/New_York" }).format(date);
}

const keys = (day: string) => ({
  count: `visits:${day}`, agent: `visits:${day}:agent`, path: `visits:${day}:path`, seen: `visits:${day}:seen`,
});

export async function recordHotelVisit(ip: string, path: string, userAgent: string): Promise<void> {
  const k = keys(visitDay());
  await pipeline([
    ["HINCRBY", k.count, ip, 1],
    ["HSET", k.agent, ip, userAgent.slice(0, 300)],
    ["HSET", k.path, ip, path.slice(0, 200)],
    ["HSET", k.seen, ip, new Date().toISOString()],
    ...Object.values(k).map(key => ["EXPIRE", key, RETENTION_SECONDS]),
  ]);
}

export type VisitRow = { ip: string; count: number; userAgent: string; lastPath: string; lastSeen: string };

function toMap(result: unknown): Record<string, string> {
  const list = Array.isArray(result) ? result as string[] : [];
  const map: Record<string, string> = {};
  for (let i = 0; i + 1 < list.length; i += 2) map[list[i]] = list[i + 1];
  return map;
}

export async function readVisits(day: string): Promise<VisitRow[]> {
  const k = keys(day);
  const [count, agent, path, seen] = (await pipeline([
    ["HGETALL", k.count], ["HGETALL", k.agent], ["HGETALL", k.path], ["HGETALL", k.seen],
  ])).map(entry => toMap(entry.result));
  return Object.entries(count)
    .map(([ip, value]) => ({ ip, count: Number(value) || 0, userAgent: agent[ip] ?? "", lastPath: path[ip] ?? "", lastSeen: seen[ip] ?? "" }))
    .sort((a, b) => b.count - a.count);
}

export function visitsAsText(day: string, rows: VisitRow[]): string {
  const lines = rows.map(r => [r.lastSeen, r.ip, r.count, r.lastPath, JSON.stringify(r.userAgent)].join("\t"));
  return [`# Hotel page visits for ${day} (America/New_York)`, "# last_seen\tip\tcount\tlast_path\tuser_agent", ...lines, ""].join("\n");
}
