"use client";
import OrlandoNavHeader from "./components/orlandonavheader/OrlandoNavHeader";
import HeroSection from "./components/herosection/HeroSection";
import BookingCTA from "@/app/components/destination/BookingCTA/BookingCTA";
import QuickActionBar from "@/app/components/quickactionbar/quickactionbar";
import InfoSection from "@/app/components/infosection/infosection";
import sectionsData from "@/content/destination/orlando/solo-trip-to-orlando/infosection.json";
import getaroundData from "@/content/destination/orlando/solo-trip-to-orlando/gettingaround.json";
import { WhyTrustThisGuide } from "@/app/components/destination/whytrustitem/whytrustthisguide";
import cityWhyTrustData from "@/content/destination/orlando/solo-trip-to-orlando/whyTrustItems/whyTrustItems.json";
import SoloOrlandoQa from "./components/aisnippet/cardqanda";
import { SoloTripNarrative } from "./components/solotripnarrative/SoloTripNarrative";
import neighborhoodsData from "@/content/destination/orlando/solo-trip-to-orlando/neighborhoods.json";
import BestNeighborhoodsGrid from "@/app/components/BestNeighborhoodGrid/bestneighborhoodgrid";
import { TransitAccessSection } from "./components/transitaccess/TransitAccessSection";
import itineraryData from "@/content/destination/orlando/solo-trip-to-orlando/itinerary.json";
import { ItineraryProps } from "@/app/models/itinerary";
import ThreeDayItinerary from "@/app/components/itinerary/itinerary";
import { ScenarioSection } from "./components/scenariocard/scenariosection";
import femaleSoloData from "@/content/destination/orlando/solo-trip-to-orlando/femalesolo.json";
import FemaleSoloTiles from "@/app/components/Solofemaletravel/solofemaletravel";
import { FemaleSoloData } from "@/app/models/femaleSolo";
import FAQAccordion from "@/app/components/destination/faqsection/faqsection";
import cityFaqData from "@/content/destination/orlando/solo-trip-to-orlando/faq/faqsection.json";
import EmailSignup from "@/app/components/destination/EmailSignup/EmailSignup";
import Footer from "@/app/components/Header/Footer/footer";

export default function SoloTripToOrlandoClient() {
  const data = itineraryData as ItineraryProps;
  const femaleSolo = femaleSoloData as FemaleSoloData;
  return (
    <>
      <OrlandoNavHeader />
      <HeroSection />
      <BookingCTA variant="slim" text="Book hotels for your Orlando trip →" href="/destination/orlando/bookings?tab=hotels&from=solo-trip-to-orlando" label="Book your trip" />
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
