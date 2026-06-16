"use client"
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import styles from "./neighborhoodguide.module.css";
import IntroSection from "./components/introsection/introsection";
import CityOrganization from "./components/cityorganization/cityorganization";
import NeighborhoodsByStyle from "./components/Neighborhoodbystyle/Neighborhoodbystyle";
import PopularNeighborhoods from "./components/PopularNeighborhood/Popularneighborhood";
import WhereFirstTimersStay from "./components/Wherefirsttimerstay/wherefirsttimestay";
import GettingAround from "./components/Gettingaround/Gettingaround";
import SafetyOverview from "./components/SafetyOverview/Safetyoverview";
import NeighborhoodGuideCTA from "./components/Neighborhoodguidecta/Neighborhoodguidecta";
import BookingCTA from './components/BookingCTA/BookingCTA';
import { WhyTrustThisGuide } from './components/WhyTrustThisGuide/whytrustthisguide';
import orlandoWhyTrustData from '@/content/destination/orlando/neighborhood-guide/whyTrustItems/whyTrustItems.json';
import FAQAccordion from './components/FAQAccordion/faqsection';
import orlandoFaqData from '@/content/destination/orlando/neighborhood-guide/faq/faqsection.json';

const navLinks = [
  { href: "/destination/orlando/best-areas-to-stay", label: "Best Areas to Stay" },
  { href: "/destination/orlando/solo-trip-to-orlando", label: "Solo Trip to Orlando" },
  { href: "/destination/orlando/safety-guide", label: "Orlando Safety" },
  { href: "/destination/orlando/orlando-female-solo-travel-guide", label: "Female Travel Guide" },
];

export default function OrlandoNeighborhoodGuideClient() {
  return (
    <>
      <Header links={navLinks} />
      <BookingCTA variant="slim" text="Book your Orlando trip â†’" href="/destination/orlando/bookings?tab=hotels&from=neighborhood-guide" label="See Orlando hotels" />
      <div className={styles.container}>
        <IntroSection />
        <CityOrganization />
        <NeighborhoodsByStyle />
        <PopularNeighborhoods />
        <WhereFirstTimersStay />
        <GettingAround />
        <SafetyOverview />
        <WhyTrustThisGuide data={orlandoWhyTrustData} />
        <FAQAccordion faqs={orlandoFaqData} />
        <NeighborhoodGuideCTA />
      </div>
      <BookingCTA variant="full" text="See hotels in the best Orlando areas" href="/destination/orlando/bookings?tab=hotels&from=neighborhood-guide" label="See Orlando hotels" />
      <Footer />
    </>
  );
}
