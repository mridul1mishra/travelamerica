import type { Metadata } from 'next';
import NYCClient from "./nycclient";
import styles from './nyc.module.css';

/* =========================
   Metadata (SEO foundation)
========================= */
export const metadata = {
  title: 'New York City Travel Guide – Things to Do, Neighborhoods & Itineraries',
  description:
    'Plan your New York City trip with our complete NYC travel guide. Discover neighborhoods, top attractions, itineraries, the best time to visit, and travel tips for first-time visitors.',
  alternates: {
    canonical: 'https://www.travelamerica.work/destination/new-york-city',
  },
  openGraph: {
    title: 'New York City Travel Guide',
    description:
      'Your complete NYC travel guide with neighborhoods, attractions, itineraries and planning tips.',
    url: 'https://www.travelamerica.work/destination/new-york-city',
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
            name: 'New York City',
            description:
              'New York City is one of the world’s most popular travel destinations, known for its iconic landmarks, diverse neighborhoods, museums, food scene, and cultural attractions.',
            url: 'https://www.travelamerica.work/destination/new-york-city',
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
          FAQPage Schema
      ========================== */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Is New York City good for first-time visitors?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text:
                    'Yes, New York City is an excellent destination for first-time visitors, offering famous landmarks, an easy-to-use subway system, diverse neighborhoods, and world-class attractions.',
                },
              },
              {
                '@type': 'Question',
                name: 'How many days do you need to visit New York City?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text:
                    'Most travelers spend 3 to 5 days in New York City to see major attractions, while 5 to 7 days allows for a more relaxed experience across neighborhoods and museums.',
                },
              },
              {
                '@type': 'Question',
                name: 'What is the best time to visit New York City?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text:
                    'The best time to visit New York City is during spring (April to June) and fall (September to November) when the weather is pleasant and the city hosts many events.',
                },
              },
              {
                '@type': 'Question',
                name: 'Where should tourists stay in New York City?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text:
                    'Popular areas for tourists include Midtown Manhattan, Lower Manhattan, and parts of Brooklyn such as Downtown Brooklyn and Williamsburg due to their accessibility and attractions.',
                },
              },
            ],
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