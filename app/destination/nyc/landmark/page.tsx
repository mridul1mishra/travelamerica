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
    title: "Solo Travel NYC | Top Landmarks and Routes",
    description: "Explore NYC's iconic landmarks confidently — Statue of Liberty, Empire State Building, Central Park, and more.",
    images: ["https://www.travelsamericas.com/data/majorcities/newyork/assets/statue-of-liberty.webp"]
  }
});

import LandmarkClientPage from './landmarkclient';

export default function LandmarkPage() {
  return <LandmarkClientPage />;
}
