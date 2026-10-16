"use client"
import Header from '@/app/components/destination/header/header';
import SafetyHero from './components/herobanner/safetyhero';
import Footer from '@/app/components/Header/Footer/footer';
import ScenarioSection from './components/scenariosection/scenariosection';
import NeighborhoodSafetySection from './components/neighborhoodsection/neighborhoodsafetysection';
import { WhyTrustThisGuide } from './components/WhyTrustThisGuide/WhyTrustThisGuide';
import cityWhyTrustData from "@/content/destination/lasvegas/safety-guide/whyTrustItems/whyTrustItems.json";
import SafetyTipsGrid from './components/SafetyTips/safetytipcardgrid';
import FAQAccordion from './components/FAQAccordian/faqsection';
import faqData from "./components/FAQAccordian/FAQACcordina.json";
import styles from './lasvegassafety.module.css';
import LinkHubGrid from './components/linkhubgrid/LinkHubGrid';
import InfoSection from './components/infosection/infosection';
import sectionsData from "./components/infosection/infosection.json";
import EmergencyContactBlock from './components/emergencycontactblock/EmergencyContactBlock';
import SafetyNarrative from './components/safetynarrative/SafetyNarrative';
import BookingCTA from './components/BookingCTA/BookingCTA';
import SafetyArticleTracker from '@/app/components/analytics/SafetyArticleTracker';
import CitySafetyHotelCTA from '@/app/components/hotels/CitySafetyHotelCTA';
import { lasvegasRecommendedHotelAreas } from '@/app/lib/lasvegasHotelAreas';

export default function LasVegasSafetyClient() {
  return (
    <>
        <Header links={[
          { href: "/destination/lasvegas/best-areas-to-stay", label: "Best Areas to Stay" },
          { href: "/destination/lasvegas/solo-trip-to-lasvegas", label: "Solo Trip to Las Vegas" },
          { href: "/destination/lasvegas/safety-guide", label: "Las Vegas Safety" },
          { href: "/destination/lasvegas/lasvegas-female-solo-travel-guide", label: "Female Travel Guide" },
        ]} />
        <SafetyArticleTracker />
        <BookingCTA variant="slim" text="Book your Las Vegas trip →" href="/destination/lasvegas/hotel?from=safety-guide" label="See Las Vegas hotels" ctaId="safe-area-hotels-top-banner" placement="top_banner" />
        <div className={styles.container}>
        <SafetyHero />
        <CitySafetyHotelCTA city="lasvegas" title="Stay where Las Vegas stays busy at night"
          intro="The Strip and Fremont Street have steady crowds, resort security and late-night transport. Compare hotels there, then check how you will get back after a late show."
          choices={lasvegasRecommendedHotelAreas} source="safety-guide" trackingId="recommended-lasvegas-hotel-areas" />
        <InfoSection sections={sectionsData.sections} />
        <SafetyNarrative />
        <ScenarioSection />
        <SafetyTipsGrid />
        <NeighborhoodSafetySection />
        <EmergencyContactBlock />
        <FAQAccordion faqs={faqData} />
        <LinkHubGrid />
        <WhyTrustThisGuide data={cityWhyTrustData} />
        </div>
        <BookingCTA variant="full" text="Choose a hotel in a safe Las Vegas area" href="/destination/lasvegas/hotel?from=safety-guide" label="See Las Vegas hotels" ctaId="safe-area-hotels-bottom" placement="bottom_booking_band" />
        <Footer />
    </>
  );
}
