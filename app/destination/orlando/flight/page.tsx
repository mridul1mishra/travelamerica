import OrlandoBookingsClient from "../bookings/orlandobookingsclient";
export const metadata = { title: "Compare Flights to Orlando", description: "Compare Orlando flights and plan your airport transfer.", alternates: { canonical: "https://www.travelsamericas.com/destination/orlando/flight" } };
export default function Page() {
 const breadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.travelsamericas.com/" }, { "@type": "ListItem", position: 2, name: "Orlando", item: "https://www.travelsamericas.com/destination/orlando" }, { "@type": "ListItem", position: 3, name: "Compare Flights to Orlando", item: "https://www.travelsamericas.com/destination/orlando/flight" }] };
 return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} /><OrlandoBookingsClient category="flights" /></>;
}
