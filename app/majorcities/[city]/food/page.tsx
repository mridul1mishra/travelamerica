export const generateMetadata = () => ({
  title: 'Discover the Best Solo Dining Spots and Flavorful Food Halls in NYC',
  description:  'Plan your solo NYC adventure with tips on safety, packExplore the best solo dining spots in NYC, from cozy counters to vibrant food halls. Savor iconic bagels, ramen, and more for the perfect solo meal!',
  alternates: {
      canonical: 'https://www.travelamerica.work/majorcities/newyork/food',
    },
});

import FoodClientPage from './foodclient';

export default function FoodPage() {
  return <FoodClientPage />;
}