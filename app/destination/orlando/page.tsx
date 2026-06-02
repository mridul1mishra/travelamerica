export const generateMetadata = () => ({
  title: 'Book Your Orlando Trip | Cheap Flights, Hotels & Things to Do',
  description:
    'Plan and book your Orlando trip in one place — compare the cheapest flights from major US cities, browse top Orlando hotels, and find the best things to do in Orlando.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.travelsamericas.com/destination/orlando',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book Your Orlando Trip: Flights, Hotels & Things to Do',
    description: 'Compare cheap flights, hotels, and activities for your Orlando trip.',
    images: ['https://www.travelsamericas.com/data/majorcities/orlando/assets/orlando.jpeg'],
  },
});

import { Suspense } from "react";
import OrlandoClient from './orlandoclient';

export default function OrlandoPage() {
  return (
    <Suspense fallback={<div>Loading…</div>}>
      <OrlandoClient />
    </Suspense>
  );
}
