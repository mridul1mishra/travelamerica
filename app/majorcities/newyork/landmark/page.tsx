export const generateMetadata = () => ({
  title: 'Solo Travel NYC | Top Landmarks & Routes',
  description:  'Explore New York City’s iconic landmarks with our solo travel guide. Maps, tips & safety.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
      canonical: 'https://www.travelamerica.work/majorcities/newyork/landmark',
    },
    twitter: {
    card: "summary_large_image",
    title: "3-Day NYC Group Travel Itinerary",
    description: "Plan the perfect 3-day NYC trip for groups with museums, parks, Broadway, and a Hudson River dinner cruise.",
    images: ["https://yourwebsite.com/images/nyc-group-itinerary-day3-dinner-cruise-dancing.png"]
  }
});

import LandmarkClientPage from './landmarkclient';

export default function LandmarkPage() {
  return <LandmarkClientPage />;
}