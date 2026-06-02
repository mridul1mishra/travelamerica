export const generateMetadata = () => ({
  title: 'Book Your Los Angeles Trip | Cheap Flights, Hotels & Things to Do',
  description:
    'Plan and book your Los Angeles trip in one place — compare the cheapest flights from major US cities, browse top LA hotels, and find the best things to do in Los Angeles.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.travelsamericas.com/destination/la',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book Your Los Angeles Trip: Flights, Hotels & Things to Do',
    description: 'Compare cheap flights, hotels, and activities for your Los Angeles trip.',
    images: ['https://www.travelsamericas.com/data/majorcities/losangeles/assets/losangeles.jpeg'],
  },
});

import { Suspense } from "react";
import LAClient from './laclient';

export default function LAPage() {
  return (
    <Suspense fallback={<div>Loading…</div>}>
      <LAClient />
    </Suspense>
  );
}
