export const metadata = {
  title: 'Things to Do in Los Angeles 2026 | Top Attractions & Beaches',
  description: "Best things to do in Los Angeles — from Hollywood and Venice Beach to Griffith Observatory, museums, and food markets.",
  alternates: { canonical: 'https://www.travelsamericas.com/destination/la/things-to-do' },
  openGraph: { title: 'Things to Do in Los Angeles 2026', description: 'Top LA attractions, beaches, day trips and activities — what to prioritize and what to skip.', url: 'https://www.travelsamericas.com/destination/la/things-to-do', type: 'website' },
};
import LAThingsToDoClient from './lathingstodoclient';

export default function LAThingsToDoPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.travelsamericas.com/" },
        { "@type": "ListItem", "position": 2, "name": "Los Angeles", "item": "https://www.travelsamericas.com/destination/la" },
        { "@type": "ListItem", "position": 3, "name": "Things to Do", "item": "https://www.travelsamericas.com/destination/la/things-to-do" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Things to Do in Los Angeles 2026 | Top Attractions & Beaches",
      "description": "Best things to do in Los Angeles — from Hollywood and Venice Beach to Griffith Observatory, museums, and food markets.",
      "url": "https://www.travelsamericas.com/destination/la/things-to-do",
      "inLanguage": "en-US",
      "publisher": { "@type": "Organization", "name": "Travels Americas", "url": "https://www.travelsamericas.com" },
    },
  ];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LAThingsToDoClient />
    </>
  );
}
