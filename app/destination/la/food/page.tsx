export const metadata = {
  title: 'Best Food in Los Angeles 2026 | Where to Eat & What to Order',
  description: "Where to eat in LA — the best tacos, ramen, Korean BBQ, farmers markets, and splurge restaurants across the city.",
  alternates: { canonical: 'https://www.travelsamericas.com/destination/la/food' },
  openGraph: { title: 'Best Food in Los Angeles 2026', description: 'The honest LA food guide — best tacos, ramen, Korean BBQ, markets, and where to splurge.', url: 'https://www.travelsamericas.com/destination/la/food', type: 'article' },
};
import LAFoodClient from './lafoodclient';

export default function LAFoodPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.travelsamericas.com/" },
        { "@type": "ListItem", "position": 2, "name": "Los Angeles", "item": "https://www.travelsamericas.com/destination/la" },
        { "@type": "ListItem", "position": 3, "name": "Best Food in LA", "item": "https://www.travelsamericas.com/destination/la/food" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Best Food in Los Angeles 2026 | Where to Eat & What to Order",
      "description": "Where to eat in LA — the best tacos, ramen, Korean BBQ, farmers markets, and splurge restaurants across the city.",
      "url": "https://www.travelsamericas.com/destination/la/food",
      "inLanguage": "en-US",
      "publisher": { "@type": "Organization", "name": "Travels Americas", "url": "https://www.travelsamericas.com" },
    },
  ];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LAFoodClient />
    </>
  );
}
