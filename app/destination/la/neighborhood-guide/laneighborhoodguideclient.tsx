"use client"
import Header from "@/app/components/destination/header/header";
import Footer from "@/app/components/Header/Footer/footer";
import styles from "./laneighborhoodguide.module.css";
import IntroSection from "./components/introsection/introsection";
import CityOrganization from "./components/cityorganization/cityorganization";
import NeighborhoodsByStyle from "./components/Neighborhoodbystyle/Neighborhoodbystyle";
import PopularNeighborhoods from "./components/PopularNeighborhood/Popularneighborhood";
import WhereFirstTimersStay from "./components/Wherefirsttimerstay/wherefirsttimestay";
import GettingAround from "./components/Gettingaround/Gettingaround";
import SafetyOverview from "./components/SafetyOverview/Safetyoverview";
import NeighborhoodGuideCTA from "./components/Neighborhoodguidecta/Neighborhoodguidecta";
import BookingCTA from '@/app/components/destination/BookingCTA/BookingCTA';
// LA-only extras (no NYC equivalent) — preserved from original LA page. FLAGGED.
import { WhyTrustThisGuide } from "@/app/components/destination/whytrustitem/whytrustthisguide";
import laWhyTrustData from "@/content/destination/la/neighborhood-guide/whyTrustItems/whyTrustItems.json";
import FAQAccordion from "@/app/components/destination/faqsection/faqsection";
import laFaqData from "@/content/destination/la/neighborhood-guide/faq/faqsection.json";

type Props = {
    tripType?: string;
    interest?: string;
    duration?: string;
}
export default function LANeighborhoodGuideClient({tripType, interest, duration}: Props) {
    return(
        <>
        <Header links={[
          { href: "/destination/la/best-areas-to-stay", label: "Best Areas to Stay" },
          { href: "/destination/la/solo-trip-to-la", label: "Solo Trip to LA" },
          { href: "/destination/la/safety-guide", label: "LA Safety" },
          { href: "/destination/la/la-female-solo-travel-guide", label: "Female Travel Guide" },
        ]} />
        <BookingCTA variant="slim" text="Book your Los Angeles trip →" href="/destination/la/bookings?tab=hotels&from=neighborhood-guide" label="See LA hotels" />
        <div className={styles.container}>
        <IntroSection tripType={tripType} interest={interest}/>
        <CityOrganization />
        <NeighborhoodsByStyle interest={interest}/>
        <PopularNeighborhoods interest={interest}/>
        <WhereFirstTimersStay />
        <GettingAround />
        <SafetyOverview />
        <NeighborhoodGuideCTA tripType={tripType} interest={interest} />
        <WhyTrustThisGuide data={laWhyTrustData} />
        <FAQAccordion faqs={laFaqData} />
        </div>
        <BookingCTA variant="full" text="See hotels in the best LA neighborhoods" href="/destination/la/bookings?tab=hotels&from=neighborhood-guide" label="See LA hotels" />
        <Footer />
        </>
    )

}
