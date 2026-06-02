import type { Metadata } from 'next';
import LAHubClient from './lahubclient';

export const metadata: Metadata = {
  title: 'Los Angeles Travel Guide | Plan Your LA Trip',
  description:
    'Plan your Los Angeles trip — Hollywood, Venice Beach, Griffith Observatory, the best neighborhoods to stay in, and cheap flights to LAX.',
  alternates: { canonical: 'https://www.travelsamericas.com/destination/la' },
  openGraph: {
    title: 'Los Angeles Travel Guide',
    description: 'Your complete LA travel guide — beaches, Hollywood, neighborhoods, and trip planning.',
    url: 'https://www.travelsamericas.com/destination/la',
    type: 'website',
  },
};

export default function LAHubPage() {
  return (
    <>
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': ['TouristDestination', 'WebPage'],
        name: 'Los Angeles Travel Guide',
        description: 'Los Angeles is the entertainment capital of the world — Hollywood, world-class museums, iconic beaches, and a food scene that spans every culture.',
        url: 'https://www.travelsamericas.com/destination/la',
        touristType: 'Urban tourism',
        geo: { '@type': 'GeoCoordinates', latitude: '34.0522', longitude: '-118.2437' },
        address: { '@type': 'PostalAddress', addressLocality: 'Los Angeles', addressRegion: 'CA', addressCountry: 'US' },
      }) }} />
      <LAHubClient />
    </>
  );
}
