import { getCityHotels } from "@/app/lib/hotels";
import HotelClient from "../bookings/lasvegasbookingsclient";
export const dynamic = "force-dynamic";
export const metadata = { title: "Find Your Las Vegas Hotel", description: "Browse Las Vegas hotels and sign in to check current prices with the provider.", alternates: { canonical: "https://www.travelsamericas.com/destination/lasvegas/hotel" } };
export default async function Page() {
  const hotels = await getCityHotels("lasvegas");
  return <HotelClient hotels={hotels} />;
}
