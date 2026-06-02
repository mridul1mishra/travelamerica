export const generateMetadata = () => ({
  title: 'Book Your Orlando Trip | Cheap Flights to MCO, Hotels & Things to Do',
  description:
    'Plan and book your Orlando trip in one place — compare the cheapest flights to MCO from major US cities, browse top Orlando hotels, and find the best things to do.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.travelsamericas.com/destination/orlando/bookings',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book Your Orlando Trip: Cheap Flights to MCO, Hotels & Things to Do',
    description: 'Compare cheap flights to Orlando (MCO), hotels, and activities in one place.',
    images: ['https://www.travelsamericas.com/data/majorcities/orlando/assets/orlando.jpeg'],
  },
});

import { Suspense } from "react";
import OrlandoBookingsClient from './orlandobookingsclient';

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
      "name": "Orlando",
      "item": "https://www.travelsamericas.com/destination/orlando",
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Book your trip",
      "item": "https://www.travelsamericas.com/destination/orlando/bookings",
    },
  ],
};

export default function OrlandoBookingsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Suspense fallback={<div>Loading...</div>}>
        <OrlandoBookingsClient />
      </Suspense>
    </>
  );
}
