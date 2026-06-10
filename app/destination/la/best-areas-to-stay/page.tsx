export const metadata = {
  title: 'Best Areas to Stay in Los Angeles 2026 | Neighborhoods Guide',
  description: "Where to stay in LA — honest comparison of Santa Monica, Hollywood, Silver Lake, DTLA, and more for every travel style.",
  alternates: { canonical: 'https://www.travelsamericas.com/destination/la/best-areas-to-stay' },
  openGraph: { title: 'Best Areas to Stay in Los Angeles 2026', description: 'Honest neighborhood comparison for LA — Santa Monica, Hollywood, Silver Lake, DTLA and beyond.', url: 'https://www.travelsamericas.com/destination/la/best-areas-to-stay', type: 'article' },
};
import LABestAreasClient from './labestareasstoclient';

export default function LABestAreasPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.travelsamericas.com/" },
        { "@type": "ListItem", "position": 2, "name": "Los Angeles", "item": "https://www.travelsamericas.com/destination/la" },
        { "@type": "ListItem", "position": 3, "name": "Best Areas to Stay", "item": "https://www.travelsamericas.com/destination/la/best-areas-to-stay" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Best Areas to Stay in Los Angeles 2026 | Neighborhoods Guide",
      "description": "Where to stay in LA — honest comparison of Santa Monica, Hollywood, Silver Lake, DTLA, and more for every travel style.",
      "url": "https://www.travelsamericas.com/destination/la/best-areas-to-stay",
      "inLanguage": "en-US",
      "publisher": { "@type": "Organization", "name": "Travels Americas", "url": "https://www.travelsamericas.com" },
    },
  ];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LABestAreasClient />
    </>
  );
}
