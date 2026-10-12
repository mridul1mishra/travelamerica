import { getCityHotels } from "@/app/lib/hotels";
import HotelClient from "../bookings/labookingsclient";
export const dynamic = "force-dynamic";
export const metadata = { title: "Los Angeles Hotels by Neighborhood | Travels Americas", description: "Compare LA hotels by neighborhood and your travel plans, from Hollywood shows to Downtown events and Venice stays. Sign in to check current prices.", alternates: { canonical: "https://www.travelsamericas.com/destination/la/hotel" } };
export default async function Page() {
  const hotels = await getCityHotels("la");
  const breadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.travelsamericas.com/" },
    { "@type": "ListItem", position: 2, name: "Los Angeles", item: "https://www.travelsamericas.com/destination/la" },
    { "@type": "ListItem", position: 3, name: "Find Your Los Angeles Hotel", item: "https://www.travelsamericas.com/destination/la/hotel" },
  ] };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} /><HotelClient hotels={hotels} /></>;
}
