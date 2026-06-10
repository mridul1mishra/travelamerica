export const metadata = {
  title: 'Is Las Vegas Safe at Night? 2026 Honest Guide for Tourists',
  description: 'Is Las Vegas safe at night? Honest breakdown of the Strip, Downtown, and off-Strip areas after dark — what is safe, what to avoid, and practical tips.',
  alternates: { canonical: 'https://www.travelsamericas.com/destination/lasvegas/is-lasvegas-safe-at-night' },
  openGraph: { title: 'Is Las Vegas Safe at Night? 2026 Guide', description: 'Honest guide to Las Vegas nighttime safety — what\'s safe, what to avoid, and practical tips.', url: 'https://www.travelsamericas.com/destination/lasvegas/is-lasvegas-safe-at-night', type: 'article' },
};
import IsLasVegasSafeAtNightClient from './islasvegassafeatnightclient';

export default function IsLasVegasSafeAtNightPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.travelsamericas.com/" },
        { "@type": "ListItem", "position": 2, "name": "Las Vegas", "item": "https://www.travelsamericas.com/destination/lasvegas" },
        { "@type": "ListItem", "position": 3, "name": "Is Las Vegas Safe at Night?", "item": "https://www.travelsamericas.com/destination/lasvegas/is-lasvegas-safe-at-night" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Is Las Vegas Safe at Night? 2026 Honest Guide for Tourists",
      "description": "Is Las Vegas safe at night? Honest breakdown of the Strip, Downtown, and off-Strip areas after dark — what is safe, what to avoid, and practical tips.",
      "url": "https://www.travelsamericas.com/destination/lasvegas/is-lasvegas-safe-at-night",
      "inLanguage": "en-US",
      "publisher": { "@type": "Organization", "name": "Travels Americas", "url": "https://www.travelsamericas.com" },
    },
  ];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <IsLasVegasSafeAtNightClient />
    </>
  );
}
