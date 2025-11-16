export const generateMetadata = () => ({
  title: 'Solo Travel in NYC | Safety, Packing & Itinerary Tips',
  description:  'Plan your solo NYC adventure with tips on safety, packing & navigation. Explore walkable neighborhoods, landmarks & solo-friendly dining.',
  alternates: {
      canonical: 'https://www.travelamerica.work/majorcities/newyork/food',
    },
});

import FoodClientPage from './foodclient';

export default function FoodPage() {
  return <FoodClientPage />;
}