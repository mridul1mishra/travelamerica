import { NextResponse, type NextFetchEvent, type NextRequest } from "next/server";
import { recordHotelVisit, visitLogEnabled } from "@/app/lib/visit-log";

// Runs before Vercel's cache, so cached hotel pages are still counted.
// Logging happens after the response is sent and never blocks or breaks the page.
export function proxy(request: NextRequest, event: NextFetchEvent) {
  const h = request.headers;
  const prefetch = h.has("next-router-prefetch") || /prefetch/i.test(h.get("purpose") ?? "") || /prefetch/i.test(h.get("sec-purpose") ?? "");
  if (!prefetch && request.method === "GET" && visitLogEnabled()) {
    const ip = h.get("x-real-ip") || h.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    // Vercel adds approximate location headers from the visitor's IP (city is URL-encoded).
    const decode = (value: string | null) => { try { return value ? decodeURIComponent(value) : ""; } catch { return value ?? ""; } };
    const country = h.get("x-vercel-ip-country") ?? "";
    const city = decode(h.get("x-vercel-ip-city"));
    const location = [city, country].filter(Boolean).join(", ") || "unknown";
    event.waitUntil(
      recordHotelVisit(ip, request.nextUrl.pathname, h.get("user-agent") ?? "", location)
        .catch(error => console.warn("Visit log failed", error instanceof Error ? error.message : error)),
    );
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/destination/:city/hotel", "/destination/:city/hotel/:hotelId"],
};
