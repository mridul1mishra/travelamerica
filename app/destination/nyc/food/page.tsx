export const generateMetadata = () => ({
  title: 'Solo Travel NYC: Best Dining Spots & Food Halls for Exploring Alone',
  description:  'Plan your solo NYC adventure with tips on safety, packExplore the best solo dining spots in NYC, from cozy counters to vibrant food halls. Savor iconic bagels, ramen, and more for the perfect solo meal!',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
      canonical: 'https://www.travelsamericas.com/destination/nyc/food',
    },
    twitter: {
    card: "summary_large_image",
    title: "Solo Travel NYC: Best Dining Spots & Food Halls for Exploring Alone",
    description: "Explore the best solo dining spots in NYC — cozy counters, vibrant food halls, iconic bagels, ramen, and more.",
    images: ["https://www.travelsamericas.com/data/majorcities/newyork/assets/nyc-solo-dining.png"],
    
  }
});

import FoodClientPage from './foodclient';

export default function FoodPage() {
  return <FoodClientPage />;
}