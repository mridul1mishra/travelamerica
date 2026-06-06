import styles from "./SafetyNarrative.module.css";

// Long-form prose section that adds editorial depth to the Orlando safety guide.
// Section IDs match the FAQ schema so in-page anchors can be cited externally.

export default function SafetyNarrative() {
  return (
    <article className={styles.narrative} aria-label="Orlando safety guide deep dive">

      <section id="is-orlando-safe-2026" className={styles.section}>
        <h2>Is Orlando Safe for Tourists in 2026?</h2>
        <p className={styles.lead}>
          <strong>Yes.</strong> Orlando is one of the safest major tourist destinations in
          the United States for the way most people visit it. The resort corridors &mdash;
          Walt Disney World, Universal, International Drive, and Lake Buena Vista &mdash; are
          heavily staffed, well-lit, and security-conscious, and violent crime affecting
          tourists in these zones is very rare. The realistic risks here aren&apos;t about
          crime at all: they&apos;re the Florida heat, busy-highway driving, car break-ins
          in dark lots, and a handful of scams aimed squarely at visitors.
        </p>
        <p>
          Orlando is also spread out and car-centric in a way that big transit-first cities are not.
          That changes the safety calculus: instead of late-night transit, your decisions
          are about parking, rideshare, and the distances between resort areas. This guide
          is built around what visitors actually run into &mdash; not abstract worst cases.
        </p>
      </section>

      <section id="crime-data-2026" className={styles.section}>
        <h2>What the Numbers Actually Say</h2>
        <p>
          Orlando welcomes well over 70 million visitors a year, and the overwhelming
          majority never experience anything worse than a sunburn. Crime in the metro area
          is concentrated in specific residential neighborhoods that tourists have no reason
          to visit &mdash; not in the resort and attraction corridors where you&apos;ll spend
          your time.
        </p>
        <p>
          Two things to take seriously regardless of the headline numbers:
        </p>
        <ul>
          <li><strong>Car break-ins are the most common tourist incident.</strong> Rental cars sitting in large, dark lots are a target. Never leave anything visible &mdash; bags, electronics, even chargers &mdash; and use lit, attended garages where you can.</li>
          <li><strong>Heat is the genuine health risk.</strong> Far more visitors are hurt by Florida&apos;s summer heat than by crime. Treat hydration and sun protection as safety equipment, not comfort.</li>
        </ul>
      </section>

      <section id="day-vs-night" className={styles.section}>
        <h2>Day vs. Night: When Is Orlando Safest?</h2>
        <p>
          <strong>The tourist corridors are safe day and night.</strong> Disney Springs,
          Universal CityWalk, and International Drive stay busy and patrolled well into the
          evening. The window where you add a little extra care is late at night, and even
          then the rule is location- and parking-specific rather than blanket.
        </p>
        <h3>Daytime</h3>
        <p>
          No special precautions beyond heat management. The biggest daytime risk is the
          sun, not strangers &mdash; pace yourself, hydrate, and take indoor breaks midday in
          summer.
        </p>
        <h3>Evening</h3>
        <p>
          Still safe across the resort and attraction areas, which stay well-populated.
          Downtown Orlando&apos;s Church Street and Wall Street Plaza get lively; use the
          same ordinary urban awareness you would in any city after dark.
        </p>
        <h3>Late night</h3>
        <p>
          This is where you make calls based on where you are and how you&apos;re getting
          back. Inside the resort districts you&apos;re fine; between them, take a rideshare
          rather than walking long, dark stretches. Be deliberate in large parking
          structures &mdash; have your keys ready and your car located before you set off.
        </p>
      </section>

      <section id="area-safety" className={styles.section}>
        <h2>Orlando Area Safety: A Realistic Breakdown</h2>
        <p>
          Most tourist-facing areas are safe at the times tourists are in them. Here is a
          more useful framing &mdash; where to feel relaxed, where to stay alert, and what to
          watch for.
        </p>
        <h3>Reliably safe, day and night</h3>
        <ul>
          <li><strong>Disney Springs &amp; Lake Buena Vista.</strong> Heavily staffed retail-and-dining district with strong private security. Among the safest places in the metro at any hour.</li>
          <li><strong>Universal CityWalk.</strong> Gated entertainment complex with constant security presence; safe to enjoy late.</li>
          <li><strong>International Drive (I-Drive).</strong> Busy, well-lit tourist corridor. Stay on the main drive and watch your belongings in attraction crowds.</li>
          <li><strong>Winter Park &amp; Lake Eola / Thornton Park.</strong> Upscale, walkable, low-crime areas that are pleasant in the evening.</li>
        </ul>
        <h3>Safe with normal awareness</h3>
        <ul>
          <li><strong>Downtown Orlando (Church Street).</strong> Lively nightlife; crowds get rowdier near closing. Stay on the busy, staffed strips and plan your ride home in advance.</li>
          <li><strong>Kissimmee (US-192).</strong> Fine near the attractions; the long budget-hotel corridor gets quieter and less predictable at night, so a car or rideshare is essential.</li>
        </ul>
        <h3>Stay extra alert / skip after dark</h3>
        <ul>
          <li><strong>Orange Blossom Trail (OBT) corridor, south of I-4.</strong> Higher reported crime, not a tourist area. No reason to be here at night.</li>
          <li><strong>Pine Hills (northwest of downtown).</strong> A residential area with higher crime statistics and nothing tourist-related to visit.</li>
          <li><strong>Large, empty parking lots late at night.</strong> Anywhere &mdash; resort or mall &mdash; treat a deserted lot as the moment to ask security for an escort.</li>
        </ul>
      </section>

      <section id="getting-around" className={styles.section}>
        <h2>Getting Around Orlando Safely</h2>
        <p>
          <strong>Orlando is built for cars, so transport safety here is mostly about
          driving, parking, and rideshare</strong> &mdash; there is no subway, and public
          transit is limited at night.
        </p>
        <h3>Driving and parking</h3>
        <ul>
          <li><strong>I-4 demands defensive driving.</strong> It&apos;s one of the busier, more accident-prone interstate stretches in the country. Leave room, expect sudden slowdowns, and avoid aggressive lane changes.</li>
          <li><strong>Never leave valuables visible</strong> in a parked rental &mdash; car break-ins are the most common tourist crime.</li>
          <li><strong>Park in lit, attended garages</strong> and note your spot so you&apos;re not wandering a lot after dark.</li>
        </ul>
        <h3>Rideshare and transit</h3>
        <ul>
          <li><strong>Uber and Lyft</strong> are the easiest and safest option at night &mdash; request from inside a lobby and verify the plate, car, and driver before getting in. They&apos;re often cheaper than parking on a park day.</li>
          <li><strong>The I-Ride Trolley</strong> covers International Drive in the evening; most resorts run their own shuttles to the parks.</li>
        </ul>
        <p className={styles.resourceLink}>
          For where to base yourself, see our{" "}
          <a href="/destination/orlando/best-areas-to-stay">best areas to stay guide</a>{" "}
          and the{" "}
          <a href="/destination/orlando/is-orlando-safe-at-night">is Orlando safe at night</a>{" "}
          breakdown.
        </p>
      </section>

      <section id="common-scams-2026" className={styles.section}>
        <h2>Common Orlando Scams to Recognize in 2026</h2>
        <p>
          Orlando&apos;s scams target tourists specifically, and recognition is the whole
          defense &mdash; once you can name the pattern, it loses its power.
        </p>
        <ul>
          <li><strong>Timeshare &ldquo;free ticket&rdquo; pitches.</strong> You&apos;re offered free or deep-discount park tickets in exchange for sitting through a high-pressure presentation. Decline and move on.</li>
          <li><strong>Unofficial ticket resellers.</strong> Vendors near the parks sell counterfeit or expired tickets. Buy only from the official park websites, gates, or reputable sellers.</li>
          <li><strong>Fake discount booths.</strong> Some roadside &ldquo;discount ticket&rdquo; stands on I-Drive are legitimate, but verify before paying &mdash; and never hand over a deposit to hold a deal.</li>
          <li><strong>Vacation-home rental fraud.</strong> Listings that ask for wire transfers or off-platform payment are a red flag. Book through established platforms with buyer protection.</li>
          <li><strong>Street &ldquo;charity&rdquo; or survey approaches</strong> that turn into a request for cash. A polite &ldquo;no thanks&rdquo; without breaking stride is all you need.</li>
        </ul>
        <p>
          The thread connecting these: someone offers you something that sounds too good,
          or pressures you to decide now. The default move is &ldquo;no thanks, I&apos;ll
          book through the official site.&rdquo;
        </p>
      </section>

      <section id="solo-traveler-essentials" className={styles.section}>
        <h2>Solo Traveler Essentials</h2>
        <p>
          Solo travel in Orlando works well &mdash; the parks and resort areas are made for
          individual movement and are heavily supervised. The safety profile is essentially
          the same as for groups, with a couple of adjustments worth making before you
          arrive.
        </p>
        <h3>Pre-trip setup</h3>
        <ul>
          <li><strong>Share live location with one trusted person back home.</strong> Apple Find My, Google Maps, or Life360 all work. Set it to expire when you fly home.</li>
          <li><strong>Save 911 and the Orange County Sheriff non-emergency line to favorites,</strong> along with your hotel front desk.</li>
          <li><strong>Photograph your passport ID page</strong> and email it to yourself in case your wallet is lost or stolen.</li>
          <li><strong>Carry two payment methods in different places</strong> &mdash; one on you, a backup in the room safe.</li>
        </ul>
        <h3>While you&apos;re here</h3>
        <ul>
          <li>Use rideshare between areas at night rather than walking long, dark stretches.</li>
          <li>Keep a portable phone charger on you &mdash; long park days drain batteries, and your phone is your map, ticket, and lifeline.</li>
          <li>Build in midday heat breaks; pushing through Florida summer afternoons is how solo travelers end up unwell.</li>
          <li>Trust the &ldquo;something feels off&rdquo; signal &mdash; head toward a staffed, busy area and reassess.</li>
        </ul>
        <p>
          If you&apos;re a solo female traveler specifically, the additional context in our{" "}
          <a href="/destination/orlando/orlando-female-solo-travel-guide">
            Orlando Solo Female Travel Guide
          </a>{" "}
          covers night logistics and harassment response through that lens.
        </p>
      </section>

      <section id="decision-tree" className={styles.section}>
        <h2>If Something Feels Off: A Decision Tree</h2>
        <p>
          Most safety incidents are avoidable with a single early decision. Use this as a
          mental model for the moment when something pings your awareness.
        </p>
        <ol className={styles.decisionList}>
          <li><strong>Am I in immediate physical danger?</strong> Yes &rarr; 911 and move toward the nearest occupied business or security. No &rarr; continue.</li>
          <li><strong>Am I in a crowded place or an empty one?</strong> Crowded &rarr; create distance and change direction. Empty &rarr; move toward a populated, lit area, even if it&apos;s the way you came.</li>
          <li><strong>Do I have line of sight to staff or an open business?</strong> Yes &rarr; head inside and pause. No &rarr; call a rideshare from where you are.</li>
          <li><strong>Has my plan stopped making sense?</strong> Stop and reroute from inside a safe location instead of figuring it out in a parking lot.</li>
        </ol>
        <p>
          None of these steps involve confrontation. Safety here is about angles of
          departure, not standing your ground.
        </p>
      </section>

      <section id="emergency-resources" className={styles.section}>
        <h2>Emergency Numbers and Resources</h2>
        <ul>
          <li><strong>911</strong> &mdash; Police, fire, ambulance.</li>
          <li><strong>Orange County Sheriff non-emergency: (407) 836-4357</strong> &mdash; for reports and lost property in the tourist areas; Orlando Police covers the city.</li>
          <li><strong>Poison Control: 1-800-222-1222</strong> &mdash; 24/7 for poisoning, medication, or drink-related concerns.</li>
          <li><strong>988</strong> &mdash; 24/7 mental-health crisis line, including for travelers feeling overwhelmed.</li>
          <li><strong>Hospitals with 24-hour ERs:</strong> Orlando Health ORMC (downtown, Level 1 trauma center), AdventHealth Orlando, and AdventHealth ERs near the parks.</li>
          <li><strong>Park guest services</strong> &mdash; Disney and Universal both have dedicated security and lost-child reunification; find the nearest team member if you need help inside a park.</li>
        </ul>
      </section>

      <section id="quick-takeaways" className={styles.section}>
        <h2>The TL;DR</h2>
        <p>
          Orlando in 2026 is very safe for tourists in the resort and attraction corridors.
          The real risks are the heat, highway driving, car break-ins, and tourist scams &mdash;
          not violent crime. Hydrate and protect against the sun, never leave valuables in
          your car, use rideshare at night, and you&apos;ll have the trip you came for.
        </p>
        <p>
          If you take only three habits from this guide:
        </p>
        <ol>
          <li>Treat the Florida heat as a safety issue &mdash; water and SPF 50 all day.</li>
          <li>Leave nothing visible in a parked car, and park in lit, attended lots.</li>
          <li>Rideshare between areas at night instead of walking long, dark stretches.</li>
        </ol>
      </section>

    </article>
  );
}
