export const metadata = {
  title: 'Los Angeles Landmarks 2026 | Iconic Sights & Honest Tips',
  description: "The most iconic Los Angeles landmarks — Hollywood Sign, Griffith Observatory, Santa Monica Pier, Getty, and honest tips.",
  alternates: { canonical: 'https://www.travelsamericas.com/destination/la/landmark' },
  openGraph: { title: 'Los Angeles Landmarks 2026', description: 'LA\'s most iconic landmarks — what to expect and how to visit each one properly.', url: 'https://www.travelsamericas.com/destination/la/landmark', type: 'website' },
};
import LALandmarkClient from './lalandmarkclient';

export default function LALandmarkPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.travelsamericas.com/" },
        { "@type": "ListItem", "position": 2, "name": "Los Angeles", "item": "https://www.travelsamericas.com/destination/la" },
        { "@type": "ListItem", "position": 3, "name": "Landmarks", "item": "https://www.travelsamericas.com/destination/la/landmark" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Los Angeles Landmarks 2026 | Iconic Sights & Honest Tips",
      "description": "The most iconic Los Angeles landmarks — Hollywood Sign, Griffith Observatory, Santa Monica Pier, Getty, and honest tips.",
      "url": "https://www.travelsamericas.com/destination/la/landmark",
      "inLanguage": "en-US",
      "publisher": { "@type": "Organization", "name": "Travels Americas", "url": "https://www.travelsamericas.com" },
    },
  ];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LALandmarkClient />
    </>
  );
}
