import styles from "./SafetyNarrative.module.css";

// Long-form prose section that adds editorial depth to the Las Vegas safety guide.
// Designed to land featured snippets via direct-answer paragraphs after each
// H2/H3. Section IDs match the FAQ schema so in-page anchors can be cited
// externally.

export default function SafetyNarrative() {
  return (
    <article className={styles.narrative} aria-label="Las Vegas safety guide deep dive">

      <section id="is-lasvegas-safe-2026" className={styles.section}>
        <h2>Is Las Vegas Safe for Tourists in 2026?</h2>
        <p className={styles.lead}>
          <strong>Yes.</strong> Las Vegas is safe for tourists in 2026 in the
          main visitor areas &mdash; the Strip and the Fremont Street Experience
          are among the most heavily surveilled, well-lit, and patrolled places
          in the country, busy day and night. The risks in Vegas are specific
          rather than general: tourist scams, extreme summer heat, casino-floor
          money traps, and a handful of off-Strip blocks worth skipping after
          dark. Almost every incident a tourist actually encounters is
          preventable with three habits: keep your wallet and drinks protected,
          stay on the Strip or Fremont corridors, and use a licensed cab or
          rideshare instead of walking through dark areas off the beaten path.
        </p>
        <p>
          That said, Las Vegas is a real city of two million people, not just a
          casino floor. It rewards a bit of street smarts and a lot of common
          sense about money. The advice in this guide is built around what
          visitors actually run into &mdash; a club promoter steering you toward
          an overpriced cab, a &ldquo;free&rdquo; show ticket that turns into a
          timeshare pitch, a 105&deg;F afternoon with no shade &mdash; not
          abstract worst-case scenarios. Use it the same way you&apos;d use a
          map: as orientation, not as a script.
        </p>
      </section>

      <section id="safe-and-unsafe-areas" className={styles.section}>
        <h2>The Strip, Downtown, and Areas to Avoid</h2>
        <p>
          Las Vegas crime stats are meaningless without context. The honest
          version: the Strip and Fremont Street are extremely safe at the times
          tourists are there, and the areas to avoid are residential or
          transitional zones a few blocks off the corridors that visitors have
          no real reason to enter.
        </p>
        <h3>Reliably safe tourist areas</h3>
        <ul>
          <li><strong>The Strip (Las Vegas Blvd).</strong> Heavily patrolled and camera-covered, busy day and night. Stick to the main sidewalk and pedestrian bridges; watch for pickpockets in dense crowds.</li>
          <li><strong>Fremont Street Experience.</strong> Well-lit and lively under the canopy with a strong security presence. Safe to walk well into the night within the covered zone.</li>
          <li><strong>Resort corridors and casino floors.</strong> Among the most surveilled spaces anywhere, with constant private security on top of cameras.</li>
        </ul>
        <h3>Areas to avoid on foot</h3>
        <ul>
          <li><strong>A few blocks east or north of Fremont after dark.</strong> Once you leave the lit Experience canopy, it gets quiet and rough fast. Don&apos;t wander; ride between the Strip and Downtown.</li>
          <li><strong>The far north end of the Strip near the Sahara at night.</strong> Quieter and less patrolled than the central Strip; take a ride rather than walking the gaps.</li>
          <li><strong>Residential side streets off the Strip.</strong> The blocks just behind the resorts have no tourist reason to be there and are best skipped on foot at night.</li>
        </ul>
      </section>

      <section id="common-scams-2026" className={styles.section}>
        <h2>Common Las Vegas Scams to Recognize in 2026</h2>
        <p>
          <strong>Scams in Vegas cluster around money and the crowds on the
          Strip.</strong>{" "}
          Recognition is the entire defense &mdash; once you can name the
          pattern, it loses almost all power.
        </p>
        <ul>
          <li><strong>Timeshare / &ldquo;free show ticket&rdquo; pitches.</strong> Booths offering free tickets, meals, or tours almost always require a long timeshare presentation. If it&apos;s free and someone is eager, assume there&apos;s a pitch attached.</li>
          <li><strong>Club promoters and aggressive sidewalk hustlers.</strong> Promoters steer you toward specific clubs or cabs for a kickback, and CD hustlers or costumed characters demand cash after handing you something. Don&apos;t take anything anyone hands you; keep walking.</li>
          <li><strong>Casino-floor ATMs.</strong> ATMs on the gaming floor charge $5&ndash;$10+ per withdrawal on top of your bank&apos;s fee. Get cash before you arrive or off the floor.</li>
          <li><strong>Resort-fee surprises.</strong> The nightly rate you booked rarely includes the mandatory resort fee. Confirm the all-in total at check-in so it isn&apos;t a shock at checkout.</li>
        </ul>
        <p>
          The thread connecting these: someone interrupts you, hands you
          something, or steers you toward a kiosk, club, or cab. If that pattern
          triggers, your default move is &ldquo;no thanks, keep walking.&rdquo;
        </p>
      </section>

      <section id="extreme-heat" className={styles.section}>
        <h2>Extreme Heat &amp; Desert Safety</h2>
        <p>
          <strong>Summer heat is the most underestimated real risk in Vegas.</strong>{" "}
          From May through September the Strip routinely hits 105&deg;F (40&deg;C)
          and dry desert air hides how fast you dehydrate.
        </p>
        <ul>
          <li><strong>Drink about a liter of water every two hours</strong> when you&apos;re outdoors, and more if you&apos;re drinking alcohol.</li>
          <li><strong>Avoid outdoor sightseeing between 11am and 4pm</strong> in summer; duck into air-conditioned casinos to cool down between stops.</li>
          <li><strong>Carry a hat and sunscreen,</strong> and know the signs of heat exhaustion &mdash; dizziness, nausea, and stopping sweating are emergencies.</li>
        </ul>
      </section>

      <section id="getting-around" className={styles.section}>
        <h2>Getting Around: Rideshare, the Deuce &amp; Monorail</h2>
        <p>
          <strong>Las Vegas is bigger than it looks from a casino window.</strong>{" "}
          The Strip is several miles long and walking it end to end in the heat or
          late at night is a common mistake. Pick the right ride for the gap.
        </p>
        <ul>
          <li><strong>Rideshare (Uber/Lyft) is reliable</strong> but pickup is restricted at most resorts to designated garages or zones &mdash; follow the signs and confirm the plate before getting in.</li>
          <li><strong>Use licensed taxis only;</strong> ignore anyone offering a private ride, and watch for &ldquo;long-hauling&rdquo; via the airport tunnel &mdash; ask for the direct route.</li>
          <li><strong>The RTC Deuce bus</strong> runs the Strip and to Downtown 24/7 and is a cheap, safe option; the <strong>Las Vegas Monorail</strong> runs behind the east-side resorts and skips traffic entirely.</li>
        </ul>
      </section>

      <section id="casino-floor-safety" className={styles.section}>
        <h2>Casino Floor &amp; Money Safety</h2>
        <p>
          The casino floor is physically very safe, but it&apos;s engineered to
          keep you spending. The real risks here are to your wallet and your
          judgment, not your person.
        </p>
        <ul>
          <li><strong>Watch your drinks.</strong> Free cocktails keep coming to keep you gambling &mdash; never leave a drink unattended, and pace yourself.</li>
          <li><strong>Keep chips and cash secure</strong> and out of view; cash out larger wins at the cage rather than carrying a big stack.</li>
          <li><strong>Skip the casino-floor ATM</strong> and its $5&ndash;$10 fee; plan your bankroll before you sit down.</li>
        </ul>
      </section>

      <section id="solo-traveler-essentials" className={styles.section}>
        <h2>Solo Traveler Essentials</h2>
        <p>
          Solo travel in Las Vegas works well on the Strip and at Fremont. The
          safety profile for solo travelers is essentially the same as for
          groups, with a few adjustments worth making before you arrive.
        </p>
        <h3>Pre-trip setup</h3>
        <ul>
          <li><strong>Share live location with one trusted person back home.</strong> Apple Find My, Google Maps location sharing, or Life360 all work.</li>
          <li><strong>Save 911 and LVMPD non-emergency (702) 828-3111 to favorites.</strong> Add your hotel&apos;s front desk too.</li>
          <li><strong>Take a photo of your passport ID page</strong> and email it to yourself in case your wallet is lifted.</li>
          <li><strong>Carry two payment methods in different places.</strong> A card on you and a backup in the room safe.</li>
        </ul>
        <h3>While you&apos;re here</h3>
        <ul>
          <li>Use rideshare or the Deuce instead of walking the dark gaps between resorts or out to Downtown at night.</li>
          <li>Stay within the lit Fremont Street canopy; don&apos;t wander the side streets beyond it after dark.</li>
          <li>Trust the &ldquo;something feels off&rdquo; signal &mdash; step into a casino, hotel lobby, or restaurant before deciding your next move.</li>
        </ul>
        <p>
          If you&apos;re a solo female traveler specifically, the additional
          context and scenarios in our{" "}
          <a href="/destination/lasvegas/lasvegas-female-solo-travel-guide">
            Las Vegas Solo Female Travel Safety Guide
          </a>{" "}
          may be useful.
        </p>
      </section>

      <section id="decision-tree" className={styles.section}>
        <h2>If Something Feels Off: A Decision Tree</h2>
        <p>
          Most safety incidents are avoidable with a single early decision. Use
          this as a mental model for the moment when something pings your
          awareness.
        </p>
        <ol className={styles.decisionList}>
          <li><strong>Am I in immediate physical danger?</strong> Yes &rarr; 911 and move toward the nearest casino entrance or occupied business. No &rarr; continue.</li>
          <li><strong>Am I in a busy place or an empty one?</strong> Busy &rarr; create distance from the person/situation, change direction. Empty &rarr; move toward a lit, populated area like the Strip or Fremont canopy, even if it&apos;s the way you came.</li>
          <li><strong>Do I have line of sight to an open casino, hotel, or rideshare pickup?</strong> Yes &rarr; head inside and pause. No &rarr; call a rideshare from your current location.</li>
          <li><strong>Has my route or plan stopped making sense?</strong> Stop and reroute from inside a safe location.</li>
        </ol>
        <p>
          Notice that none of these steps involve confrontation. Solo travel
          safety in Las Vegas is overwhelmingly about angles of departure, not
          standing your ground.
        </p>
      </section>

      <section id="emergency-resources" className={styles.section}>
        <h2>Emergency Numbers and Resources</h2>
        <ul>
          <li><strong>911</strong> &mdash; Police, fire, ambulance.</li>
          <li><strong>LVMPD non-emergency: (702) 828-3111</strong> &mdash; for reports and questions that aren&apos;t emergencies.</li>
          <li><strong>University Medical Center (UMC)</strong> &mdash; 1800 W Charleston Blvd. Nevada&apos;s only Level 1 trauma center, a short ride from the Strip.</li>
          <li><strong>Embassy / consulate contacts.</strong> Save your country&apos;s nearest consulate number before you land.</li>
        </ul>
      </section>

      <section id="quick-takeaways" className={styles.section}>
        <h2>The TL;DR</h2>
        <p>
          Las Vegas in 2026 is safe for tourists who use ordinary awareness on
          the Strip and at Fremont Street. The real risks are scams aimed at your
          wallet, extreme summer heat, casino-floor money traps, and a few
          off-Strip blocks after dark &mdash; not violent crime in the places
          you&apos;ll actually be. Protect your money, stick to the lit corridors,
          and ride instead of walking the dark gaps at night, and you&apos;ll have
          the trip you came for.
        </p>
        <p>
          If you take only three habits from this guide:
        </p>
        <ol>
          <li>Treat anything &ldquo;free&rdquo; with a pitch attached as a sales trap &mdash; timeshare booths, free tickets, eager promoters.</li>
          <li>Drink water constantly in summer and stay out of the midday sun &mdash; the heat is the risk people underestimate.</li>
          <li>When in doubt at night, take a rideshare or the Deuce instead of walking through a dark, quiet area off the Strip.</li>
        </ol>
      </section>

    </article>
  );
}
