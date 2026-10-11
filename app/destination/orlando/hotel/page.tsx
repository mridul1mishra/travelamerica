import { getCityHotels } from "@/app/lib/hotels";
import HotelClient from "../bookings/orlandobookingsclient";
export const dynamic = "force-dynamic";
export const metadata = { title: "Find Your Orlando Hotel", description: "Browse Orlando hotels and sign in to check current prices with the provider.", alternates: { canonical: "https://www.travelsamericas.com/destination/orlando/hotel" } };
export default async function Page() {
  const hotels = await getCityHotels("orlando");
  return <HotelClient hotels={hotels} />;
}
