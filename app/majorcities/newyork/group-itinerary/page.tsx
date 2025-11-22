export const generateMetadata = () => ({
  title: '3-Day Group Travel Itinerary for New York | Travel America',
  description:  'Explore NYC in 3 days with a group-friendly itinerary blending culture, connection, and skyline moments.',
  alternates: {
      canonical: 'https://www.travelamerica.work/majorcities/newyork/group-itinerary',
    },
});

import GroupItineraryClient from './groupitineraryclient';

export default function GroupItineraryPage() {
  return <GroupItineraryClient />;
}