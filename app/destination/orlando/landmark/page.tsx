export const metadata = {
  title: "Orlando Landmarks 2026 | Beyond the Theme Parks",
  description: "Orlando's most iconic landmarks — Walt Disney World, Universal Studios, Kennedy Space Center, ICON Park, Wekiva Springs and more. What to expect and honest costs.",
  alternates: { canonical: 'https://www.travelsamericas.com/destination/orlando/landmark' },
  openGraph: { title: 'Orlando Landmarks 2026', description: "Orlando's most iconic attractions — what to expect at each and the honest cost breakdown.", url: 'https://www.travelsamericas.com/destination/orlando/landmark', type: 'website' },
};
import OrlandoLandmarkClient from './orlandolandmarkclient';

export default function OrlandoLandmarkPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.travelsamericas.com/" },
        { "@type": "ListItem", "position": 2, "name": "Orlando", "item": "https://www.travelsamericas.com/destination/orlando" },
        { "@type": "ListItem", "position": 3, "name": "Landmarks", "item": "https://www.travelsamericas.com/destination/orlando/landmark" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Orlando Landmarks 2026 | Beyond the Theme Parks",
      "description": "Orlando's most iconic landmarks — Walt Disney World, Universal Studios, Kennedy Space Center, ICON Park, Wekiva Springs and more.",
      "url": "https://www.travelsamericas.com/destination/orlando/landmark",
      "inLanguage": "en-US",
      "publisher": { "@type": "Organization", "name": "Travels Americas", "url": "https://www.travelsamericas.com" },
    },
  ];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <OrlandoLandmarkClient />
    </>
  );
}
