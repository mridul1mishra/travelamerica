import styles from "./SafetyNarrative.module.css";

// Long-form prose section that adds editorial depth to the LA safety guide.
// Designed to land featured snippets via direct-answer paragraphs after each
// H2/H3. Section IDs match the FAQ schema so in-page anchors can be cited
// externally.

export default function SafetyNarrative() {
  return (
    <article className={styles.narrative} aria-label="LA safety guide deep dive">

      <section id="is-la-safe-2026" className={styles.section}>
        <h2>Is LA Safe for Tourists in 2026?</h2>
        <p className={styles.lead}>
          <strong>Yes.</strong> Los Angeles is safe for tourists in 2026 in the
          major visitor areas &mdash; Santa Monica, Beverly Hills, West Hollywood,
          Bel Air, and the Hollywood Blvd corridor are all well-patrolled and safe
          during the day and most evenings. The risks in LA are specific rather than
          general: car break-ins, a handful of neighborhoods to avoid on foot, and
          driving in heavy traffic. Almost every safety incident a tourist actually
          encounters is preventable with three habits: never leave anything visible
          in a parked car, stick to the well-known visitor corridors, and use
          rideshare instead of walking through unfamiliar areas after dark.
        </p>
        <p>
          That said, LA is a sprawling real city, not a theme park. It rewards a bit
          of street smarts and a lot of common sense behind the wheel. The advice in
          this guide is built around what visitors actually run into &mdash; a smash-and-grab
          in a parking lot, an aggressive CD hustler on the Walk of Fame, getting
          stuck in traffic that Google Maps underestimated &mdash; not abstract
          worst-case scenarios. Use it the same way you&apos;d use a map: as
          orientation, not as a script.
        </p>
      </section>

      <section id="safe-and-unsafe-areas" className={styles.section}>
        <h2>Safe Areas vs. Areas to Avoid</h2>
        <p>
          LA crime stats are meaningless without neighborhood context. The honest
          version: the major tourist corridors are safe at the times tourists are in
          them, and the areas to avoid are residential or transitional zones that
          visitors have no real reason to enter.
        </p>
        <h3>Reliably safe tourist areas</h3>
        <ul>
          <li><strong>Santa Monica &amp; the Pier.</strong> Well-patrolled and busy day and night. Keep an eye on belongings on the crowded beach and boardwalk.</li>
          <li><strong>Beverly Hills &amp; Bel Air.</strong> Among the safest areas in the city, with a visible police and private security presence.</li>
          <li><strong>West Hollywood (WeHo).</strong> Lively and safe well into the night along the main strips.</li>
          <li><strong>Hollywood Blvd tourist corridor.</strong> Safe during the day and most evenings, though it gets seedier east of Highland after dark.</li>
        </ul>
        <h3>Areas to avoid on foot</h3>
        <ul>
          <li><strong>Skid Row.</strong> Roughly between 3rd&ndash;7th St and San Pedro&ndash;Alameda in DTLA, with a significant homeless encampment. Avoid it on foot entirely.</li>
          <li><strong>Compton, Watts, and parts of South LA.</strong> Higher-crime residential areas that tourists have no reason to visit.</li>
          <li><strong>Hollywood east of Highland after dark.</strong> Stay on the well-lit central blocks of the boulevard.</li>
        </ul>
      </section>

      <section id="car-break-ins" className={styles.section}>
        <h2>Car Break-Ins: The Biggest Real Risk</h2>
        <p>
          <strong>Car break-ins are the most common crime tourists experience in LA.</strong>{" "}
          Smash-and-grabs happen in seconds even in broad daylight, in tourist
          parking lots and on residential streets alike. The defense is simple and
          almost completely effective.
        </p>
        <ul>
          <li><strong>Never leave anything visible.</strong> Not a bag, a jacket, a charger, or even an empty shopping bag &mdash; a thief can&apos;t tell what&apos;s inside.</li>
          <li><strong>Use hotel parking or attended lots</strong> near tourist sites rather than free street parking on quiet blocks.</li>
          <li><strong>Take valuables with you.</strong> If you can&apos;t carry it, lock it in the trunk before you arrive, not in the parking spot where a thief is watching.</li>
        </ul>
      </section>

      <section id="driving-road-safety" className={styles.section}>
        <h2>Driving &amp; Road Safety</h2>
        <p>
          <strong>LA traffic is relentless</strong> and Google Maps routinely
          underestimates commute times. Build in buffer time and don&apos;t plan
          your day around tight back-to-back schedules.
        </p>
        <ul>
          <li><strong>DUI checkpoints are common</strong> on Friday and Saturday nights. Use rideshare if you&apos;ve been drinking.</li>
          <li><strong>Car insurance is mandatory.</strong> Confirm your rental coverage before you drive off the lot.</li>
          <li><strong>Pedestrians do not have right-of-way in practice</strong> despite what the law says. Make eye contact with drivers before crossing.</li>
        </ul>
      </section>

      <section id="common-scams-2026" className={styles.section}>
        <h2>Common LA Scams to Recognize in 2026</h2>
        <p>
          Scams in LA cluster around the big tourist attractions, especially the
          Hollywood Walk of Fame. Recognition is the entire defense &mdash; once you
          can name the pattern, it loses almost all power.
        </p>
        <ul>
          <li><strong>Fake celebrity tour operators</strong> near the Walk of Fame charge $50+ for worthless map tours. Book reputable tours online in advance.</li>
          <li><strong>Aggressive CD hustlers</strong> on Hollywood Blvd put a disc in your hand, then demand cash. Don&apos;t take anything anyone hands you; keep walking.</li>
          <li><strong>Parking lot bait-and-switch.</strong> Attendants quote one price then charge another. Get the rate confirmed in writing or use app-based parking like SpotHero or ParkWhiz.</li>
          <li><strong>Costumed character photos</strong> on Hollywood Blvd that turn into an aggressive demand for a tip. Either tip a couple of dollars up front or wave off the photo.</li>
        </ul>
        <p>
          The thread connecting these: someone interrupts you, hands you something,
          or steers you toward a kiosk. If that pattern triggers, your default move
          is &ldquo;no thanks, keep walking.&rdquo;
        </p>
      </section>

      <section id="earthquake-awareness" className={styles.section}>
        <h2>Earthquake Awareness</h2>
        <p>
          <strong>LA is in an active seismic zone</strong> and minor tremors are
          common. They&apos;re almost never dangerous, but it&apos;s worth knowing
          the drill before you arrive.
        </p>
        <ul>
          <li><strong>In a quake: drop, cover, and hold on</strong> under a table or against an interior wall.</li>
          <li><strong>Stay away from windows</strong> and anything that can fall.</li>
          <li><strong>Read the emergency card</strong> in your hotel room on arrival &mdash; most rooms have one with building-specific instructions.</li>
        </ul>
      </section>

      <section id="solo-traveler-essentials" className={styles.section}>
        <h2>Solo Traveler Essentials</h2>
        <p>
          Solo travel in LA works well in the major visitor areas. The safety
          profile for solo travelers is essentially the same as for groups, with a
          few adjustments worth making before you arrive.
        </p>
        <h3>Pre-trip setup</h3>
        <ul>
          <li><strong>Share live location with one trusted person back home.</strong> Apple Find My, Google Maps location sharing, or Life360 all work.</li>
          <li><strong>Save 911 and LAPD non-emergency (877) 275-5273 to favorites.</strong> Add your hotel&apos;s front desk too.</li>
          <li><strong>Take a photo of your passport ID page</strong> and email it to yourself in case your wallet is lifted.</li>
          <li><strong>Carry two payment methods in different places.</strong> A card on you and a backup in the hotel safe.</li>
        </ul>
        <h3>While you&apos;re here</h3>
        <ul>
          <li>Use rideshare after 10pm in any unfamiliar area rather than walking.</li>
          <li>On the LA Metro, ride the B Line (to Hollywood) and E Line (to Santa Monica) during the day and early evening; avoid riding alone on any line after 9pm.</li>
          <li>Trust the &ldquo;something feels off&rdquo; signal &mdash; step into a hotel lobby, shop, or restaurant before deciding your next move.</li>
        </ul>
        <p>
          If you&apos;re a solo female traveler specifically, the additional context
          and scenarios in our{" "}
          <a href="/destination/la/la-female-solo-travel-guide">
            LA Solo Female Travel Safety Guide
          </a>{" "}
          may be useful.
        </p>
      </section>

      <section id="decision-tree" className={styles.section}>
        <h2>If Something Feels Off: A Decision Tree</h2>
        <p>
          Most safety incidents are avoidable with a single early decision. Use this
          as a mental model for the moment when something pings your awareness.
        </p>
        <ol className={styles.decisionList}>
          <li><strong>Am I in immediate physical danger?</strong> Yes &rarr; 911 and move toward the nearest occupied business. No &rarr; continue.</li>
          <li><strong>Am I in a busy place or an empty one?</strong> Busy &rarr; create distance from the person/situation, change direction. Empty &rarr; move toward a populated area, even if it&apos;s the way you came.</li>
          <li><strong>Do I have line of sight to an open business, hotel, or my car?</strong> Yes &rarr; head inside and pause. No &rarr; call a rideshare from your current location.</li>
          <li><strong>Has my route or plan stopped making sense?</strong> Stop and reroute from inside a safe location.</li>
        </ol>
        <p>
          Notice that none of these steps involve confrontation. Solo travel safety
          in LA is overwhelmingly about angles of departure, not standing your ground.
        </p>
      </section>

      <section id="emergency-resources" className={styles.section}>
        <h2>Emergency Numbers and Resources</h2>
        <ul>
          <li><strong>911</strong> &mdash; Police, fire, ambulance.</li>
          <li><strong>LAPD non-emergency: (877) 275-5273</strong> &mdash; for reports and questions that aren&apos;t emergencies.</li>
          <li><strong>Cedars-Sinai Medical Center</strong> &mdash; 8700 Beverly Blvd, West Hollywood. Level 1 trauma center near most tourist areas.</li>
          <li><strong>Embassy / consulate contacts.</strong> LA hosts consulates for most countries; save your country&apos;s number before you land.</li>
        </ul>
      </section>

      <section id="quick-takeaways" className={styles.section}>
        <h2>The TL;DR</h2>
        <p>
          LA in 2026 is safe for tourists who use ordinary awareness in the major
          visitor areas. The real risks are car break-ins, a few neighborhoods to
          avoid on foot, common tourist scams, and heavy traffic &mdash; not violent
          crime in the places you&apos;ll actually be. Lock your car, stick to the
          well-known corridors, and use rideshare at night, and you&apos;ll have the
          trip you came for.
        </p>
        <p>
          If you take only three habits from this guide:
        </p>
        <ol>
          <li>Never leave anything visible in a parked car &mdash; not a bag, a jacket, or a charger.</li>
          <li>If a stranger on Hollywood Blvd hands you something, the default response is &ldquo;no thanks&rdquo; without breaking stride.</li>
          <li>When in doubt at night, take a rideshare instead of walking through an unfamiliar area.</li>
        </ol>
      </section>

    </article>
  );
}
