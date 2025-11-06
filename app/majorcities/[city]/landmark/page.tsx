export const generateMetadata = () => ({
  title: 'Solo Travel NYC | Top Landmarks & Routes',
  description:  'Explore New York City’s iconic landmarks with our solo travel guide. Maps, tips & safety.'
});

import LandmarkClientPage from './landmarkclient';

export default function LandmarkPage() {
  return <LandmarkClientPage />;
}