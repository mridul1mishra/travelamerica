import Link from "next/link";
import styles from "./SoloTripNarrative.module.css";

export function SoloTripNarrative() {
  return (
    <article className={styles.narrative} aria-label="Solo trip to Los Angeles planning notes">
      <section id="can-you-travel-la-alone" className={styles.section}>
        <p className={styles.eyebrow}>Planning notes</p>
        <h2>Can You Travel to LA Alone?</h2>
        <p className={styles.lead}>
          <strong>Yes, but LA is not a city you should improvise.</strong> A solo trip works best when
          you choose one good base, cluster each day by area, and avoid late-night wandering in
          unfamiliar blocks. The reward is real: Griffith Observatory, the Getty, Santa Monica,
          Grand Central Market, Los Feliz cafes, and solo-friendly comedy or music nights all work
          well without a group.
        </p>
        <p>
          The hard parts are practical, not emotional. LA is spread out, parking can cost
          <strong> $25-$50 per night</strong>, and cross-city rideshares can run <strong>$25-$45</strong>
          at busy times. That is why this page acts as the solo-travel hub: use it to make the main
          planning calls, then go deeper with the{" "}
          <Link href="/destination/la/best-areas-to-stay">LA neighborhood guide</Link>,{" "}
          <Link href="/destination/la/solo-itinerary">3-day solo itinerary</Link>, and{" "}
          <Link href="/destination/la/safety-guide">LA safety guide</Link>.
        </p>
      </section>

      <section id="first-24-hours" className={styles.section}>
        <h2>Your First 24 Hours Should Be Boring on Purpose</h2>
        <p>
          Do not land at LAX, pick up a rental car, and immediately drive across the city for a
          packed sightseeing day. That is how LA starts badly. A better arrival template is simple:
          rideshare to your hotel, drop your bag, walk your base neighborhood, eat nearby, and sleep.
        </p>
        <ul className={styles.pointList}>
          <li><strong>If you stay in Santa Monica:</strong> walk the pier, Third Street Promenade, and Ocean Ave before sunset.</li>
          <li><strong>If you stay in West Hollywood:</strong> map Sunset Boulevard, Santa Monica Boulevard, and your safest rideshare pickup points.</li>
          <li><strong>If you stay in Los Feliz or Silver Lake:</strong> find your coffee shop, dinner spot, and the nearest grocery or pharmacy.</li>
        </ul>
        <p>
          This is not wasted time. It builds your mental map, which matters more when you are alone.
          Save the Getty, Griffith, Venice, and Hollywood moves for when you are rested.
        </p>
      </section>

      <section id="solo-trip-budget" className={styles.section}>
        <h2>Budget Reality: Where Solo LA Gets Expensive</h2>
        <div className={styles.compactGrid}>
          <div>
            <h3>Lean</h3>
            <p>$100-$150/day with a hostel, Metro, tacos, food halls, free beaches, and Griffith Observatory.</p>
          </div>
          <div>
            <h3>Comfortable</h3>
            <p>$220-$350/day with a mid-range hotel, rideshare or rental car, and one paid experience.</p>
          </div>
          <div>
            <h3>Splurge</h3>
            <p>$450+/day with a boutique hotel, rooftop bars, valet/parking, tours, and higher-end dining.</p>
          </div>
        </div>
        <p>
          The budget trap is not food; LA has excellent cheap meals. The trap is hotel location plus
          transport. A cheaper hotel far from your real itinerary can cost more after parking,
          rideshare surges, and wasted time.
        </p>
      </section>

      <section id="solo-dining-la" className={styles.section}>
        <h2>Solo Dining: What Works and What to Skip</h2>
        <p>
          LA is better for solo dining than people assume because so much of its food culture is
          casual. Grand Central Market, the Original Farmers Market, taco trucks, ramen counters,
          sushi bars, and Silver Lake cafes all feel natural alone.
        </p>
        <ul className={styles.pointList}>
          <li><strong>Best formats:</strong> counters, food halls, taquerias, ramen, sushi, hotel bars, and cafes with outdoor seating.</li>
          <li><strong>Good neighborhoods:</strong> Los Feliz, Silver Lake, Santa Monica, Fairfax, Koreatown, and DTLA during busy hours.</li>
          <li><strong>Skip or plan carefully:</strong> tasting menus, weekend brunch hotspots, and traditional Korean BBQ unless the venue clearly seats solo diners.</li>
        </ul>
        <p>
          For a deeper food plan, use the{" "}
          <Link href="/destination/la/food">LA food guide</Link> after you choose your hotel area.
        </p>
      </section>

      <section id="solo-female-context" className={styles.section}>
        <h2>Extra Context for Solo Female Travelers</h2>
        <p>
          The advice is mostly the same, but the margin for vague planning is smaller. Stay in a
          well-lit, staffed hotel, use rideshare after dark, avoid empty Metro stations late at
          night, and choose neighborhoods where being out alone feels normal: Santa Monica, West
          Hollywood, Los Feliz, and central Beverly Hills.
        </p>
        <p>
          The deeper page is the{" "}
          <Link href="/destination/la/la-female-solo-travel-guide">LA female solo travel guide</Link>.
          Use it for hotel safety, nightlife, and scenario-specific decisions.
        </p>
      </section>

      <section id="solo-mistakes-to-avoid" className={styles.section}>
        <h2>Five Mistakes That Make LA Feel Worse Than It Is</h2>
        <ol className={styles.pointList}>
          <li><strong>Booking the cheapest hotel without checking the neighborhood.</strong> Location is part of the safety and transport plan.</li>
          <li><strong>Planning three cross-city attractions in one day.</strong> Two activities in the same area is the better limit.</li>
          <li><strong>Leaving bags visible in a parked car.</strong> Car break-ins are one of the most common visitor problems.</li>
          <li><strong>Using Metro late just because it is cheaper.</strong> It is useful by day; rideshare is the easier night default.</li>
          <li><strong>Expecting LA to become social by accident.</strong> Book a class, tour, show, hostel event, or group hike if meeting people matters.</li>
        </ol>
      </section>
    </article>
  );
}
