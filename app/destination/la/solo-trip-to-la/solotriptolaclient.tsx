"use client";
import QuickActionBar from '@/app/components/quickactionbar/quickactionbar';
import LaNavHeader from './components/lanavheader/LaNavHeader';
import sectionsData from "@/content/destination/la/solo-trip-to-la/infosection.json";
import getaroundData from "@/content/destination/la/solo-trip-to-la/gettingaround.json";
import InfoSection from '@/app/components/infosection/infosection';
import neighborhoodsData  from "@/content/destination/la/solo-trip-to-la/neighborhoods.json";
import BestNeighborhoodsGrid from '@/app/components/BestNeighborhoodGrid/bestneighborhoodgrid';
import itineraryData from "@/content/destination/la/solo-trip-to-la/itinerary.json";
import { ItineraryProps } from "@/app/models/itinerary";
import ThreeDayItinerary from '@/app/components/itinerary/itinerary';
import femaleSoloData from "@/content/destination/la/solo-trip-to-la/femalesolo.json";
import FemaleSoloTiles from "@/app/components/Solofemaletravel/solofemaletravel";
import { FemaleSoloData } from "@/app/models/femaleSolo";
import Footer from '@/app/components/Header/Footer/footer';
import { WhyTrustThisGuide } from '@/app/components/destination/whytrustitem/whytrustthisguide';
import laWhyTrustData from "@/content/destination/la/solo-trip-to-la/whyTrustItems/whyTrustItems.json";
import { ScenarioSection } from './components/scenariocard/scenariosection';
import { SubwayAccessSection } from './components/subwayaccess/subwayaccess';
import faqData from "@/content/destination/la/solo-trip-to-la/faq/faqsection.json";
import FAQAccordion from '@/app/components/destination/faqsection/faqsection';
import { SoloLaQa } from './components/aisnippet/cardqanda';
import { SoloTripNarrative } from './components/solotripnarrative/SoloTripNarrative';
import BookingCTA from '@/app/components/destination/BookingCTA/BookingCTA';
import { HeroSection } from './components/herosection/HeroSection';


export default function SoloTripToLAClient() {
  const data = itineraryData as ItineraryProps;
  const femaleSolo = femaleSoloData as FemaleSoloData;
    return(
        <>
        <LaNavHeader />
        <HeroSection />
        <BookingCTA variant="slim" text="Book hotels for your Los Angeles trip →" href="/destination/la/bookings?tab=hotels&from=solo-trip-to-la" label="Book your trip" />
        <QuickActionBar />
        <InfoSection sections={sectionsData.sections} />
        <WhyTrustThisGuide data={laWhyTrustData} />
        <SoloLaQa />
        <SoloTripNarrative />
        <BestNeighborhoodsGrid  neighborhoods={neighborhoodsData.neighborhoods}  ctaLink="/destination/la/best-areas-to-stay"/>
        <SubwayAccessSection />
        <InfoSection sections={getaroundData.sections} />
        <ThreeDayItinerary days={data.days} ctaLink="/destination/la/solo-itinerary" cityName="LA" />
        <ScenarioSection />
        <FemaleSoloTiles tiles={femaleSolo.tiles}  ctaLink={femaleSolo.ctaLink} cityName="LA" />
        <FAQAccordion faqs={faqData} />
        <BookingCTA variant="full" text="Find the right hotel for your stay" href="/destination/la/bookings?tab=hotels&from=solo-trip-to-la" label="Book your trip" />
        <Footer></Footer>

        </>
    );
}
