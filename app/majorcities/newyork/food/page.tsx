export const generateMetadata = () => ({
  title: 'Solo Travel NYC: Best Dining Spots & Food Halls for Exploring Alone',
  description:  'Plan your solo NYC adventure with tips on safety, packExplore the best solo dining spots in NYC, from cozy counters to vibrant food halls. Savor iconic bagels, ramen, and more for the perfect solo meal!',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
      canonical: 'https://www.travelamerica.work/majorcities/newyork/food',
    },
    twitter: {
    card: "summary_large_image",
    title: "3-Day NYC Group Travel Itinerary",
    description: "Plan the perfect 3-day NYC trip for groups with museums, parks, Broadway, and a Hudson River dinner cruise.",
    images: ["https://www.travelamerica.work/data/majorcities/newyork/assets/nyc-solo-dining.png"],
    
  }
});

import FoodClientPage from './foodclient';

export default function FoodPage() {
  return <FoodClientPage />;
}