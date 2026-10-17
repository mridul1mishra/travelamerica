import LABookingsClient from "../bookings/labookingsclient";
export const metadata = { title: "Book LA Activities, Tours & Tickets", description: "Browse Los Angeles tours, attractions, and tickets.", alternates: { canonical: "https://www.travelsamericas.com/destination/la/tours-and-tickets" } };
export default function Page() {
 const breadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.travelsamericas.com/" }, { "@type": "ListItem", position: 2, name: "Los Angeles", item: "https://www.travelsamericas.com/destination/la" }, { "@type": "ListItem", position: 3, name: "Book LA Activities, Tours & Tickets", item: "https://www.travelsamericas.com/destination/la/tours-and-tickets" }] };
 return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} /><LABookingsClient category="activities" /></>;
}
