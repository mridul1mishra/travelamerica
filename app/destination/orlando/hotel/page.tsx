import { getCityHotels } from "@/app/lib/hotels";
import HotelClient from "../bookings/orlandobookingsclient";
// Hotel data is cached in app/lib/hotels.ts; regenerate the page at most once a day.
export const revalidate = 86400;
export const metadata = { robots: { index: false, follow: true }, title: "Find Your Orlando Hotel", description: "Browse Orlando hotels and sign in to check current prices with the provider.", alternates: { canonical: "https://www.travelsamericas.com/destination/orlando/hotel" } };
export default async function Page() {
  const hotels = await getCityHotels("orlando");
  return <HotelClient hotels={hotels} />;
}
