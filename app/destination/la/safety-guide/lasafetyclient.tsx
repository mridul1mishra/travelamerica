"use client"


import Header from '@/app/components/destination/header/header';
import SafetyHero from './components/herobanner/safetyhero';
import Footer from '@/app/components/Header/Footer/footer';
import NeighborhoodSafetySection from './components/neighborhoodsection/neighborhoodsafetysection';
import { WhyTrustThisGuide } from './components/WhyTrustThisGuide/WhyTrustThisGuide';
import SafetyTipsGrid from './components/SafetyTips/safetytipcardgrid';
import ScenarioSection from './components/scenariosection/scenariosection';
import FAQAccordion from './components/FAQAccordian/faqsection';
import faqData from "./components/FAQAccordian/FAQACcordina.json";
import styles from './lasafetyguide.module.css';
import LinkHubGrid from './components/linkhubgrid/LinkHubGrid';
import InfoSection from './components/infosection/infosection';
import sectionsData from "./components/infosection/infosection.json";
import EmergencyContactBlock from './components/emergencycontactblock/EmergencyContactBlock';
import SafetyNarrative from './components/safetynarrative/SafetyNarrative';
import BookingCTA from './components/BookingCTA/BookingCTA';
import SafetyArticleTracker from '@/app/components/analytics/SafetyArticleTracker';
import CitySafetyHotelCTA from '@/app/components/hotels/CitySafetyHotelCTA';
import { laRecommendedHotelAreas } from '@/app/lib/laHotelAreas';
import laWhyTrustData from "@/content/destination/la/safety-guide/whyTrustItems/whyTrustItems.json";

export default function LASafetyClient() {
  return (
    <>
        <Header links={[
          { href: "/destination/la/best-areas-to-stay", label: "Best Areas to Stay" },
          { href: "/destination/la/solo-trip-to-la", label: "Solo Trip to LA" },
          { href: "/destination/la/safety-guide", label: "LA Safety" },
          { href: "/destination/la/la-female-solo-travel-guide", label: "Female Travel Guide" },
        ]} />
        <SafetyArticleTracker />
        <BookingCTA variant="slim" text="Book your Los Angeles trip →" href="/destination/la/hotel?from=safety-guide" label="See LA hotels" ctaId="safe-area-hotels-top-banner" placement="top_banner" />
        <div className={styles.container}>
        {/* banner component */}
        <SafetyHero />
        <CitySafetyHotelCTA city="la" title="Stay close to your LA plans"
          intro="These areas put hotels near shows, dining and events, which keeps late returns short. Compare hotels there, then check the entrance and route back before you book."
          choices={laRecommendedHotelAreas} source="safety-guide" trackingId="recommended-la-hotel-areas" />
        <InfoSection sections={sectionsData.sections}  />
        <SafetyNarrative />
        <ScenarioSection />
        <SafetyTipsGrid />
        <NeighborhoodSafetySection />
        <EmergencyContactBlock />
        <FAQAccordion faqs={faqData}/>
        <LinkHubGrid />
        <WhyTrustThisGuide data={laWhyTrustData} />
        </div>
        <BookingCTA variant="full" text="Choose a hotel in a safe LA neighborhood" href="/destination/la/hotel?from=safety-guide" label="See LA hotels" ctaId="safe-area-hotels-bottom" placement="bottom_booking_band" />
        <Footer />

    </>
  );
}
