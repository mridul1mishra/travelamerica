export const metadata = {
  title: "Las Vegas Landmarks 2026 | Iconic Sights & Tips",
  description: "The most iconic Las Vegas landmarks — Bellagio Fountains, High Roller, Fremont Street, Neon Museum, and what's worth it.",
  alternates: { canonical: 'https://www.travelsamericas.com/destination/lasvegas/landmark' },
  openGraph: { title: 'Las Vegas Landmarks 2026', description: 'Las Vegas\'s most iconic landmarks — what to expect and the honest cost breakdown.', url: 'https://www.travelsamericas.com/destination/lasvegas/landmark', type: 'website' },
};
import LasVegasLandmarkClient from './lasvegaslandmarkclient';

export default function LasVegasLandmarkPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.travelsamericas.com/" },
        { "@type": "ListItem", "position": 2, "name": "Las Vegas", "item": "https://www.travelsamericas.com/destination/lasvegas" },
        { "@type": "ListItem", "position": 3, "name": "Landmarks", "item": "https://www.travelsamericas.com/destination/lasvegas/landmark" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Las Vegas Landmarks 2026 | Iconic Sights & Tips",
      "description": "The most iconic Las Vegas landmarks — Bellagio Fountains, High Roller, Fremont Street, Neon Museum, and what's worth it.",
      "url": "https://www.travelsamericas.com/destination/lasvegas/landmark",
      "inLanguage": "en-US",
      "publisher": { "@type": "Organization", "name": "Travels Americas", "url": "https://www.travelsamericas.com" },
    },
  ];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LasVegasLandmarkClient />
    </>
  );
}
