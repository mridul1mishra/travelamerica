import OrlandoBookingsClient from "../bookings/orlandobookingsclient";
export const metadata = { title: "Book Orlando Activities, Tours & Tickets", description: "Browse Orlando tours, attractions, and tickets.", alternates: { canonical: "https://www.travelsamericas.com/destination/orlando/tours-and-tickets" } };
export default function Page() {
 const breadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.travelsamericas.com/" }, { "@type": "ListItem", position: 2, name: "Orlando", item: "https://www.travelsamericas.com/destination/orlando" }, { "@type": "ListItem", position: 3, name: "Book Orlando Activities, Tours & Tickets", item: "https://www.travelsamericas.com/destination/orlando/tours-and-tickets" }] };
 return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} /><OrlandoBookingsClient category="activities" /></>;
}
