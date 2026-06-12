import styles from "./SafetyNarrative.module.css";
import { SAFETYWING_URL } from "@/app/lib/affiliates";

// Long-form prose section that adds editorial depth to nyc-safety-guide.
// Designed to land featured snippets via direct-answer paragraphs after each
// H2/H3, and to capture consolidated intent from the 4 redirected URLs:
//   - is-nyc-safe-at-night
//   - nyc-safety-solo-travelers
//   - nyc-safety-solo-travelers-essentials
//   - nyc-safety-solo-travelers-action-guide
// Section IDs match the FAQ schema so in-page anchors can be cited externally.

export default function SafetyNarrative() {
  return (
    <article className={styles.narrative} aria-label="NYC safety guide deep dive">

      <section id="is-nyc-safe-2026" className={styles.section}>
        <h2>Is NYC Safe for Tourists in 2026?</h2>
        <p className={styles.lead}>
          <strong>Yes.</strong> New York City is safe for tourists in 2026, and statistically
          safer than most large American cities for visitors who stay in central
          neighborhoods. The most realistic risk you face is petty theft &mdash; phone
          snatching, pickpocketing in crowded subway cars, distraction scams near major
          attractions &mdash; not violent crime. Almost every safety incident a tourist
          actually encounters is preventable with three habits: stay aware in crowded
          places, keep valuables off the table, and don&apos;t walk down empty blocks
          looking at your phone.
        </p>
        <p>
          That said, NYC is a real city, not a theme park. It rewards street smarts.
          The advice in this guide is built around what visitors actually run into &mdash;
          a subway transfer that feels off, a stranger asking questions you didn&apos;t
          invite, getting turned around at night in an unfamiliar borough &mdash; not
          abstract worst-case scenarios. Use it the same way you&apos;d use a map: as
          orientation, not as a script.
        </p>
      </section>

      <section id="crime-data-2026" className={styles.section}>
        <h2>What the Crime Data Actually Says</h2>
        <p>
          Perception lags reality with NYC by about two decades. The city&apos;s
          violent-crime rate has trended downward for most of the past 30 years, with
          some post-pandemic volatility on specific crime categories that has since
          stabilized. For travelers, the data point that matters is the ratio of
          tourist-affecting incidents to overall tourism volume: with roughly 60+
          million visitors a year, the absolute number of tourists who experience a
          serious incident remains very small.
        </p>
        <p>
          Two things to take seriously regardless of the headline numbers:
        </p>
        <ul>
          <li><strong>Phone theft is the modern pickpocket.</strong> Devices are snatched out of hands at street corners and through closing subway doors. Keep your phone in your front pocket or hand it back to yourself anytime you&apos;re in a doorway, on a platform edge, or stopped at a crosswalk.</li>
          <li><strong>Distraction scams are real and growing.</strong> Someone bumps you, drops something, asks for the time &mdash; while an accomplice goes for your bag or pocket. The defense is awareness, not aggression: take one step back, look around, then continue.</li>
        </ul>
        <p>
          Beyond that, the everyday baseline is what you&apos;d expect from any major
          American city: occasional aggressive panhandling, the rare mental-health
          incident on the subway, late-night noise in certain blocks. None of these
          require avoidance &mdash; they require the same low-key situational awareness
          you&apos;d use anywhere unfamiliar.
        </p>
      </section>

      <section id="day-vs-night" className={styles.section}>
        <h2>Day vs. Night: When Is NYC Safest?</h2>
        <p>
          <strong>NYC is safest from about 7 a.m. to 10 p.m.</strong> in central tourist
          neighborhoods. Manhattan below 110th Street, brownstone Brooklyn, and the
          western waterfront of Queens stay genuinely active until midnight or later,
          which keeps streets populated and visibility high. The window where solo
          travelers should add extra care is roughly midnight to 5 a.m., and even
          then the rule is location-specific rather than blanket.
        </p>
        <h3>Daytime (7 a.m. &mdash; 7 p.m.)</h3>
        <p>
          Effectively no special precautions beyond normal urban awareness. Use the
          subway, walk between attractions, sit in parks. The biggest daytime risk is
          getting your phone snatched while you&apos;re standing on a street corner
          checking directions &mdash; step inside a shop or under an awning instead.
        </p>
        <h3>Evening (7 p.m. &mdash; midnight)</h3>
        <p>
          Still safe in tourist-heavy areas. Times Square, Midtown, Greenwich Village,
          SoHo, the Lower East Side, Williamsburg, and Long Island City stay
          well-populated. Stick to numbered avenues over numbered streets when walking
          at night &mdash; avenues run longer and stay busier. Cross-streets in residential
          blocks can empty out quickly.
        </p>
        <h3>Late night (midnight &mdash; 5 a.m.)</h3>
        <p>
          This is where you make calls based on location and how you&apos;re moving.
          Late-night Manhattan from Houston to 96th Street, plus Williamsburg, DUMBO,
          and Long Island City, are reliable for walking with awareness. Anywhere
          else, take a rideshare. Don&apos;t wait on empty subway platforms after
          midnight if you can avoid it &mdash; if you must, stand near the conductor&apos;s
          car (middle of the platform, marked by a colored zebra-stripe board) where
          MTA workers can see you.
        </p>
      </section>

      <section id="neighborhood-safety" className={styles.section}>
        <h2>NYC Neighborhood Safety: A Realistic Breakdown</h2>
        <p>
          Every &ldquo;safe neighborhoods&rdquo; list flattens the picture. The honest
          version: most tourist-facing neighborhoods are safe at the times tourists
          are in them. Below is a more useful framing &mdash; where to feel relaxed,
          where to stay alert, and what specific patterns to watch for in each.
        </p>
        <h3>Reliably safe, day and night</h3>
        <ul>
          <li><strong>Upper East Side &amp; Upper West Side.</strong> Residential, well-lit, family-heavy. The Museum Mile corridor stays active until 10 p.m. After that, side streets get quiet &mdash; stick to Broadway, Columbus, or Lexington for walking.</li>
          <li><strong>Midtown East (around Grand Central).</strong> Always populated. Office foot traffic by day, hotel and dining traffic by night. Watch for phone snatchers near Grand Central&apos;s 42nd Street entrance.</li>
          <li><strong>Brooklyn Heights &amp; DUMBO.</strong> Tourist-dense, well-policed, scenic. Walking the Brooklyn Bridge after sunset is one of the safer late-evening solo activities in the city.</li>
          <li><strong>Long Island City (Queens).</strong> Increasingly residential; parks are active until late spring/summer evenings. Subway connections to Manhattan are easy.</li>
        </ul>
        <h3>Safe with normal awareness</h3>
        <ul>
          <li><strong>Times Square &amp; Theater District.</strong> Safe but pickpocket-prone because of crowd density. Keep your bag zipped and in front of you. Costumed characters and street performers can crowd you &mdash; smile, keep walking, don&apos;t engage in conversations you didn&apos;t start.</li>
          <li><strong>Greenwich Village, SoHo, Lower East Side.</strong> Bar-heavy at night. Stay on main streets &mdash; Houston, Bowery, West Broadway, Avenue A &mdash; rather than the smaller named streets after midnight.</li>
          <li><strong>Williamsburg, Bushwick (Brooklyn).</strong> Active and trendy. The blocks immediately around the L train stops stay populated; venture two or three blocks deeper and it gets industrial and quiet quickly.</li>
          <li><strong>Harlem (above 110th).</strong> Safer than its reputation. Use the same rules as anywhere else &mdash; busy avenues, well-lit corners. Sunday gospel-tour traffic during the day, and good food scene around Lenox/Frederick Douglass.</li>
        </ul>
        <h3>Stay extra alert</h3>
        <ul>
          <li><strong>Far western Midtown after 11 p.m.</strong> The 8th Avenue corridor near the Port Authority quiets down fast. Take a rideshare instead of walking from late shows.</li>
          <li><strong>Subway transfers in less-trafficked stations.</strong> Atlantic Avenue, 145th Street, certain Queens transfer points. Use Times Square, Union Square, or Grand Central for late-night transfers when possible.</li>
          <li><strong>Park edges after dark.</strong> Central Park, Prospect Park, Washington Square Park all empty out after 11 p.m. Walk around them, not through them, at night.</li>
        </ul>
      </section>

      <section id="subway-safety" className={styles.section}>
        <h2>NYC Subway Safety in 2026: The Practical Version</h2>
        <p>
          <strong>The subway is safer than its reputation suggests</strong> for the
          vast majority of trips during normal travel hours. It is, however, where
          the most common tourist incidents (phone snatching, pickpocketing) happen,
          so apply real attention here.
        </p>
        <h3>Five habits that handle 95% of subway risk</h3>
        <ul>
          <li><strong>Stand back from the platform edge.</strong> Especially if you&apos;re looking at your phone. The yellow strip is the absolute minimum &mdash; leave a step behind it.</li>
          <li><strong>Phone in pocket near doors.</strong> A snatch-and-run at closing doors is the single most common tourist incident. If you must use your phone on a train, sit with your back to a wall.</li>
          <li><strong>Pick your car deliberately.</strong> The middle car of the train (where the conductor stands) is the busiest and has MTA staff. Avoid an empty car even if it&apos;s convenient.</li>
          <li><strong>Have your route loaded before you tap in.</strong> Citymapper, Transit App, or Google Maps all work fine offline once you&apos;ve loaded the trip. Standing on a platform actively searching for directions marks you out.</li>
          <li><strong>Switch cars if a situation feels off.</strong> Walk to the next car at the next station. You don&apos;t need a reason. The train cars connect; just step through the door.</li>
        </ul>
        <h3>Late-night subway specifics</h3>
        <p>
          After midnight, ridership drops sharply. The system runs 24/7, but the
          social density that makes it feel safe in the day is gone. Three changes
          to your daytime habits:
        </p>
        <ul>
          <li>Wait inside the station agent&apos;s booth area, not at the far end of the platform.</li>
          <li>If a platform is completely empty and you&apos;ve been waiting more than 10 minutes, consider a rideshare instead.</li>
          <li>At your destination station, exit with the largest group of other riders.</li>
        </ul>
        <p className={styles.resourceLink}>
          For detailed navigation and line-by-line safety information, check our{" "}
          <a href="/destination/nyc/nyc-subway-map">
            interactive subway map
          </a>{" "}
          and{" "}
          <a href="/destination/nyc/subway-safety-guide">
            comprehensive subway safety guide
          </a>
          .
        </p>
      </section>

      <section id="common-scams-2026" className={styles.section}>
        <h2>Common NYC Scams to Recognize in 2026</h2>
        <p>
          Scams in NYC haven&apos;t changed much in a decade because they still work.
          Recognition is the entire defense &mdash; once you can name the pattern, it
          loses almost all power.
        </p>
        <ul>
          <li><strong>The CD/mixtape handoff.</strong> A &ldquo;rapper&rdquo; near Times Square or 5th Avenue puts a CD in your hand, asks your name, signs it &mdash; then demands $20. The defense: don&apos;t let them put anything in your hand. Hands in pockets, keep walking.</li>
          <li><strong>The costumed character photo.</strong> Elmo, Spider-Man, the Statue of Liberty &mdash; smile for a photo, then aggressively demand a tip ($10-20). Either tip a couple of dollars when initially asked, or wave off the photo.</li>
          <li><strong>Fake monk donations.</strong> Someone in robes hands you a bracelet and a card asking for a temple donation. Hand it back. Keep walking. They&apos;re not affiliated with any temple.</li>
          <li><strong>&ldquo;Lost tourist&rdquo; asking for help with their phone.</strong> Hands you a phone, then says it&apos;s frozen and asks you to help with their PIN/banking app. Don&apos;t take the phone. Point at a hotel concierge or a uniformed officer instead.</li>
          <li><strong>Ticket scalpers outside Broadway theaters.</strong> Tickets are real but at 3-5x face value, or expired. Buy from TKTS in Times Square, the theater&apos;s own box office, or Telecharge / Today Tix.</li>
          <li><strong>&ldquo;Free&rdquo; tour buses or boat tickets.</strong> A flyer-handler steers you to a kiosk that locks you into a non-refundable purchase. Book tours online in advance from the operator&apos;s actual website.</li>
        </ul>
        <p>
          The thread connecting all of these: someone interrupts you, hands you
          something, or asks for help on the street. If that pattern triggers, your
          default move is &ldquo;no thanks, keep walking.&rdquo; You&apos;re not being
          rude &mdash; you&apos;re using the same heuristic every New Yorker uses.
        </p>
      </section>

      <section id="solo-traveler-essentials" className={styles.section}>
        <h2>Solo Traveler Essentials</h2>
        <p>
          Solo travel in NYC works because the city is built for individual movement &mdash;
          good transit, dense street life, dining counters and bars that welcome
          single diners, attractions designed to be walked alone. The safety profile
          for solo travelers is essentially the same as for groups, with two
          adjustments worth making before you arrive.
        </p>
        <h3>Pre-trip setup</h3>
        <ul>
          <li><strong>Share live location with one trusted person back home.</strong> Apple Find My, Google Maps location sharing, or Life360 all work. Set it to expire when you fly home so you&apos;re not sharing forever.</li>
          <li><strong>Save NYPD non-emergency (311) and 911 to favorites.</strong> Add the contact info for your hotel&apos;s front desk too &mdash; useful if you&apos;re ever in a position where you need to be picked up or escorted in.</li>
          <li><strong>Take a photo of your passport ID page</strong> and email it to yourself. If your wallet gets lifted, you&apos;ll move faster at the consulate or with TSA on the way home.</li>
          <li><strong>Carry two payment methods in different places.</strong> A card in your front pocket and a backup card in a hotel safe. Cash for tips and small transit needs.</li>
          <li><strong>Sort travel insurance before you fly.</strong> A single ER visit in NYC can run four figures; if you&apos;re visiting from abroad, your home coverage likely won&apos;t apply. <a href={SAFETYWING_URL} target="_blank" rel="sponsored noopener">SafetyWing&apos;s Nomad Insurance</a> is a solid budget option built for travelers &mdash; whichever provider you pick, buy it before departure, not after something happens.</li>
        </ul>
        <h3>While you&apos;re here</h3>
        <ul>
          <li>Eat dinner at the bar of a restaurant rather than a table for one &mdash; the bar is sociable and you&apos;ll usually get faster service.</li>
          <li>Walk with purpose even when you&apos;re lost. Step into a hotel lobby, coffee shop, or department store to look at your phone or map.</li>
          <li>If you&apos;re going to a venue at night, take note of the cross streets and the nearest 24-hour business on the way back &mdash; mental waypoints help if you need to re-route.</li>
          <li>Trust the &ldquo;something feels off&rdquo; signal. Cross the street, enter a store, change subway cars. You don&apos;t need a reason; New Yorkers do this constantly.</li>
        </ul>
        <p>
          If you&apos;re a solo female traveler specifically, the additional context
          and scenarios in our{" "}
          <a href="/destination/nyc/nyc-female-solo-travel-guide">
            NYC Solo Female Travel Safety Guide
          </a>{" "}
          may be useful &mdash; it covers night transit, harassment response, and
          neighborhood patterns specifically through that lens.
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
          <li><strong>Am I in a crowded place or an empty one?</strong> Crowded &rarr; create distance from the person/situation, change direction. Empty &rarr; move toward a populated area, even if it&apos;s the way you came.</li>
          <li><strong>Do I have line of sight to an open business, hotel, or transit hub?</strong> Yes &rarr; head inside and pause. No &rarr; call a rideshare from your current location.</li>
          <li><strong>Has my route or plan stopped making sense?</strong> Stop and reroute from inside a safe location. Don&apos;t try to navigate on the street.</li>
        </ol>
        <p>
          Notice that none of these steps involve confrontation. Solo travel safety
          in NYC is overwhelmingly about angles of departure, not standing your ground.
        </p>
      </section>

      <section id="emergency-resources" className={styles.section}>
        <h2>Emergency Numbers and Resources</h2>
        <ul>
          <li><strong>911</strong> &mdash; Police, fire, ambulance. English; Spanish and other languages on request.</li>
          <li><strong>311</strong> &mdash; Non-emergency city services. Useful for noise complaints, lost-and-found, taxi/rideshare complaints, and routing questions to the right agency.</li>
          <li><strong>NYC Well: 988</strong> &mdash; 24/7 mental-health crisis support, including for travelers feeling overwhelmed.</li>
          <li><strong>MTA help points</strong> &mdash; Blue and yellow boxes on every subway platform. Press the red button for emergencies, blue for information &mdash; both connect you to a live person.</li>
          <li><strong>Hospitals with 24-hour ERs in Manhattan:</strong> Mount Sinai (Upper East Side), NewYork-Presbyterian (Upper East and Upper West), Bellevue (East 28th), Lenox Hill (Upper East Side), NYU Langone (East 34th).</li>
          <li><strong>Embassy / consulate contacts.</strong> Save your country&apos;s NYC consulate phone number before you land. Most have 24-hour duty officers for lost passports and emergencies.</li>
        </ul>
      </section>

      <section id="quick-takeaways" className={styles.section}>
        <h2>The TL;DR</h2>
        <p>
          NYC in 2026 is safe for tourists who use ordinary urban awareness. Real
          risks are petty theft, distraction scams, and the occasional uncomfortable
          subway moment &mdash; not violent crime. Stick to populated avenues at night,
          keep your phone close near doors and platform edges, trust the &ldquo;something
          feels off&rdquo; instinct, and you&apos;ll have the trip you came for.
        </p>
        <p>
          If you take only three habits from this guide:
        </p>
        <ol>
          <li>Keep your phone in your pocket or hand, not loose, especially near subway doors and street corners.</li>
          <li>If a stranger interrupts you on the street, the default response is &ldquo;no thanks&rdquo; without breaking stride.</li>
          <li>When in doubt, step inside the nearest open business before deciding your next move.</li>
        </ol>
      </section>

    </article>
  );
}
