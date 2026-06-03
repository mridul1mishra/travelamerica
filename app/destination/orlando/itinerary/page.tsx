export const metadata = {
  title: "Orlando 5-Day Itinerary 2026 | Parks & Day Trips",
  description: "A practical 5-day Orlando itinerary covering Magic Kingdom, Universal, EPCOT, Hollywood Studios, and Kennedy Space Center.",
  alternates: { canonical: 'https://www.travelsamericas.com/destination/orlando/itinerary' },
  openGraph: { title: 'Orlando 5-Day Itinerary 2026', description: 'Day-by-day Orlando plan — theme parks, space center, and how to pace it.', url: 'https://www.travelsamericas.com/destination/orlando/itinerary', type: 'website' },
};
import OrlandoItineraryClient from './orlandoitineraryclient';

export default function OrlandoItineraryPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.travelsamericas.com/" },
        { "@type": "ListItem", "position": 2, "name": "Orlando", "item": "https://www.travelsamericas.com/destination/orlando" },
        { "@type": "ListItem", "position": 3, "name": "5-Day Itinerary", "item": "https://www.travelsamericas.com/destination/orlando/itinerary" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Orlando 5-Day Itinerary 2026 | Parks & Day Trips",
      "description": "A practical 5-day Orlando itinerary covering Magic Kingdom, Universal, EPCOT, Hollywood Studios, and Kennedy Space Center.",
      "url": "https://www.travelsamericas.com/destination/orlando/itinerary",
      "inLanguage": "en-US",
      "publisher": { "@type": "Organization", "name": "Travels Americas", "url": "https://www.travelsamericas.com" },
    },
  ];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <OrlandoItineraryClient />
    </>
  );
}
