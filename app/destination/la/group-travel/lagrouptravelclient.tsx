"use client";
import HeroBanner from "../../../components/Header/HeroBanner";
import NavigationHeader from "../../../components/Header/NavigationHeader";
import Footer from "@/app/components/Header/Footer/footer";
import BookingCTA from './components/BookingCTA/BookingCTA';
import FAQAccordion from './components/FAQAccordion/FAQAccordion';
import GroupTravelHero from './components/GroupTravelHero/GroupTravelHero';
import GroupItinerary from './components/GroupItinerary/GroupItinerary';
import GroupLandmarks from './components/GroupLandmarks/GroupLandmarks';
import GroupDining from './components/GroupDining/GroupDining';
import GroupSafetyPacking from './components/GroupSafetyPacking/GroupSafetyPacking';
import faqData from '@/content/destination/la/group-travel/faq/faqsection.json';

export default function LAGroupTravelClient() {
  return (
    <>
      <NavigationHeader />
      <HeroBanner image="/data/majorcities/losangeles/assets/group/la-group-travel-packing-flatlay-essentials.webp" bannerText="" variant="wide" />
      <BookingCTA variant="slim" text="Book hotels for your Los Angeles trip →" href="/destination/la/bookings?tab=hotels&from=group-travel" label="Book your trip" />
      <GroupTravelHero />
      <GroupItinerary />
      <GroupLandmarks />
      <GroupDining />
      <GroupSafetyPacking />
      <BookingCTA variant="full" text="Find the right hotel for your stay" href="/destination/la/bookings?tab=hotels&from=group-travel" label="Book your trip" />
      <FAQAccordion faqs={faqData} />
      <Footer />
    </>
  );
}
