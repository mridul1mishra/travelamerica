"use client"


import Header from "./components/Header/Header";
import SafetyHero from './components/herobanner/safetyhero';
import Footer from "./components/Footer/Footer";
import ScenarioCard from './components/scenariosection/scenariocard';
import ScenarioSection from './components/scenariosection/scenariosection';
import NeighborhoodSafetySection from './components/neighborhoodsection/neighborhoodsafetysection';
import { WhyTrustThisGuide } from "./components/WhyTrustThisGuide/WhyTrustThisGuide";
import SafetyCardGrid from './components/safetycardgrid/safetycardgrid';
import SafetyTipsGrid from './components/SafetyTips/safetytipcardgrid';
import FAQAccordion from './components/FAQAccordian/faqsection';
import faqData from "./components/FAQAccordian/FAQACcordina.json";
import styles from './nycsafetyguide.module.css';
import LinkHubGrid from './components/linkhubgrid/LinkHubGrid';
import InfoSection from './components/infosection/infosection';
import sectionsData from "./components/infosection/infosection.json";
import EmergencyContactBlock from './components/emergencycontactblock/EmergencyContactBlock';
import SafetyNarrative from './components/safetynarrative/SafetyNarrative';
import BookingCTA from "./components/BookingCTA/BookingCTA";
import EmailSignup from "./components/EmailSignup/EmailSignup";

export default function NYCSafetyGuideClient() {
  return (
    <>
        <Header />
        <BookingCTA variant="slim" text="Book your New York trip →" href="/destination/nyc/booking?tab=hotels&from=nyc-safety-guide" label="See NYC hotels" />
        <div className={styles.container}>
        {/* banner component */}
        <SafetyHero />
        <InfoSection sections={sectionsData.sections}  />
        <EmailSignup source="nyc-safety-guide" />
        <SafetyNarrative />
        <ScenarioSection />
        <SafetyTipsGrid />
        <NeighborhoodSafetySection />
        <EmergencyContactBlock />
        <FAQAccordion faqs={faqData}/>
        <LinkHubGrid />
        <WhyTrustThisGuide />
        </div>
        <BookingCTA variant="full" text="Choose a hotel in a safe NYC neighborhood" href="/destination/nyc/booking?tab=hotels&from=nyc-safety-guide" label="See NYC hotels" />
        <Footer />

    </>
  );
}
