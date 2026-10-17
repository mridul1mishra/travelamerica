import LasVegasBookingsClient from "../bookings/lasvegasbookingsclient";
export const metadata = { title: "Compare Flights to Las Vegas", description: "Compare Las Vegas flights and plan your airport transfer.", alternates: { canonical: "https://www.travelsamericas.com/destination/lasvegas/flight" } };
export default function Page() {
 const breadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.travelsamericas.com/" }, { "@type": "ListItem", position: 2, name: "Las Vegas", item: "https://www.travelsamericas.com/destination/lasvegas" }, { "@type": "ListItem", position: 3, name: "Compare Flights to Las Vegas", item: "https://www.travelsamericas.com/destination/lasvegas/flight" }] };
 return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} /><LasVegasBookingsClient category="flights" /></>;
}
