"use client"


import Header from '@/app/components/destination/header/header';
import SafetyHero from './components/herobanner/safetyhero';
import Footer from '@/app/components/Header/Footer/footer';
import NeighborhoodSafetySection from './components/neighborhoodsection/neighborhoodsafetysection';
import { WhyTrustThisGuide } from '@/app/components/destination/whytrustitem/whytrustthisguide';
import SafetyTipsGrid from './components/SafetyTips/safetytipcardgrid';
import ScenarioSection from './components/scenariosection/scenariosection';
import FAQAccordion from './components/FAQAccordian/faqsection';
import faqData from "./components/FAQAccordian/FAQACcordina.json";
import styles from './lasafetyguide.module.css';
import LinkHubGrid from './components/linkhubgrid/LinkHubGrid';
import InfoSection from './components/infosection/infosection';
import sectionsData from "./components/infosection/infosection.json";
import EmergencyContactBlock from './components/emergencycontactblock/EmergencyContactBlock';
import SafetyNarrative from './components/safetynarrative/SafetyNarrative';
import BookingCTA from '@/app/components/destination/BookingCTA/BookingCTA';
import laWhyTrustData from "@/content/destination/la/safety-guide/whyTrustItems/whyTrustItems.json";

export default function LASafetyClient() {
  return (
    <>
        <Header links={[
          { href: "/destination/la/best-areas-to-stay", label: "Best Areas to Stay" },
          { href: "/destination/la/solo-trip-to-la", label: "Solo Trip to LA" },
          { href: "/destination/la/safety-guide", label: "LA Safety" },
          { href: "/destination/la/la-female-solo-travel-guide", label: "Female Travel Guide" },
        ]} />
        <BookingCTA variant="slim" text="Book your Los Angeles trip →" href="/destination/la/bookings?tab=hotels&from=safety-guide" label="See LA hotels" />
        <div className={styles.container}>
        {/* banner component */}
        <SafetyHero />
        <InfoSection sections={sectionsData.sections}  />
        <SafetyNarrative />
        <ScenarioSection />
        <SafetyTipsGrid />
        <NeighborhoodSafetySection />
        <EmergencyContactBlock />
        <FAQAccordion faqs={faqData}/>
        <LinkHubGrid />
        <WhyTrustThisGuide data={laWhyTrustData} />
        </div>
        <BookingCTA variant="full" text="Choose a hotel in a safe LA neighborhood" href="/destination/la/bookings?tab=hotels&from=safety-guide" label="See LA hotels" />
        <Footer />

    </>
  );
}
