import { getCityHotels } from "@/app/lib/hotels";
import HotelClient from "../bookings/labookingsclient";
export const dynamic = "force-dynamic";
export const metadata = { title: "Find Your Los Angeles Hotel", description: "Browse Los Angeles hotels and sign in to check current prices with the provider.", alternates: { canonical: "https://www.travelsamericas.com/destination/la/hotel" } };
export default async function Page() {
  const hotels = await getCityHotels("la");
  return <HotelClient hotels={hotels} />;
}
