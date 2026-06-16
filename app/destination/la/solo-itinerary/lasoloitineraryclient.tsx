"use client";
import { useParams } from "next/navigation";
import HeroBanner from "../../../components/Header/HeroBanner";
import NavigationHeader from "../../../components/Header/NavigationHeader";
import styles from './lasoloitinerary.module.css';
import Footer from "@/app/components/Header/Footer/footer";
import BookingCTA from './components/BookingCTA/BookingCTA';
import FAQ from "./components/FAQ/FAQ";
import { getFaq, getFaqItinerary } from "@/app/lib/FaqData";
import SoloItineraryHero from './components/SoloItineraryHero/SoloItineraryHero';
import SoloDay1 from './components/SoloDay1/SoloDay1';
import SoloDay2 from './components/SoloDay2/SoloDay2';
import SoloDay3 from './components/SoloDay3/SoloDay3';

interface FaqItem {
  id?: string;
  question: string;
  answer: string;
}

// Define props for the component
interface SoloItineraryClientProps {
  grouped: Record<string, FaqItem[]>;
}

export default async function LASoloItineraryClient({ grouped }: SoloItineraryClientProps) {

    return(
      <>
    <div className="App">
      <NavigationHeader />
      <HeroBanner image={`/data/majorcities/losangeles/assets/solo-travel-itinerary.png`} bannerText="" variant="wide" />
      <BookingCTA variant="slim" text="Book hotels for your Los Angeles trip →" href="/destination/la/bookings?tab=hotels&from=solo-itinerary" label="Book this trip" />
      <SoloItineraryHero />
      <SoloDay1 />
      <SoloDay2 />
      <SoloDay3 />
      <FAQ groupedFaqs={grouped}/>
      <BookingCTA variant="full" text="Find the right hotel for your LA stay" href="/destination/la/bookings?tab=hotels&from=solo-itinerary" label="Book your trip" />
      <Footer />
    </div>
    </>
);
}
function capitalizeWords(str: string) {
  return str
    .toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase());
}
