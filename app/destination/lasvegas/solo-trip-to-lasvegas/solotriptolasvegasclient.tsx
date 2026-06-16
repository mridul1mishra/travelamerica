"use client";
import styles from './solotriptolasvegas.module.css';
import QuickActionBar from './components/QuickActionBar/QuickActionBar';
import LasVegasNavHeader from './components/lasvegasnavheader/LasVegasNavHeader';
import sectionsData from "@/content/destination/lasvegas/solo-trip-to-lasvegas/infosection.json";
import getaroundData from "@/content/destination/lasvegas/solo-trip-to-lasvegas/gettingaround.json";
import InfoSection from './components/InfoSection/InfoSection';
import neighborhoodsData  from "@/content/destination/lasvegas/solo-trip-to-lasvegas/neighborhoods.json";
import BestNeighborhoodsGrid from './components/BestNeighborhoodsGrid/BestNeighborhoodsGrid';
import itineraryData from "@/content/destination/lasvegas/solo-trip-to-lasvegas/itinerary.json";
import { ItineraryProps } from "@/app/models/itinerary";
import ThreeDayItinerary from './components/ThreeDayItinerary/ThreeDayItinerary';
import femaleSoloData from "@/content/destination/lasvegas/solo-trip-to-lasvegas/femalesolo.json";
import FemaleSoloTiles from './components/FemaleSoloTiles/FemaleSoloTiles';
import { FemaleSoloData } from "@/app/models/femaleSolo";
import Footer from '@/app/components/Header/Footer/footer';
import { WhyTrustThisGuide } from './components/WhyTrustThisGuide/WhyTrustThisGuide';
import lasvegasWhyTrustData from "@/content/destination/lasvegas/solo-trip-to-lasvegas/whyTrustItems/whyTrustItems.json";
import { ScenarioSection } from './components/scenariocard/scenariosection';
import { SubwayAccessSection } from './components/subwayaccess/subwayaccess';
import faqData from "@/content/destination/lasvegas/solo-trip-to-lasvegas/faq/faqsection.json";
import FAQAccordion from './components/FAQAccordion/FAQAccordion';
import SoloLasVegasQa from './components/aisnippet/cardqanda';
import SoloTripNarrative from './components/solotripnarrative/SoloTripNarrative';
import BookingCTA from './components/BookingCTA/BookingCTA';
import HeroSection from './components/herosection/HeroSection';


export default function SoloTripToLasVegasClient() {
  const data = itineraryData as ItineraryProps;
  const femaleSolo = femaleSoloData as FemaleSoloData;
    return(
        <>
        <LasVegasNavHeader />
        <HeroSection />
        <BookingCTA variant="slim" text="Book your Las Vegas trip →" href="/destination/lasvegas/bookings?tab=flights&from=solo-trip-to-lasvegas" label="Book your trip" />
        <QuickActionBar />
        <InfoSection sections={sectionsData.sections} />
        <WhyTrustThisGuide data={lasvegasWhyTrustData} />
        <SoloLasVegasQa />
        <SoloTripNarrative />
        <BestNeighborhoodsGrid  neighborhoods={neighborhoodsData.neighborhoods}  ctaLink="/destination/lasvegas/best-areas-to-stay"/>
        <SubwayAccessSection />
        <InfoSection sections={getaroundData.sections} />
        <ThreeDayItinerary days={data.days} ctaLink="/destination/lasvegas/solo-itinerary" cityName="Las Vegas" />
        <ScenarioSection />
        <FemaleSoloTiles tiles={femaleSolo.tiles}  ctaLink={femaleSolo.ctaLink} cityName="Las Vegas" />
        <FAQAccordion faqs={faqData} />
        <BookingCTA variant="full" text="Start your trip: book flights and hotels" href="/destination/lasvegas/bookings?tab=flights&from=solo-trip-to-lasvegas" label="Book your trip" />
        <Footer></Footer>

        </>
    );
}
