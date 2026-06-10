export const metadata = {
  title: 'Is LA Safe at Night? 2026 Honest Guide for Tourists',
  description: "Is LA safe at night? Neighborhood-by-neighborhood breakdown — where is safe after dark, what to avoid, and honest tips.",
  alternates: { canonical: 'https://www.travelsamericas.com/destination/la/is-la-safe-at-night' },
  openGraph: { title: 'Is LA Safe at Night? 2026 Guide', description: 'Honest guide to LA nighttime safety — where is safe, what to avoid, and practical tips.', url: 'https://www.travelsamericas.com/destination/la/is-la-safe-at-night', type: 'article' },
};
import IsLASafeAtNightClient from './isLAsafeatnightclient';

export default function IsLASafeAtNightPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.travelsamericas.com/" },
        { "@type": "ListItem", "position": 2, "name": "Los Angeles", "item": "https://www.travelsamericas.com/destination/la" },
        { "@type": "ListItem", "position": 3, "name": "Is LA Safe at Night?", "item": "https://www.travelsamericas.com/destination/la/is-la-safe-at-night" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Is LA Safe at Night? 2026 Honest Guide for Tourists",
      "description": "Is LA safe at night? Neighborhood-by-neighborhood breakdown — where is safe after dark, what to avoid, and honest tips.",
      "url": "https://www.travelsamericas.com/destination/la/is-la-safe-at-night",
      "inLanguage": "en-US",
      "publisher": { "@type": "Organization", "name": "Travels Americas", "url": "https://www.travelsamericas.com" },
    },
  ];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <IsLASafeAtNightClient />
    </>
  );
}
