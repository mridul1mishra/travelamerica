"use client";
import { useParams } from "next/navigation";
import HeroBanner from "../../../components/Header/HeroBanner";
import NavigationHeader from "../../../components/Header/NavigationHeader";
import Footer from "@/app/components/Header/Footer/footer";
import BookingCTA from "./components/BookingCTA/BookingCTA";
import FAQAccordion from './components/FAQAccordion/FAQAccordion';
import SoloDiningGuide from './components/SoloDiningGuide/SoloDiningGuide';
import faqData from '@/content/destination/la/food/faq/faqsection.json';
export default function LAFoodClient() {




    return(
        <>
        <NavigationHeader />
        <HeroBanner image={`/data/majorcities/losangeles/assets/la-solo-dining.webp`} bannerText="" variant="wide" />
        <BookingCTA variant="slim" text="Book your Los Angeles trip →" href="/destination/la/bookings?tab=restaurants&from=food" label="See food tours" />
        <SoloDiningGuide />
        <BookingCTA variant="full" text="Book a guided LA food tour" href="/destination/la/bookings?tab=restaurants&from=food" label="See food tours" />
        <FAQAccordion faqs={faqData} />
        <Footer />
        </>
    );
}
function capitalizeWords(str: string) {
  return str
    .toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase());
}
