export const generateMetadata = () => ({
  title: 'Book Your Los Angeles Trip | Cheap Flights to LAX, Hotels & Things to Do',
  description:
    'Plan and book your Los Angeles trip — compare the cheapest flights to LAX, browse top LA hotels, and find the best things to do in Los Angeles.',
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://www.travelsamericas.com/destination/la/bookings',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book Your LA Trip: Cheap Flights, Hotels & Things to Do',
    description: 'Compare cheap flights to Los Angeles (LAX), hotels, and activities in one place.',
    images: ['https://www.travelsamericas.com/data/majorcities/losangeles/assets/losangeles.jpeg'],
  },
});

import { Suspense } from "react";
import LABookingsClient from './labookingsclient';

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.travelsamericas.com/" },
    { "@type": "ListItem", "position": 2, "name": "Los Angeles", "item": "https://www.travelsamericas.com/destination/la" },
    { "@type": "ListItem", "position": 3, "name": "Book your trip", "item": "https://www.travelsamericas.com/destination/la/bookings" },
  ],
};

export default function LABookingsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Suspense fallback={<div>Loading...</div>}>
        <LABookingsClient />
      </Suspense>
    </>
  );
}
