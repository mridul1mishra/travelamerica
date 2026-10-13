import { getMemberSession } from "@/app/lib/auth";
import { getHotelPriceIdentity } from "@/app/lib/hotels";
import { MEMBER_NO_STORE_HEADERS, validHotelId } from "@/app/lib/member-hotel-access";
import { memberSignInUrl } from "@/app/lib/member-access";
import { lookupHotelPrices, priceCacheKey } from "@/app/lib/serpapi-hotel-prices";
import { defaultHotelPriceStay, findHotelPriceStay } from "@/app/lib/hotel-price-stay";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;
export const maxDuration = 90;

export async function GET(request: Request, context: { params: Promise<{ hotelId: string }> }): Promise<Response> {
  const { hotelId } = await context.params;
  if (!validHotelId(hotelId)) return new Response("Hotel not found.", { status: 404 });
  const member = await getMemberSession(request.headers);
  const hotel = member ? await getHotelPriceIdentity(hotelId) : null;
  if (member && !hotel) return new Response("Hotel not found.", { status: 404, headers: MEMBER_NO_STORE_HEADERS });
  const destination = hotel ? `/destination/${hotel.city}/hotel/${hotelId}?prices=1` : memberSignInUrl(`/api/hotel-prices/${hotelId}`, "prices");
  return new Response(null, { status: 303, headers: { ...MEMBER_NO_STORE_HEADERS, Location: destination } });
}

export async function POST(request: Request, context: { params: Promise<{ hotelId: string }> }) {
  const reply = (body: unknown, status = 200) => Response.json(body, { status, headers: MEMBER_NO_STORE_HEADERS });
  if (request.headers.get("origin") !== new URL(request.url).origin) return reply({ message: "Invalid request origin." }, 403);
  const member = await getMemberSession(request.headers);
  if (!member) return reply({ message: "Sign in to check prices." }, 401);
  const { hotelId } = await context.params;
  if (!validHotelId(hotelId)) return reply({ message: "Hotel not found." }, 404);
  if (!process.env.SERPAPI_API_KEY) return reply({ message: "Hotel pricing is not configured yet." }, 503);
  const stay = defaultHotelPriceStay();
  try {
    const hotel = await getHotelPriceIdentity(hotelId);
    if (!hotel) return reply({ message: "Hotel not found." }, 404);
    const cities = { nyc: "New York City", la: "Los Angeles", orlando: "Orlando", lasvegas: "Las Vegas" };
    const query = `${hotel.name} ${hotel.address ?? cities[hotel.city]}`;
    const result = await findHotelPriceStay(stay, candidate =>
      lookupHotelPrices(priceCacheKey(hotelId, query, candidate), query, candidate, member.user.id));
    if (!result) return reply({ message: "The price lookup limit has been reached. Please try again later." }, 429);
    return reply(result);
  } catch { return reply({ message: "Pricing is temporarily unavailable. Please try again later." }, 503); }
}
