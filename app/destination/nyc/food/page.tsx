export const generateMetadata = () => ({
  title: "Best Solo Dining in NYC 2026 | Food Halls & Spots",
  description:  "Best solo dining spots in NYC — food halls, counter seats, ramen bars, and where to eat alone without awkwardness.",
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
    images: ["https://www.travelsamericas.com/data/majorcities/newyork/assets/nyc-solo-dining.webp"],
    
  }
});

import FoodClientPage from './foodclient';

export default function FoodPage() {
  return <FoodClientPage />;
}