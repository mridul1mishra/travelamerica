import { getNycHotels } from "@/app/lib/hotels";
export const dynamic = "force-dynamic";
import BookFlightsClient from "../booking/bookflightsclient";
export const metadata = { title: "Find Your New York City Hotel", description: "Compare NYC hotels by price, rating, and neighborhood.", alternates: { canonical: "https://www.travelsamericas.com/destination/nyc/hotel" } };
export default async function Page() {
 const hotels = await getNycHotels();
 const breadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.travelsamericas.com/" }, { "@type": "ListItem", position: 2, name: "New York", item: "https://www.travelsamericas.com/destination/nyc" }, { "@type": "ListItem", position: 3, name: "Find Your New York City Hotel", item: "https://www.travelsamericas.com/destination/nyc/hotel" }] };
 return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} /><BookFlightsClient category="hotels" hotels={hotels} /></>;
}
