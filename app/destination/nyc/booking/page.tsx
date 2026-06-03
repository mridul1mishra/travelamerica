export const generateMetadata = () => ({
  title: 'Book Your New York Trip | Cheap Flights, Hotels & Cruises',
  description:
    "Plan and book your New York trip — compare cheap flights, browse top hotels, and find the best cruises from NYC.",
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

import dynamic from "next/dynamic";

const BookFlightsClient = dynamic(() => import('./bookflightsclient'), {
  ssr: false,
  loading: () => <div>Loading booking options…</div>,
});

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
      <BookFlightsClient />
    </>
  );
}
