import LasVegasBookingsClient from "../bookings/lasvegasbookingsclient";
import FlightGuide from "../bookings/components/LasVegasEditorial/FlightGuide";
import { pageSchema } from "@/app/lib/authors";
export const dynamic = "force-dynamic";
export const metadata = { title: "Compare Flights to Las Vegas", description: "Compare Las Vegas flights and plan your airport transfer.", alternates: { canonical: "https://www.travelsamericas.com/destination/lasvegas/flight" } };
export default function Page() {
 const page = { "@context": "https://schema.org", ...pageSchema({ name: "Compare Flights to Las Vegas", description: "Compare Las Vegas flights and plan your airport transfer.", url: "https://www.travelsamericas.com/destination/lasvegas/flight", datePublished: "2026-11-25", dateModified: "2026-11-25" }) };
 const breadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.travelsamericas.com/" }, { "@type": "ListItem", position: 2, name: "Las Vegas", item: "https://www.travelsamericas.com/destination/lasvegas" }, { "@type": "ListItem", position: 3, name: "Compare Flights to Las Vegas", item: "https://www.travelsamericas.com/destination/lasvegas/flight" }] };
 return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(page) }} /><LasVegasBookingsClient category="flights" editorial={<FlightGuide />} /></>;
}
