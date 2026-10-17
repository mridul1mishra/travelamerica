import LABookingsClient from "../bookings/labookingsclient";
export const metadata = { title: "Compare Flights to Los Angeles", description: "Compare Los Angeles flights and plan your airport transfer.", alternates: { canonical: "https://www.travelsamericas.com/destination/la/flight" } };
export default function Page() {
 const breadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.travelsamericas.com/" }, { "@type": "ListItem", position: 2, name: "Los Angeles", item: "https://www.travelsamericas.com/destination/la" }, { "@type": "ListItem", position: 3, name: "Compare Flights to Los Angeles", item: "https://www.travelsamericas.com/destination/la/flight" }] };
 return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} /><LABookingsClient category="flights" /></>;
}
