export const metadata = {
  title: "Is the LA Metro Safe? 2026 Guide for Tourists",
  description: "Is the LA Metro safe? Honest 2026 guide covering which lines and times are safe, what to watch for, and practical tips.",
  alternates: { canonical: 'https://www.travelsamericas.com/destination/la/metro-safety-guide' },
  openGraph: { title: 'LA Metro Safety Guide 2026', description: 'Is the LA Metro safe? Honest guide for tourists — which lines, which times, and what to watch for.', url: 'https://www.travelsamericas.com/destination/la/metro-safety-guide', type: 'website' },
};
import LAMetroSafetyClient from './lametrosafetyclient';

export default function LAMetroSafetyPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.travelsamericas.com/" },
        { "@type": "ListItem", "position": 2, "name": "Los Angeles", "item": "https://www.travelsamericas.com/destination/la" },
        { "@type": "ListItem", "position": 3, "name": "Metro Safety Guide", "item": "https://www.travelsamericas.com/destination/la/metro-safety-guide" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Is the LA Metro Safe? 2026 Guide for Tourists",
      "description": "Is the LA Metro safe? Honest 2026 guide covering which lines and times are safe, what to watch for, and practical tips.",
      "url": "https://www.travelsamericas.com/destination/la/metro-safety-guide",
      "inLanguage": "en-US",
      "publisher": { "@type": "Organization", "name": "Travels Americas", "url": "https://www.travelsamericas.com" },
    },
  ];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LAMetroSafetyClient />
    </>
  );
}
