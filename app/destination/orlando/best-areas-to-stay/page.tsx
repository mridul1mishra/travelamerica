export const metadata = {
  title: "Best Areas to Stay in Orlando 2026 | Near Disney",
  description: "Where to stay in Orlando — on-site vs off-site Disney hotels, Universal area, International Drive, and Kissimmee.",
  alternates: { canonical: 'https://www.travelsamericas.com/destination/orlando/best-areas-to-stay' },
  openGraph: { title: 'Best Areas to Stay in Orlando 2026', description: 'On-site vs off-site Disney and Universal hotels, I-Drive, Kissimmee compared.', url: 'https://www.travelsamericas.com/destination/orlando/best-areas-to-stay', type: 'website' },
};
import OrlandoBestAreasClient from './orlandobestareasclient';

export default function OrlandoBestAreasPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.travelsamericas.com/" },
        { "@type": "ListItem", "position": 2, "name": "Orlando", "item": "https://www.travelsamericas.com/destination/orlando" },
        { "@type": "ListItem", "position": 3, "name": "Best Areas to Stay", "item": "https://www.travelsamericas.com/destination/orlando/best-areas-to-stay" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Best Areas to Stay in Orlando 2026 | Near Disney",
      "description": "Where to stay in Orlando — on-site vs off-site Disney hotels, Universal area, International Drive, and Kissimmee.",
      "url": "https://www.travelsamericas.com/destination/orlando/best-areas-to-stay",
      "inLanguage": "en-US",
      "publisher": { "@type": "Organization", "name": "Travels Americas", "url": "https://www.travelsamericas.com" },
    },
  ];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <OrlandoBestAreasClient />
    </>
  );
}
