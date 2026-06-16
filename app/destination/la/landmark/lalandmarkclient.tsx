"use client";
import HeroBanner from "../../../components/Header/HeroBanner";
import NavigationHeader from "../../../components/Header/NavigationHeader";
import Link from "next/link";
import Footer from "@/app/components/Header/Footer/footer";
import styles from "./lalandmark.module.css";
import BookingCTA from "./components/BookingCTA/BookingCTA";

// Each landmark gets a concrete data row instead of paragraphs of fluff.
// Approximate ticket prices and hours are noted as ranges or guidance only —
// always verify on the venue's own site before going (linked from each card).
import { LANDMARKS } from './landmarks-data';

export default function LALandmarkClient() {

  // ---- JSON-LD schemas ----





  return (
    <>

      <NavigationHeader />
      <HeroBanner
        image="/data/majorcities/losangeles/assets/losangeles.webp"
        bannerText="Los Angeles Landmarks Guide"
      />
      <BookingCTA variant="slim" text="Book your Los Angeles trip →" href="/destination/la/bookings?tab=activities&from=landmark" label="See tickets" />

      <section className={styles.intro} style={{ textAlign: "center" }}>
        <h1 className={styles.sectionheading}>LA Landmarks: A Practical Solo Traveler Guide</h1>
        <p className={styles.introLead}>
          Real visitor information for the 9 Los Angeles landmarks first-time and solo
          travelers actually want. Each entry includes the address, how to get there by
          transit, current hours, approximate ticket price, time to allocate, and a
          solo-specific tip. Verify hours and ticket prices on the venue&apos;s own site
          before going &mdash; LA attractions change schedules seasonally.
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
          <h3>Classic First-Timer Route (1 day, car or rideshare)</h3>
          <ol>
            <li><strong>9:00 AM</strong> &mdash; Griffith Observatory (arrive early for parking and clear morning air)</li>
            <li><strong>11:30 AM</strong> &mdash; Hollywood Walk of Fame &amp; TCL Chinese Theatre forecourt</li>
            <li><strong>1:00 PM</strong> &mdash; Lunch off Hollywood Blvd</li>
            <li><strong>2:30 PM</strong> &mdash; The Getty Center (art + city views from the terraces)</li>
            <li><strong>6:00 PM</strong> &mdash; Sunset on the Santa Monica Pier</li>
            <li><strong>8:00 PM</strong> &mdash; Dinner in Santa Monica or Venice</li>
          </ol>
        </article>

        <article className={styles.routeCard}>
          <h3>Slow-Paced Solo Route (1 day, low-energy)</h3>
          <ol>
            <li><strong>10:00 AM</strong> &mdash; The Getty Center (3 hours, take it gallery by gallery)</li>
            <li><strong>1:30 PM</strong> &mdash; Lunch at the Getty cafe or in Brentwood</li>
            <li><strong>3:00 PM</strong> &mdash; Walk the Venice Canals and Abbot Kinney Blvd</li>
            <li><strong>4:30 PM</strong> &mdash; Stroll the Venice boardwalk north to Santa Monica</li>
            <li><strong>6:30 PM</strong> &mdash; Sunset on the Santa Monica Pier</li>
            <li><strong>8:00 PM</strong> &mdash; Dinner on Main Street, Santa Monica</li>
          </ol>
        </article>

        <article className={styles.routeCard}>
          <h3>Free Landmarks Day (1 day, $0 attractions + transit)</h3>
          <ol>
            <li><strong>9:00 AM</strong> &mdash; Griffith Observatory (free) and the Hollywood Sign view</li>
            <li><strong>11:30 AM</strong> &mdash; Metro to downtown; Union Station + Olvera Street (free)</li>
            <li><strong>1:00 PM</strong> &mdash; Cheap taquitos on Olvera Street</li>
            <li><strong>2:00 PM</strong> &mdash; The Broad (free general admission; reserve a timed slot)</li>
            <li><strong>3:30 PM</strong> &mdash; Walk past Walt Disney Concert Hall + Grand Park</li>
            <li><strong>4:30 PM</strong> &mdash; LACMA's free 'Urban Light' installation on Museum Row</li>
            <li><strong>6:30 PM</strong> &mdash; Venice Beach boardwalk before sunset (free)</li>
          </ol>
        </article>
      </section>

      <section className={styles.faqSection} id="landmarks-faq">
        <h2 className={styles.sectionheading}>Practical Questions</h2>

        <details className={styles.faqItem}>
          <summary>How far in advance should I book Getty parking or The Broad's timed entry?</summary>
          <p>
            The Getty Center: admission is free, but reserve parking online a few days
            ahead for weekends (weekdays are usually fine same-day). The Broad: free
            general admission requires a timed reservation that often books out 1-2 weeks
            in advance, especially weekends; the Yayoi Kusama Infinity Mirror Rooms are a
            separate, faster-selling ticket.
          </p>
        </details>

        <details className={styles.faqItem}>
          <summary>Is a city pass (Go Los Angeles, CityPASS) worth it?</summary>
          <p>
            Only if you plan to use several paid attractions like Universal Studios, the
            Aquarium of the Pacific, Warner Bros. Studio Tour, or harbor cruises within a
            few days. Many of LA's marquee landmarks (Griffith Observatory, the Getty, The
            Broad, the beaches) are already free, so for a landmark-focused trip a pass
            often isn't worth it. Run the math against your actual planned itinerary.
          </p>
        </details>

        <details className={styles.faqItem}>
          <summary>Can I see most landmarks in 3 days?</summary>
          <p>
            Yes, if you cluster by region to beat traffic. Day 1 - Griffith Observatory +
            Hollywood Walk of Fame + Hollywood Sign view. Day 2 - the Getty + Santa Monica
            Pier + Venice Beach. Day 3 - downtown: The Broad + Walt Disney Concert Hall +
            Union Station + Olvera Street, with LACMA on Museum Row. That covers all 9
            landmarks in this guide.
          </p>
        </details>

        <details className={styles.faqItem}>
          <summary>What time of year has the best landmark experience?</summary>
          <p>
            LA is a year-round destination, but spring (March-May) and fall
            (September-November) offer warm, clear days with thinner crowds. Summer brings
            heat inland and packed beaches; mornings often start under the coastal 'May
            Gray / June Gloom' marine layer that can hide the Hollywood Sign until midday.
            Winter is mild but the rainiest stretch.
          </p>
        </details>

        <details className={styles.faqItem}>
          <summary>Is it safe to visit these landmarks alone?</summary>
          <p>
            Yes &mdash; every landmark in this guide is in a well-trafficked area during
            normal visiting hours. Hollywood Blvd and the Venice boardwalk are best done in
            daylight, and Griffith Park trails should be hiked before dark. For more on
            solo travel safety in LA, see our{" "}
            <Link href="/destination/la/safety-guide">LA safety guide</Link>{" "}
            and{" "}
            <Link href="/destination/la/la-female-solo-travel-guide">solo female travel guide</Link>.
          </p>
        </details>
      </section>

      <section className={styles.relatedLinks}>
        <h2 className={styles.sectionheading}>Plan the Rest of Your Trip</h2>
        <div className={styles.linkGrid}>
          <Link href="/destination/la/solo-trip-to-la" className={styles.relatedLink}>
            <h3>Solo Trip to LA Guide</h3>
            <p>Budget, where to stay, your first 24 hours, and what to avoid.</p>
          </Link>
          <Link href="/destination/la/best-areas-to-stay" className={styles.relatedLink}>
            <h3>Best Areas to Stay</h3>
            <p>Neighborhood comparison for solo travelers, with safety and transit scoring.</p>
          </Link>
          <Link href="/destination/la/food" className={styles.relatedLink}>
            <h3>Solo Dining in LA</h3>
            <p>Where solo travelers should actually eat, by neighborhood and meal.</p>
          </Link>
          <Link href="/destination/la/safety-guide" className={styles.relatedLink}>
            <h3>LA Safety Guide</h3>
            <p>Practical safety: neighborhoods, transit, scams, emergencies.</p>
          </Link>
        </div>
      </section>

      <BookingCTA variant="full" text="Get tickets to LA's top landmarks" href="/destination/la/bookings?tab=activities&from=landmark" label="See tickets" />
      <Footer />
    </>
  );
}
