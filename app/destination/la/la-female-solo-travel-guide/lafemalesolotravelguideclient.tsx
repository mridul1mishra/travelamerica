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
import laWhyTrustData from "@/content/destination/la/la-female-solo-travel-guide/whyTrustItems/whyTrustItems.json";
import FemaleSafetyNarrative from "./components/safetynarrative/FemaleSafetyNarrative";
import BookingCTA from '@/app/components/destination/BookingCTA/BookingCTA';

const headerLinks = [
  { href: "/destination/la/best-areas-to-stay", label: "Best Areas to Stay" },
  { href: "/destination/la/solo-trip-to-la", label: "Solo Trip to LA" },
  { href: "/destination/la/safety-guide", label: "LA Safety" },
  { href: "/destination/la/la-female-solo-travel-guide", label: "Female Travel Guide" },
];

export default function FemaleSoloTravelGuide() {
  return (
      <>
      <Header links={headerLinks} />
      <BookingCTA variant="slim" text="Book your Los Angeles trip →" href="/destination/la/bookings?tab=hotels&from=female-solo" label="See LA hotels" />
      <div className={styles.container}>
      <Hero />
      <InfoSection sections={sectionsData.sections}/>
      <FemaleSafetyNarrative />
      <CoreSafetyPrinciplesGrid />
      <ScenarioSection />
      <ScenarioFilter />
      <SafetySection id="accommodation-safety" {...safetySections.accommodation} />
      <SafetySection id="transit-getting-around" {...safetySections.transit} />
      <SafetySection id="la-nightlife-dining" {...safetySections.night} />
      <MicroScenarios items={microScenarios} />
      <PackingEssentials items={packingEssentials} />
      <FAQAccordion faqs={faqData}/>
      <LinkHubGrid />
      <WhyTrustThisGuide data={laWhyTrustData} />
      </div>
      <BookingCTA variant="full" text="Book a safe, central hotel for solo travelers" href="/destination/la/bookings?tab=hotels&from=female-solo" label="See LA hotels" />
      <Footer />
    </>
  );
}
