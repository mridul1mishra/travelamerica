export const metadata = {
  title: 'Las Vegas 3-Day Itinerary 2026 | What to Do Each Day',
  description: "A practical 3-day Las Vegas itinerary — Strip walk, shows, Hoover Dam day trip, Fremont Street, and where to eat.",
  alternates: { canonical: 'https://www.travelsamericas.com/destination/lasvegas/itinerary' },
  openGraph: { title: 'Las Vegas 3-Day Itinerary 2026', description: 'Day-by-day plan for Las Vegas — what to do, when, and how to book.', url: 'https://www.travelsamericas.com/destination/lasvegas/itinerary', type: 'article' },
};
import LasVegasItineraryClient from './lasvegasitineraryclient';

export default function LasVegasItineraryPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.travelsamericas.com/" },
        { "@type": "ListItem", "position": 2, "name": "Las Vegas", "item": "https://www.travelsamericas.com/destination/lasvegas" },
        { "@type": "ListItem", "position": 3, "name": "3-Day Itinerary", "item": "https://www.travelsamericas.com/destination/lasvegas/itinerary" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Las Vegas 3-Day Itinerary 2026 | What to Do Each Day",
      "description": "A practical 3-day Las Vegas itinerary — Strip walk, shows, Hoover Dam day trip, Fremont Street, and where to eat.",
      "url": "https://www.travelsamericas.com/destination/lasvegas/itinerary",
      "inLanguage": "en-US",
      "publisher": { "@type": "Organization", "name": "Travels Americas", "url": "https://www.travelsamericas.com" },
    },
  ];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LasVegasItineraryClient />
    </>
  );
}
