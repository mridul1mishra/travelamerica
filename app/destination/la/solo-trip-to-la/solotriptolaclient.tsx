"use client";
import QuickActionBar from './components/QuickActionBar/QuickActionBar';
import LaNavHeader from './components/lanavheader/LaNavHeader';
import sectionsData from "@/content/destination/la/solo-trip-to-la/infosection.json";
import InfoSection from './components/InfoSection/InfoSection';
import neighborhoodsData  from "@/content/destination/la/solo-trip-to-la/neighborhoods.json";
import BestNeighborhoodsGrid from './components/BestNeighborhoodsGrid/BestNeighborhoodsGrid';
import itineraryData from "@/content/destination/la/solo-trip-to-la/itinerary.json";
import { ItineraryProps } from "@/app/models/itinerary";
import ThreeDayItinerary from './components/ThreeDayItinerary/ThreeDayItinerary';
import femaleSoloData from "@/content/destination/la/solo-trip-to-la/femalesolo.json";
import FemaleSoloTiles from "./components/FemaleSoloTiles/FemaleSoloTiles";
import { FemaleSoloData } from "@/app/models/femaleSolo";
import Footer from '@/app/components/Header/Footer/footer';
import { WhyTrustThisGuide } from './components/WhyTrustThisGuide/WhyTrustThisGuide';
import laWhyTrustData from "@/content/destination/la/solo-trip-to-la/whyTrustItems/whyTrustItems.json";
import { ScenarioSection } from './components/scenariocard/scenariosection';
import { SubwayAccessSection } from './components/subwayaccess/subwayaccess';
import faqData from "@/content/destination/la/solo-trip-to-la/faq/faqsection.json";
import FAQAccordion from './components/FAQAccordion/FAQAccordion';
import { SoloLaQa } from './components/aisnippet/cardqanda';
import { SoloTripNarrative } from './components/solotripnarrative/SoloTripNarrative';
import BookingCTA from './components/BookingCTA/BookingCTA';
import { HeroSection } from './components/herosection/HeroSection';
import { SoloQuickVerdict } from './components/SoloQuickVerdict/SoloQuickVerdict';


export default function SoloTripToLAClient() {
  const data = itineraryData as ItineraryProps;
  const femaleSolo = femaleSoloData as FemaleSoloData;
    return(
        <>
        <LaNavHeader />
        <HeroSection />
        <BookingCTA variant="slim" text="Book hotels for your Los Angeles trip →" href="/destination/la/bookings?tab=hotels&from=solo-trip-to-la" label="Book your trip" />
        <QuickActionBar />
        <SoloQuickVerdict />
        <InfoSection sections={sectionsData.sections} />
        <WhyTrustThisGuide data={laWhyTrustData} />
        <BestNeighborhoodsGrid  neighborhoods={neighborhoodsData.neighborhoods}  ctaLink="/destination/la/best-areas-to-stay"/>
        <SubwayAccessSection />
        <ThreeDayItinerary days={data.days} ctaLink="/destination/la/solo-itinerary" cityName="LA" />
        <ScenarioSection />
        <FemaleSoloTiles tiles={femaleSolo.tiles}  ctaLink={femaleSolo.ctaLink} cityName="LA" />
        <SoloTripNarrative />
        <SoloLaQa />
        <FAQAccordion faqs={faqData} />
        <BookingCTA variant="full" text="Find the right hotel for your stay" href="/destination/la/bookings?tab=hotels&from=solo-trip-to-la" label="Book your trip" />
        <Footer></Footer>

        </>
    );
}
