"use client"
import Header from "./components/Header/Header";
import Hero from "./components/Hero/herobanner";
import styles from "./page.module.css";
import InfoSection from "./components/infosection/infosection";
import sectionsData from "./components/infosection/infosection.json";
import CoreSafetyPrinciplesGrid from "./components/coresafetyprinciples/CoreSafetyPrinciplesGrid";
import ScenarioSection from "./components/scenariosection/scenariosection";
import ScenarioFilter from "./components/scenariocard/ScenarioFilter";
import { safetySections } from "./components/safetysection/safetySectionsData";
import SafetySection from "./components/safetysection/SafetySection";
import MicroScenarios from "./components/microscenarios/microscenario";
import { microScenarios } from "./components/microscenarios/microScenarioData";
import { packingEssentials } from "./components/packingessential/packingEssentialData";
import PackingEssentials from "./components/packingessential/packingEssential";
import FAQAccordion from "./components/FAQAccordian/faqsection";
import faqData from "./components/FAQAccordian/FAQACcordina.json";
import Footer from "./components/Footer/Footer";
import LinkHubGrid from "./components/linkhubgrid/LinkHubGrid";
import { WhyTrustThisGuide } from "./components/WhyTrustThisGuide/WhyTrustThisGuide";
import FemaleSafetyNarrative from "./components/safetynarrative/FemaleSafetyNarrative";
import BookingCTA from './components/BookingCTA/BookingCTA';
import EmailSignup from './components/EmailSignup/EmailSignup';

export default function FemaleSoloTravelGuide() {
  return (
      <>
      <Header />
      <BookingCTA variant="slim" text="Book your New York trip →" href="/destination/nyc/booking?tab=hotels&from=female-solo" label="See NYC hotels" />
      <div className={styles.container}>
      <Hero />
      <InfoSection sections={sectionsData.sections}/>
      <EmailSignup source="nyc-female-solo-travel-guide" />
      <FemaleSafetyNarrative />
      <CoreSafetyPrinciplesGrid />
      <ScenarioSection />
      <ScenarioFilter />
      <SafetySection id="accommodation-safety" {...safetySections.accommodation} />
      <SafetySection id="transit-getting-around" {...safetySections.transit} />
      <SafetySection id="nyc-nightlife-dining" {...safetySections.night} />
      <MicroScenarios items={microScenarios} />
      <PackingEssentials items={packingEssentials} />
      <FAQAccordion faqs={faqData}/>
      <LinkHubGrid />
      <WhyTrustThisGuide />
      </div>
      <BookingCTA variant="full" text="Book a safe, central hotel for solo travelers" href="/destination/nyc/booking?tab=hotels&from=female-solo" label="See NYC hotels" />
      <Footer />
    </>
  );
}
