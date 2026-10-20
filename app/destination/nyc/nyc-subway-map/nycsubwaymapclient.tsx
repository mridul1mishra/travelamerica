"use client";
import Link from "next/link";
import Image from "next/image";
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
      <BookingCTA variant="slim" text="Book your New York trip →" href="/destination/nyc/hotel?from=nyc-subway-map" label="Book your trip" />
      <div className="page-container">
      <div className={styles.pagestack} id="top">

    <div className={styles.section}>
      <HeroBanner {...data.hero} />
    </div>

    <section className={styles.mapSection} aria-labelledby="map-heading">
      <h2 id="map-heading">NYC Subway Map</h2>
      <figure>
        <Image
          src={data.map.imageUrl}
          alt={data.map.alt}
          width={1600}
          height={1200}
          sizes="(max-width: 960px) 100vw, 960px"
          priority
        />
        <figcaption>{data.map.caption}</figcaption>
      </figure>
      <div className={styles.relatedLinks}>
        <Link href="/destination/nyc/nyc-subway-map/full">View Full-Size Map</Link>
        <a href="/data/majorcities/newyork/assets/map/nyc-subway-map.pdf" download>
          {data.map.downloadLabel}
        </a>
      </div>
    </section>

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

    <section className={styles.subwayPlanning} id="subway-trip-planning" aria-labelledby="apps-heading">
      <p className={styles.eyebrow}>Route planning</p>
      <h2 id="apps-heading">Using Google Maps &amp; the MTA App</h2>
      <p>
        Use Google Maps to find directions to your destination, then check the official MTA app for subway arrivals and service updates. The MTA app also offers maps and trip planning, so you can use it to plan your journey from start to finish.
      </p>
      <ol>
        <li>
          Enter your destination in Google Maps. Select Directions, then choose the public-transit option. Check the departure date and time before selecting a route. <a href="https://support.google.com/maps/answer/6142130?hl=en&amp;co=GENIE.Platform=iOS" target="_blank" rel="noreferrer">Google Maps transit directions</a>
        </li>
        <li>
          Review the journey before setting off. Note your starting station, train letter or number, transfers and destination station. Identify your train by its letter or number—not just its color, because trains with the same color can serve different stops. <a href="https://www.mta.info/guides/riding-the-subway" target="_blank" rel="noreferrer">MTA subway riding guide</a>
        </li>
        <li>
          Check the MTA app before entering the station. Review current arrivals and service status for the lines you plan to use. <a href="https://www.mta.info/guides/apps" target="_blank" rel="noreferrer">MTA apps</a>
        </li>
        <li>
          Follow station signs and announcements. Check the platform direction and the destination displayed on the arriving train rather than relying only on your phone. <a href="https://www.mta.info/guides/riding-the-subway" target="_blank" rel="noreferrer">MTA subway riding guide</a>
        </li>
      </ol>
      <p>
        Google Maps may display either real-time departures or scheduled times, depending on the station and available information. Treat a journey estimate as a planning aid, not a guaranteed arrival time. <a href="https://support.google.com/maps/answer/6142130?hl=en&amp;co=GENIE.Platform=iOS" target="_blank" rel="noreferrer">Google Maps transit directions</a>
      </p>
      <div className={styles.relatedLinks}>
        <a href="https://www.mta.info/guides/apps" target="_blank" rel="noreferrer">Explore the Official MTA App</a>
      </div>
    </section>

    <section className={styles.subwayPlanning} id="late-night-subway-tips" aria-labelledby="late-night-heading">
      <p className={styles.eyebrow}>Overnight travel</p>
      <h2 id="late-night-heading">Late-Night Subway Tips</h2>
      <p>
        The NYC subway operates around the clock, but a daytime map does not show every detail of overnight service. Check current service status and your route before starting a late-night journey. The MTA also provides a separate map showing overnight service. <a href="https://www.mta.info/guides/riding-the-subway" target="_blank" rel="noreferrer">MTA subway riding guide</a>
      </p>
      <ul>
        <li>
          Plan your return trip before heading back. Use the MTA app to review your route, transfers and expected arrivals, and check again if your plans change. <a href="https://www.mta.info/guides/apps" target="_blank" rel="noreferrer">MTA apps</a>
        </li>
        <li>
          Check signs and listen for announcements. Confirm that the arriving train serves your destination, especially when service notices indicate a change. <a href="https://www.mta.info/guides/riding-the-subway" target="_blank" rel="noreferrer">MTA subway riding guide</a>
        </li>
        <li>
          Stand well back from the platform edge. Never enter the tracks to retrieve a dropped item; ask an MTA employee for help. <a href="https://www.mta.info/guides/riding-the-subway" target="_blank" rel="noreferrer">MTA subway riding guide</a>
        </li>
        <li>
          Keep your belongings in view. On board, hold on while the train is moving and keep bags and personal items where you can see them. <a href="https://www.mta.info/guides/riding-the-subway" target="_blank" rel="noreferrer">MTA subway riding guide</a>
        </li>
        <li>
          Know how to ask for assistance. Speak to a station agent or use a blue Help Point intercom. The green button is for information; the red button is for emergencies. <a href="https://www.mta.info/guides/riding-the-subway" target="_blank" rel="noreferrer">MTA subway riding guide</a>
        </li>
      </ul>
      <p>
        If you witness a crime in progress, tell an MTA employee or police officer, use a Help Point, or call 911 immediately. These precautions can help you prepare, but no travel advice can guarantee personal safety. <a href="https://www.mta.info/guides/riding-the-subway" target="_blank" rel="noreferrer">MTA subway riding guide</a>
      </p>
      <div className={styles.relatedLinks}>
        <Link href="/destination/nyc/subway-safety-guide">Read Our NYC Subway Safety Guide</Link>
      </div>
    </section>

    <section className={styles.subwayPlanning} id="subway-etiquette" aria-labelledby="etiquette-heading">
      <p className={styles.eyebrow}>Riding together</p>
      <h2 id="etiquette-heading">Subway Etiquette 101</h2>
      <p>
        You do not need to know every local habit before your first subway ride. Start with these straightforward guidelines to keep doorways clear, respect other passengers and move through stations more comfortably. <a href="https://www.mta.info/guides/riding-the-subway" target="_blank" rel="noreferrer">MTA subway riding guide</a>
      </p>
      <ul>
        <li>
          Let passengers exit first. Wait beside the doors rather than directly in front of them, then board once people have stepped off. <a href="https://www.mta.info/guides/riding-the-subway" target="_blank" rel="noreferrer">MTA subway riding guide</a>
        </li>
        <li>
          Move into the car. Avoid gathering in the doorway when there is room farther inside. <a href="https://www.mta.info/guides/riding-the-subway" target="_blank" rel="noreferrer">MTA subway riding guide</a>
        </li>
        <li>
          Do not hold the doors open. Holding them delays service for everyone. <a href="https://www.mta.info/guides/riding-the-subway" target="_blank" rel="noreferrer">MTA subway riding guide</a>
        </li>
        <li>
          Keep seats available for passengers. Use only one seat, and leave accessible seats available for people who need them. <a href="https://www.mta.info/guides/riding-the-subway" target="_blank" rel="noreferrer">MTA subway riding guide</a>
        </li>
        <li>
          Keep bags and luggage out of the way. Do not block doors, stairs or passageways, and travel with belongings you can manage yourself. <a href="https://www.mta.info/guides/riding-the-subway" target="_blank" rel="noreferrer">MTA subway riding guide</a>
        </li>
        <li>
          Hold on while the train is moving. Keep your belongings in view and check that you have everything before leaving. <a href="https://www.mta.info/guides/riding-the-subway" target="_blank" rel="noreferrer">MTA subway riding guide</a>
        </li>
      </ul>
      <p>
        If you are unsure where to go, ask an MTA employee or use a station Help Point for information. <a href="https://www.mta.info/guides/riding-the-subway" target="_blank" rel="noreferrer">MTA subway riding guide</a>
      </p>
      <div className={styles.relatedLinks}>
        <Link href="#top">Back to the NYC Subway Map</Link>
      </div>
    </section>

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

    <BookingCTA variant="full" text="Booked your flight? Plan your NYC trip" href="/destination/nyc/hotel?from=nyc-subway-map" label="Book your trip" />
    <Footer />
    </>
  );
}
