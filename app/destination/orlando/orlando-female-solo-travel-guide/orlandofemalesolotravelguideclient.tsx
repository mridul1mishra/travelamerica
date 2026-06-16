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
import cityWhyTrustData from "@/content/destination/orlando/orlando-female-solo-travel-guide/whyTrustItems/whyTrustItems.json";
import FemaleSafetyNarrative from "./components/safetynarrative/FemaleSafetyNarrative";
import BookingCTA from '@/app/components/destination/BookingCTA/BookingCTA';
import EmailSignup from '@/app/components/destination/EmailSignup/EmailSignup';

const navLinks = [
  { href: "/destination/orlando/best-areas-to-stay", label: "Best Areas to Stay" },
  { href: "/destination/orlando/solo-trip-to-orlando", label: "Solo Trip to Orlando" },
  { href: "/destination/orlando/safety-guide", label: "Orlando Safety" },
  { href: "/destination/orlando/orlando-female-solo-travel-guide", label: "Female Travel Guide" },
];

export default function OrlandoFemaleSoloClient() {
  return (
      <>
      <Header links={navLinks} />
      <BookingCTA variant="slim" text="Book your Orlando trip →" href="/destination/orlando/bookings?tab=hotels&from=female-solo" label="See Orlando hotels" />
      <div className={styles.container}>
      <Hero />
      <InfoSection sections={sectionsData.sections}/>
      <EmailSignup source="orlando-female-solo-travel-guide" city="Orlando" />
      <FemaleSafetyNarrative />
      <CoreSafetyPrinciplesGrid />
      <ScenarioSection />
      <ScenarioFilter />
      <SafetySection id="accommodation-safety" {...safetySections.accommodation} />
      <SafetySection id="transit-getting-around" {...safetySections.transit} />
      <SafetySection id="orlando-nightlife-dining" {...safetySections.night} />
      <MicroScenarios items={microScenarios} />
      <PackingEssentials items={packingEssentials} />
      <FAQAccordion faqs={faqData}/>
      <LinkHubGrid />
      <WhyTrustThisGuide data={cityWhyTrustData} />
      </div>
      <BookingCTA variant="full" text="Find solo-friendly hotels for your Orlando trip" href="/destination/orlando/bookings?tab=hotels&from=female-solo" label="Book your trip" />
      </>
  );
}
