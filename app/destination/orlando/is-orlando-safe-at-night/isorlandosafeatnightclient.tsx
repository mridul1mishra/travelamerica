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
import data from "./is-orlando-safe-at-night.json";

import Header from "@/app/components/destination/header/header";
import Footer from "@/app/components/Header/Footer/footer";
import BookingCTA from '@/app/components/destination/BookingCTA/BookingCTA';

const navLinks = [
  { href: "/destination/orlando/best-areas-to-stay", label: "Best Areas to Stay" },
  { href: "/destination/orlando/solo-trip-to-orlando", label: "Solo Trip to Orlando" },
  { href: "/destination/orlando/safety-guide", label: "Orlando Safety" },
  { href: "/destination/orlando/orlando-female-solo-travel-guide", label: "Female Travel Guide" },
];

export default function IsOrlandoSafeAtNightClient() {
  return (
    <>
      <Header links={navLinks} />
      <BookingCTA variant="slim" text="Book your Orlando trip →" href="/destination/orlando/bookings?tab=hotels&from=is-orlando-safe-at-night" label="See safe-area hotels" />

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

      {/* 5. Persona-Driven Safety Advice */}
      <SectionWrapper id="personas">
        <PersonaSafetyBlocks personas={data.personaSafetyBlocks} />
      </SectionWrapper>

      {/* 6. Core Safety Principles */}
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

      <BookingCTA variant="full" text="Book a hotel in a safe, central Orlando area" href="/destination/orlando/bookings?tab=hotels&from=is-orlando-safe-at-night" label="See safe-area hotels" />
      <Footer />
    </>
  );
}
