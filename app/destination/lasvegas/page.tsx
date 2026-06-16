import type { Metadata } from 'next';
import LasVegasHubClient from './lasvegashubclient';

export const metadata: Metadata = {
  title: 'Las Vegas Travel Guide | Plan Your Las Vegas Trip',
  description:
    'Plan your Las Vegas trip — best things to do on the Strip, where to stay, top shows, day trips to the Grand Canyon, and how to book cheap flights to LAS.',
  alternates: { canonical: 'https://www.travelsamericas.com/destination/lasvegas' },
  openGraph: {
    title: 'Las Vegas Travel Guide',
    description: 'Your complete Las Vegas travel guide — attractions, neighborhoods, shows, and trip planning.',
    url: 'https://www.travelsamericas.com/destination/lasvegas',
    type: 'website',
  },
};


// Schema markup (moved from client component)
const lvBreadcrumb = {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.travelsamericas.com/",
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Las Vegas",
                "item": "https://www.travelsamericas.com/destination/lasvegas",
              },
            ],
          };

export default function LasVegasHubPage() {
  return (
    <>
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': ['TouristDestination', 'WebPage'],
        name: 'Las Vegas Travel Guide',
        description: 'Las Vegas is the entertainment capital of the world — iconic casino resorts, world-class shows, fine dining, and easy access to natural wonders.',
        url: 'https://www.travelsamericas.com/destination/lasvegas',
        touristType: 'Entertainment tourism',
        geo: { '@type': 'GeoCoordinates', latitude: '36.1699', longitude: '-115.1398' },
        address: { '@type': 'PostalAddress', addressLocality: 'Las Vegas', addressRegion: 'NV', addressCountry: 'US' },
      }) }} />
      <LasVegasHubClient />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(lvBreadcrumb) }}/>
  </>
  );
}
