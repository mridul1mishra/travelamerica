"use client";
import HeroBanner from "./components/HeroBanner/HeroBanner";
import NavigationHeader from "./components/NavigationHeader/NavigationHeader";
import Link from "next/link";
import Footer from "./components/Footer/Footer";
import styles from "./landmark.module.css";
import BookingCTA from "./components/BookingCTA/BookingCTA";

import { LANDMARKS } from './landmarks-data';


export default function LandmarkPage() {

  // ---- JSON-LD schemas ----





  return (
    <>

      <NavigationHeader />
      <HeroBanner
        image="/data/majorcities/newyork/assets/statue-of-liberty.webp"
        bannerText="New York City Landmarks Guide"
      />
      <BookingCTA variant="slim" text="Book your New York trip →" href="/destination/nyc/booking?tab=activities&from=landmark" label="See tickets" />

      <section className={styles.intro} style={{ textAlign: "center" }}>
        <h1 className={styles.sectionheading}>NYC Landmarks Guide: 9 Must-See Sights</h1>
        <p className={styles.introLead}>
          New York&apos;s landmarks are spread across boroughs, priced all over the map, and some are worth half a day
          while others are a 20-minute photo stop. This guide gives you the practical details for the nine that
          matter most &mdash; hours, ticket prices, the nearest subway, how long to budget, and when to go to skip
          the worst crowds &mdash; so you can fit them into real days. Last updated: June 2026. Verify hours and
          prices on the venue&apos;s own site before going; NYC attractions change schedules seasonally.
          (Traveling alone? Each entry includes an insider tip that&apos;s particularly useful for solo visitors too.)
        </p>

        <nav aria-label="Jump to landmark" className={styles.jumpnav}>
          {LANDMARKS.map((l) => (
            <a key={l.id} href={`#${l.id}`} className={styles.jumpLink}>{l.name}</a>
          ))}
        </nav>
      </section>

      <section className={styles.landmarkList}>
        {LANDMARKS.map((l) => (
          <article key={l.id} id={l.id} className={styles.landmarkCard}>
            <h2 className={styles.landmarkName}>{l.name}</h2>
            <p className={styles.landmarkNeighborhood}>{l.neighborhood}</p>

            <dl className={styles.landmarkMeta}>
              <div className={styles.metaRow}>
                <dt>Address</dt>
                <dd>{l.address}</dd>
              </div>
              <div className={styles.metaRow}>
                <dt>Subway</dt>
                <dd>{l.subway}</dd>
              </div>
              <div className={styles.metaRow}>
                <dt>Hours</dt>
                <dd>{l.hours}</dd>
              </div>
              <div className={styles.metaRow}>
                <dt>Ticket</dt>
                <dd>{l.ticket}</dd>
              </div>
              <div className={styles.metaRow}>
                <dt>Time needed</dt>
                <dd>{l.timeNeeded}</dd>
              </div>
              <div className={styles.metaRow}>
                <dt>Best time to go</dt>
                <dd>{l.bestTime}</dd>
              </div>
            </dl>

            <div className={styles.landmarkBody}>
              <h3 className={styles.landmarkSubhead}>What to do</h3>
              <p>{l.whatToDo}</p>

              <h3 className={styles.landmarkSubhead}>Insider tip</h3>
              <p>{l.soloTip}</p>
            </div>
          </article>
        ))}
      </section>

      <section className={styles.routeSection} id="suggested-routes">
        <h2 className={styles.sectionheading}>Suggested 1-Day Landmark Routes</h2>

        <article className={styles.routeCard}>
          <h3>Classic First-Timer Route (1 day, walking + subway)</h3>
          <ol>
            <li><strong>9:00 AM</strong> &mdash; Statue of Liberty + Ellis Island (first ferry from Battery Park)</li>
            <li><strong>1:30 PM</strong> &mdash; Quick lunch in the Financial District</li>
            <li><strong>2:30 PM</strong> &mdash; 9/11 Memorial plaza (skip the museum if pressed for time)</li>
            <li><strong>4:00 PM</strong> &mdash; Walk the Brooklyn Bridge (Manhattan to DUMBO)</li>
            <li><strong>6:00 PM</strong> &mdash; Dinner in DUMBO</li>
            <li><strong>8:30 PM</strong> &mdash; Subway back to Midtown, finish with Empire State Building at 9-10 PM</li>
          </ol>
        </article>

        <article className={styles.routeCard}>
          <h3>Relaxed Sightseeing Route (1 day, low-energy)</h3>
          <ol>
            <li><strong>10:00 AM</strong> &mdash; The Metropolitan Museum (3 hours, take it room by room)</li>
            <li><strong>1:30 PM</strong> &mdash; Lunch on the Upper East Side</li>
            <li><strong>3:00 PM</strong> &mdash; Walk south through Central Park (Conservatory Garden &rarr; Reservoir &rarr; Bow Bridge &rarr; Bethesda Terrace)</li>
            <li><strong>5:30 PM</strong> &mdash; Exit Central Park at Columbus Circle</li>
            <li><strong>6:30 PM</strong> &mdash; Sunset at Top of the Rock (book the sunset slot in advance)</li>
            <li><strong>8:30 PM</strong> &mdash; Dinner in Hell&apos;s Kitchen or Midtown West</li>
          </ol>
        </article>

        <article className={styles.routeCard}>
          <h3>Free Landmarks Day (1 day, $0 attractions + transit)</h3>
          <ol>
            <li><strong>8:30 AM</strong> &mdash; Staten Island Ferry round trip (free, passes Statue of Liberty)</li>
            <li><strong>10:30 AM</strong> &mdash; 9/11 Memorial plaza (the museum is paid; the plaza is free)</li>
            <li><strong>12:00 PM</strong> &mdash; Walk to and across Brooklyn Bridge</li>
            <li><strong>1:30 PM</strong> &mdash; Cheap eats in DUMBO; subway back to Manhattan</li>
            <li><strong>3:00 PM</strong> &mdash; Bryant Park + NY Public Library (free, gorgeous)</li>
            <li><strong>4:30 PM</strong> &mdash; Walk Grand Central Terminal&apos;s main concourse</li>
            <li><strong>5:30 PM</strong> &mdash; High Line + Hudson Yards Vessel viewing</li>
            <li><strong>8:00 PM</strong> &mdash; Times Square at night (free, do it once, leave fast)</li>
          </ol>
        </article>
      </section>

      <section className={styles.faqSection} id="landmarks-faq">
        <h2 className={styles.sectionheading}>Practical Questions</h2>

        <details className={styles.faqItem}>
          <summary>How far in advance should I book Statue of Liberty / Empire State tickets?</summary>
          <p>
            Statue of Liberty grounds + pedestal: 1-2 weeks ahead is comfortable. Crown
            access: 2-3 months ahead, usually sold out closer to date.
            Empire State Building and Top of the Rock: 1-3 days ahead is fine for standard
            tickets; sunset slots fill up earlier so book those 1-2 weeks out.
          </p>
        </details>

        <details className={styles.faqItem}>
          <summary>Are city passes (CityPASS, New York Pass, GoCity) worth it?</summary>
          <p>
            Only if you genuinely plan to use 4+ of the included attractions in a few days.
            For 2-3 attractions, paying separately is usually cheaper. For first-time
            visitors hitting Statue of Liberty + Empire State + Top of the Rock + a museum,
            CityPASS often pencils out. Run the math against your actual planned itinerary
            rather than buying optimistically.
          </p>
        </details>

        <details className={styles.faqItem}>
          <summary>Can I see most landmarks in 3 days?</summary>
          <p>
            Yes, but you&apos;ll be moving fast. A realistic 3-day landmark sprint:
            Day 1 - Statue of Liberty + 9/11 Memorial + Brooklyn Bridge. Day 2 - Central
            Park + Met Museum + sunset Top of the Rock. Day 3 - High Line + Times
            Square + Broadway show. That covers 8 of the 9 landmarks in this guide.
            4-5 days is more comfortable.
          </p>
        </details>

        <details className={styles.faqItem}>
          <summary>What time of year has the best landmark experience?</summary>
          <p>
            April-June and September-October offer the best combination: comfortable
            walking weather, manageable crowds, full schedules everywhere. December
            is magical visually (lights, decorations) but punishing crowd-wise.
            July-August is hot and tourist-heavy. February is the cheapest but coldest.
          </p>
        </details>

        <details className={styles.faqItem}>
          <summary>Is it safe to visit these landmarks alone?</summary>
          <p>
            Yes &mdash; every landmark in this guide is in a heavily-trafficked tourist
            area during normal visiting hours. For more on solo travel safety in NYC,
            see our{" "}
            <Link href="/destination/nyc/nyc-safety-guide">NYC safety guide</Link>{" "}
            and{" "}
            <Link href="/destination/nyc/nyc-female-solo-travel-guide">solo female travel guide</Link>.
          </p>
        </details>
      </section>

      <section className={styles.relatedLinks}>
        <h2 className={styles.sectionheading}>Plan the Rest of Your Trip</h2>
        <div className={styles.linkGrid}>
          <Link href="/destination/nyc/solo-trip-to-nyc" className={styles.relatedLink}>
            <h3>Solo Trip to NYC Guide</h3>
            <p>Budget, where to stay, your first 24 hours, and what to avoid.</p>
          </Link>
          <Link href="/destination/nyc/best-areas-to-stay" className={styles.relatedLink}>
            <h3>Best Areas to Stay</h3>
            <p>Neighborhood comparison with safety and transit scoring.</p>
          </Link>
          <Link href="/destination/nyc/food" className={styles.relatedLink}>
            <h3>Where to Eat in NYC</h3>
            <p>Best restaurants, food halls, pizza, and bagels by neighborhood.</p>
          </Link>
          <Link href="/destination/nyc/nyc-safety-guide" className={styles.relatedLink}>
            <h3>NYC Safety Guide</h3>
            <p>Practical safety: subway, neighborhoods, scams, emergencies.</p>
          </Link>
        </div>
      </section>

      <BookingCTA variant="full" text="Get tickets to NYC's top landmarks" href="/destination/nyc/booking?tab=activities&from=landmark" label="See tickets" />
      <Footer />
    </>
  );
}
