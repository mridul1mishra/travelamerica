import type { HotelRatingValue, HotelReview, HotelPhoto } from "./google-hotel-ratings-core";

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

// A gallery costs at most one Details request plus three Photo requests.
// The caller reserves all four attempts atomically before entering this helper.
export async function fetchGoogleHotelPhotos(placeId: string, apiKey: string, fetcher: Fetcher = fetch): Promise<HotelRatingValue> {
  if (!/^[A-Za-z0-9_-]{10,256}$/.test(placeId)) throw new Error("Invalid stored place");
  const details = await providerJson(`https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`, {
    method: "GET", headers: { "X-Goog-Api-Key": apiKey, "X-Goog-FieldMask": "photos" },
  }, fetcher, 131072) as { photos?: unknown[] } | null;
  if (!details || typeof details !== "object" || Array.isArray(details)
    || (details.photos !== undefined && !Array.isArray(details.photos))) throw new Error("Invalid provider response");
  const photos: HotelPhoto[] = [];
  const usedNames = new Set<string>();
  for (const raw of (details.photos ?? []).slice(0, 3)) {
    if (!raw || typeof raw !== "object") continue;
    const photo = raw as { name?: unknown; authorAttributions?: unknown };
    const prefix = `places/${placeId}/photos/`;
    if (typeof photo.name !== "string" || !photo.name.startsWith(prefix)
      || !/^[A-Za-z0-9_-]{1,4096}$/.test(photo.name.slice(prefix.length)) || usedNames.has(photo.name)) continue;
    usedNames.add(photo.name);
    // Fail closed if the provider's required photographer attribution is malformed.
    if (!Array.isArray(photo.authorAttributions)) continue;
    const authors: HotelPhoto["authors"] = [];
    let validAttribution = true;
    for (const rawAuthor of photo.authorAttributions) {
      if (!rawAuthor || typeof rawAuthor !== "object") { validAttribution = false; break; }
      const author = rawAuthor as { displayName?: unknown; uri?: unknown };
      if (typeof author.displayName !== "string" || !author.displayName.trim()) { validAttribution = false; break; }
      let url: string | undefined;
      if (typeof author.uri === "string") {
        try {
          const link = new URL(author.uri, "https://maps.google.com");
          if (link.protocol === "https:" && !link.username && !link.password
            && (link.hostname === "google.com" || link.hostname.endsWith(".google.com"))) url = link.href;
        } catch { /* Display the name even when the profile link is invalid. */ }
      }
      authors.push({ name: author.displayName, ...(url ? { url } : {}) });
    }
    if (!validAttribution) continue;
    try {
      const media = await providerJson(`https://places.googleapis.com/v1/${photo.name}/media?maxWidthPx=1200&skipHttpRedirect=true`, {
        method: "GET", headers: { "X-Goog-Api-Key": apiKey },
      }, fetcher) as { photoUri?: unknown } | null;
      if (typeof media?.photoUri !== "string") continue;
      const url = new URL(media.photoUri);
      if (url.protocol !== "https:" || url.username || url.password
        || !(url.hostname === "googleusercontent.com" || url.hostname.endsWith(".googleusercontent.com"))) continue;
      photos.push({ url: url.href, authors });
    } catch { /* Keep successful photos; never retry failed photo requests. */ }
  }
  return { rating: null, reviewCount: null, photos };
}
