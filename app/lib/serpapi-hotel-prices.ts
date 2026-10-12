import "server-only";
import { Pool } from "pg";
import { createHash } from "node:crypto";

const state = globalThis as typeof globalThis & { pricePool?: Pool };

function priceDatabase() {
  if (!process.env.DATABASE_URL) throw new Error("Pricing is temporarily unavailable.");
  return state.pricePool ??= new Pool({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false }, max: 3 });
}

export function priceCacheKey(hotelId: string, query: string, stay: ReturnType<typeof validateStay>) {
  return createHash("sha256").update(JSON.stringify(["v1", hotelId, query, stay.checkIn, stay.checkOut,
    stay.adults, stay.childrenAges, "USD", "us", "en"])).digest("hex");
}

type PriceSnapshot = { results: { name: string; nightly?: string; total?: string; beforeTaxes?: string }[]; checkedAt: string };

export async function readPriceCache(key: string): Promise<PriceSnapshot | null> {
  const result = await priceDatabase().query<{ results: PriceSnapshot["results"]; checked_at: Date }>(
    "SELECT results, checked_at FROM hotel_price_cache WHERE cache_key = $1 AND checked_at > NOW() - INTERVAL '1 hour' AND checked_at <= NOW() + INTERVAL '1 minute'", [key]);
  const row = result.rows[0];
  return row ? { results: row.results, checkedAt: row.checked_at.toISOString() } : null;
}

export async function writePriceCache(key: string, snapshot: PriceSnapshot) {
  await priceDatabase().query(`INSERT INTO hotel_price_cache (cache_key, results, checked_at) VALUES ($1, $2::jsonb, $3)
    ON CONFLICT (cache_key) DO UPDATE SET results = EXCLUDED.results, checked_at = EXCLUDED.checked_at
    WHERE hotel_price_cache.checked_at <= EXCLUDED.checked_at`, [key, JSON.stringify(snapshot.results), snapshot.checkedAt]);
}

export async function lookupHotelPrices(key: string, query: string, stay: ReturnType<typeof validateStay>, memberId: string,
  dependencies = { read: readPriceCache, write: writePriceCache, reserve: reservePriceSearch, fetch: fetchHotelPriceSnapshot }) {
  const cached = await dependencies.read(key);
  if (cached) return { ...cached, cached: true };
  if (!await dependencies.reserve(memberId)) return null;
  const snapshot = await dependencies.fetch(query, stay);
  await dependencies.write(key, snapshot);
  return { ...snapshot, cached: false };
}

export function validateStay(input: { checkIn?: unknown; checkOut?: unknown; adults?: unknown; childrenAges?: unknown }) {
  const { checkIn, checkOut, adults, childrenAges = [] } = input;
  const date = (value: unknown): value is string => typeof value === "string" && /^\d{4}-\d{2}-\d{2}$/.test(value)
    && Number.isFinite(Date.parse(value)) && new Date(value).toISOString().slice(0, 10) === value;
  if (!date(checkIn) || !date(checkOut) || checkIn < new Date().toISOString().slice(0, 10)
    || checkOut <= checkIn || Date.parse(checkOut) - Date.parse(checkIn) > 30 * 86400000
    || !Number.isInteger(adults) || Number(adults) < 1 || Number(adults) > 6
    || !Array.isArray(childrenAges) || childrenAges.length > 4
    || childrenAges.some(age => !Number.isInteger(age) || age < 1 || age > 17)) {
    throw new Error("Choose valid dates (up to 30 nights), 1–6 adults, and child ages from 1–17.");
  }
  return { checkIn, checkOut, adults: Number(adults), childrenAges: childrenAges as number[] };
}

export async function reservePriceSearch(memberId: string) {
  const pool = priceDatabase();
  const now = new Date().toISOString();
  const positiveLimit = (value: string | undefined, fallback: number) => /^\d+$/.test(value ?? "") && Number(value) > 0 ? Number(value) : fallback;
  const buckets: [string, number][] = [
    [`month:${now.slice(0, 7)}`, positiveLimit(process.env.SERPAPI_MONTHLY_LIMIT, 200)],
    [`day:${now.slice(0, 10)}`, positiveLimit(process.env.SERPAPI_DAILY_LIMIT, 10)],
    [`member:${memberId}:${now.slice(0, 13)}`, 3],
  ];
  const client = await pool.connect();
  try {
    await client.query("BEGIN");
    for (const [bucket, limit] of buckets) {
      const result = await client.query(`INSERT INTO hotel_price_usage (bucket, requests) VALUES ($1, 1)
        ON CONFLICT (bucket) DO UPDATE SET requests = hotel_price_usage.requests + 1
        WHERE hotel_price_usage.requests < $2 RETURNING requests`, [bucket, limit]);
      if (!result.rowCount) { await client.query("ROLLBACK"); return false; }
    }
    await client.query("COMMIT");
    return true;
  } catch (error) { await client.query("ROLLBACK"); throw error; }
  finally { client.release(); }
}

type Rate = { lowest?: string; before_taxes_fees?: string };
type Property = { name?: string; rate_per_night?: Rate; total_rate?: Rate };

export async function fetchHotelPrices(query: string, stay: ReturnType<typeof validateStay>) {
  return (await fetchHotelPriceSnapshot(query, stay)).results;
}

export async function fetchHotelPriceSnapshot(query: string, stay: ReturnType<typeof validateStay>): Promise<PriceSnapshot> {
  const requestedAt = new Date().toISOString();
  const params = new URLSearchParams({ engine: "google_hotels", q: query, gl: "us", hl: "en", currency: "USD",
    check_in_date: stay.checkIn, check_out_date: stay.checkOut, adults: String(stay.adults),
    children: String(stay.childrenAges.length), api_key: process.env.SERPAPI_API_KEY! });
  if (stay.childrenAges.length) params.set("children_ages", stay.childrenAges.join(","));
  const response = await fetch(`https://serpapi.com/search.json?${params}`, { cache: "no-store", signal: AbortSignal.timeout(20000) });
  if (!response.ok) throw new Error("Pricing is temporarily unavailable. Please try again later.");
  const data = await response.json();
  if (data.error) throw new Error("Pricing is temporarily unavailable. Please try again later.");
  const properties: Property[] = Array.isArray(data.properties) ? data.properties : data.name ? [data] : [];
  const results = properties.filter(p => typeof p.name === "string" && (p.rate_per_night?.lowest || p.total_rate?.lowest)).slice(0, 5).map(p => ({
    name: p.name!, nightly: p.rate_per_night?.lowest, total: p.total_rate?.lowest,
    beforeTaxes: p.total_rate?.before_taxes_fees,
  }));
  const providerTime = Date.parse(data.search_metadata?.created_at);
  // Preserve the source age when SerpApi itself serves cached results.
  const checkedAt = Number.isFinite(providerTime) && providerTime <= Date.parse(requestedAt)
    ? new Date(providerTime).toISOString() : requestedAt;
  return { results, checkedAt };
}
