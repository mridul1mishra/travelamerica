import type { HotelRatingValue } from "./google-hotel-ratings-core";

type Fetcher = (input: string, init: RequestInit) => Promise<Response>;

async function providerJson(url: string, init: RequestInit, fetcher: Fetcher): Promise<unknown> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 7000);
  try {
    const response = await fetcher(url, {
      ...init,
      cache: "no-store",
      credentials: "omit",
      redirect: "error",
      signal: controller.signal,
    });
    // Do not include upstream bodies, URLs or credentials in errors/logs.
    if (!response.ok) throw new Error("Provider unavailable");
    const text = await response.text();
    if (text.length > 8192) throw new Error("Invalid provider response");
    return JSON.parse(text);
  } finally {
    clearTimeout(timeout);
  }
}

export async function verifyHotelRatingTurnstile(
  token: string,
  ip: string | null,
  secret: string,
  fetcher: Fetcher = fetch,
): Promise<unknown> {
  const body = new URLSearchParams({ secret, response: token });
  if (ip) body.set("remoteip", ip);
  // A fresh Siteverify call consumes the single-use token; never cache results.
  return providerJson("https://challenges.cloudflare.com/turnstile/v0/siteverify", { method: "POST", body }, fetcher);
}

export async function fetchGoogleHotelRating(
  placeId: string,
  apiKey: string,
  fetcher: Fetcher = fetch,
): Promise<HotelRatingValue> {
  if (!/^[A-Za-z0-9_-]{10,256}$/.test(placeId)) throw new Error("Invalid stored place");
  // Exactly one attempt, with the key in a header rather than the URL.
  const result = await providerJson(`https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`, {
    method: "GET",
    headers: { "X-Goog-Api-Key": apiKey, "X-Goog-FieldMask": "rating,userRatingCount" },
  }, fetcher);
  if (!result || typeof result !== "object" || Array.isArray(result)) throw new Error("Invalid provider response");
  const data = result as Record<string, unknown>;
  const rating = data.rating ?? null;
  const reviewCount = data.userRatingCount ?? null;
  if (rating !== null && (typeof rating !== "number" || !Number.isFinite(rating) || rating < 0 || rating > 5)) throw new Error("Invalid provider response");
  if (reviewCount !== null && (typeof reviewCount !== "number" || !Number.isSafeInteger(reviewCount) || reviewCount < 0)) throw new Error("Invalid provider response");
  return { rating: rating as number | null, reviewCount: reviewCount as number | null };
}
