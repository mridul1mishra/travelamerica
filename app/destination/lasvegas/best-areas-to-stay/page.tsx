export const metadata = {
  title: "Best Areas in Las Vegas 2026 | Strip vs Downtown",
  description: "Where to stay in Las Vegas — Strip hotel tiers, Downtown Fremont, Henderson, and Summerlin compared for every budget.",
  alternates: { canonical: 'https://www.travelsamericas.com/destination/lasvegas/best-areas-to-stay' },
  openGraph: { title: 'Best Areas to Stay in Las Vegas 2026', description: 'Strip vs Downtown vs off-Strip — honest hotel location advice for Las Vegas.', url: 'https://www.travelsamericas.com/destination/lasvegas/best-areas-to-stay', type: 'website' },
};
import LasVegasBestAreasClient from './lasvegasbestareasstoclient';

export default function LasVegasBestAreasPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.travelsamericas.com/" },
        { "@type": "ListItem", "position": 2, "name": "Las Vegas", "item": "https://www.travelsamericas.com/destination/lasvegas" },
        { "@type": "ListItem", "position": 3, "name": "Best Areas to Stay", "item": "https://www.travelsamericas.com/destination/lasvegas/best-areas-to-stay" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Best Areas in Las Vegas 2026 | Strip vs Downtown",
      "description": "Where to stay in Las Vegas — Strip hotel tiers, Downtown Fremont, Henderson, and Summerlin compared for every budget.",
      "url": "https://www.travelsamericas.com/destination/lasvegas/best-areas-to-stay",
      "inLanguage": "en-US",
      "publisher": { "@type": "Organization", "name": "Travels Americas", "url": "https://www.travelsamericas.com" },
    },
  ];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LasVegasBestAreasClient />
    </>
  );
}
