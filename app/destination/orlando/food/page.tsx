export const metadata = {
  title: "Best Food in Orlando 2026 | Beyond Theme Parks",
  description: "Where to eat in Orlando — best restaurants on Restaurant Row, local food markets, and theme park dining worth trying.",
  alternates: { canonical: 'https://www.travelsamericas.com/destination/orlando/food' },
  openGraph: { title: 'Best Food in Orlando 2026', description: 'Honest Orlando food guide — Restaurant Row, local markets, theme park dining, and where to splurge.', url: 'https://www.travelsamericas.com/destination/orlando/food', type: 'article' },
};
import OrlandoFoodClient from './orlandofoodclient';

export default function OrlandoFoodPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.travelsamericas.com/" },
        { "@type": "ListItem", "position": 2, "name": "Orlando", "item": "https://www.travelsamericas.com/destination/orlando" },
        { "@type": "ListItem", "position": 3, "name": "Best Food in Orlando", "item": "https://www.travelsamericas.com/destination/orlando/food" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Best Food in Orlando 2026 | Beyond Theme Parks",
      "description": "Where to eat in Orlando — best restaurants on Restaurant Row, local food markets, and theme park dining worth trying.",
      "url": "https://www.travelsamericas.com/destination/orlando/food",
      "inLanguage": "en-US",
      "publisher": { "@type": "Organization", "name": "Travels Americas", "url": "https://www.travelsamericas.com" },
    },
  ];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <OrlandoFoodClient />
    </>
  );
}
