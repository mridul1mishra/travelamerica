"use client";
import OrlandoNavHeader from "./components/orlandonavheader/OrlandoNavHeader";
import HeroSection from "./components/herosection/HeroSection";
import BookingCTA from "./components/BookingCTA/BookingCTA";
import QuickActionBar from "./components/QuickActionBar/quickactionbar";
import InfoSection from "./components/InfoSection/infosection";
import sectionsData from "@/content/destination/orlando/solo-trip-to-orlando/infosection.json";
import getaroundData from "@/content/destination/orlando/solo-trip-to-orlando/gettingaround.json";
import { WhyTrustThisGuide } from "./components/WhyTrustThisGuide/whytrustthisguide";
import cityWhyTrustData from "@/content/destination/orlando/solo-trip-to-orlando/whyTrustItems/whyTrustItems.json";
import SoloOrlandoQa from "./components/aisnippet/cardqanda";
import { SoloTripNarrative } from "./components/solotripnarrative/SoloTripNarrative";
import neighborhoodsData from "@/content/destination/orlando/solo-trip-to-orlando/neighborhoods.json";
import BestNeighborhoodsGrid from "./components/BestNeighborhoodsGrid/bestneighborhoodgrid";
import { TransitAccessSection } from "./components/transitaccess/TransitAccessSection";
import itineraryData from "@/content/destination/orlando/solo-trip-to-orlando/itinerary.json";
import { ItineraryProps } from "@/app/models/itinerary";
import ThreeDayItinerary from "./components/ThreeDayItinerary/itinerary";
import { ScenarioSection } from "./components/scenariocard/scenariosection";
import femaleSoloData from "@/content/destination/orlando/solo-trip-to-orlando/femalesolo.json";
import FemaleSoloTiles from "./components/FemaleSoloTiles/solofemaletravel";
import { FemaleSoloData } from "@/app/models/femaleSolo";
import FAQAccordion from "./components/FAQAccordion/faqsection";
import cityFaqData from "@/content/destination/orlando/solo-trip-to-orlando/faq/faqsection.json";
import EmailSignup from "./components/EmailSignup/EmailSignup";
import Footer from "./components/Footer/footer";

export default function SoloTripToOrlandoClient() {
  const data = itineraryData as ItineraryProps;
  const femaleSolo = femaleSoloData as FemaleSoloData;
  return (
    <>
      <OrlandoNavHeader />
      <HeroSection />
      <BookingCTA variant="slim" text="Book hotels for your Orlando trip â†’" href="/destination/orlando/bookings?tab=hotels&from=solo-trip-to-orlando" label="Book your trip" />
      <QuickActionBar />
      <InfoSection sections={sectionsData.sections} />
      <EmailSignup source="solo-trip-to-orlando" city="Orlando" />
      <WhyTrustThisGuide data={cityWhyTrustData} />
      <SoloOrlandoQa />
      <SoloTripNarrative />
      <BestNeighborhoodsGrid neighborhoods={neighborhoodsData.neighborhoods} ctaLink="/destination/orlando/best-areas-to-stay" />
      <TransitAccessSection />
      <InfoSection sections={getaroundData.sections} />
      <ThreeDayItinerary days={data.days} ctaLink="/destination/orlando/solo-itinerary" cityName="Orlando" />
      <ScenarioSection />
      <FemaleSoloTiles tiles={femaleSolo.tiles} ctaLink={femaleSolo.ctaLink} cityName="Orlando" />
      <FAQAccordion faqs={cityFaqData} />
      <BookingCTA variant="full" text="Find the right hotel for your Orlando stay" href="/destination/orlando/bookings?tab=hotels&from=solo-trip-to-orlando" label="Book your trip" />
      <Footer />
    </>
  );
}
