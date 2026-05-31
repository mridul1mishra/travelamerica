"use client"
import Header from "@/app/components/destination/header/header";
import Footer from "@/app/components/Header/Footer/footer";
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
import BookingCTA from '@/app/destination/nyc/components/BookingCTA/BookingCTA';

type Props = {
    tripType?: string;
    interest?: string;
    duration?: string;
}
export default function Neighborhoodguide({tripType, interest, duration}: Props) {
    return(
        <>
        <Header />
        <BookingCTA variant="slim" text="Book your New York trip →" href="/destination/nyc/booking?tab=hotels&from=neighborhood-guide" label="See NYC hotels" />
        <div className={styles.container}>
        <IntroSection tripType={tripType} interest={interest}/>
        <CityOrganization />
        <NeighborhoodsByStyle interest={interest}/>
        <PopularNeighborhoods interest={interest}/>
        <WhereFirstTimersStay />
        <GettingAround />
        <SafetyOverview />
        <NeighborhoodGuideCTA tripType={tripType} interest={interest} />
        </div>
        <BookingCTA variant="full" text="See hotels in the best NYC neighborhoods" href="/destination/nyc/booking?tab=hotels&from=neighborhood-guide" label="See NYC hotels" />
        <Footer />
        </>
    )

}