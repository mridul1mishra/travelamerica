// Hotel page visit log, stored in Upstash Redis (not Neon, so visits never wake the database).
// Per day (New York time) it keeps, for each IP: visit count, last user agent,
// last path, last visit time and approximate location (country/city from Vercel's IP lookup). Each day's data expires after 30 days.

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
  location: `visits:${day}:location`,
});

export async function recordHotelVisit(ip: string, path: string, userAgent: string, location: string): Promise<void> {
  const k = keys(visitDay());
  await pipeline([
    ["HINCRBY", k.count, ip, 1],
    ["HSET", k.agent, ip, userAgent.slice(0, 300)],
    ["HSET", k.path, ip, path.slice(0, 200)],
    ["HSET", k.seen, ip, new Date().toISOString()],
    ["HSET", k.location, ip, location.slice(0, 100)],
    ...Object.values(k).map(key => ["EXPIRE", key, RETENTION_SECONDS]),
  ]);
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

export type VisitRow = {
  ip: string; count: number; userAgent: string; lastPath: string; lastSeen: string; location: string;
  kind: VisitorKind; label: string;
};

function toMap(result: unknown): Record<string, string> {
  const list = Array.isArray(result) ? result as string[] : [];
  const map: Record<string, string> = {};
  for (let i = 0; i + 1 < list.length; i += 2) map[list[i]] = list[i + 1];
  return map;
}

export async function readVisits(day: string): Promise<VisitRow[]> {
  const k = keys(day);
  const [count, agent, path, seen, location] = (await pipeline([
    ["HGETALL", k.count], ["HGETALL", k.agent], ["HGETALL", k.path], ["HGETALL", k.seen], ["HGETALL", k.location],
  ])).map(entry => toMap(entry.result));
  return Object.entries(count)
    .map(([ip, value]) => ({ ip, count: Number(value) || 0, userAgent: agent[ip] ?? "", lastPath: path[ip] ?? "", lastSeen: seen[ip] ?? "", location: location[ip] ?? "", ...classifyVisitor(agent[ip] ?? "") }))
    .sort((a, b) => b.count - a.count);
}

export function visitsAsText(day: string, rows: VisitRow[]): string {
  const lines = rows.map(r => [newYorkTime(r.lastSeen), r.kind, r.label, r.ip, r.location, r.count, r.lastPath, JSON.stringify(r.userAgent)].join("\t"));
  return [`# Hotel page visits for ${day} (America/New_York)`, "# last_seen (New York time)\ttype\tidentified_as\tip\tlocation\tcount\tlast_path\tuser_agent", ...lines, ""].join("\n");
}
