import { memberSignInUrl } from "./member-access";

export const MEMBER_NO_STORE_HEADERS = {
  "Cache-Control": "private, no-store, max-age=0",
  "CDN-Cache-Control": "no-store",
  "Vercel-CDN-Cache-Control": "no-store",
  "X-Content-Type-Options": "nosniff",
};

type MemberReader = (headers: Headers) => Promise<unknown | null>;

export async function handleMemberHotelRating(request: Request, dependencies: {
  getMember: MemberReader;
  lookup: (request: Request) => Promise<Response>;
}): Promise<Response> {
  let member: unknown;
  try { member = await dependencies.getMember(request.headers); } catch { member = null; }
  if (!member) return Response.json({ code: "auth_required", message: "Sign in to view hotel ratings." }, {
    status: 401, headers: MEMBER_NO_STORE_HEADERS,
  });
  return dependencies.lookup(request);
}

export function validHotelId(value: string): boolean {
  return /^[1-9]\d{0,18}$/.test(value) && BigInt(value) <= BigInt("9223372036854775807");
}

export function safeHotelBookingUrl(value: string): string | null {
  if (/[\u0000-\u0020\u007f]/.test(value)) return null;
  try {
    const url = new URL(value);
    if (url.protocol !== "https:" || url.username || url.password || !url.hostname) return null;
    return url.href;
  } catch { return null; }
}

export async function handleMemberHotelPrices(request: Request, hotelId: string, dependencies: {
  getMember: MemberReader;
  findBookingUrl: (hotelId: string) => Promise<string | null>;
}): Promise<Response> {
  if (!validHotelId(hotelId)) return new Response("Hotel not found.", { status: 404, headers: MEMBER_NO_STORE_HEADERS });
  let member: unknown;
  try { member = await dependencies.getMember(request.headers); } catch { member = null; }
  if (!member) return new Response(null, {
    status: 303, headers: { ...MEMBER_NO_STORE_HEADERS, Location: memberSignInUrl(`/api/hotel-prices/${hotelId}`, "prices") },
  });
  let bookingUrl: string | null;
  try { bookingUrl = await dependencies.findBookingUrl(hotelId); } catch {
    return new Response("Hotel prices are temporarily unavailable.", { status: 503, headers: MEMBER_NO_STORE_HEADERS });
  }
  const destination = bookingUrl && safeHotelBookingUrl(bookingUrl);
  if (!destination) return new Response("Hotel prices are unavailable.", { status: 404, headers: MEMBER_NO_STORE_HEADERS });
  return new Response(null, { status: 307, headers: { ...MEMBER_NO_STORE_HEADERS, Location: destination } });
}
