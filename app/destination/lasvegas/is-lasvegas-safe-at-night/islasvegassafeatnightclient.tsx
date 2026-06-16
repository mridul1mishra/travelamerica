"use client"
import HeroSafety from "./components/hero/hero";
import SafetyMeter from "./components/SafetyMeter/SafetyMeter";
import NeighborhoodSafetyGrid from "./components/NeighborhoodSafetyGrid/NeighborhoodSafetyGrid";
import ScenarioCards from "./components/ScenarioCards/ScenarioCards";
import CorePrinciples from "./components/CorePrinciples/CorePrinciples";
import TransitSafety from "./components/TransitSafety/TransitSafety";
import NeighborhoodCards from "./components/NeighborhoodCards/NeighborhoodCards";
import EmergencyBlock from "./components/EmergencyBlock/EmergencyBlock";
import FAQAccordion from "./components/FAQAccordion/FAQAccordion";
import InterlinkingGrid from "./components/InterlinkingGrid/InterlinkingGrid";
import TrustBlock from "./components/TrustBlock/TrustBlock";
import SectionWrapper from "./Sectionwrapper";
import data from "./is-lasvegas-safe-at-night.json";

import Header from "@/app/components/destination/header/header";
import Footer from "@/app/components/Header/Footer/footer";
import BookingCTA from './components/BookingCTA/BookingCTA';

export default function IsLasVegasSafeAtNightClient() {
  return (
    <>
      <Header links={[
        { href: "/destination/lasvegas/best-areas-to-stay", label: "Best Areas to Stay" },
        { href: "/destination/lasvegas/solo-trip-to-lasvegas", label: "Solo Trip to Las Vegas" },
        { href: "/destination/lasvegas/safety-guide", label: "Las Vegas Safety" },
        { href: "/destination/lasvegas/lasvegas-female-solo-travel-guide", label: "Female Travel Guide" },
      ]} />
      <BookingCTA variant="slim" text="Book your Las Vegas trip →" href="/destination/lasvegas/bookings?tab=hotels&from=is-lasvegas-safe-at-night" label="See safe-area hotels" />

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

      {/* 5. Core Safety Principles */}
      <SectionWrapper id="principles">
        <CorePrinciples principles={data.corePrinciples} />
      </SectionWrapper>

      {/* 6. Transit Safety */}
      <SectionWrapper id="transitSafety">
        <TransitSafety {...data.transitSafety} />
      </SectionWrapper>

      {/* 7. Neighborhood Deep Dives */}
      <SectionWrapper id="neighborhoodCards">
        <NeighborhoodCards neighborhoods={data.neighborhoodCards} />
      </SectionWrapper>

      {/* 8. Emergency Resources */}
      <SectionWrapper id="emergencyBlock">
        <EmergencyBlock {...data.emergencyBlock} />
      </SectionWrapper>

      {/* 9. FAQ */}
      <SectionWrapper id="faq">
        <FAQAccordion faqs={data.faq} />
      </SectionWrapper>

      {/* 10. Internal Linking */}
      <SectionWrapper id="links">
        <InterlinkingGrid links={data.interlinkingGrid} />
      </SectionWrapper>

      {/* 11. Trust Block */}
      <SectionWrapper id="trustBlock">
        <TrustBlock {...data.trustBlock} />
      </SectionWrapper>

      <BookingCTA variant="full" text="Book a hotel in a safe, well-connected area" href="/destination/lasvegas/bookings?tab=hotels&from=is-lasvegas-safe-at-night" label="See safe-area hotels" />
      <Footer />
    </>
  );
}
