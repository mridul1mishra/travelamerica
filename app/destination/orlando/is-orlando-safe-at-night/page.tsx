export const metadata = {
  title: 'Is Orlando Safe at Night? 2026 Honest Guide for Tourists',
  description: "Is Orlando safe at night? Neighborhood breakdown — where is safe after dark, what to avoid, and honest tourist tips.",
  alternates: { canonical: 'https://www.travelsamericas.com/destination/orlando/is-orlando-safe-at-night' },
  openGraph: { title: 'Is Orlando Safe at Night? 2026 Guide', description: 'Honest guide to Orlando nighttime safety — safe areas, what to avoid, and practical tips.', url: 'https://www.travelsamericas.com/destination/orlando/is-orlando-safe-at-night', type: 'website' },
};
import IsOrlandoSafeAtNightClient from './isorlandosafeatnightclient';

export default function IsOrlandoSafeAtNightPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.travelsamericas.com/" },
        { "@type": "ListItem", "position": 2, "name": "Orlando", "item": "https://www.travelsamericas.com/destination/orlando" },
        { "@type": "ListItem", "position": 3, "name": "Is Orlando Safe at Night?", "item": "https://www.travelsamericas.com/destination/orlando/is-orlando-safe-at-night" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Is Orlando Safe at Night? 2026 Honest Guide for Tourists",
      "description": "Is Orlando safe at night? Neighborhood breakdown — where is safe after dark, what to avoid, and honest tourist tips.",
      "url": "https://www.travelsamericas.com/destination/orlando/is-orlando-safe-at-night",
      "inLanguage": "en-US",
      "publisher": { "@type": "Organization", "name": "Travels Americas", "url": "https://www.travelsamericas.com" },
    },
  ];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <IsOrlandoSafeAtNightClient />
    </>
  );
}
