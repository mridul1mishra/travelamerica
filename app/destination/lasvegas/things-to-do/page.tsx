export const metadata = {
  title: "Things to Do in Las Vegas 2026 | Top Attractions",
  description: "Best things to do in Las Vegas — Strip attractions, world-class shows, Hoover Dam, and Fremont Street highlights.",
  alternates: { canonical: 'https://www.travelsamericas.com/destination/lasvegas/things-to-do' },
  openGraph: { title: 'Things to Do in Las Vegas 2026', description: 'Top Las Vegas attractions, shows, day trips and activities — what to prioritize and what to skip.', url: 'https://www.travelsamericas.com/destination/lasvegas/things-to-do', type: 'article' },
};
import LasVegasThingsToDoClient from './lasvegasthingstodoclient';

export default function LasVegasThingsToDoPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.travelsamericas.com/" },
        { "@type": "ListItem", "position": 2, "name": "Las Vegas", "item": "https://www.travelsamericas.com/destination/lasvegas" },
        { "@type": "ListItem", "position": 3, "name": "Things to Do", "item": "https://www.travelsamericas.com/destination/lasvegas/things-to-do" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Things to Do in Las Vegas 2026 | Top Attractions",
      "description": "Best things to do in Las Vegas — Strip attractions, world-class shows, Hoover Dam, and Fremont Street highlights.",
      "url": "https://www.travelsamericas.com/destination/lasvegas/things-to-do",
      "inLanguage": "en-US",
      "publisher": { "@type": "Organization", "name": "Travels Americas", "url": "https://www.travelsamericas.com" },
    },
  ];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LasVegasThingsToDoClient />
    </>
  );
}
