import Link from "next/link";
import styles from "./NewYorkNarrative.module.css";

// Editorial narrative for the NYC city hub at /destination/nyc.
// This is THE page Booking.com reviewers and Google rate the site by, so it
// gets a proper hub-style overview: what NYC is, who it's for, when to go,
// how long to stay, and what to read next. Internal links route to the
// specialized guides we've already built.
//
// Rendered conditionally only when the city slug is "newyork" — LA/Vegas/Orlando
// don't yet have the editorial backing to support this narrative.

export default function NewYorkNarrative() {
  return (
    <article className={styles.narrative} aria-label="New York City travel hub overview">

      <section id="why-nyc" className={styles.section}>
        <h2>Why New York City?</h2>
        <p className={styles.lead}>
          New York City rewards travelers who arrive ready to move. It is the
          densest tourist-friendly city in North America: walkable, 24-hour
          transit, hundreds of museums and stages and restaurants concentrated
          into a small footprint, and an honest cultural baseline that lets
          visitors fit in without performing. Whether it&apos;s your first US
          trip or your tenth, NYC is a destination that pays back the effort you
          put in.
        </p>
        <p>
          This hub links to everything Travels Americas has on NYC: where to
          stay, what to see, how to navigate, what to eat, how to stay safe, and
          how to plan trips around solo travel, group travel, or longer stays.
          Read the overview below first, then jump into whichever guide matches
          where you are in your planning.
        </p>
      </section>

      <section id="nyc-snapshot" className={styles.section}>
        <h2>NYC at a Glance</h2>
        <ul>
          <li><strong>Population:</strong> ~8.3 million across 5 boroughs (Manhattan, Brooklyn, Queens, the Bronx, Staten Island).</li>
          <li><strong>Visitors per year:</strong> ~60+ million pre-pandemic; close to that again by 2026.</li>
          <li><strong>Time zone:</strong> Eastern (UTC-5 standard, UTC-4 daylight).</li>
          <li><strong>Currency:</strong> US dollar (cards accepted essentially everywhere; carry $20-40 cash for tips and small bodegas).</li>
          <li><strong>Language:</strong> English primary; Spanish widely spoken; over 200 languages heard daily.</li>
          <li><strong>Getting in:</strong> JFK (largest, easiest international); LaGuardia (closest to Midtown); Newark (NJ side, often cheapest fares).</li>
          <li><strong>Getting around:</strong> Subway (24/7, $2.90 single ride), walking, rideshare, bike (Citi Bike). You don&apos;t need a car &mdash; and shouldn&apos;t rent one.</li>
        </ul>
      </section>

      <section id="who-nyc-is-for" className={styles.section}>
        <h2>Who NYC Is For</h2>
        <p>
          The honest version: NYC works for almost every traveler type, but the
          experience changes a lot depending on what you optimize for.
        </p>
        <ul>
          <li><strong>First-time US visitors:</strong> NYC is the most familiar US city to international travelers because it&apos;s on so much screen and page. The infrastructure carries first-timers; the rest of the country can come later.</li>
          <li><strong>Solo travelers:</strong> NYC is one of the easier major cities for solo travel anywhere &mdash; safe transit, dense pedestrian streets, normalized solo dining. See our <Link href="/destination/nyc/solo-trip-to-nyc">Solo Trip to NYC guide</Link> for planning specifics.</li>
          <li><strong>Solo female travelers:</strong> Our <Link href="/destination/nyc/nyc-female-solo-travel-guide">female-solo guide</Link> covers the specifics that differ through that lens &mdash; from accommodation choice to night transit to handling unwanted attention.</li>
          <li><strong>Couples and groups:</strong> Plenty of romantic and group-oriented content. Group travel logistics are easier in NYC than in most US cities because everyone&apos;s on the same transit system.</li>
          <li><strong>Food-driven travelers:</strong> One of the world&apos;s top food cities, full stop. See <Link href="/destination/nyc/food">Solo Dining in NYC</Link>.</li>
          <li><strong>Culture / museum / theater enthusiasts:</strong> The single best concentration of museums, Broadway, and live music in the US. A 5-day cultural trip is easy to fill without leaving Midtown.</li>
        </ul>
        <p>
          The travelers NYC works least well for: people who specifically want
          quiet nature, beach time, road-trip flexibility, or low-density
          destinations. For those, look at our other US city guides.
        </p>
      </section>

      <section id="when-to-visit" className={styles.section}>
        <h2>When to Visit New York City</h2>
        <p>
          <strong>April through June</strong> and <strong>September through October</strong>
          {" "}are the best weather windows: mild, walkable, daylight long enough for
          late-evening exploration. Hotel rates are 20-30% lower than peak summer
          or late December. These are the months we recommend by default for a
          first NYC trip.
        </p>
        <h3>Month-by-month notes</h3>
        <ul>
          <li><strong>January-March:</strong> Cold (often below freezing), occasional snow. Cheapest hotel rates of the year. Good for museum-heavy itineraries; bad for outdoor walking.</li>
          <li><strong>April-May:</strong> Spring weather, blossoms in Central Park. April can be variable; May is reliably pleasant.</li>
          <li><strong>June:</strong> Warm, days are long. Pride events early in the month.</li>
          <li><strong>July-August:</strong> Hot (85-95°F + humidity). Subway platforms get brutal. Tourist peak.</li>
          <li><strong>September-October:</strong> The sweet spot. NYC at its best.</li>
          <li><strong>November:</strong> Cold but bearable. Marathon weekend (first Sunday) brings closures.</li>
          <li><strong>December:</strong> Holiday lights are magical; crowds are punishing. Last week of December is the most crowded week of the year.</li>
        </ul>
      </section>

      <section id="how-long-stay" className={styles.section}>
        <h2>How Long Should You Stay?</h2>
        <ul>
          <li><strong>3 days (long weekend):</strong> Workable for first-timers if you accept you&apos;ll only see Manhattan. Stay near Midtown for transit efficiency.</li>
          <li><strong>4-5 days:</strong> The sweet spot for a first trip. Time for major landmarks + 1-2 museums + a Broadway show + a Brooklyn day.</li>
          <li><strong>6-7 days:</strong> Comfortable. Adds a fully relaxed pace day, a less-touristed neighborhood, and time to repeat anything you loved.</li>
          <li><strong>8+ days:</strong> Diminishing returns for first-timers. NYC&apos;s intensity wears. Consider splitting the trip with a side journey (DC by train, the Hamptons in summer, Hudson Valley in fall).</li>
        </ul>
      </section>

      <section id="planning-checklist" className={styles.section}>
        <h2>NYC Planning Quick Checklist</h2>
        <ol>
          <li><strong>Book flights to JFK, LGA, or EWR.</strong> EWR (Newark, NJ) often has the cheapest fares. JFK is the easiest international arrival.</li>
          <li><strong>Decide on neighborhood &amp; book accommodation.</strong> See our <Link href="/destination/nyc/best-areas-to-stay">Best Areas to Stay guide</Link>. Aim for Manhattan between 14th and 96th St for first trips.</li>
          <li><strong>Pre-book any timed attractions.</strong> Statue of Liberty crown, popular Broadway shows, Top of the Rock sunset, and the 9/11 Museum benefit from 1-2 weeks lead time.</li>
          <li><strong>Set up an OMNY-compatible payment method.</strong> The subway accepts tap-to-pay from any contactless credit/debit card or phone wallet &mdash; no need to buy a MetroCard.</li>
          <li><strong>Download Citymapper or Transit App.</strong> Both work better than Google Maps for the NYC subway specifically.</li>
          <li><strong>Read the safety guide.</strong> Our <Link href="/destination/nyc/nyc-safety-guide">NYC Safety Guide</Link> covers what actually matters and what&apos;s overrated.</li>
          <li><strong>Build a loose itinerary, leave gaps.</strong> NYC rewards spontaneity. Three planned things per day is the right number.</li>
        </ol>
      </section>

      <section id="explore-the-guides" className={styles.section}>
        <h2>Explore Our NYC Guides</h2>
        <div className={styles.guideGrid}>
          <Link href="/destination/nyc/solo-trip-to-nyc" className={styles.guideCard}>
            <h3>Solo Trip to NYC</h3>
            <p>Budget, accommodation, your first 24 hours, solo dining, things to do at night.</p>
          </Link>
          <Link href="/destination/nyc/nyc-safety-guide" className={styles.guideCard}>
            <h3>NYC Safety Guide</h3>
            <p>Day vs night safety, neighborhoods, subway, scams, emergency resources.</p>
          </Link>
          <Link href="/destination/nyc/nyc-female-solo-travel-guide" className={styles.guideCard}>
            <h3>Solo Female Travel Guide</h3>
            <p>Accommodation choice, handling attention, bar safety, apps that matter.</p>
          </Link>
          <Link href="/destination/nyc/best-areas-to-stay" className={styles.guideCard}>
            <h3>Best Areas to Stay</h3>
            <p>Neighborhood-by-neighborhood comparison for first-timers.</p>
          </Link>
          <Link href="/destination/nyc/neighborhood-guide" className={styles.guideCard}>
            <h3>Neighborhood Guide</h3>
            <p>Where to explore (vs where to sleep). Brooklyn, Queens, Manhattan.</p>
          </Link>
          <Link href="/destination/nyc/landmark" className={styles.guideCard}>
            <h3>NYC Landmarks Guide</h3>
            <p>9 actual landmarks with addresses, hours, ticket info, solo tips.</p>
          </Link>
          <Link href="/destination/nyc/subway-safety-guide" className={styles.guideCard}>
            <h3>Subway Safety Guide</h3>
            <p>How to actually use the NYC subway, day and night.</p>
          </Link>
          <Link href="/destination/nyc/things-to-do" className={styles.guideCard}>
            <h3>Things to Do in NYC</h3>
            <p>Activity categories &mdash; landmarks, culture, food, outdoors.</p>
          </Link>
        </div>
      </section>

    </article>
  );
}
