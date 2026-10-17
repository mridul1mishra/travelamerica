import LasVegasBookingsClient from "../bookings/lasvegasbookingsclient";
export const metadata = { title: "Book Las Vegas Activities, Tours & Tickets", description: "Browse Las Vegas tours, attractions, and tickets.", alternates: { canonical: "https://www.travelsamericas.com/destination/lasvegas/tours-and-tickets" } };
export default function Page() {
 const breadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.travelsamericas.com/" }, { "@type": "ListItem", position: 2, name: "Las Vegas", item: "https://www.travelsamericas.com/destination/lasvegas" }, { "@type": "ListItem", position: 3, name: "Book Las Vegas Activities, Tours & Tickets", item: "https://www.travelsamericas.com/destination/lasvegas/tours-and-tickets" }] };
 return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} /><LasVegasBookingsClient category="activities" /></>;
}
