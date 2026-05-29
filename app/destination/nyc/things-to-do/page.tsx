import NYCThingsToDoClient from './nycthingstodoclient';

export const metadata = {
  title: 'Things to Do in New York City | Plan Your NYC Experience',
  description:
    'A breakdown of the main types of NYC trips, from landmarks to food to parks, and how each one changes where it makes sense to stay.',
  alternates: {
    canonical: 'https://www.travelsamericas.com/destination/nyc/things-to-do',
  },
  openGraph: {
    title: 'Things to Do in New York City',
    description:
      'The main types of NYC trips—landmarks, culture, food, and the outdoors—and how each shapes your days.',
    url: 'https://www.travelsamericas.com/destination/nyc/things-to-do',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Things to Do in New York City',
    description:
      'Plan your NYC experience with a clear breakdown of what the city offers and how it affects your itinerary.',
  },
};

export default function NYCThingsToDoPage() {
  return (
    <>
      {/* Optional: FAQ Schema for SEO */}
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
                name: 'What types of experiences does New York City offer?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text:
                    'NYC trips tend to fall into a few types: landmark sightseeing, museums and galleries, eating your way through neighborhoods, or parks and long walks. Most people mix two of these.',
                },
              },
              {
                '@type': 'Question',
                name: 'How do NYC experiences affect where I should stay?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text:
                    'Your preferred experiences influence the best neighborhoods to stay in. For example, landmark-focused trips work well in Midtown or Lower Manhattan, while food and culture travelers may prefer Brooklyn or the Village.',
                },
              },
            ],
          }),
        }}
      />

      <NYCThingsToDoClient />
    </>
  );
}
