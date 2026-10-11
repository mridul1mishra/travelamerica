import { getMemberSession } from "@/app/lib/auth";
import { getNycHotelBookingUrl } from "@/app/lib/hotels";
import { handleMemberHotelPrices } from "@/app/lib/member-hotel-access";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET(request: Request, context: { params: Promise<{ hotelId: string }> }): Promise<Response> {
  const { hotelId } = await context.params;
  return handleMemberHotelPrices(request, hotelId, {
    getMember: getMemberSession,
    findBookingUrl: getNycHotelBookingUrl,
  });
}
