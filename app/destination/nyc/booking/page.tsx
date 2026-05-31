export const generateMetadata = () => ({
  title: 'Book Your New York Trip | Cheap Flights, Hotels & Cruises',
  description:
    'Plan and book your New York trip in one place — compare the cheapest flights from major US cities, browse top NYC hotels, and find cruises departing from New York.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.travelsamericas.com/destination/nyc/booking',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book Your New York Trip: Flights, Hotels & Cruises',
    description: 'Compare cheap flights, hotels, and cruises for your New York trip.',
    images: ['https://www.travelsamericas.com/data/majorcities/newyork/assets/newyork.jpeg'],
  },
});

import { Suspense } from "react";
import BookFlightsClient from './bookflightsclient';

const breadcrumbSchema = {
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
      "name": "New York",
      "item": "https://www.travelsamericas.com/destination/nyc",
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Book your trip",
      "item": "https://www.travelsamericas.com/destination/nyc/booking",
    },
  ],
};

export default function BookFlightsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Suspense fallback={<div>Loading...</div>}>
        <BookFlightsClient />
      </Suspense>
    </>
  );
}
