export const generateMetadata = () => ({
  title: 'Book Your Las Vegas Trip | Cheap Flights to LAS, Hotels & Things to Do',
  description:
    'Plan and book your Las Vegas trip in one place — compare the cheapest flights to LAS from major US cities, browse top Las Vegas hotels, and find the best things to do.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.travelsamericas.com/destination/lasvegas/bookings',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book Your Las Vegas Trip: Cheap Flights to LAS, Hotels & Things to Do',
    description: 'Compare cheap flights to Las Vegas (LAS), hotels, and activities in one place.',
    images: ['https://www.travelsamericas.com/data/majorcities/lasvegas/assets/lasvegas.jpeg'],
  },
});

import { Suspense } from "react";
import LasVegasBookingsClient from './lasvegasbookingsclient';

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
      "name": "Las Vegas",
      "item": "https://www.travelsamericas.com/destination/lasvegas",
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Book your trip",
      "item": "https://www.travelsamericas.com/destination/lasvegas/bookings",
    },
  ],
};

export default function LasVegasBookingsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Suspense fallback={<div>Loading...</div>}>
        <LasVegasBookingsClient />
      </Suspense>
    </>
  );
}
