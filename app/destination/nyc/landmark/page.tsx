export const generateMetadata = () => ({
  title: 'NYC Landmarks Guide: 9 Must-See Sights with Hours, Prices & Tips',
  description: "Practical guide to NYC's 9 top landmarks — Statue of Liberty, Empire State Building, Central Park, Brooklyn Bridge. Hours, prices, and subway directions.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.travelsamericas.com/destination/nyc/landmark',
  },
  twitter: {
    card: "summary_large_image",
    title: "NYC Landmarks Guide: 9 Must-See Sights with Hours, Prices & Tips",
    description: "Practical guide to NYC's 9 top landmarks — Statue of Liberty, Empire State Building, Central Park, Brooklyn Bridge. Hours, prices, and subway directions.",
    images: ["https://www.travelsamericas.com/data/majorcities/newyork/assets/statue-of-liberty.webp"]
  }
});

import LandmarkClientPage from './landmarkclient';

export default function LandmarkPage() {
  return <LandmarkClientPage />;
}
