export type HotelReview = { author: string; authorUrl?: string; rating: number; text: string; date: string; url?: string };
export type HotelRatingValue = { rating: number | null; reviewCount: number | null; reviews?: HotelReview[] };
export type HotelRatingBudgetResult = "allowed" | "ip_limit" | "global_limit";

export type HotelRatingConfig = {
  googleApiKey: string;
  turnstileSecretKey: string;
  turnstileSiteKey: string;
  localTurnstileBypass?: boolean;
  allowedOrigins: readonly string[];
  dailyLimit: number;
  monthlyLimit: number;
  ipHourlyLimit: number;
  trustedProxy: "vercel" | "cloudflare" | null;
};

export type HotelRatingDependencies = {
  config: HotelRatingConfig | null;
  findHotel: (hotelId: string) => Promise<{ placeId: string } | null>;
  verifyTurnstile: (token: string, ip: string | null) => Promise<unknown>;
  reserveBudget: (ip: string | null) => Promise<HotelRatingBudgetResult>;
  fetchRating: (placeId: string, includeReviews?: boolean) => Promise<HotelRatingValue>;
  now?: () => number;
};

const MAX_BODY_BYTES = 4096;
const NO_STORE_HEADERS = {
  "Cache-Control": "private, no-store, max-age=0",
  "CDN-Cache-Control": "no-store",
  "Vercel-CDN-Cache-Control": "no-store",
  "Content-Type": "application/json; charset=utf-8",
  "X-Content-Type-Options": "nosniff",
};

function reply(body: unknown, status: number): Response {
  return new Response(JSON.stringify(body), { status, headers: NO_STORE_HEADERS });
}

function unavailable(): Response {
  return reply({ code: "unavailable", message: "Google ratings are temporarily unavailable." }, 503);
}

function limitValue(value: string | undefined, fallback: number): number | null {
  if (value === undefined || value === "") return fallback;
  if (!/^\d+$/.test(value)) return null;
  const parsed = Number(value);
  return Number.isSafeInteger(parsed) && parsed <= 1_000_000 ? parsed : null;
}

function configuredOrigin(value: string, development: boolean): string | null {
  try {
    const url = new URL(value);
    const local = url.hostname === "localhost" || url.hostname === "127.0.0.1";
    if (local && !development) return null;
    if (url.username || url.password || url.hash || url.search) return null;
    if (url.protocol !== "https:" && !(development && local && url.protocol === "http:")) return null;
    return url.origin;
  } catch {
    return null;
  }
}

export function readHotelRatingConfig(env: Record<string, string | undefined>): HotelRatingConfig | null {
  const googleApiKey = env.GOOGLE_PLACES_API_KEY?.trim();
  const turnstileSecretKey = env.TURNSTILE_SECRET_KEY?.trim() ?? "";
  const turnstileSiteKey = env.NEXT_PUBLIC_TURNSTILE_SITE_KEY?.trim() ?? "";
  const localTurnstileBypass = env.NODE_ENV === "development" && env.NEXT_PUBLIC_HOTEL_RATINGS_LOCAL_BYPASS === "true";
  if (env.GOOGLE_RATINGS_ENABLED !== "true" || !env.DATABASE_URL || !googleApiKey
    || (!localTurnstileBypass && (!turnstileSecretKey || !turnstileSiteKey))) return null;

  const dailyLimit = limitValue(env.GOOGLE_RATINGS_DAILY_LIMIT, 20);
  const monthlyLimit = limitValue(env.GOOGLE_RATINGS_MONTHLY_LIMIT, 500);
  const ipHourlyLimit = limitValue(env.GOOGLE_RATINGS_IP_HOURLY_LIMIT, 5);
  if (dailyLimit === null || monthlyLimit === null || ipHourlyLimit === null) return null;

  const development = env.NODE_ENV !== "production";
  const origins = new Set<string>();
  for (const value of [env.PUBLIC_SITE_URL, env.NEXT_PUBLIC_SITE_URL]) {
    if (!value) continue;
    const origin = configuredOrigin(value, development);
    if (!origin) return null;
    origins.add(origin);
  }
  for (const raw of (env.HOTEL_RATINGS_ALLOWED_HOSTNAMES ?? "").split(",")) {
    const host = raw.trim().toLowerCase();
    if (!host) continue;
    if (!/^(?:localhost|(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)$/.test(host)) return null;
    const origin = configuredOrigin(`https://${host}`, development);
    if (!origin) return null;
    origins.add(origin);
  }
  if (env.VERCEL === "1") {
    for (const host of [env.VERCEL_URL, env.VERCEL_PROJECT_PRODUCTION_URL, env.VERCEL_BRANCH_URL]) {
      if (!host) continue;
      // These values come from deployment configuration, never request headers.
      const origin = configuredOrigin(`https://${host}`, false);
      if (!origin) return null;
      origins.add(origin);
    }
  }
  if (development) {
    origins.add("http://localhost:3000");
    origins.add("http://127.0.0.1:3000");
  }
  if (origins.size === 0) return null;
  if (env.HOTEL_RATINGS_TRUSTED_PROXY && !["vercel", "cloudflare"].includes(env.HOTEL_RATINGS_TRUSTED_PROXY)) return null;
  if (env.HOTEL_RATINGS_TRUSTED_PROXY === "vercel" && env.VERCEL !== "1") return null;

  return {
    googleApiKey, turnstileSecretKey, turnstileSiteKey, localTurnstileBypass,
    allowedOrigins: [...origins], dailyLimit, monthlyLimit, ipHourlyLimit,
    trustedProxy: env.HOTEL_RATINGS_TRUSTED_PROXY === "cloudflare" ? "cloudflare" : env.VERCEL === "1" ? "vercel" : null,
  };
}

export function trustedClientIp(request: Request, config: HotelRatingConfig): string | null {
  const header = config.trustedProxy === "vercel" ? "x-vercel-forwarded-for"
    : config.trustedProxy === "cloudflare" ? "cf-connecting-ip" : null;
  // An untrusted deployment gets one shared conservative bucket. Generic
  // forwarded headers must not let callers manufacture new rate-limit keys.
  return header ? request.headers.get(header)?.trim() || null : null;
}

export function isValidTurnstileResult(result: unknown, expectedHostname: string, now: number): boolean {
  if (!result || typeof result !== "object") return false;
  const data = result as Record<string, unknown>;
  if (data.success !== true || data.action !== "hotel-rating" || data.hostname !== expectedHostname) return false;
  if (typeof data.challenge_ts !== "string") return false;
  const issued = Date.parse(data.challenge_ts);
  return Number.isFinite(issued) && issued > now - 300_000 && issued <= now + 30_000;
}

async function smallJsonBody(request: Request): Promise<unknown> {
  const length = request.headers.get("content-length");
  if (length !== null && (!/^\d+$/.test(length) || Number(length) > MAX_BODY_BYTES)) throw new Error("Invalid body");
  if (!request.body) throw new Error("Missing body");
  const reader = request.body.getReader();
  const chunks: Uint8Array[] = [];
  let size = 0;
  let timedOut = false;
  const timeout = setTimeout(() => { timedOut = true; void reader.cancel().catch(() => {}); }, 5000);
  try {
    while (true) {
      const chunk = await reader.read();
      if (timedOut) throw new Error("Body timed out");
      if (chunk.done) break;
      size += chunk.value.byteLength;
      if (size > MAX_BODY_BYTES) {
        void reader.cancel().catch(() => {});
        throw new Error("Body too large");
      }
      chunks.push(chunk.value);
    }
    const bytes = new Uint8Array(size);
    let offset = 0;
    for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.byteLength; }
    return JSON.parse(new TextDecoder("utf-8", { fatal: true }).decode(bytes));
  } finally {
    clearTimeout(timeout);
    reader.releaseLock();
  }
}

export async function handleHotelRatingRequest(request: Request, deps: HotelRatingDependencies): Promise<Response> {
  const config = deps.config;
  if (!config) return unavailable();
  if (request.method !== "POST") return reply({ code: "invalid_request", message: "Unsupported request." }, 405);

  let requestUrl: URL;
  try { requestUrl = new URL(request.url); } catch { return reply({ code: "invalid_request", message: "Invalid request." }, 400); }
  const origin = request.headers.get("origin");
  const fetchSite = request.headers.get("sec-fetch-site");
  // Next dev can normalize the internal URL to localhost even when the
  // browser requested 127.0.0.1. Accept only configured loopback aliases with
  // an exact Host/Origin match; never trust forwarded hosts or production URLs.
  const loopbackOrigins = ["http://localhost:3000", "http://127.0.0.1:3000"];
  if (config.localTurnstileBypass === true && origin && loopbackOrigins.includes(origin)
    && loopbackOrigins.includes(requestUrl.origin) && config.allowedOrigins.includes(origin)
    && request.headers.get("host") === new URL(origin).host && fetchSite === "same-origin") {
    requestUrl = new URL(requestUrl.pathname + requestUrl.search, origin);
  }
  if (!config.allowedOrigins.includes(requestUrl.origin) || origin !== requestUrl.origin || (fetchSite !== null && fetchSite !== "same-origin")) {
    if (typeof process !== "undefined" && process.env.NODE_ENV === "development") {
      console.warn("Hotel rating request rejected", { reason: "origin_check", requestOrigin: requestUrl.origin, browserOrigin: origin, fetchSite, configuredOrigin: config.allowedOrigins.includes(requestUrl.origin) });
    }
    return reply({ code: "forbidden", message: "This request is not allowed." }, 403);
  }
  const localTurnstileBypass = config.localTurnstileBypass === true
    && (requestUrl.origin === "http://localhost:3000" || requestUrl.origin === "http://127.0.0.1:3000");
  if (!localTurnstileBypass && (!config.turnstileSecretKey || !config.turnstileSiteKey)) return unavailable();
  const userAgent = request.headers.get("user-agent");
  if (!userAgent || /bot\b|crawler|spider|slurp|facebookexternalhit|preview/i.test(userAgent)) {
    if (typeof process !== "undefined" && process.env.NODE_ENV === "development") console.warn("Hotel rating request rejected", { reason: "user_agent_check" });
    return reply({ code: "forbidden", message: "This request is not allowed." }, 403);
  }
  if (request.headers.get("content-type")?.split(";")[0].trim().toLowerCase() !== "application/json") {
    return reply({ code: "invalid_request", message: "Unsupported request." }, 415);
  }

  let body: unknown;
  try { body = await smallJsonBody(request); } catch { return reply({ code: "invalid_request", message: "Invalid request." }, 400); }
  if (!body || typeof body !== "object" || Array.isArray(body)) return reply({ code: "invalid_request", message: "Invalid request." }, 400);
  const data = body as Record<string, unknown>;
  const hotelId = data.hotelId;
  const token = data.turnstileToken;
  const validToken = (localTurnstileBypass && token === undefined)
    || (typeof token === "string" && token.length <= 2048 && (localTurnstileBypass || Boolean(token.trim())));
  if (Object.keys(data).some((key) => key !== "hotelId" && key !== "turnstileToken" && key !== "includeReviews")
    || (data.includeReviews !== undefined && typeof data.includeReviews !== "boolean")
    || typeof hotelId !== "string" || !/^[1-9]\d{0,18}$/.test(hotelId) || BigInt(hotelId) > BigInt("9223372036854775807")
    || !validToken) {
    return reply({ code: "invalid_request", message: "Invalid request." }, 400);
  }

  let hotel: { placeId: string } | null;
  try { hotel = await deps.findHotel(hotelId); } catch { return unavailable(); }
  if (!hotel) return reply({ code: "not_found", message: "Google ratings are unavailable for this hotel." }, 404);

  const ip = trustedClientIp(request, config);
  if (!localTurnstileBypass) {
    let verification: unknown;
    try { verification = await deps.verifyTurnstile(token as string, ip); } catch { return unavailable(); }
    if (!isValidTurnstileResult(verification, requestUrl.hostname, (deps.now ?? Date.now)())) {
      return reply({ code: "verification_failed", message: "Verification failed. Please try again." }, 403);
    }
  }

  let budget: HotelRatingBudgetResult;
  try { budget = await deps.reserveBudget(ip); } catch { return unavailable(); }
  if (budget !== "allowed") {
    return reply({ code: "rate_limited", message: "The lookup limit has been reached. Please try again later." }, 429);
  }
  try {
    // Reservation is committed before the attempt. Failed attempts consume it.
    return reply(await deps.fetchRating(hotel.placeId, data.includeReviews === true), 200);
  } catch {
    return reply({ code: "lookup_failed", message: "Google ratings could not be loaded. Please try again later." }, 502);
  }
}
