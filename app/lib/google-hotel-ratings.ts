import { createHmac } from "node:crypto";
import { isIP } from "node:net";
import { Pool } from "pg";
import selection from "@/content/cities/newyork/hotel-selection.json";
import { handleHotelRatingRequest, readHotelRatingConfig } from "./google-hotel-ratings-core";
import { reserveHotelRatingBudget } from "./google-hotel-rating-budget";
import { fetchGoogleHotelRating, verifyHotelRatingTurnstile } from "./google-hotel-rating-providers";

const globalDatabase = globalThis as typeof globalThis & { hotelRatingPool?: Pool };

function database(): Pool {
  if (!process.env.DATABASE_URL) throw new Error("Database unavailable");
  return globalDatabase.hotelRatingPool ??= new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: true },
    max: 3,
    connectionTimeoutMillis: 5000,
    idleTimeoutMillis: 30000,
    query_timeout: 5000,
  });
}

function normalizedIp(value: string | null): string | null {
  if (!value || !isIP(value)) return null;
  // Canonicalize IPv6 aliases so they share an hourly counter.
  if (isIP(value) === 6) return new URL(`http://[${value}]/`).hostname.slice(1, -1);
  return value;
}

export async function handleGoogleHotelRating(request: Request): Promise<Response> {
  const config = readHotelRatingConfig(process.env);
  return handleHotelRatingRequest(request, {
    config,
    async findHotel(hotelId) {
      const result = await database().query<{ placeId: string }>(`SELECT google_place_id AS "placeId"
        FROM hotels WHERE id = $1::bigint AND city_slug = 'nyc' AND active = TRUE
          AND source = 'travel-advisor' AND source_id = ANY($2::text[])
          AND google_place_id IS NOT NULL LIMIT 1`, [hotelId, selection.sourceIds]);
      const placeId = result.rows[0]?.placeId;
      return placeId && /^[A-Za-z0-9_-]{10,256}$/.test(placeId) ? { placeId } : null;
    },
    verifyTurnstile: (token, ip) => verifyHotelRatingTurnstile(token, normalizedIp(ip), config!.turnstileSecretKey),
    reserveBudget: (ip) => {
      // HMAC makes offline IP guessing harder; no raw IP/token reaches storage.
      // A local CAPTCHA bypass may have no Turnstile secret. Its private Google
      // key still gives the development quota bucket a nonempty HMAC key.
      const hash = createHmac("sha256", config!.turnstileSecretKey || config!.googleApiKey)
        .update(`hotel-rating:${normalizedIp(ip) ?? "shared-untrusted-client"}`).digest("hex");
      return reserveHotelRatingBudget(database(), hash, {
        daily: config!.dailyLimit, monthly: config!.monthlyLimit, ipHourly: config!.ipHourlyLimit,
      });
    },
    fetchRating: (placeId) => fetchGoogleHotelRating(placeId, config!.googleApiKey),
  });
}
