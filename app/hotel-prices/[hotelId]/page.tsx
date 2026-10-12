import { redirect, notFound } from "next/navigation";
import { validHotelId } from "@/app/lib/member-hotel-access";

export const dynamic = "force-dynamic";
export const metadata = { title: "Check hotel prices", robots: { index: false, follow: false } };

export default async function HotelPricesPage({ params }: { params: Promise<{ hotelId: string }> }) {
  const { hotelId } = await params;
  if (!validHotelId(hotelId)) notFound();
  redirect(`/api/hotel-prices/${hotelId}`);
}
