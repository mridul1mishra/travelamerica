import type { Metadata } from 'next';
import NYCClient from "./nycclient";
import styles from './nyc.module.css';

/* =========================
   Metadata (AI Resistant)
========================= */
export const metadata = {
  title: 'Is New York Safe? Travel Guide: Safety by Neighborhood + Real Advice68',
  description:
    "Is New York safe? Yes. Here's the real breakdown: which neighborhoods are actually safe, where tourists get into trouble, and how to avoid it.",
  alternates: {
    canonical: 'https://www.travelsamericas.com/destination/nyc',
  },
  openGraph: {
    title: 'New York City Travel Guide',
    description:
      'Your complete NYC travel guide with neighborhoods, attractions, itineraries and planning tips.',
    url: 'https://www.travelsamericas.com/destination/nyc',
    type: 'website',
  },
};

/* =========================
   Page Component
========================= */
export default function NycHubPage() {
  return (
    <>
      {/* =========================
          TouristDestination + WebPage Schema
      ========================== */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': ['TouristDestination', 'WebPage'],
            name: 'New York City Travel Guide',
            description:
              'New York City is one of the world’s most popular travel destinations, known for its iconic landmarks, diverse neighborhoods, museums, food scene, and cultural attractions.',
            url: 'https://www.travelsamericas.com/destination/nyc',
            touristType: 'Urban tourism',
            geo: {
              '@type': 'GeoCoordinates',
              latitude: '40.7128',
              longitude: '-74.0060',
            },
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'New York City',
              addressRegion: 'NY',
              addressCountry: 'US',
            },
          }),
        }}
      />


      {/* =========================
          Page Content
      ========================== */}
      <NYCClient />
    </>
  );
}