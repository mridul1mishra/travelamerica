import { getCityHotels } from "@/app/lib/hotels";
import HotelClient from "../bookings/lasvegasbookingsclient";
import HotelGuide from "../bookings/components/LasVegasEditorial/HotelGuide";
import { pageSchema } from "@/app/lib/authors";
// Hotel data is cached in app/lib/hotels.ts; regenerate the page at most once a day.
export const revalidate = 86400;
export const metadata = { title: "Find Your Las Vegas Hotel", description: "Browse Las Vegas hotels and sign in to check current prices with the provider.", alternates: { canonical: "https://www.travelsamericas.com/destination/lasvegas/hotel" } };
export default async function Page() {
  const hotels = await getCityHotels("lasvegas");
  const page = { "@context": "https://schema.org", ...pageSchema({ name: "Find Your Las Vegas Hotel", description: "Browse Las Vegas hotels by area and plan the real cost of your stay.", url: "https://www.travelsamericas.com/destination/lasvegas/hotel", datePublished: "2026-11-25", dateModified: "2026-11-25" }) };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(page) }} /><HotelClient hotels={hotels} editorial={<HotelGuide />} /></>;
}
