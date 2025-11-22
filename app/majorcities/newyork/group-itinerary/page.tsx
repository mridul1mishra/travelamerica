export const generateMetadata = () => ({
  title: '3-Day Group Travel Itinerary for New York | Travel America',
  description:  'Explore NYC solo with this 3-day itinerary covering landmarks, neighborhoods, and Brooklyn vibes.',
  alternates: {
      canonical: 'https://www.travelamerica.work/majorcities/newyork/group-itinerary',
    },
});

import GroupItineraryClient from './groupitineraryclient';

export default function GroupItineraryPage() {
  return <GroupItineraryClient />;
}