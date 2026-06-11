"use client";
import QuickActionBar from '@/app/components/quickactionbar/quickactionbar';
import NycNavHeader from './components/nycnavheader/NycNavHeader';
import sectionsData from "@/content/destination/infosection.json";
import getaroundData from "@/content/destination/gettingaround.json";
import InfoSection from '@/app/components/infosection/infosection';
import neighborhoodsData  from "@/content/destination/neighborhoods.json";
import BestNeighborhoodsGrid from '@/app/components/BestNeighborhoodGrid/bestneighborhoodgrid';
import itineraryData from "@/content/destination/itinerary.json";
import { ItineraryProps } from "@/app/models/itinerary";
import ThreeDayItinerary from '@/app/components/itinerary/itinerary';
import femaleSoloData from "@/content/destination/femalesolo.json";
import FemaleSoloTiles from "@/app/components/Solofemaletravel/solofemaletravel";
import { FemaleSoloData } from "@/app/models/femaleSolo";
import Footer from '@/app/components/Header/Footer/footer';
import { WhyTrustThisGuide } from '@/app/components/destination/whytrustitem/whytrustthisguide';
import { ScenarioSection } from '@/app/components/destination/scenariocard/scenariosection';
import { SubwayAccessSection } from '@/app/components/destination/subwayaccess/subwayaccess';
import faqData from "@/content/destination/solotriptonyc/faqsection.json";
import FAQAccordion from '@/app/components/destination/faqsection/faqsection';
import SoloNycQa from '@/app/components/destination/solotriptonyc/aisnippet/cardqanda';
import { SoloTripNarrative } from './components/solotripnarrative/SoloTripNarrative';
import BookingCTA from '@/app/components/destination/BookingCTA/BookingCTA';
import EmailSignup from '@/app/components/destination/EmailSignup/EmailSignup';
import { HeroSection } from './components/herosection/HeroSection';


export default function SoloTripNYCClient() {
  const data = itineraryData as ItineraryProps;
  const femaleSolo = femaleSoloData as FemaleSoloData;
    return(
        <>
        <NycNavHeader />
        <HeroSection />
        <BookingCTA variant="slim" text="Book your New York trip →" href="/destination/nyc/booking?tab=flights&from=solo-trip-to-nyc" label="Book your trip" />
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
        <BookingCTA variant="full" text="Start your trip: book flights and hotels" href="/destination/nyc/booking?tab=flights&from=solo-trip-to-nyc" label="Book your trip" />
        <Footer></Footer>

        </>
    );
}
