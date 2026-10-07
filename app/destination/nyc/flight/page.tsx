import BookFlightsClient from "../booking/bookflightsclient";
export const metadata = { title: "Compare Flights to New York City", description: "Compare NYC flights and plan your airport transfer.", alternates: { canonical: "https://www.travelsamericas.com/destination/nyc/flight" } };
export default function Page() {
 const breadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.travelsamericas.com/" }, { "@type": "ListItem", position: 2, name: "New York", item: "https://www.travelsamericas.com/destination/nyc" }, { "@type": "ListItem", position: 3, name: "Compare Flights to New York City", item: "https://www.travelsamericas.com/destination/nyc/flight" }] };
 return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} /><BookFlightsClient category="flights" /></>;
}
