


import NeighborhoodguideClient from "./neighborhoodguide";

/* =========================
   Metadata
========================= */
export const metadata = {
  title:
    'NYC Neighborhood Guide – Best Areas to Stay & Explore for Tourists',
  description:
    'Explore New York City neighborhoods with our NYC neighborhood guide for tourists. Compare areas by travel style, sightseeing, safety, and convenience to choose where to stay.',
  alternates: {
    canonical:
      'https://www.travelamerica.work/destination/nyc/neighborhood-guide',
  },
  openGraph: {
    title: 'New York City Neighborhood Guide',
    description:
      'A tourist-friendly guide to NYC neighborhoods, helping you choose the best area to stay and explore based on travel style, location, and ease of getting around.',
    url: 'https://www.travelamerica.work/destination/nyc/neighborhood-guide',
    type: 'website',
  },
};

/* =========================
   Page Component
========================= */
export default function NYCSafetyGuide() {
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
            name: 'New York City Neighborhoods',
            description:
              'A guide to New York City neighborhoods designed for tourists, helping visitors understand different areas and choose where to stay and explore.',
            url: 'https://www.travelamerica.work/destination/nyc/neighborhood-guide',
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
            isPartOf: {
              '@type': 'WebPage',
              name: 'New York City Travel Guide',
              url: 'https://www.travelamerica.work/destination/nyc',
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
                name: 'Which NYC neighborhood is best for first-time visitors?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text:
                    'Many first-time visitors choose central areas of Manhattan such as Midtown or Lower Manhattan because these neighborhoods offer easy access to major attractions and transportation.',
                },
              },
              {
                '@type': 'Question',
                name: 'What are the best neighborhoods to stay in New York City?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text:
                    'Popular neighborhoods for tourists include Midtown Manhattan, Upper East Side, Lower Manhattan, and Brooklyn Heights, as they balance convenience, character, and accessibility.',
                },
              },
              {
                '@type': 'Question',
                name: 'Is it better to stay in Manhattan or Brooklyn?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text:
                    'Manhattan is often preferred for first-time visitors due to its central location, while nearby Brooklyn neighborhoods can offer a quieter atmosphere with good subway connections to Manhattan.',
                },
              },
              {
                '@type': 'Question',
                name: 'Are NYC neighborhoods safe for tourists?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text:
                    'Most neighborhoods commonly visited by tourists are busy, well-lit, and safe to explore, especially in central and residential areas with good public transportation.',
                },
              },
            ],
          }),
        }}
      />

      {/* =========================
          Page Content
      ========================== */}
      <NeighborhoodguideClient />
    </>
  );
}