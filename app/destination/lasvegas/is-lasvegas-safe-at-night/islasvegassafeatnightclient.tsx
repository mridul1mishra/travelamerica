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
import SafetyArticleTracker from "@/app/components/analytics/SafetyArticleTracker";
import CitySafetyHotelCTA from "@/app/components/hotels/CitySafetyHotelCTA";
import { lasvegasRecommendedHotelAreas } from "@/app/lib/lasvegasHotelAreas";

export default function IsLasVegasSafeAtNightClient() {
  return (
    <>
      <Header links={[
        { href: "/destination/lasvegas/best-areas-to-stay", label: "Best Areas to Stay" },
        { href: "/destination/lasvegas/solo-trip-to-lasvegas", label: "Solo Trip to Las Vegas" },
        { href: "/destination/lasvegas/safety-guide", label: "Las Vegas Safety" },
        { href: "/destination/lasvegas/lasvegas-female-solo-travel-guide", label: "Female Travel Guide" },
      ]} />
      <BookingCTA variant="slim" text="Book your Las Vegas trip →" href="/destination/lasvegas/hotel?from=is-lasvegas-safe-at-night" label="See safe-area hotels" ctaId="safe-area-hotels-top-banner" placement="top_banner" />
      <SafetyArticleTracker />

      {/* 1. Hero Section */}
      <HeroSafety {...data.heroSafety} />
      <CitySafetyHotelCTA city="lasvegas" title="Stay where Las Vegas stays busy at night"
        intro="The Strip and Fremont Street have steady crowds, resort security and late-night transport. Staying there keeps the walk back after a show short."
        choices={lasvegasRecommendedHotelAreas} source="is-lasvegas-safe-at-night" trackingId="recommended-lasvegas-hotel-areas" />

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

      <BookingCTA variant="full" text="Book a hotel in a safe, well-connected area" href="/destination/lasvegas/hotel?from=is-lasvegas-safe-at-night" label="See safe-area hotels" ctaId="safe-area-hotels-bottom" placement="bottom_booking_band" />
      <Footer />
    </>
  );
}
