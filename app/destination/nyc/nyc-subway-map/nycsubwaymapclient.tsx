"use client";
import Link from "next/link";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HeroBanner from "./components/herobanner/herobanner";
import IconCardGrid from "./components/naviagtioncard/navigationcard"
import { StepList } from "./components/steplist/steplist";
import { ScenarioCards } from "./components/ScenarioCards/ScenarioCards";
import styles from "./nycsubwaymap.module.css";
import {SafetyChecklist} from "./components/SafetyChecklist/SafetyChecklist";
import BookingCTA from "./components/BookingCTA/BookingCTA";
import dataJson from "./nyc-subway-map.json";
import type {HighIntentPageBase} from "./nyc-subway-map";

const data = dataJson as HighIntentPageBase;

export default function NYCSubwayMapClient() {
  return (
    <>
    <Header />
      <BookingCTA variant="slim" text="Book your New York trip →" href="/destination/nyc/booking?tab=hotels&from=nyc-subway-map" label="Book your trip" />
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

    <section className={styles.subwayPlanning} aria-labelledby="subway-planning-heading">
      <p className={styles.eyebrow}>Subway planning shortcut</p>
      <h2 id="subway-planning-heading">Use the map with a route app, then sanity-check the station choice</h2>
      <p>
        The NYC subway map is best for understanding line colors, transfers, borough direction, and local versus express stops. For the exact train, use Google Maps, Citymapper, or the MTA app, then check whether the station, exit, and late-night route make sense for your hotel.
      </p>
      <div className={styles.planningGrid}>
        <article>
          <h3>First-time visitor</h3>
          <p>Use the map to understand Uptown, Downtown, Brooklyn, and Queens direction before following app instructions.</p>
        </article>
        <article>
          <h3>Solo traveler</h3>
          <p>Favor busy transfer stations, avoid empty cars, and compare the last walk from the subway exit to your hotel.</p>
        </article>
        <article>
          <h3>Late night</h3>
          <p>Check service changes, train frequency, and whether a cab or rideshare is simpler after shows or bars.</p>
        </article>
      </div>
      <div className={styles.relatedLinks}>
        <Link href="/destination/nyc/subway-safety-guide">Subway safety guide</Link>
        <Link href="/destination/nyc/is-nyc-safe-at-night">NYC night safety</Link>
        <Link href="/destination/nyc/best-areas-to-stay">Best areas to stay</Link>
      </div>
    </section>

  </div>
</div>

    <BookingCTA variant="full" text="Booked your flight? Plan your NYC trip" href="/destination/nyc/booking?tab=hotels&from=nyc-subway-map" label="Book your trip" />
    <Footer />
    </>
  );
}
