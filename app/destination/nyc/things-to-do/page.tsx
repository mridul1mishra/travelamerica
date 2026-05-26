import NYCThingsToDoClient from './nycthingstodoclient';

export const metadata = {
  title: 'Things to Do in New York City | Plan Your NYC Experience',
  description:
    'Explore the different types of NYC experiences—from landmarks to food, culture, and outdoor activities—and learn how they shape where you should stay and how to plan your trip.',
  alternates: {
    canonical: 'https://www.travelsamericas.com/destination/nyc/things-to-do',
  },
  openGraph: {
    title: 'Things to Do in New York City',
    description:
      'Discover the types of NYC experiences that shape your trip—landmarks, culture, food, and outdoor exploration.',
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
                    'NYC offers a wide range of experiences including iconic landmarks, world-class museums, diverse food scenes, and outdoor activities such as parks and walking routes.',
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
