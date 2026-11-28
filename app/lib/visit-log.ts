// Site visit log, stored in Upstash Redis (not Neon, so visits never wake the database).
// Each page view is appended to one list per day (New York time):
//   log:<YYYY-MM-DD>  ->  JSON entries { t: ISO time, ip, l: location, p: path, ua: user agent }
// That costs 1 Upstash command per visit (plus 1 per day to set the 30-day expiry),
// which keeps the free plan's 500K commands/month good for roughly 15K visits a day.
// Each day's list is kept for VISIT_LOG_RETENTION_DAYS (default 30), then deleted automatically.
// Lists from the earlier hotel-only version (visits:<day> hashes) are still read until they expire.

/** Days of visit data to keep, from VISIT_LOG_RETENTION_DAYS (1-90, default 30). */
export function visitRetentionDays(): number {
  const days = Number.parseInt(process.env.VISIT_LOG_RETENTION_DAYS ?? "", 10);
  return Number.isFinite(days) ? Math.min(Math.max(days, 1), 90) : 30;
}

// The expiry starts at the day's first visit (just after midnight), so one extra day
// keeps the last N complete days available. A change applies to days logged after it.
const retentionSeconds = () => (visitRetentionDays() + 1) * 24 * 60 * 60;

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

const logKey = (day: string) => `log:${day}`;

export async function recordVisit(ip: string, path: string, userAgent: string, location: string): Promise<void> {
  const key = logKey(visitDay());
  const entry = JSON.stringify({ t: new Date().toISOString(), ip, l: location.slice(0, 100), p: path.slice(0, 200), ua: userAgent.slice(0, 300) });
  const [push] = await pipeline([["RPUSH", key, entry]]);
  // RPUSH returns the new list length; 1 means this is the day's first visit, so set the expiry once.
  if (push?.result === 1) await pipeline([["EXPIRE", key, retentionSeconds()]]);
}

export type VisitorKind = "human" | "bot" | "suspicious";

// Named crawlers, matched against the user agent. Label shown in the admin page.
const KNOWN_BOTS: [RegExp, string][] = [
  [/Googlebot|Google-InspectionTool|GoogleOther/i, "Googlebot"],
  [/Mediapartners-Google|AdsBot-Google/i, "Google AdSense"],
  [/bingbot|BingPreview/i, "Bing"],
  [/meta-webindexer|meta-externalagent|facebookexternalhit|facebookcatalog/i, "Meta (Facebook)"],
  [/Amazonbot/i, "Amazonbot"],
  [/Applebot/i, "Applebot"],
  [/YandexBot|YandexImages/i, "Yandex"],
  [/Baiduspider/i, "Baidu"],
  [/DuckDuckBot/i, "DuckDuckGo"],
  [/PerplexityBot|Perplexity-User/i, "Perplexity"],
  [/GPTBot|ChatGPT-User|OAI-SearchBot/i, "OpenAI"],
  [/ClaudeBot|Claude-User|Claude-SearchBot/i, "Anthropic"],
  [/Bytespider/i, "ByteDance"],
  [/LinkupBot|Linkup-User/i, "Linkup"],
  [/CCBot/i, "Common Crawl"],
  [/AhrefsBot|SemrushBot|DotBot|MJ12bot|DataForSeoBot|BLEXBot|serpstatbot/i, "SEO tool"],
  [/PetalBot/i, "Petal (Huawei)"],
  [/HeadlessChrome|PhantomJS|Puppeteer|Playwright|Selenium/i, "Headless browser"],
  [/python|curl|wget|Go-http-client|okhttp|axios|node-fetch|Java\/|libwww|Scrapy/i, "Script"],
  [/bot|crawler|spider|scraper|slurp/i, "Other bot"],
];

// Chrome releases a new major version about every 4 weeks; real users update
// automatically. A desktop Chrome far below this is usually a scraper. Raise it
// over time (Chrome 140 shipped in late 2025).
const OLDEST_PLAUSIBLE_CHROME = 130;

export function classifyVisitor(userAgent: string): { kind: VisitorKind; label: string } {
  if (!userAgent) return { kind: "suspicious", label: "No user agent" };
  for (const [pattern, label] of KNOWN_BOTS) if (pattern.test(userAgent)) return { kind: "bot", label };
  if (/aweme|Bytedance|ByteLocale/i.test(userAgent)) return { kind: "suspicious", label: "ByteDance app / crawler" };
  const chrome = userAgent.match(/Chrome\/(\d+)\./);
  if (chrome && !/Mobile|Android/i.test(userAgent) && Number(chrome[1]) < OLDEST_PLAUSIBLE_CHROME) {
    return { kind: "suspicious", label: `Outdated Chrome ${chrome[1]}` };
  }
  return { kind: "human", label: "Browser" };
}

export function newYorkTime(iso: string): string {
  if (!iso) return "";
  const date = new Date(iso);
  return Number.isNaN(date.getTime()) ? iso
    : date.toLocaleString("en-US", { timeZone: "America/New_York", dateStyle: "medium", timeStyle: "medium" });
}

export type VisitEntry = {
  time: string; ip: string; location: string; path: string; userAgent: string; kind: VisitorKind; label: string;
  /** Visits this entry stands for: 1, or an IP's total from the older hotel-only summary format. */
  weight: number;
};

export type VisitRow = {
  ip: string; count: number; userAgent: string; lastPath: string; lastSeen: string; location: string;
  pages: number; kind: VisitorKind; label: string;
  /** Every page this IP visited, most visited first. */
  pageCounts: { path: string; count: number }[];
};

function toMap(result: unknown): Record<string, string> {
  const list = Array.isArray(result) ? result as string[] : [];
  const map: Record<string, string> = {};
  for (let i = 0; i + 1 < list.length; i += 2) map[list[i]] = list[i + 1];
  return map;
}

/** Every visit for a day, oldest first. Older hotel-only data (one summary per IP) is included as single entries. */
export async function readVisitEntries(day: string): Promise<VisitEntry[]> {
  const legacy = `visits:${day}`;
  const [log, count, agent, path, seen, location] = await pipeline([
    ["LRANGE", logKey(day), 0, -1],
    ["HGETALL", legacy], ["HGETALL", `${legacy}:agent`], ["HGETALL", `${legacy}:path`], ["HGETALL", `${legacy}:seen`], ["HGETALL", `${legacy}:location`],
  ]);
  const entries: VisitEntry[] = [];
  for (const raw of Array.isArray(log.result) ? log.result as string[] : []) {
    try {
      const e = JSON.parse(raw) as { t: string; ip: string; l: string; p: string; ua: string };
      entries.push({ time: e.t, ip: e.ip, location: e.l, path: e.p, userAgent: e.ua, weight: 1, ...classifyVisitor(e.ua) });
    } catch { /* skip a damaged entry */ }
  }
  const counts = toMap(count.result), agents = toMap(agent.result), paths = toMap(path.result), times = toMap(seen.result), places = toMap(location.result);
  for (const [ip, value] of Object.entries(counts)) {
    entries.push({ time: times[ip] ?? "", ip, location: places[ip] ?? "", path: paths[ip] ?? "", userAgent: agents[ip] ?? "",
      weight: Number(value) || 1, ...classifyVisitor(agents[ip] ?? "") });
  }
  entries.sort((a, b) => a.time.localeCompare(b.time));
  return entries;
}

/** One row per IP: visit count, distinct pages, and its latest visit. */
export function summarizeByIp(entries: VisitEntry[]): VisitRow[] {
  const rows = new Map<string, VisitRow & { paths: Map<string, number> }>();
  for (const e of entries) {
    const row = rows.get(e.ip) ?? { ip: e.ip, userAgent: e.userAgent, location: e.location, kind: e.kind, label: e.label,
      count: 0, pages: 0, lastPath: e.path, lastSeen: e.time, pageCounts: [], paths: new Map<string, number>() };
    row.count += e.weight;
    row.paths.set(e.path, (row.paths.get(e.path) ?? 0) + e.weight);
    if (e.time >= row.lastSeen) Object.assign(row, { lastSeen: e.time, lastPath: e.path, userAgent: e.userAgent, location: e.location, kind: e.kind, label: e.label });
    rows.set(e.ip, row);
  }
  return [...rows.values()].map(({ paths, ...row }) => ({
    ...row, pages: paths.size,
    pageCounts: [...paths].map(([path, count]) => ({ path, count })).sort((a, b) => b.count - a.count),
  })).sort((a, b) => b.count - a.count);
}

/** Visits per page, split into humans and everyone else. */
export function summarizeByPage(entries: VisitEntry[]): { path: string; human: number; other: number }[] {
  const pages = new Map<string, { path: string; human: number; other: number }>();
  for (const e of entries) {
    const page = pages.get(e.path) ?? { path: e.path, human: 0, other: 0 };
    if (e.kind === "human") page.human += e.weight; else page.other += e.weight;
    pages.set(e.path, page);
  }
  return [...pages.values()].sort((a, b) => b.human - a.human || b.other - a.other);
}

/** Chronological log, one line per visit. */
export function visitsAsText(day: string, entries: VisitEntry[]): string {
  const lines = entries.map(e => [newYorkTime(e.time), e.kind, e.label, e.ip, e.location, e.path, JSON.stringify(e.userAgent)]
    .concat(e.weight > 1 ? [`(${e.weight} visits, earlier summary format)`] : []).join("\t"));
  return [`# Site visits for ${day} (times in America/New_York)`, "# time\ttype\tidentified_as\tip\tlocation\tpath\tuser_agent", ...lines, ""].join("\n");
}
