"use client";
import OrlandoNavHeader from "./components/orlandonavheader/OrlandoNavHeader";
import HeroSection from "./components/herosection/HeroSection";
import { SoloTripNarrative } from "./components/solotripnarrative/SoloTripNarrative";
import InfoSection from "@/app/components/infosection/infosection";
import sectionsData from "@/content/destination/orlando/solo-trip-to-orlando/infosection.json";
import getaroundData from "@/content/destination/orlando/solo-trip-to-orlando/gettingaround.json";
import neighborhoodsData from "@/content/destination/orlando/solo-trip-to-orlando/neighborhoods.json";
import BestNeighborhoodsGrid from "@/app/components/BestNeighborhoodGrid/bestneighborhoodgrid";
import itineraryData from "@/content/destination/orlando/solo-trip-to-orlando/itinerary.json";
import { ItineraryProps } from "@/app/models/itinerary";
import ThreeDayItinerary from "@/app/components/itinerary/itinerary";
import femaleSoloData from "@/content/destination/orlando/solo-trip-to-orlando/femalesolo.json";
import FemaleSoloTiles from "@/app/components/Solofemaletravel/solofemaletravel";
import { FemaleSoloData } from "@/app/models/femaleSolo";
import { WhyTrustThisGuide } from "@/app/components/destination/whytrustitem/whytrustthisguide";
import cityWhyTrustData from "@/content/destination/orlando/solo-trip-to-orlando/whyTrustItems/whyTrustItems.json";
import FAQAccordion from "@/app/components/destination/faqsection/faqsection";
import cityFaqData from "@/content/destination/orlando/solo-trip-to-orlando/faq/faqsection.json";
import BookingCTA from "@/app/components/destination/BookingCTA/BookingCTA";
import Footer from "@/app/components/Header/Footer/footer";

export default function SoloTripToOrlandoClient() {
  const data = itineraryData as ItineraryProps;
  const femaleSolo = femaleSoloData as FemaleSoloData;
  return (
    <>
      <OrlandoNavHeader />
      <HeroSection />
      <BookingCTA variant="slim" text="Book your solo Orlando trip →" href="/destination/orlando/bookings?tab=flights&from=solo-trip-to-orlando" label="Book your trip" />
      <InfoSection sections={sectionsData.sections} />
      <WhyTrustThisGuide data={cityWhyTrustData} />
      <SoloTripNarrative />
      <BestNeighborhoodsGrid neighborhoods={neighborhoodsData.neighborhoods} ctaLink="/destination/orlando/best-areas-to-stay" />
      <InfoSection sections={getaroundData.sections} />
      <ThreeDayItinerary days={data.days} ctaLink="/destination/orlando/solo-itinerary" />
      <FemaleSoloTiles tiles={femaleSolo.tiles} ctaLink={femaleSolo.ctaLink} cityName="Orlando" />
      <FAQAccordion faqs={cityFaqData} />
      <BookingCTA variant="full" text="Start your trip: book flights and hotels" href="/destination/orlando/bookings?tab=flights&from=solo-trip-to-orlando" label="Book your trip" />
      <Footer />
    </>
  );
}
