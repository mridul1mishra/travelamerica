export const generateMetadata = () => ({
  title: 'Solo Travel NYC | Top Landmarks & Routes',
  description:  'Explore New York City’s iconic landmarks with our solo travel guide. Maps, tips & safety.',
  alternates: {
      canonical: 'https://www.travelamerica.work/majorcities/newyork/landmark',
    },
});

import LandmarkClientPage from './landmarkclient';

export default function LandmarkPage() {
  return <LandmarkClientPage />;
}