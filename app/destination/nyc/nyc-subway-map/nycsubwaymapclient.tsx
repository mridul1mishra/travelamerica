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
      <div className="page-container">
      <div className={styles.pagestack} id="top">

    <div className={styles.section}>
      <HeroBanner {...data.hero} />
    </div>

    <section className={styles.mapSection} aria-labelledby="map-heading">
      <h2 id="map-heading">NYC Subway Map</h2>
      <figure>
        <Link
          href="/destination/nyc/nyc-subway-map/full"
          className={styles.mapPreviewLink}
          aria-label="Open the full-size NYC subway map"
        >
          <Image
            src={data.map.imageUrl}
            alt={data.map.alt}
            width={1600}
            height={1200}
            sizes="(max-width: 960px) 100vw, 960px"
            priority
          />
        </Link>
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
    <div className={styles.subwayGuideSections}>
      <section className={styles.subwayGuide} id="subway-trip-planning" aria-labelledby="apps-heading">
        <header className={styles.guideHeader}>
          <p className={styles.guideEyebrow}>Route planning</p>
          <h2 id="apps-heading">Using Google Maps &amp; the MTA App</h2>
          <p className={styles.guideIntro}>
            Use Google Maps to find directions to your destination, then check the official MTA app for subway arrivals and service updates. The MTA app also offers maps and trip planning, so you can use it to plan your journey from start to finish.
          </p>
        </header>

        <ol className={styles.guideSteps} role="list">
          <li>
            <h3>Choose your route</h3>
            <p>Enter your destination in Google Maps. Select Directions, then choose the public-transit option. Check the departure date and time before selecting a route.</p>
          </li>
          <li>
            <h3>Check your train and direction</h3>
            <p>Review the journey before setting off. Note your starting station, train letter or number, transfers and destination station. Identify your train by its letter or number—not just its color, because trains with the same color can serve different stops.</p>
          </li>
          <li>
            <h3>Review service updates</h3>
            <p>Check the MTA app before entering the station. Review current arrivals and service status for the lines you plan to use.</p>
          </li>
          <li>
            <h3>Confirm signs at the station</h3>
            <p>Follow station signs and announcements. Check the platform direction and the destination displayed on the arriving train rather than relying only on your phone.</p>
          </li>
        </ol>

        <aside className={styles.guideNote} aria-label="Planning reminder">
          <p>Google Maps may display either real-time departures or scheduled times, depending on the station and available information. Treat a journey estimate as a planning aid, not a guaranteed arrival time.</p>
        </aside>

        <footer className={styles.guideFooter}>
          <div className={styles.guideResources}>
            <h3>Resources</h3>
            <ul role="list">
              <li><a href="https://support.google.com/maps/answer/6142130?hl=en&amp;co=GENIE.Platform=iOS" target="_blank" rel="noreferrer">Google Maps transit directions and departure times</a></li>
              <li><a href="https://www.mta.info/guides/riding-the-subway" target="_blank" rel="noreferrer">MTA subway riding guide for train and station information</a></li>
              <li><a href="https://www.mta.info/guides/apps" target="_blank" rel="noreferrer">MTA apps for arrivals and service updates</a></li>
            </ul>
          </div>
          <a className={styles.guideCta} href="https://www.mta.info/guides/apps" target="_blank" rel="noreferrer">Explore the Official MTA App</a>
        </footer>
      </section>

      <section className={styles.subwayGuide} id="late-night-subway-tips" aria-labelledby="late-night-heading">
        <header className={styles.guideHeader}>
          <p className={styles.guideEyebrow}>Overnight travel</p>
          <h2 id="late-night-heading">Late-Night Subway Tips</h2>
          <p className={styles.guideIntro}>
            The NYC subway operates around the clock, but a daytime map does not show every detail of overnight service. Check current service status and your route before starting a late-night journey. The MTA also provides a separate map showing overnight service.
          </p>
        </header>

        <ul className={styles.guideTips} role="list">
          <li>
            <h3>Plan your return trip</h3>
            <p>Use the MTA app to review your route, transfers and expected arrivals, and check again if your plans change.</p>
          </li>
          <li>
            <h3>Check signs and announcements</h3>
            <p>Confirm that the arriving train serves your destination, especially when service notices indicate a change.</p>
          </li>
          <li>
            <h3>Stay back from the platform edge</h3>
            <p>Never enter the tracks to retrieve a dropped item; ask an MTA employee for help.</p>
          </li>
          <li>
            <h3>Keep your belongings in view</h3>
            <p>On board, hold on while the train is moving and keep bags and personal items where you can see them.</p>
          </li>
          <li>
            <h3>Know how to ask for assistance</h3>
            <p>Speak to a station agent or use a blue Help Point intercom. The green button is for information; the red button is for emergencies.</p>
          </li>
        </ul>

        <aside className={`${styles.guideNote} ${styles.guideNoteImportant}`} aria-label="Emergency instructions">
          <p>If you witness a crime in progress, tell an MTA employee or police officer, use a Help Point, or call 911 immediately. These precautions can help you prepare, but no travel advice can guarantee personal safety.</p>
        </aside>

        <footer className={styles.guideFooter}>
          <div className={styles.guideResources}>
            <h3>Resources</h3>
            <ul role="list">
              <li><a href="https://www.mta.info/guides/riding-the-subway" target="_blank" rel="noreferrer">MTA subway riding guide, including overnight service and Help Points</a></li>
              <li><a href="https://www.mta.info/guides/apps" target="_blank" rel="noreferrer">MTA apps for routes and arrivals</a></li>
            </ul>
          </div>
          <Link className={styles.guideCta} href="/destination/nyc/subway-safety-guide">Read Our NYC Subway Safety Guide</Link>
        </footer>
      </section>
    </div>

    <div className={styles.section}>
      <div className={styles.sectioninner}>
        <SafetyChecklist items={data.safety} />
      </div>
    </div>

    <div className={styles.subwayGuideSections}>
      <section className={styles.subwayGuide} id="subway-etiquette" aria-labelledby="etiquette-heading">
        <header className={styles.guideHeader}>
          <p className={styles.guideEyebrow}>Riding together</p>
          <h2 id="etiquette-heading">Subway Etiquette 101</h2>
          <p className={styles.guideIntro}>
            You do not need to know every local habit before your first subway ride. Start with these straightforward guidelines to keep doorways clear, respect other passengers and move through stations more comfortably.
          </p>
        </header>

        <ul className={`${styles.guideTips} ${styles.guideTipsColumns}`} role="list">
          <li>
            <h3>Let passengers exit first</h3>
            <p>Wait beside the doors rather than directly in front of them, then board once people have stepped off.</p>
          </li>
          <li>
            <h3>Move into the car</h3>
            <p>Avoid gathering in the doorway when there is room farther inside.</p>
          </li>
          <li>
            <h3>Do not hold the doors open</h3>
            <p>Holding them delays service for everyone.</p>
          </li>
          <li>
            <h3>Keep seats available for passengers</h3>
            <p>Use only one seat, and leave accessible seats available for people who need them.</p>
          </li>
          <li>
            <h3>Keep bags and luggage out of the way</h3>
            <p>Do not block doors, stairs or passageways, and travel with belongings you can manage yourself.</p>
          </li>
          <li>
            <h3>Hold on while the train is moving</h3>
            <p>Keep your belongings in view and check that you have everything before leaving.</p>
          </li>
        </ul>

        <aside className={styles.guideNote} aria-label="Station help">
          <p>If you are unsure where to go, ask an MTA employee or use a station Help Point for information.</p>
        </aside>

        <footer className={styles.guideFooter}>
          <div className={styles.guideResources}>
            <h3>Resources</h3>
            <ul role="list">
              <li><a href="https://www.mta.info/guides/riding-the-subway" target="_blank" rel="noreferrer">MTA subway riding guide</a></li>
            </ul>
          </div>
          <Link className={styles.guideCta} href="#top">Back to the NYC Subway Map</Link>
        </footer>
      </section>
    </div>

  </div>
</div>

    <BookingCTA variant="full" text="Booked your flight? Plan your NYC trip" href="/destination/nyc/hotel?from=nyc-subway-map" label="Book your trip" />
    <Footer />
    </>
  );
}
