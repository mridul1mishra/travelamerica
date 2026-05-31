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

import BookFlightsClient from './bookflightsclient';

export default function BookFlightsPage() {
  return <BookFlightsClient />;
}
