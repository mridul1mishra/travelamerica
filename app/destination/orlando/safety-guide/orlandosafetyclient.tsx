"use client"
import Header from './components/Header/header';
import SafetyHero from './components/herobanner/safetyhero';
import Footer from './components/Footer/footer';
import ScenarioSection from './components/scenariosection/scenariosection';
import NeighborhoodSafetySection from './components/neighborhoodsection/neighborhoodsafetysection';
import { WhyTrustThisGuide } from './components/WhyTrustThisGuide/whytrustthisguide';
import cityWhyTrustData from "@/content/destination/orlando/safety-guide/whyTrustItems/whyTrustItems.json";
import SafetyTipsGrid from './components/SafetyTips/safetytipcardgrid';
import FAQAccordion from './components/FAQAccordian/faqsection';
import faqData from "./components/FAQAccordian/FAQACcordina.json";
import styles from './orlandosafety.module.css';
import LinkHubGrid from './components/linkhubgrid/LinkHubGrid';
import InfoSection from './components/infosection/infosection';
import sectionsData from "./components/infosection/infosection.json";
import EmergencyContactBlock from './components/emergencycontactblock/EmergencyContactBlock';
import SafetyNarrative from './components/safetynarrative/SafetyNarrative';
import BookingCTA from './components/BookingCTA/BookingCTA';
import SafetyArticleTracker from '@/app/components/analytics/SafetyArticleTracker';
import CitySafetyHotelCTA from '@/app/components/hotels/CitySafetyHotelCTA';
import { orlandoRecommendedHotelAreas } from '@/app/lib/orlandoHotelAreas';
import EmailSignup from '@/app/components/destination/EmailSignup/EmailSignup';

const navLinks = [
  { href: "/destination/orlando/best-areas-to-stay", label: "Best Areas to Stay" },
  { href: "/destination/orlando/solo-trip-to-orlando", label: "Solo Trip to Orlando" },
  { href: "/destination/orlando/safety-guide", label: "Orlando Safety" },
  { href: "/destination/orlando/orlando-female-solo-travel-guide", label: "Female Travel Guide" },
];

export default function OrlandoSafetyClient() {
  return (
    <>
        <Header links={navLinks} />
        <SafetyArticleTracker />
        <BookingCTA variant="slim" text="Book your Orlando trip →" href="/destination/orlando/hotel?from=safety-guide" label="See Orlando hotels" ctaId="safe-area-hotels-top-banner" placement="top_banner" />
        <div className={styles.container}>
        <SafetyHero />
        <CitySafetyHotelCTA city="orlando" title="Stay in Orlando’s busiest visitor areas"
          intro="These areas are well lit, well staffed and close to the parks, which keeps evening returns simple. Compare hotels there, then check the exact route back before you book."
          choices={orlandoRecommendedHotelAreas} source="safety-guide" trackingId="recommended-orlando-hotel-areas" />
        <InfoSection sections={sectionsData.sections} />
        <EmailSignup source="orlando-safety-guide" city="Orlando" />
        <SafetyNarrative />
        <ScenarioSection />
        <SafetyTipsGrid />
        <NeighborhoodSafetySection />
        <EmergencyContactBlock />
        <FAQAccordion faqs={faqData} />
        <LinkHubGrid />
        <WhyTrustThisGuide data={cityWhyTrustData} />
        </div>
        <BookingCTA variant="full" text="Choose a hotel in a safe neighbourhood in Orlando" href="/destination/orlando/hotel?from=safety-guide" label="Book your trip" ctaId="safe-area-hotels-bottom" placement="bottom_booking_band" />
      </>
  );
}
