export const generateMetadata = () => ({
  title: 'Is NYC Safe for Solo Travelers? Nightlife, Transport & Neighborhood Tips',
  description:  'Explore solo travel safety in NYC with tips on transport, nightlife, neighborhoods, and smart planning. From subway strategies to rooftop bar confidence, this guide helps you navigate the city with ease.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
      canonical: 'https://www.travelamerica.work/majorcities/newyork/nyc-safety-solo-travelers',
    },
    twitter: {
    card: "summary_large_image",
    title: "Is NYC Safe for Solo Travelers? Nightlife, Transport & Neighborhood Tips",
    description: "Explore solo travel safety in NYC with tips on transport, nightlife, neighborhoods, and smart planning. From subway strategies to rooftop bar confidence, this guide helps you navigate the city with ease.",
    images: ["https://www.travelamerica.work/data/majorcities/newyork/assets/solo‑nyc‑safety‑banner‑updated‑traveler.png"]
  }
});

import { getFaqItinerary } from '@/app/lib/FaqData';
import NYCSafetySolTravelersClient from './nycsafetysolotravelersclient';

export default async function NYCsafetysolotravelersPage() {
  const { faqTravelHubData } = await getFaqItinerary();
  return <NYCSafetySolTravelersClient />;
}
