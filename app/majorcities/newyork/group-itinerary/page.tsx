export const generateMetadata = () => ({
  title: '3-Day Group Travel Itinerary for New York | Travel America',
  description:  'Explore NYC in 3 days with a group-friendly itinerary blending culture, connection, and skyline moments.',
  alternates: {
      canonical: 'https://www.travelamerica.work/majorcities/newyork/group-itinerary',
    },
    robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "3-Day NYC Group Travel Itinerary",
    description: "Plan the perfect 3-day NYC trip for groups with museums, parks, Broadway, and a Hudson River dinner cruise.",
    images: ["https://www.travelamerica.work/data/majorcities/newyork/assets/group/nyc-group-itinerary-brooklyn-bridge-sunset.jpg"]
  }
});

import GroupItineraryClient from './groupitineraryclient';

export default function GroupItineraryPage() {
  return <GroupItineraryClient />;
}