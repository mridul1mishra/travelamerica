export const generateMetadata = () => ({
  title: 'NYC Group Travel Guide 2026: Itinerary, Landmarks & Dining',
  description: "The complete NYC group travel guide — a 3-day itinerary, top landmarks by borough, and dining tips for groups.",
  alternates: {
      canonical: 'https://www.travelsamericas.com/destination/nyc/group-travel',
    },
    robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "NYC Group Travel Guide 2026: Itinerary, Landmarks & Dining",
    description: "The complete NYC group travel guide — a 3-day itinerary, top landmarks by borough (Manhattan, Brooklyn, Bronx), group dining picks, plus safety and packing tips.",
    images: ["https://www.travelsamericas.com/data/majorcities/newyork/assets/group/nyc-group-travel-packing-flatlay-essentials.webp"]
  },
  openGraph: {
    title: 'NYC Group Travel Guide 2026: Itinerary, Landmarks & Dining',
    description: "The complete NYC group travel guide — a 3-day itinerary, top landmarks by borough, and dining tips for groups.",
    url: 'https://www.travelsamericas.com/destination/nyc/group-travel',
    type: 'article',
    siteName: 'Travels Americas',
    images: [{ url: "https://www.travelsamericas.com/data/majorcities/newyork/assets/group/nyc-group-travel-packing-flatlay-essentials.webp", width: 1200, height: 630 }],
  }
});

import GroupTravelClient from './grouptravelclient';

export default function GroupItineraryPage() {
  return <GroupTravelClient />;
}
