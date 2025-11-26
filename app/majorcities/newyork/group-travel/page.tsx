export const generateMetadata = () => ({
  title: 'Group Travel in NYC: Safety Tips, Packing Essentials & Landmark Planning',
  description:  'Explore NYC confidently with our group travel safety guide — smart packing tips, safe itineraries, and must-see landmarks for every explorer.',
  alternates: {
      canonical: 'https://www.travelamerica.work/majorcities/newyork/group-travel',
    },
    robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Group Travel in NYC: Safety Tips, Packing Essentials & Landmark Planning",
    description: "Explore NYC confidently with our group travel safety guide — smart packing tips, safe itineraries, and must-see landmarks for every explorer.",
    images: ["/data/majorcities/newyork/assets/group/nyc-group-travel-packing-flatlay-essentials.jpg"]
  }
});

import GroupTravelClient from './grouptravelclient';

export default function GroupItineraryPage() {
  return <GroupTravelClient />;
}