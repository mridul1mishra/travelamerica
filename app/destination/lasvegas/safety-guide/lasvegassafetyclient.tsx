"use client"
import Header from '@/app/components/destination/header/header';
import SafetyHero from './components/herobanner/safetyhero';
import Footer from '@/app/components/Header/Footer/footer';
import ScenarioSection from './components/scenariosection/scenariosection';
import NeighborhoodSafetySection from './components/neighborhoodsection/neighborhoodsafetysection';
import { WhyTrustThisGuide } from '@/app/components/destination/whytrustitem/whytrustthisguide';
import cityWhyTrustData from "@/content/destination/lasvegas/safety-guide/whyTrustItems/whyTrustItems.json";
import SafetyTipsGrid from './components/SafetyTips/safetytipcardgrid';
import FAQAccordion from './components/FAQAccordian/faqsection';
import faqData from "./components/FAQAccordian/FAQACcordina.json";
import styles from './lasvegassafety.module.css';
import LinkHubGrid from './components/linkhubgrid/LinkHubGrid';
import InfoSection from './components/infosection/infosection';
import sectionsData from "./components/infosection/infosection.json";
import EmergencyContactBlock from './components/emergencycontactblock/EmergencyContactBlock';
import SafetyNarrative from './components/safetynarrative/SafetyNarrative';
import BookingCTA from '@/app/components/destination/BookingCTA/BookingCTA';

export default function LasVegasSafetyClient() {
  return (
    <>
        <Header links={[
          { href: "/destination/lasvegas/best-areas-to-stay", label: "Best Areas to Stay" },
          { href: "/destination/lasvegas/solo-trip-to-lasvegas", label: "Solo Trip to Las Vegas" },
          { href: "/destination/lasvegas/safety-guide", label: "Las Vegas Safety" },
          { href: "/destination/lasvegas/lasvegas-female-solo-travel-guide", label: "Female Travel Guide" },
        ]} />
        <BookingCTA variant="slim" text="Book your Las Vegas trip →" href="/destination/lasvegas/bookings?tab=hotels&from=safety-guide" label="See Las Vegas hotels" />
        <div className={styles.container}>
        <SafetyHero />
        <InfoSection sections={sectionsData.sections} />
        <SafetyNarrative />
        <ScenarioSection />
        <SafetyTipsGrid />
        <NeighborhoodSafetySection />
        <EmergencyContactBlock />
        <FAQAccordion faqs={faqData} />
        <LinkHubGrid />
        <WhyTrustThisGuide data={cityWhyTrustData} />
        </div>
        <BookingCTA variant="full" text="Choose a hotel in a safe Las Vegas area" href="/destination/lasvegas/bookings?tab=hotels&from=safety-guide" label="See Las Vegas hotels" />
        <Footer />
    </>
  );
}
