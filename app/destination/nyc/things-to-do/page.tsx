import NYCThingsToDoClient from './nycthingstodoclient';

export const metadata = {
  title: 'The 40 Best Things to Do in New York City (2026 Guide)',
  description:
    'The best things to do in NYC — landmarks, free activities, museums, food halls, and skyline views, organized by vibe and budget. Updated for 2026.',
  alternates: {
    canonical: 'https://www.travelsamericas.com/destination/nyc/things-to-do',
  },
  openGraph: {
    title: 'The 40 Best Things to Do in New York City (2026 Guide)',
    description:
      'The best things to do in NYC — landmarks, free activities, museums, food halls, and skyline views, organized by vibe and budget.',
    url: 'https://www.travelsamericas.com/destination/nyc/things-to-do',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The 40 Best Things to Do in New York City (2026 Guide)',
    description:
      'The best things to do in NYC — landmarks, free activities, museums, food halls, and skyline views, organized by vibe and budget.',
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
  headline: 'The 40 Best Things to Do in New York City (2026 Guide)',
  description:
    'The best things to do in NYC — landmarks, free activities, museums, food halls, and skyline views, organized by vibe and budget. Updated for 2026.',
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
                name: 'What are the top free things to do in NYC?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text:
                    'The Staten Island Ferry, Central Park, the High Line, the Brooklyn Bridge walk, Grand Central Terminal, the 9/11 Memorial plaza, and free museum hours at MoMA (Friday 4–8 PM) and the Whitney (Friday 5–10 PM).',
                },
              },
              {
                '@type': 'Question',
                name: 'How many days do you need in New York City?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text:
                    'Four to five days lets you do the major icons, a couple of museums, two or three neighborhoods, and a Broadway show without rushing.',
                },
              },
              {
                '@type': 'Question',
                name: "What's the one observation deck to pick if you only do one?",
                acceptedAnswer: {
                  '@type': 'Answer',
                  text:
                    'Top of the Rock for the best skyline photo (the Empire State Building is in the frame), or SUMMIT One Vanderbilt for the most novel experience.',
                },
              },
              {
                '@type': 'Question',
                name: "What's new in NYC for 2026?",
                acceptedAnswer: {
                  '@type': 'Answer',
                  text:
                    "America's 250th-anniversary events and Sail250 around July 4, and FIFA World Cup matches at MetLife Stadium. Both draw large crowds, so book early if your trip overlaps.",
                },
              },
              {
                '@type': 'Question',
                name: 'What types of experiences does New York City offer?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text:
                    'NYC trips tend to fall into a few types: landmark sightseeing, museums and galleries, eating your way through neighborhoods, or parks and long walks. Most people mix two of these.',
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
