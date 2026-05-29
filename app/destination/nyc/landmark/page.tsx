export const generateMetadata = () => ({
  title: 'Solo Travel NYC | Top Landmarks and Routes',
  description:  'Traveling alone in New York? Explore iconic landmarks confidently with our solo travel safety guide.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
      canonical: 'https://www.travelsamericas.com/destination/nyc/landmark',
    },
    twitter: {
    card: "summary_large_image",
    title: "3-Day NYC Group Travel Itinerary",
    description: "Plan the perfect 3-day NYC trip for groups with museums, parks, Broadway, and a Hudson River dinner cruise.",
    images: ["https://www.travelsamericas.com/data/majorcities/newyork/assets/statue-of-liberty.jpg"]
  }
});

import LandmarkClientPage from './landmarkclient';

export default function LandmarkPage() {
  return <LandmarkClientPage />;
}
