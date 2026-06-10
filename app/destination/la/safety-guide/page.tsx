export const metadata = {
  title: 'Is Los Angeles Safe? Honest 2026 Safety Guide for Tourists',
  description: 'Is LA safe to visit? Honest guide covering safe and unsafe neighborhoods, common scams, driving tips, and what tourists actually need to know in 2026.',
  alternates: { canonical: 'https://www.travelsamericas.com/destination/la/safety-guide' },
  openGraph: { title: 'Los Angeles Safety Guide 2026', description: 'Honest tourist safety guide for LA — which neighborhoods to avoid, common scams, and practical tips.', url: 'https://www.travelsamericas.com/destination/la/safety-guide', type: 'article' },
};
import LASafetyClient from './lasafetyclient';

export default function LASafetyPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.travelsamericas.com/" },
        { "@type": "ListItem", "position": 2, "name": "Los Angeles", "item": "https://www.travelsamericas.com/destination/la" },
        { "@type": "ListItem", "position": 3, "name": "Safety Guide", "item": "https://www.travelsamericas.com/destination/la/safety-guide" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Is Los Angeles Safe? Honest 2026 Safety Guide for Tourists",
      "description": "Is LA safe to visit? Honest guide covering safe and unsafe neighborhoods, common scams, driving tips, and what tourists actually need to know in 2026.",
      "url": "https://www.travelsamericas.com/destination/la/safety-guide",
      "inLanguage": "en-US",
      "publisher": { "@type": "Organization", "name": "Travels Americas", "url": "https://www.travelsamericas.com" },
    },
  ];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LASafetyClient />
    </>
  );
}
