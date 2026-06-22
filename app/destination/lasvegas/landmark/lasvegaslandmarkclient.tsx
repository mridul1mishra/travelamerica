"use client";
import HeroBanner from "./components/HeroBanner/HeroBanner";
import NavigationHeader from "./components/NavigationHeader/NavigationHeader";
import Link from "next/link";
import Footer from "@/app/components/Header/Footer/footer";
import styles from "./lasvegaslandmark.module.css";
import BookingCTA from "./components/BookingCTA/BookingCTA";

// Each landmark gets a concrete data row instead of paragraphs of fluff.
// Approximate ticket prices and hours are noted as ranges or guidance only —
// always verify on the venue's own site before going (linked from each card).
import { LANDMARKS } from './landmarks-data';

export default function LasVegasLandmarkClient() {

  // ---- JSON-LD schemas ----





  return (
    <>

      <NavigationHeader />
      <HeroBanner
        image="/data/majorcities/lasvegas/assets/lasvegas-landmarks-banner.png"
        bannerText=""
        variant="wide"
      />
      <BookingCTA variant="slim" text="Book your Las Vegas trip →" href="/destination/lasvegas/bookings?tab=activities&from=landmark" label="See tickets" />

      <section className={styles.intro} style={{ textAlign: "center" }}>
        <h1 className={styles.sectionheading}>Las Vegas Landmarks: A Practical Solo Traveler Guide</h1>
        <p className={styles.introLead}>
          Real visitor information for the 9 Las Vegas landmarks first-time and solo
          travelers actually want. Each entry includes the address, how to get there,
          current hours, approximate ticket price, time to allocate, and a
          solo-specific tip &mdash; and Las Vegas has more free world-class spectacles than
          almost any city, so we flag exactly which are free. Verify hours and ticket
          prices on the venue&apos;s own site before going; Las Vegas attractions change
          schedules seasonally.
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
                <dt>Getting there</dt>
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

              <h3 className={styles.landmarkSubhead}>Solo traveler tip</h3>
              <p>{l.soloTip}</p>
            </div>
          </article>
        ))}
      </section>

      <section className={styles.routeSection} id="suggested-routes">
        <h2 className={styles.sectionheading}>Suggested 1-Day Landmark Routes</h2>

        <article className={styles.routeCard}>
          <h3>Classic First-Timer Route (1 day, walking + Deuce bus)</h3>
          <ol>
            <li><strong>4:00 PM</strong> &mdash; Photo at the &apos;Welcome to Fabulous Las Vegas&apos; sign (south Strip)</li>
            <li><strong>5:00 PM</strong> &mdash; Walk north up the Strip, ducking into the resorts to beat the heat</li>
            <li><strong>6:30 PM</strong> &mdash; Sunset ride on the High Roller observation wheel</li>
            <li><strong>8:00 PM</strong> &mdash; Dinner near the LINQ Promenade or Caesars</li>
            <li><strong>9:30 PM</strong> &mdash; Fountains of Bellagio (the after-dark shows)</li>
            <li><strong>10:30 PM</strong> &mdash; See Sphere lit up from the Venetian pedestrian bridge</li>
          </ol>
        </article>

        <article className={styles.routeCard}>
          <h3>Old Vegas &amp; History Route (1 day, low-key)</h3>
          <ol>
            <li><strong>4:30 PM</strong> &mdash; The Neon Museum (book the late-afternoon / golden-hour slot)</li>
            <li><strong>6:00 PM</strong> &mdash; Rideshare to Fremont Street Experience downtown</li>
            <li><strong>6:30 PM</strong> &mdash; Dinner downtown (cheaper and more local than the Strip)</li>
            <li><strong>8:00 PM</strong> &mdash; Viva Vision canopy light shows + live music on Fremont</li>
            <li><strong>9:30 PM</strong> &mdash; Optional SlotZilla zip line under the canopy</li>
            <li><strong>10:30 PM</strong> &mdash; Stroll the vintage neon of the Golden Nugget and the Plaza</li>
          </ol>
        </article>

        <article className={styles.routeCard}>
          <h3>Free Landmarks Day (1 day, $0 attractions)</h3>
          <ol>
            <li><strong>8:00 AM</strong> &mdash; Early photo at the &apos;Welcome to Fabulous Las Vegas&apos; sign (no line)</li>
            <li><strong>10:00 AM</strong> &mdash; Bellagio Conservatory &amp; Botanical Gardens (free, indoors, air-conditioned)</li>
            <li><strong>12:00 PM</strong> &mdash; Window-walk the Venetian&apos;s canals and the Forum Shops</li>
            <li><strong>4:00 PM</strong> &mdash; Walk the Strip&apos;s pedestrian bridges as the lights come on</li>
            <li><strong>8:00 PM</strong> &mdash; Fountains of Bellagio (free 15-min night shows)</li>
            <li><strong>9:00 PM</strong> &mdash; Sphere&apos;s Exosphere lit up from the surrounding bridges (free)</li>
            <li><strong>10:00 PM</strong> &mdash; Fremont Street Experience canopy shows (free)</li>
          </ol>
        </article>
      </section>

      <section className={styles.faqSection} id="landmarks-faq">
        <h2 className={styles.sectionheading}>Practical Questions</h2>

        <details className={styles.faqItem} open>
          <summary>How far in advance should I book the High Roller, Neon Museum, or Red Rock entry?</summary>
          <p>
            High Roller: standard tickets are fine same-day, but book the sunset slot 1-2
            days ahead and online for the small discount. Neon Museum: reserve a timed slot
            a few days to a week ahead - golden-hour and evening sessions sell out. Red Rock
            Canyon: the timed-entry reservation for the Scenic Loop is required October-May
            and should be booked online well in advance or you&apos;ll be turned away at the gate.
          </p>
        </details>

        <details className={styles.faqItem}>
          <summary>Is a sightseeing pass (Las Vegas Pass, Go City) worth it?</summary>
          <p>
            Only if you genuinely plan to use several paid attractions - the High Roller, the
            STRAT rides, the Neon Museum, a Hoover Dam tour - within a few days. Because so
            many Las Vegas headliners are free (the fountains, the Strip, Sphere&apos;s exterior,
            Fremont Street, the Welcome sign), a landmark-focused trip often doesn&apos;t need a
            pass. Run the math against your actual planned itinerary rather than buying optimistically.
          </p>
        </details>

        <details className={styles.faqItem}>
          <summary>Can I see most landmarks in 3 days?</summary>
          <p>
            Yes, comfortably. Day 1 - the Strip at night: the Welcome sign, High Roller,
            Bellagio fountains, and Sphere. Day 2 - old Vegas: the Neon Museum and Fremont
            Street Experience, plus the STRAT SkyPod. Day 3 - a day trip to Hoover Dam and/or
            Red Rock Canyon. That covers all 9 landmarks in this guide with room to breathe.
          </p>
        </details>

        <details className={styles.faqItem}>
          <summary>What time of year has the best landmark experience?</summary>
          <p>
            Spring (March-May) and fall (October-November) are ideal: warm but not scorching,
            good for walking the Strip and hiking Red Rock. Summer (June-September) is brutally
            hot - 105&deg;F+ days make outdoor landmarks and the Neon Museum punishing before
            evening. Winter is mild and cheaper, though desert nights get cold and a few outdoor
            thrill rides may pause for weather.
          </p>
        </details>

        <details className={styles.faqItem}>
          <summary>Is it safe to visit these landmarks alone?</summary>
          <p>
            Yes &mdash; the Strip and Fremont Street are crowded and well-lit during normal
            visiting hours, which makes them easy to do solo. Keep your wallet secure in the
            busiest late-night crowds, and treat the day trips (Hoover Dam, Red Rock) like any
            desert outing with water and a full tank. For more on solo travel safety in Las Vegas,
            see our{" "}
            <Link href="/destination/lasvegas/safety-guide">Las Vegas safety guide</Link>{" "}
            and{" "}
            <Link href="/destination/lasvegas/lasvegas-female-solo-travel-guide">solo female travel guide</Link>.
          </p>
        </details>
      </section>

      <section className={styles.relatedLinks}>
        <h2 className={styles.sectionheading}>Plan the Rest of Your Trip</h2>
        <div className={styles.linkGrid}>
          <Link href="/destination/lasvegas/solo-trip-to-lasvegas" className={styles.relatedLink}>
            <h3>Solo Trip to Las Vegas Guide</h3>
            <p>Budget, where to stay, your first 24 hours, and what to avoid.</p>
          </Link>
          <Link href="/destination/lasvegas/best-areas-to-stay" className={styles.relatedLink}>
            <h3>Best Areas to Stay</h3>
            <p>Strip vs. Downtown vs. off-Strip, with safety and value scoring.</p>
          </Link>
          <Link href="/destination/lasvegas/food" className={styles.relatedLink}>
            <h3>Where to Eat in Las Vegas</h3>
            <p>Buffets, celebrity-chef rooms, and cheap eats by area.</p>
          </Link>
          <Link href="/destination/lasvegas/safety-guide" className={styles.relatedLink}>
            <h3>Las Vegas Safety Guide</h3>
            <p>Practical safety: the Strip, downtown, scams, the desert heat.</p>
          </Link>
        </div>
      </section>
      <BookingCTA variant="full" text="Book tickets to Las Vegas landmarks" href="/destination/lasvegas/bookings?tab=activities&from=landmark" label="Book tickets" />
      <Footer />
    </>
  );
}
