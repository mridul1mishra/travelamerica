"use client";
import QuickActionBar from "./components/QuickActionBar/QuickActionBar";
import NycNavHeader from './components/nycnavheader/NycNavHeader';
import sectionsData from "@/content/destination/infosection.json";
import getaroundData from "@/content/destination/gettingaround.json";
import InfoSection from "./components/InfoSection/InfoSection";
import neighborhoodsData  from "@/content/destination/neighborhoods.json";
import BestNeighborhoodsGrid from "./components/BestNeighborhoodsGrid/BestNeighborhoodsGrid";
import itineraryData from "@/content/destination/itinerary.json";
import { ItineraryProps } from "@/app/models/itinerary";
import ThreeDayItinerary from "./components/ThreeDayItinerary/ThreeDayItinerary";
import femaleSoloData from "@/content/destination/femalesolo.json";
import FemaleSoloTiles from "./components/FemaleSoloTiles/FemaleSoloTiles";
import { FemaleSoloData } from "@/app/models/femaleSolo";
import Footer from "./components/Footer/Footer";
import { WhyTrustThisGuide } from "./components/WhyTrustThisGuide/WhyTrustThisGuide";
import { ScenarioSection } from "./components/ScenarioSection/ScenarioSection";
import { SubwayAccessSection } from "./components/SubwayAccessSection/SubwayAccessSection";
import faqData from "@/content/destination/solotriptonyc/faqsection.json";
import FAQAccordion from "./components/FAQAccordion/FAQAccordion";
import SoloNycQa from "./components/SoloNycQa/SoloNycQa";
import { SoloTripNarrative } from './components/solotripnarrative/SoloTripNarrative';
import BookingCTA from "./components/BookingCTA/BookingCTA";
import EmailSignup from "./components/EmailSignup/EmailSignup";
import { HeroSection } from './components/herosection/HeroSection';


export default function SoloTripNYCClient() {
  const data = itineraryData as ItineraryProps;
  const femaleSolo = femaleSoloData as FemaleSoloData;
    return(
        <>
        <NycNavHeader />
        <HeroSection />
        <BookingCTA variant="slim" text="Book your New York trip →" href="/destination/nyc/booking?tab=hotels&from=solo-trip-to-nyc" label="See NYC hotels" />
        <QuickActionBar />
        <InfoSection sections={sectionsData.sections} />
        <EmailSignup source="solo-trip-to-nyc" />
        <WhyTrustThisGuide />
        <SoloNycQa />
        <SoloTripNarrative />
        <BestNeighborhoodsGrid  neighborhoods={neighborhoodsData.neighborhoods}  ctaLink="/destination/nyc/landmark"/>
        <SubwayAccessSection />
        <InfoSection sections={getaroundData.sections} />
        <ThreeDayItinerary days={data.days} ctaLink="/destination/nyc/solo-itinerary" />
        <ScenarioSection />
        <FemaleSoloTiles tiles={femaleSolo.tiles}  ctaLink={femaleSolo.ctaLink} />
        <FAQAccordion faqs={faqData} />
        <BookingCTA variant="full" text="Choose a hotel in a safe NYC neighborhood" href="/destination/nyc/booking?tab=hotels&from=solo-trip-to-nyc" label="See NYC hotels" />
        <Footer></Footer>

        </>
    );
}
