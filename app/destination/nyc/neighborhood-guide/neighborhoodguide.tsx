"use client"
import Header from "@/app/components/destination/header/header";
import Footer from "@/app/components/Header/Footer/footer";
import styles from "./neighborhoodguide.module.css";
import Banner from "./components/banner/banner";
import { IntroSection } from "./components/introsection/introsection";
import { WhyTrustThisGuide } from "@/app/components/destination/whytrustitem/whytrustthisguide";
import { SafetyGrid } from "./components/safetygrid/safetygrid";
import { AREAS } from "./components/safetygrid/safetygridData";
import { NeighborhoodGrid } from "./components/neighborhoodcard/neighborhoodgrid";
import { NEIGHBORHOODS } from "./components/neighborhoodcard/neighborhood";
import { TimeOfDaySafety } from "./components/Timeofday/timeofdaysafety";
import {TIME_OF_DAY} from "./components/Timeofday/TimeofDay";
import { TransitSafety } from "./components/TransitSafety/TransitSafety";
import {TRANSIT_SECTIONS} from "./components/TransitSafety/TransitSafetyData"
import { CautionAreas } from "./components/cautionarea/cautionarea";
import {CAUTION_AREAS} from "./components/cautionarea/cautionareadata";
import { InternalLinks } from "./components/InternalLinks/Internallinks";
import {INTERNAL_LINKS_DATA} from "./components/InternalLinks/interlinksdata";

export default function Neighborhoodguide() {
    return(
        <>
        <Header />
        <div className={styles.container}>
        <Banner />
        <IntroSection />
        <WhyTrustThisGuide />
        <SafetyGrid areas={AREAS} />
        <NeighborhoodGrid neighborhoods={NEIGHBORHOODS} />
        <TimeOfDaySafety times={TIME_OF_DAY}/>
        <TransitSafety sections={TRANSIT_SECTIONS} />
        <CautionAreas areas={CAUTION_AREAS} />
        <InternalLinks links={INTERNAL_LINKS_DATA} />;

        </div>
        <Footer />
        </>
    )

}