"use client";

import sectionsData from "@/content/destination/infosection.json";
import getaroundData from "@/content/destination/gettingaround.json";
import neighborhoodsData from "@/content/destination/neighborhoods.json";
import itineraryData from "@/content/destination/itinerary.json";
import femaleSoloData from "@/content/destination/femalesolo.json";
import faqData from "@/content/destination/solotriptonyc/faqsection.json";
import { FemaleSoloData } from "@/app/models/femaleSolo";
import { ItineraryProps } from "@/app/models/itinerary";
import BookingCTA from "./components/BookingCTA/BookingCTA";
import EmailSignup from "./components/EmailSignup/EmailSignup";
import FAQAccordion from "./components/FAQAccordion/FAQAccordion";
import FemaleSoloTiles from "./components/FemaleSoloTiles/FemaleSoloTiles";
import Footer from "./components/Footer/Footer";
import { HeroSection } from "./components/herosection/HeroSection";
import InfoSection from "./components/InfoSection/InfoSection";
import NycNavHeader from "./components/nycnavheader/NycNavHeader";
import {
  AirportTransferMatrix,
  InternalLinkHub,
  ScamWarningBox,
  SeasonalSavings,
  SoloModePlanner
} from "./components/PlanningUtility/PlanningUtility";
import QuickActionBar from "./components/QuickActionBar/QuickActionBar";
import { ScenarioSection } from "./components/ScenarioSection/ScenarioSection";
import SoloNycQa from "./components/SoloNycQa/SoloNycQa";
import { SoloTripNarrative } from "./components/solotripnarrative/SoloTripNarrative";
import { SubwayAccessSection } from "./components/SubwayAccessSection/SubwayAccessSection";
import ThreeDayItinerary from "./components/ThreeDayItinerary/ThreeDayItinerary";
import { WhyTrustThisGuide } from "./components/WhyTrustThisGuide/WhyTrustThisGuide";
import BestNeighborhoodsGrid from "./components/BestNeighborhoodsGrid/BestNeighborhoodsGrid";

export default function SoloTripNYCClient() {
  const data = itineraryData as ItineraryProps;
  const femaleSolo = femaleSoloData as FemaleSoloData;

  return (
    <>
      <NycNavHeader />
      <HeroSection />
      <BookingCTA variant="slim" text="Download your NYC trip plan" href="/destination/nyc/solo-itinerary" label="Get the 3-day itinerary" />
      <QuickActionBar />
      <InfoSection sections={sectionsData.sections} />
      <ScamWarningBox />
      <BestNeighborhoodsGrid neighborhoods={neighborhoodsData.neighborhoods} ctaLink="/destination/nyc/best-areas-to-stay" />
      <SubwayAccessSection />
      <InfoSection sections={getaroundData.sections} />
      <AirportTransferMatrix />
      <EmailSignup source="solo-trip-to-nyc" />
      <WhyTrustThisGuide />
      <SoloNycQa />
      <SoloTripNarrative />
      <ThreeDayItinerary days={data.days} ctaLink="/destination/nyc/solo-itinerary" />
      <SoloModePlanner />
      <SeasonalSavings />
      <ScenarioSection />
      <FemaleSoloTiles tiles={femaleSolo.tiles} ctaLink={femaleSolo.ctaLink} />
      <InternalLinkHub />
      <FAQAccordion faqs={faqData} />
      <BookingCTA variant="full" text="Choose a hotel in a safe NYC neighborhood" href="/destination/nyc/booking?tab=hotels&from=solo-trip-to-nyc" label="See NYC hotels" />
      <Footer />
    </>
  );
}
