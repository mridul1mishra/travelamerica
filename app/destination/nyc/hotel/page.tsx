import { getNycHotels } from "@/app/lib/hotels";
export const dynamic = "force-dynamic";
import BookFlightsClient from "../booking/bookflightsclient";
import HotelGuide from "../booking/components/NycEditorial/HotelGuide";
import { pageSchema } from "@/app/lib/authors";
export const metadata = { title: "Find Your New York City Hotel", description: "Browse NYC hotels by tier and neighborhood. Sign in to view Google ratings and check current prices with the provider.", alternates: { canonical: "https://www.travelsamericas.com/destination/nyc/hotel" } };
export default async function Page() {
 const hotels = await getNycHotels();
 const page = { "@context": "https://schema.org", ...pageSchema({ name: "Find Your New York City Hotel", description: "Browse NYC hotels by tier and neighborhood, with guidance on choosing an area and what to check before you book.", url: "https://www.travelsamericas.com/destination/nyc/hotel", datePublished: "2026-10-06", dateModified: "2026-11-24" }) };
 const breadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.travelsamericas.com/" }, { "@type": "ListItem", position: 2, name: "New York", item: "https://www.travelsamericas.com/destination/nyc" }, { "@type": "ListItem", position: 3, name: "Find Your New York City Hotel", item: "https://www.travelsamericas.com/destination/nyc/hotel" }] };
 return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(page) }} /><BookFlightsClient category="hotels" hotels={hotels} editorial={<HotelGuide />} /></>;
}
