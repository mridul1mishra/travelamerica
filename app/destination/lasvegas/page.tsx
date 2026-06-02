export const generateMetadata = () => ({
  title: 'Book Your Las Vegas Trip | Cheap Flights, Hotels & Things to Do',
  description:
    'Plan and book your Las Vegas trip in one place — compare the cheapest flights from major US cities, browse top Las Vegas hotels, and find the best things to do in Las Vegas.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.travelsamericas.com/destination/lasvegas',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book Your Las Vegas Trip: Flights, Hotels & Things to Do',
    description: 'Compare cheap flights, hotels, and activities for your Las Vegas trip.',
    images: ['https://www.travelsamericas.com/data/majorcities/lasvegas/assets/lasvegas.jpeg'],
  },
});

import { Suspense } from "react";
import LasVegasClient from './lasvegasclient';

export default function LasVegasPage() {
  return (
    <Suspense fallback={<div>Loading…</div>}>
      <LasVegasClient />
    </Suspense>
  );
}
