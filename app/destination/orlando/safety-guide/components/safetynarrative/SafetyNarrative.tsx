import styles from "./SafetyNarrative.module.css";

// Long-form prose section that adds editorial depth to the Orlando safety guide.
// Section IDs match the FAQ schema so in-page anchors can be cited externally.

export default function SafetyNarrative() {
  return (
    <article className={styles.narrative} aria-label="Orlando safety guide deep dive">

      <section id="is-orlando-safe-2026" className={styles.section}>
        <h2>Plan for common travel risks</h2>
        <p className={styles.lead}>
          Orlando is a major visitor destination, and practical trip safety includes more
          than crime: Florida heat, highway driving, protecting belongings, and avoiding
          tourist scams all deserve attention. Conditions vary by location and activity, so
          use current local information when making plans.
        </p>
        <p>
          Orlando is spread out and many visitors rely on a car, hotel transport or rideshare.
          Check the arrangements for your itinerary and property before you travel.
        </p>
      </section>

      <section id="crime-data-2026" className={styles.section}>
        <h2>Everyday safety checks</h2>
        <p>
          Citywide statistics cannot predict what will happen at a specific address or
          along a particular route. For recent reported incidents within Orlando city
          limits, consult the <a href="https://www.orlando.gov/Our-Government/Departments-Offices/Orlando-Police-Department">Orlando Police Department Crime &amp; Cases Dashboard</a>.
        </p>
        <p>
          Practical steps that apply across a trip:
        </p>
        <ul>
          <li><strong>Protect belongings in your vehicle.</strong> Keep bags, electronics and other valuables out of sight, and lock the vehicle whenever it is unattended.</li>
          <li><strong>Plan for Florida heat.</strong> Hydrate, use sun protection and take indoor breaks during hot weather.</li>
        </ul>
      </section>

      <section id="getting-around" className={styles.section}>
        <h2>Getting Around Orlando Safely</h2>
        <p>
          <strong>Orlando is built for cars, so transport safety here is mostly about
          driving, parking, and rideshare</strong> &mdash; there is no subway, and public
          transit coverage and schedules vary by route.
        </p>
        <h3>Driving and parking</h3>
        <ul>
          <li><strong>I-4 demands defensive driving.</strong> It&apos;s one of the busier, more accident-prone interstate stretches in the country. Leave room, expect sudden slowdowns, and avoid aggressive lane changes.</li>
          <li><strong>Never leave valuables visible</strong> in a parked rental &mdash; car break-ins are the most common tourist crime.</li>
          <li><strong>Choose parking that fits your plans</strong> and note your space and route back to the hotel or venue.</li>
        </ul>
        <h3>Rideshare and transit</h3>
        <ul>
          <li><strong>Rideshare:</strong> use the venue&apos;s designated pickup area and verify the driver, vehicle and plate in the app before getting in.</li>
          <li><strong>Local transport:</strong> check current LYNX, I-Ride Trolley and hotel or resort schedules for your specific route.</li>
        </ul>
        <p className={styles.resourceLink}>
          For hotel locations, see our{" "}
          <a href="/destination/orlando/best-areas-to-stay">best areas to stay guide</a>.{" "}
          For nighttime area comparisons and return planning, see our{" "}
          <a href="/destination/orlando/is-orlando-safe-at-night">Orlando night-safety guide</a>.
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
          <li>Use the designated pickup and verify the driver and vehicle before entering a rideshare.</li>
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
          Build your plans around the practical risks: heat, driving, belongings and scams.
          Check current local information and transport details for the places you intend
          to visit.
        </p>
        <p>
          If you take only three habits from this guide:
        </p>
        <ol>
          <li>Treat the Florida heat as a safety issue &mdash; water and SPF 50 all day.</li>
          <li>Leave nothing visible in a parked car, and park in lit, attended lots.</li>
          <li>Verify rideshare and hotel transport details before each trip.</li>
        </ol>
      </section>

    </article>
  );
}
