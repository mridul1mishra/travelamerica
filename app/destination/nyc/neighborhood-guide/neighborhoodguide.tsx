"use client"
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import styles from "./neighborhoodguide.module.css";
// Dead imports for -notused/ folders removed. Their JSX usages below were already
// commented out, and the folders themselves were deleted during this cleanup pass.
import IntroSection  from "./components/introsection/introsection";
import CityOrganization from "./components/cityorganization/cityorganization";
import NeighborhoodsByStyle from "./components/Neighborhoodbystyle/Neighborhoodbystyle";
import PopularNeighborhoods from "./components/PopularNeighborhood/Popularneighborhood";
import WhereFirstTimersStay from "./components/Wherefirsttimerstay/wherefirsttimestay";
import GettingAround from "./components/Gettingaround/Gettingaround";
import SafetyOverview from "./components/SafetyOverview/Safetyoverview";
import NeighborhoodGuideCTA from "./components/Neighborhoodguidecta/Neighborhoodguidecta";
import BookingCTA from "./components/BookingCTA/BookingCTA";
import { WhyTrustThisGuide } from "./components/WhyTrustThisGuide/WhyTrustThisGuide";
import FAQAccordion from "./components/FAQAccordion/FAQAccordion";
import faqData from '@/content/destination/nyc/neighborhood-guide/faq/faqsection.json';

type Props = {
    interest?: string;
}
export default function Neighborhoodguide({interest}: Props) {
    return(
        <>
        <Header />
        <BookingCTA variant="slim" text="Book your New York trip →" href="/destination/nyc/booking?tab=hotels&from=neighborhood-guide" label="See NYC hotels" />
        <div className={styles.container}>
        <IntroSection />
        <CityOrganization />
        <NeighborhoodsByStyle interest={interest}/>
        <PopularNeighborhoods interest={interest}/>
        <WhereFirstTimersStay />
        <GettingAround />
        <SafetyOverview />
        <WhyTrustThisGuide />
        <FAQAccordion faqs={faqData} />
        <NeighborhoodGuideCTA />
        </div>
        <BookingCTA variant="full" text="See hotels in the best NYC neighborhoods" href="/destination/nyc/booking?tab=hotels&from=neighborhood-guide" label="See NYC hotels" />
        <Footer />
        </>
    )

}
