import type { Metadata } from 'next';
import OrlandoHubClient from './orlandohubclient';

export const metadata: Metadata = {
  title: 'Orlando Travel Guide | Plan Your Orlando Trip',
  description:
    'Plan your Orlando trip — Walt Disney World, Universal Studios, Kennedy Space Center, best hotels near the parks, and cheap flights to MCO.',
  alternates: { canonical: 'https://www.travelsamericas.com/destination/orlando' },
  openGraph: {
    title: 'Orlando Travel Guide',
    description: 'Your complete Orlando travel guide — theme parks, hotels, day trips, and trip planning.',
    url: 'https://www.travelsamericas.com/destination/orlando',
    type: 'website',
  },
};


// Schema markup (moved from client component)
const orlandoBreadcrumb = {
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
                "name": "Orlando",
                "item": "https://www.travelsamericas.com/destination/orlando",
              },
            ],
          };

export default function OrlandoHubPage() {
  return (
    <>
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': ['TouristDestination', 'WebPage'],
        name: 'Orlando Travel Guide',
        description: 'Orlando is the theme park capital of the world — home to Walt Disney World, Universal Studios, SeaWorld, and easy access to Florida beaches.',
        url: 'https://www.travelsamericas.com/destination/orlando',
        touristType: 'Family tourism',
        geo: { '@type': 'GeoCoordinates', latitude: '28.5383', longitude: '-81.3792' },
        address: { '@type': 'PostalAddress', addressLocality: 'Orlando', addressRegion: 'FL', addressCountry: 'US' },
      }) }} />
      <OrlandoHubClient />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orlandoBreadcrumb) }}/>
  </>
  );
}
