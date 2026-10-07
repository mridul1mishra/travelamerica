import BookFlightsClient from "../booking/bookflightsclient";

const url = "https://www.travelsamericas.com/destination/nyc/tours-and-tickets";

export const metadata = {
  title: "NYC Tours & Attraction Tickets",
  description: "Compare bookable NYC tours, museum tickets, and attraction experiences by category and rating.",
  alternates: { canonical: url },
};

export default function ToursAndTicketsPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.travelsamericas.com/" },
      { "@type": "ListItem", position: 2, name: "New York", item: "https://www.travelsamericas.com/destination/nyc" },
      { "@type": "ListItem", position: 3, name: "Tours & Tickets", item: url },
    ],
  };

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    <BookFlightsClient category="activities" />
  </>;
}
