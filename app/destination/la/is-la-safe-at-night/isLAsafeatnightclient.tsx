"use client"
import HeroSafety from "./components/hero/hero";
import SafetyMeter from "./components/SafetyMeter/SafetyMeter";
import NeighborhoodSafetyGrid from "./components/NeighborhoodSafetyGrid/NeighborhoodSafetyGrid";
import ScenarioCards from "./components/ScenarioCards/ScenarioCards";
import PersonaSafetyBlocks from "./components/PersonaSafetyBlocks/PersonaSafetyBlocks";
import CorePrinciples from "./components/CorePrinciples/CorePrinciples";
import TransitSafety from "./components/TransitSafety/TransitSafety";
import NeighborhoodCards from "./components/NeighborhoodCards/NeighborhoodCards";
import EmergencyBlock from "./components/EmergencyBlock/EmergencyBlock";
import FAQAccordion from "./components/FAQAccordion/FAQAccordion";
import InterlinkingGrid from "./components/InterlinkingGrid/InterlinkingGrid";
import TrustBlock from "./components/TrustBlock/TrustBlock";
import SectionWrapper from "./Sectionwrapper";
import data from "./is-la-safe-at-night.json";

import Header from "@/app/components/destination/header/header";
import Footer from "@/app/components/Header/Footer/footer";
import BookingCTA from './components/BookingCTA/BookingCTA';
// LA-ONLY EXTRA (kept from original LA page — NYC template has no equivalent section)
import { WhyTrustThisGuide } from "./components/WhyTrustThisGuide/WhyTrustThisGuide";
import laWhyTrustData from "@/content/destination/la/is-la-safe-at-night/whyTrustItems/whyTrustItems.json";

export default function Page() {

  // Load JSON content

  return (
    <>
    <Header />
      <BookingCTA variant="slim" text="Book your Los Angeles trip →" href="/destination/la/bookings?tab=hotels&from=is-la-safe-at-night" label="See safe-area hotels" />

      {/* 1. Hero Section */}
      <HeroSafety {...data.heroSafety} />


      {/* 2. Safety Verdict Snapshot */}
      <SectionWrapper id="safetyMeter">
      <SafetyMeter {...data.safetyMeter} />
      </SectionWrapper>

      {/* 3. Neighborhood Safety Grid */}
      <SectionWrapper id="neighborhoods">
      <NeighborhoodSafetyGrid neighborhoods={data.neighborhoodSafetyGrid} />
      </SectionWrapper>

      {/* 4. Night Scenarios */}
      <SectionWrapper id="scenarios">
      <ScenarioCards scenarios={data.scenarioCards} />
      </SectionWrapper>

      {/* 5. Persona Safety Blocks
      <SectionWrapper id="personas">
      <PersonaSafetyBlocks personas={data.personaSafetyBlocks} />
      </SectionWrapper>*/}

      {/* 6. Core Safety Principles */}
      <SectionWrapper id="principles">
      <CorePrinciples principles={data.corePrinciples} />
      </SectionWrapper>

      {/* 7. Transit Safety */}
      <SectionWrapper id="transitSafety">
      <TransitSafety {...data.transitSafety} />
      </SectionWrapper>

      {/* 8. Neighborhood Deep Dives */}
      <SectionWrapper id="neighborhoods">
      <NeighborhoodCards neighborhoods={data.neighborhoodCards} />
      </SectionWrapper>

      {/* 9. Emergency Resources */}
      <SectionWrapper id="emergencyBlock">
      <EmergencyBlock {...data.emergencyBlock} />
      </SectionWrapper>

      {/* 10. FAQ */}
      <SectionWrapper id="faq">
      <FAQAccordion faqs={data.faq} />
      </SectionWrapper>

      {/* 11. Internal Linking */}
      <SectionWrapper id="links">
      <InterlinkingGrid links={data.interlinkingGrid} />
      </SectionWrapper>

      {/* 12. Trust Block */}
      <SectionWrapper id="trustBlock">
      <TrustBlock {...data.trustBlock} />
      </SectionWrapper>

      {/* LA-ONLY EXTRA: WhyTrustThisGuide (shared component from original LA page) */}
      <SectionWrapper id="whyTrust">
      <WhyTrustThisGuide data={laWhyTrustData} />
      </SectionWrapper>

    <BookingCTA variant="full" text="Book a hotel in a safe, well-connected area" href="/destination/la/bookings?tab=hotels&from=is-la-safe-at-night" label="See safe-area hotels" />
    <Footer />
    </>
  );
}
