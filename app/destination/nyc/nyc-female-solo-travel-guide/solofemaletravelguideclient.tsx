"use client"
import Header from "@/app/components/destination/header/header";
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
import Footer from "@/app/components/Header/Footer/footer";
import LinkHubGrid from "./components/linkhubgrid/LinkHubGrid";
import { WhyTrustThisGuide } from "@/app/components/destination/whytrustitem/whytrustthisguide";



export default function FemaleSoloTravelGuide() {
  return (
      <>
      <Header />
      <div className={styles.container}>
      <Hero />
      <InfoSection sections={sectionsData.sections}/>
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
      <Footer />
    </>
  );
}
