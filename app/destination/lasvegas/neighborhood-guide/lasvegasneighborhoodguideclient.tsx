"use client"
import Header from "@/app/components/destination/header/header";
import Footer from "@/app/components/Header/Footer/footer";
import styles from "./lasvegasneighborhoodguide.module.css";
import IntroSection from "./components/introsection/introsection";
import CityOrganization from "./components/cityorganization/cityorganization";
import NeighborhoodsByStyle from "./components/Neighborhoodbystyle/Neighborhoodbystyle";
import PopularNeighborhoods from "./components/PopularNeighborhood/Popularneighborhood";
import WhereFirstTimersStay from "./components/Wherefirsttimerstay/wherefirsttimestay";
import GettingAround from "./components/Gettingaround/Gettingaround";
import SafetyOverview from "./components/SafetyOverview/Safetyoverview";
import NeighborhoodGuideCTA from "./components/Neighborhoodguidecta/Neighborhoodguidecta";
import BookingCTA from './components/BookingCTA/BookingCTA';
// Las Vegas-only extras (no NYC equivalent) — preserved from original LV page. FLAGGED.
import { WhyTrustThisGuide } from "./components/WhyTrustThisGuide/WhyTrustThisGuide";
import cityWhyTrustData from "@/content/destination/lasvegas/neighborhood-guide/whyTrustItems/whyTrustItems.json";
import FAQAccordion from "./components/FAQAccordion/FAQAccordion";
import cityFaqData from "@/content/destination/lasvegas/neighborhood-guide/faq/faqsection.json";

type Props = {
    tripType?: string;
    interest?: string;
    duration?: string;
}
export default function LasVegasNeighborhoodGuideClient({tripType, interest, duration}: Props) {
    return(
        <>
        <Header links={[
          { href: "/destination/lasvegas/best-areas-to-stay", label: "Best Areas to Stay" },
          { href: "/destination/lasvegas/solo-trip-to-lasvegas", label: "Solo Trip to Las Vegas" },
          { href: "/destination/lasvegas/safety-guide", label: "Las Vegas Safety" },
          { href: "/destination/lasvegas/lasvegas-female-solo-travel-guide", label: "Female Travel Guide" },
        ]} />
        <BookingCTA variant="slim" text="Book your Las Vegas trip →" href="/destination/lasvegas/bookings?tab=hotels&from=neighborhood-guide" label="See Las Vegas hotels" />
        <div className={styles.container}>
        <IntroSection tripType={tripType} interest={interest}/>
        <CityOrganization />
        <NeighborhoodsByStyle interest={interest}/>
        <PopularNeighborhoods interest={interest}/>
        <WhereFirstTimersStay />
        <GettingAround />
        <SafetyOverview />
        <NeighborhoodGuideCTA tripType={tripType} interest={interest} />
        <WhyTrustThisGuide data={cityWhyTrustData} />
        <FAQAccordion faqs={cityFaqData} />
        </div>
        <BookingCTA variant="full" text="See hotels in the best Las Vegas neighborhoods" href="/destination/lasvegas/bookings?tab=hotels&from=neighborhood-guide" label="See Las Vegas hotels" />
        <Footer />
        </>
    )

}
