"use client";
import Header from "@/app/components/destination/header/header";
import Footer from "@/app/components/Header/Footer/footer";
import HeroBanner from "./components/herobanner/herobanner";
import IconCardGrid from "./components/naviagtioncard/navigationcard"
import { StepList } from "./components/steplist/steplist";
import { ScenarioCards } from "./components/ScenarioCards/ScenarioCards";
import styles from "./lametromap.module.css";
import {SafetyChecklist} from "./components/SafetyChecklist/SafetyChecklist";
import BookingCTA from './components/BookingCTA/BookingCTA';

const data: HighIntentPageBase = require("./la-metro-map.json");
import type {HighIntentPageBase} from "./la-metro-map";

export default function LAMetroMapClient() {
  return (
    <>
    <Header />
      <BookingCTA variant="slim" text="Book your Los Angeles trip →" href="/destination/la/bookings?tab=flights&from=la-metro-map" label="Book your trip" />
      <div className="page-container">
  <div className={styles.pagestack}>

    <div className={styles.section}>
      <HeroBanner {...data.hero} />
    </div>

    <div className={styles.section}>
      <div className={styles.sectioninner}>
        <IconCardGrid items={data.quickNav} />
      </div>
    </div>

    <div className={styles.section}>
      <div className={styles.sectioninner}>
      <StepList steps={data.howToRead} />
      </div>
    </div>

    <div className={styles.section}>
      <div className={styles.sectioninner}>
      <ScenarioCards routes={data.routes} />
      </div>
    </div>
    <div className={styles.section}>
      <div className={styles.sectioninner}>
      <SafetyChecklist items={data.safety} />
      </div>
    </div>

  </div>
</div>

    <BookingCTA variant="full" text="Booked your flight? Plan your LA trip" href="/destination/la/bookings?tab=flights&from=la-metro-map" label="Book your trip" />
    <Footer />
    </>
  );
}
