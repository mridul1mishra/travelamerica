export const metadata = {
  title: "LA 3-Day Itinerary 2026 | Best Route for First-Timers",
  description: "The best 3-day Los Angeles itinerary — Griffith Observatory, Venice Beach, Hollywood, the Getty, and where to eat.",
  alternates: { canonical: 'https://www.travelsamericas.com/destination/la/itinerary' },
  openGraph: { title: 'Los Angeles 3-Day Itinerary 2026', description: 'Day-by-day LA itinerary built around real logistics — not an aspirational list.', url: 'https://www.travelsamericas.com/destination/la/itinerary', type: 'article' },
};
import LAItineraryClient from './laitineraryclient';

export default function LAItineraryPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.travelsamericas.com/" },
        { "@type": "ListItem", "position": 2, "name": "Los Angeles", "item": "https://www.travelsamericas.com/destination/la" },
        { "@type": "ListItem", "position": 3, "name": "3-Day Itinerary", "item": "https://www.travelsamericas.com/destination/la/itinerary" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "LA 3-Day Itinerary 2026 | Best Route for First-Timers",
      "description": "The best 3-day Los Angeles itinerary — Griffith Observatory, Venice Beach, Hollywood, the Getty, and where to eat.",
      "url": "https://www.travelsamericas.com/destination/la/itinerary",
      "inLanguage": "en-US",
      "publisher": { "@type": "Organization", "name": "Travels Americas", "url": "https://www.travelsamericas.com" },
    },
  ];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LAItineraryClient />
    </>
  );
}
