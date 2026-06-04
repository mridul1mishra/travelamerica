export const generateMetadata = () => ({
  title: "Best Food in NYC 2026: Restaurants, Food Halls & Where to Eat",
  description: "Where to eat in New York City — best restaurants by cuisine and neighborhood, food halls, pizza, bagels, and price ranges. A 2026 NYC food guide.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.travelsamericas.com/destination/nyc/food',
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Food in NYC 2026: Restaurants, Food Halls & Where to Eat",
    description: "Where to eat in New York City — best restaurants by cuisine and neighborhood, food halls, pizza, bagels, and price ranges.",
    images: ["https://www.travelsamericas.com/data/majorcities/newyork/assets/nyc-solo-dining.webp"],
  }
});

import FoodClientPage from './foodclient';

export default function FoodPage() {
  return <FoodClientPage />;
}
