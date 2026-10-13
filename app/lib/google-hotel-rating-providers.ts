import type { HotelRatingValue, HotelReview } from "./google-hotel-ratings-core";

type Fetcher = (input: string, init: RequestInit) => Promise<Response>;

async function providerJson(url: string, init: RequestInit, fetcher: Fetcher, maxLength = 8192): Promise<unknown> {
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
    // Log only known Google error identifiers, never bodies, URLs or credentials.
    if (!response.ok) {
      if (url.startsWith("https://places.googleapis.com/v1/places/")) {
        const diagnostic: { httpStatus: number; reason?: string } = { httpStatus: response.status };
        try {
          const text = await response.text();
          if (text.length <= 8192) {
            const data = JSON.parse(text);
            const knownReasons = new Set([
              "API_KEY_IP_ADDRESS_BLOCKED", "API_KEY_HTTP_REFERRER_BLOCKED",
              "API_KEY_SERVICE_BLOCKED", "API_KEY_INVALID", "API_KEY_EXPIRED",
              "SERVICE_DISABLED", "BILLING_DISABLED", "CONSUMER_INVALID",
              "RATE_LIMIT_EXCEEDED", "QUOTA_EXCEEDED",
            ]);
            if (Array.isArray(data?.error?.details)) {
              const detail = data.error.details.find((item: { reason?: unknown } | null) =>
                typeof item?.reason === "string" && knownReasons.has(item.reason));
              if (detail) diagnostic.reason = detail.reason;
            }
          }
        } catch { /* An unreadable error still has a useful HTTP status. */ }
        console.error("Google hotel rating lookup failed", diagnostic);
      }
      throw new Error("Provider unavailable");
    }
    const text = await response.text();
    if (text.length > maxLength) throw new Error("Invalid provider response");
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
  includeReviews = false,
): Promise<HotelRatingValue> {
  if (!/^[A-Za-z0-9_-]{10,256}$/.test(placeId)) throw new Error("Invalid stored place");
  // Exactly one attempt, with the key in a header rather than the URL.
  const result = await providerJson(`https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`, {
    method: "GET",
    headers: { "X-Goog-Api-Key": apiKey, "X-Goog-FieldMask": includeReviews ? "rating,userRatingCount,reviews" : "rating,userRatingCount" },
  }, fetcher, includeReviews ? 131072 : 8192);
  if (!result || typeof result !== "object" || Array.isArray(result)) throw new Error("Invalid provider response");
  const data = result as Record<string, unknown>;
  const rating = data.rating ?? null;
  const reviewCount = data.userRatingCount ?? null;
  if (rating !== null && (typeof rating !== "number" || !Number.isFinite(rating) || rating < 0 || rating > 5)) throw new Error("Invalid provider response");
  if (reviewCount !== null && (typeof reviewCount !== "number" || !Number.isSafeInteger(reviewCount) || reviewCount < 0)) throw new Error("Invalid provider response");
  const value: HotelRatingValue = { rating: rating as number | null, reviewCount: reviewCount as number | null };
  if (includeReviews) {
    const safeUrl = (input: unknown): string | undefined => {
      if (typeof input !== "string") return undefined;
      try {
        const url = new URL(input);
        return url.protocol === "https:" && !url.username && !url.password
          && (url.hostname === "google.com" || url.hostname.endsWith(".google.com") || url.hostname === "maps.app.goo.gl") ? url.href : undefined;
      } catch { return undefined; }
    };
    value.reviews = (Array.isArray(data.reviews) ? data.reviews : []).slice(0, 5).flatMap((raw): HotelReview[] => {
      if (!raw || typeof raw !== "object") return [];
      const review = raw as Record<string, unknown>;
      const author = review.authorAttribution as { displayName?: unknown; uri?: unknown } | undefined;
      const original = review.originalText as { text?: unknown } | undefined;
      const translated = review.text as { text?: unknown } | undefined;
      const text = original?.text ?? translated?.text;
      if (typeof author?.displayName !== "string" || typeof text !== "string" || !text.trim()
        || typeof review.rating !== "number" || review.rating < 0 || review.rating > 5
        || typeof review.publishTime !== "string" || !Number.isFinite(Date.parse(review.publishTime))) return [];
      return [{ author: author.displayName, authorUrl: safeUrl(author.uri), rating: review.rating,
        text, date: review.publishTime, url: safeUrl(review.googleMapsUri) }];
    });
  }
  return value;
}
