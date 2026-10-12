import { headers } from "next/headers";
import { redirect, notFound } from "next/navigation";
import { getMemberSession } from "@/app/lib/auth";
import { getHotelPriceIdentity } from "@/app/lib/hotels";
import { validHotelId } from "@/app/lib/member-hotel-access";
import { memberSignInUrl } from "@/app/lib/member-access";
import HotelPriceSearch from "@/app/components/hotels/HotelPriceSearch";

export const dynamic = "force-dynamic";
export const metadata = { title: "Check hotel prices", robots: { index: false, follow: false } };

export default async function HotelPricesPage({ params }: { params: Promise<{ hotelId: string }> }) {
  const { hotelId } = await params;
  if (!validHotelId(hotelId)) notFound();
  if (!await getMemberSession(await headers())) redirect(memberSignInUrl(`/api/hotel-prices/${hotelId}`, "prices"));
  const hotel = await getHotelPriceIdentity(hotelId);
  if (!hotel) notFound();
  return <HotelPriceSearch hotelId={hotelId} hotelName={hotel.name} city={hotel.city} />;
}
