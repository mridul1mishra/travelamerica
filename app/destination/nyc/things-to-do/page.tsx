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

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.travelsamericas.com/' },
    { '@type': 'ListItem', position: 2, name: 'New York', item: 'https://www.travelsamericas.com/destination/nyc/' },
    { '@type': 'ListItem', position: 3, name: 'Things to Do', item: 'https://www.travelsamericas.com/destination/nyc/things-to-do' },
  ],
};

const article = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Things to Do in New York City | Plan Your NYC Experience',
  description:
    'A breakdown of the main types of NYC trips, from landmarks to food to parks, and how each one changes where it makes sense to stay.',
  url: 'https://www.travelsamericas.com/destination/nyc/things-to-do',
  inLanguage: 'en-US',
  author: { '@type': 'Organization', name: 'Travels Americas', url: 'https://www.travelsamericas.com' },
  publisher: {
    '@type': 'Organization',
    name: 'Travels Americas',
    logo: { '@type': 'ImageObject', url: 'https://www.travelsamericas.com/logo.png' },
  },
  datePublished: '2025-09-20',
  dateModified: '2026-06-03',
};

export default function NYCThingsToDoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }}
      />
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
