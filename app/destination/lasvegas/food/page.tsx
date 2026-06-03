export const metadata = {
  title: "Best Food in Las Vegas 2026 | On & Off the Strip",
  description: "Where to eat in Las Vegas — celebrity chef restaurants, cheap eats, best buffets, and the spots locals actually go.",
  alternates: { canonical: 'https://www.travelsamericas.com/destination/lasvegas/food' },
  openGraph: { title: 'Best Food in Las Vegas 2026', description: 'Honest Las Vegas food guide — celebrity restaurants, best buffets, cheap eats and where to splurge.', url: 'https://www.travelsamericas.com/destination/lasvegas/food', type: 'website' },
};
import LasVegasFoodClient from './lasvegasfoodclient';

export default function LasVegasFoodPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.travelsamericas.com/" },
        { "@type": "ListItem", "position": 2, "name": "Las Vegas", "item": "https://www.travelsamericas.com/destination/lasvegas" },
        { "@type": "ListItem", "position": 3, "name": "Best Food in Las Vegas", "item": "https://www.travelsamericas.com/destination/lasvegas/food" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Best Food in Las Vegas 2026 | On & Off the Strip",
      "description": "Where to eat in Las Vegas — celebrity chef restaurants, cheap eats, best buffets, and the spots locals actually go.",
      "url": "https://www.travelsamericas.com/destination/lasvegas/food",
      "inLanguage": "en-US",
      "publisher": { "@type": "Organization", "name": "Travels Americas", "url": "https://www.travelsamericas.com" },
    },
  ];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LasVegasFoodClient />
    </>
  );
}
