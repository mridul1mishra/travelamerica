"use client"
import Header from "@/app/components/destination/header/header";
import Footer from "@/app/components/Header/Footer/footer";
import styles from "./neighborhoodguide.module.css";
import Banner from "./components/banner-notused/banner";
import IntroSection  from "./components/introsection/introsection";
import { WhyTrustThisGuide } from "@/app/components/destination/whytrustitem/whytrustthisguide";
import { SafetyGrid } from "./components/safetygrid-notused/safetygrid";
import { AREAS } from "./components/safetygrid-notused/safetygridData";
import { NeighborhoodGrid } from "./components/neighborhoodcard-notused/neighborhoodgrid";
import { NEIGHBORHOODS } from "./components/neighborhoodcard-notused/neighborhood";
import { TimeOfDaySafety } from "./components/Timeofday-notused/timeofdaysafety";
import {TIME_OF_DAY} from "./components/Timeofday-notused/TimeofDay";
import { TransitSafety } from "./components/TransitSafety-notused/TransitSafety";
import {TRANSIT_SECTIONS} from "./components/TransitSafety-notused/TransitSafetyData"
import { CautionAreas } from "./components/cautionarea-notused/cautionarea";
import {CAUTION_AREAS} from "./components/cautionarea-notused/cautionareadata";
import { InternalLinks } from "./components/InternalLinks-notused/Internallinks";
import {INTERNAL_LINKS_DATA} from "./components/InternalLinks-notused/interlinksdata";
import CityOrganization from "./components/cityorganization/cityorganization";
import NeighborhoodsByStyle from "./components/Neighborhoodbystyle/Neighborhoodbystyle";
import PopularNeighborhoods from "./components/PopularNeighborhood/Popularneighborhood";
import WhereFirstTimersStay from "./components/Wherefirsttimerstay-notused/wherefirsttimestay";
import GettingAround from "./components/Gettingaround/Gettingaround";
import SafetyOverview from "./components/SafetyOverview/Safetyoverview";
import NeighborhoodGuideCTA from "./components/Neighborhoodguidecta/Neighborhoodguidecta";

export default function Neighborhoodguide() {
    return(
        <>
        <Header />
        <div className={styles.container}>
        {/* <Banner />*/}
        <IntroSection />
        <CityOrganization />
        <NeighborhoodsByStyle />
        <PopularNeighborhoods />
        <WhereFirstTimersStay />
        <GettingAround />
        <SafetyOverview />
        <NeighborhoodGuideCTA />
         {/*<WhyTrustThisGuide />
        <SafetyGrid areas={AREAS} />
        <NeighborhoodGrid neighborhoods={NEIGHBORHOODS} />
        <TimeOfDaySafety times={TIME_OF_DAY}/>
        <TransitSafety sections={TRANSIT_SECTIONS} />
        <CautionAreas areas={CAUTION_AREAS} />
        <InternalLinks links={INTERNAL_LINKS_DATA} />;*/}

        </div>
        <Footer />
        </>
    )

}