export const generateMetadata = () => ({
  title: "Book Your Las Vegas Trip | Flights, Hotels & More",
  description:
    "Plan and book your Las Vegas trip — compare cheap flights to LAS, browse top hotels, and find the best things to do.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.travelsamericas.com/destination/lasvegas/bookings',
  },
  openGraph: {
    title: 'Book Your Las Vegas Trip | Cheap Flights to LAS, Hotels & Things to Do',
    description: 'Plan and book your Las Vegas trip — compare the cheapest flights to LAS, browse top Las Vegas hotels, and find the best things to do.',
    url: 'https://www.travelsamericas.com/destination/lasvegas/bookings',
    type: 'website',
    images: ['https://www.travelsamericas.com/data/majorcities/lasvegas/assets/lasvegas.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book Your Las Vegas Trip: Cheap Flights to LAS, Hotels & Things to Do',
    description: 'Compare cheap flights to Las Vegas (LAS), hotels, and activities in one place.',
    images: ['https://www.travelsamericas.com/data/majorcities/lasvegas/assets/lasvegas.webp'],
  },
});

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
      <LasVegasBookingsClient />
    </>
  );
}