export const generateMetadata = () => ({
  title: 'Is NYC Safe for Solo Travelers? Nightlife, Transport & Neighborhood Tips',
  description:  'Explore NYC solo with this 3-day itinerary covering landmarks, neighborhoods, and Brooklyn vibes.',
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
      canonical: 'https://www.travelamerica.work/majorcities/newyork/solo-itinerary',
    },
    twitter: {
    card: "summary_large_image",
    title: "Is NYC Safe for Solo Travelers? Nightlife, Transport & Neighborhood Tips",
    description: "Explore solo travel safety in NYC with tips on transport, nightlife, neighborhoods, and smart planning. From subway strategies to rooftop bar confidence, this guide helps you navigate the city with ease.",
    images: ["https://www.travelamerica.work/data/majorcities/newyork/assets/solo-travel-itinerary.png"]
  }
});

import { getFaqItinerary } from '@/app/lib/FaqData';
import NYCSafetySolTravelersClient from './nycsafetysolotravelersclient';

export default async function SoloItineraryPage() {
  const { faqTravelHubData } = await getFaqItinerary();
  return <NYCSafetySolTravelersClient />;
}