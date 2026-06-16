"use client"
import Header from './components/Header/header';
import SafetyHero from './components/herobanner/safetyhero';
import Footer from './components/Footer/footer';
import ScenarioSection from './components/scenariosection/scenariosection';
import NeighborhoodSafetySection from './components/neighborhoodsection/neighborhoodsafetysection';
import { WhyTrustThisGuide } from './components/WhyTrustThisGuide/whytrustthisguide';
import cityWhyTrustData from "@/content/destination/orlando/safety-guide/whyTrustItems/whyTrustItems.json";
import SafetyTipsGrid from './components/SafetyTips/safetytipcardgrid';
import FAQAccordion from './components/FAQAccordian/faqsection';
import faqData from "./components/FAQAccordian/FAQACcordina.json";
import styles from './orlandosafety.module.css';
import LinkHubGrid from './components/linkhubgrid/LinkHubGrid';
import InfoSection from './components/infosection/infosection';
import sectionsData from "./components/infosection/infosection.json";
import EmergencyContactBlock from './components/emergencycontactblock/EmergencyContactBlock';
import SafetyNarrative from './components/safetynarrative/SafetyNarrative';
import BookingCTA from './components/BookingCTA/BookingCTA';
import EmailSignup from './components/EmailSignup/EmailSignup';

const navLinks = [
  { href: "/destination/orlando/best-areas-to-stay", label: "Best Areas to Stay" },
  { href: "/destination/orlando/solo-trip-to-orlando", label: "Solo Trip to Orlando" },
  { href: "/destination/orlando/safety-guide", label: "Orlando Safety" },
  { href: "/destination/orlando/orlando-female-solo-travel-guide", label: "Female Travel Guide" },
];

export default function OrlandoSafetyClient() {
  return (
    <>
        <Header links={navLinks} />
        <BookingCTA variant="slim" text="Book your Orlando trip â†’" href="/destination/orlando/bookings?tab=hotels&from=safety-guide" label="See Orlando hotels" />
        <div className={styles.container}>
        <SafetyHero />
        <InfoSection sections={sectionsData.sections} />
        <EmailSignup source="orlando-safety-guide" city="Orlando" />
        <SafetyNarrative />
        <ScenarioSection />
        <SafetyTipsGrid />
        <NeighborhoodSafetySection />
        <EmergencyContactBlock />
        <FAQAccordion faqs={faqData} />
        <LinkHubGrid />
        <WhyTrustThisGuide data={cityWhyTrustData} />
        </div>
        <BookingCTA variant="full" text="Choose a hotel in a safe neighbourhood in Orlando" href="/destination/orlando/bookings?tab=hotels&from=safety-guide" label="Book your trip" />
      </>
  );
}
