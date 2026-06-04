import styles from "./FemaleSafetyNarrative.module.css";

// Long-form narrative for the female-solo LA safety guide.
// Mirrors the NYC narrative structure section-for-section, with content
// rewritten for Los Angeles (car-centric city, parking structures, rideshare,
// WeHo/Santa Monica nightlife). Each section keeps an id so anchor-link
// references work in JSON-LD and from external content.

export default function FemaleSafetyNarrative() {
  return (
    <article className={styles.narrative} aria-label="LA safety guide for solo female travelers">

      <section id="is-la-safe-solo-female-2026" className={styles.section}>
        <h2>Is LA Safe for Solo Female Travelers in 2026?</h2>
        <p className={styles.lead}>
          <strong>Yes.</strong> Los Angeles is one of the more welcoming big cities
          in America for women traveling alone &mdash; safer at the practical level
          than its reputation suggests in the major tourist and residential areas.
          Santa Monica, West Hollywood, Silver Lake, Los Feliz, Beverly Hills, and
          the well-trafficked parts of DTLA are all comfortable to walk alone in.
          None of that means risk is zero. It means the risk profile here is
          specific &mdash; car break-ins, isolated parking structures, a few areas
          to avoid &mdash; rather than widespread, and it&apos;s manageable with a
          handful of intentional habits.
        </p>
        <p>
          This guide is written for the way women actually move through LA: a solo
          dinner at a counter seat in WeHo, a rideshare home after a rooftop bar, a
          morning walk on the Santa Monica boardwalk, a drive across the city to a
          farmers market. It avoids fear-based framing. The advice below is specific
          because vague advice doesn&apos;t help in the moment.
        </p>
      </section>

      <section id="why-la-works-solo-women" className={styles.section}>
        <h2>Why LA Works Well for Solo Women</h2>
        <p>
          A few things about Los Angeles make solo female travel easier here than its
          reputation suggests:
        </p>
        <ul>
          <li><strong>Walkable cores.</strong> Despite the car-centric reputation, neighborhoods like Santa Monica, Silver Lake, Los Feliz, and parts of DTLA have walkable grids with consistent foot traffic well into the evening.</li>
          <li><strong>Inclusive social scenes.</strong> West Hollywood&apos;s LGBTQ+ community creates a safer, more inclusive nightlife environment that solo women consistently report feeling comfortable in.</li>
          <li><strong>Solo dining is normal.</strong> Counter seating is standard at most good restaurants &mdash; Gjelina, Sqirl, Grand Central Market stalls, and any sushi bar have natural solo spots. Nobody will ask why you&apos;re alone.</li>
          <li><strong>Rideshare everywhere.</strong> Uber and Lyft are widely used by women in LA and are the right choice after dark in any unfamiliar area. You always have a fallback option.</li>
          <li><strong>Active women everywhere.</strong> You&apos;ll see solo women running the beach path at dawn, working from coffee shops all day, and walking residential blocks in Los Feliz at night. You will not be conspicuous.</li>
        </ul>
        <p>
          The mental adjustment that helps most: think in terms of specific,
          avoidable situations &mdash; not a vague sense that the whole city is risky.
          You&apos;re just another woman moving through a city built for it.
        </p>
      </section>

      <section id="what-to-worry-about" className={styles.section}>
        <h2>What to Actually Worry About (and What Not To)</h2>
        <p>
          Honest risk assessment matters more than long lists of generic warnings.
          Here is what you should keep on your radar &mdash; and what you can safely
          drop from it.
        </p>
        <h3>Worth your attention</h3>
        <ul>
          <li><strong>Car break-ins.</strong> The most common incident affecting visitors in LA. Defense: never leave anything visible in your car, and park in well-lit, populated spots.</li>
          <li><strong>Isolated parking structures.</strong> Avoid walking to your car in dark parking structures alone &mdash; ask hotel or venue staff to escort you if needed.</li>
          <li><strong>Drink tampering at bars and clubs.</strong> Real but rare. Defense: keep your drink in your hand or covered at all times. Don&apos;t accept drinks from strangers you haven&apos;t seen poured.</li>
          <li><strong>Late-night rideshare pickups.</strong> Not dangerous per se, just worth being deliberate about. Walk to a pickup spot on the main street, not down a side alley, and confirm the car before getting in.</li>
        </ul>
        <h3>Lower priority than the internet suggests</h3>
        <ul>
          <li><strong>&ldquo;The whole city is dangerous.&rdquo;</strong> The risks in LA are specific and concentrated. Within the tourist-relevant neighborhoods, there are no entire areas solo women should skip &mdash; just specific blocks and a few areas to avoid.</li>
          <li><strong>&ldquo;Don&apos;t go out alone after dark.&rdquo;</strong> Outdated advice. Santa Monica, WeHo, and Beverly Hills are comfortable at night with consistent foot traffic. Going out alone is normal and routine.</li>
          <li><strong>&ldquo;Dress to blend in.&rdquo;</strong> Wear whatever the weather and your preference dictate. Comfortable shoes and a light layer for cool evenings are the only practical recommendations, and that&apos;s about comfort, not safety.</li>
        </ul>
      </section>

      <section id="choosing-where-to-stay" className={styles.section}>
        <h2>Choosing Where to Stay</h2>
        <p>
          The two-question framework that handles almost all accommodation
          decisions for solo women:
        </p>
        <ol>
          <li><strong>Does it have 24-hour staffed reception?</strong> A staffed lobby at any hour is the single biggest safety feature in any accommodation. It means you can re-enter late without unlocking doors in a dark hallway, and there&apos;s a witness if anything happens at the front door.</li>
          <li><strong>Is it on a populated, walkable block?</strong> Open it in Street View. Santa Monica&apos;s walkable grid, West Hollywood, and Beverly Hills are functionally safer at all hours than a quiet hillside block, even if both look fine on a map.</li>
        </ol>
        <h3>Best neighborhoods to base yourself</h3>
        <ul>
          <li><strong>Santa Monica</strong> is the top pick &mdash; walkable grid, beach access, well-lit streets, and consistent foot traffic at night.</li>
          <li><strong>West Hollywood</strong> is excellent for solo women &mdash; the LGBTQ+ community creates a safer, more inclusive social environment.</li>
          <li><strong>Beverly Hills</strong> is impeccably safe, and <strong>Los Feliz</strong> is quiet and residential but comfortable day and night.</li>
        </ul>
        <h3>Once you&apos;re in the room</h3>
        <ul>
          <li>Test the door lock and deadbolt the moment you arrive. If either feels loose, request a different room.</li>
          <li>A <strong>portable door lock</strong> (under $20, fits any door that opens inward) is the single most-recommended item in the solo-female-travel community.</li>
          <li>Avoid ground-floor rooms with street-accessible windows if you have the option.</li>
          <li>Use the in-room safe for passport, backup cards, and anything you don&apos;t need on your person.</li>
        </ul>
      </section>

      <section id="getting-around-female-solo" className={styles.section}>
        <h2>Getting Around: Rideshare, Driving, Metro</h2>
        <p>
          Each transit mode has a slightly different solo-female-specific calculus.
          For general LA transit safety, see our{" "}
          <a href="/destination/la/safety-guide">main LA safety guide</a>.
          Below are the additions that matter through this lens.
        </p>
        <h3>Rideshare</h3>
        <ul>
          <li><strong>Confirm driver name, car model, and plate</strong> before getting in. The Uber/Lyft app shows all three.</li>
          <li><strong>Sit in the back, passenger side</strong> &mdash; closer to the door, easier to exit.</li>
          <li><strong>Share trip status</strong> with someone via the app&apos;s built-in feature. Both apps also have in-app emergency buttons that connect to 911.</li>
          <li><strong>Don&apos;t confirm your name to a driver who pulls up.</strong> Ask them who they&apos;re picking up first.</li>
          <li><strong>Rideshare is the right choice after 10pm</strong> in any unfamiliar area.</li>
        </ul>
        <h3>Driving &amp; parking</h3>
        <ul>
          <li><strong>Never leave anything visible in your car.</strong> Car break-ins are the most common incident affecting visitors.</li>
          <li><strong>Avoid walking to your car in dark parking structures alone</strong> &mdash; ask hotel or venue staff to escort you if needed.</li>
          <li><strong>Park in well-lit, populated spots</strong> rather than the cheapest isolated lot.</li>
        </ul>
        <h3>Metro</h3>
        <ul>
          <li><strong>The Metro is fine during daylight hours</strong> but avoid empty cars at night.</li>
          <li><strong>Position yourself near other riders</strong> when the platform or car is sparse.</li>
          <li><strong>If someone is hassling you, change cars at the next station.</strong> Don&apos;t engage, just move when the doors open.</li>
        </ul>
      </section>

      <section id="handling-unwanted-attention" className={styles.section}>
        <h2>Handling Unwanted Attention</h2>
        <p>
          Street comments and approaches can happen, especially around tourist-heavy
          spots like the Venice boardwalk, Hollywood Boulevard, and outside bars in
          nightlife districts. The good news: non-engagement works almost everywhere.
        </p>
        <h3>The default response</h3>
        <p>
          Keep walking. Don&apos;t make eye contact. Don&apos;t respond. This works
          for the vast majority of street interactions, and most people who try to
          engage strangers disengage immediately.
        </p>
        <h3>If they persist</h3>
        <p>
          Escalate one step at a time:
        </p>
        <ol>
          <li>Pull out your phone and start talking loudly to it &mdash; a real call or fake. Most people back off when you&apos;re visibly &ldquo;witnessed.&rdquo;</li>
          <li>Cross the street. If they cross too, that confirms intent.</li>
          <li>Enter the nearest open business. Ask the staff if you can wait there for a minute. They will say yes.</li>
          <li>Call 911 if you feel genuinely threatened.</li>
        </ol>
        <h3>What not to do</h3>
        <ul>
          <li><strong>Don&apos;t engage verbally to &ldquo;set them straight.&rdquo;</strong> It almost never works and often escalates. The point is to remove yourself.</li>
          <li><strong>Don&apos;t apologize when ignoring them.</strong> Silence and movement are clearer.</li>
          <li><strong>Don&apos;t feel guilty about being &ldquo;rude.&rdquo;</strong> You aren&apos;t obligated to anyone you didn&apos;t invite.</li>
        </ul>
      </section>

      <section id="bar-restaurant-safety" className={styles.section}>
        <h2>Bar &amp; Restaurant Safety</h2>
        <p>
          Solo dining and solo drinking in LA are normal, comfortable, and
          everywhere. A few patterns worth keeping in mind:
        </p>
        <ul>
          <li><strong>Sit at the counter.</strong> Counter seating is standard at most good restaurants, and rooftop bars in WeHo and Santa Monica welcome solo guests. The bartender becomes your unofficial situational-awareness partner.</li>
          <li><strong>Keep your drink in your hand or covered.</strong> If you go to the bathroom, leave the drink and get a fresh one when you return. Don&apos;t accept drinks from strangers you haven&apos;t seen poured.</li>
          <li><strong>West Hollywood venues are particularly female-friendly</strong> and a comfortable starting point for solo nightlife.</li>
          <li><strong>For dating-app meetings:</strong> always meet in a public place you chose. Tell a friend your location. Have your own way home.</li>
          <li><strong>Rideshare after a night out:</strong> walk to a pickup spot on the main street, not down a side alley, and default to a rideshare if you&apos;ve had more than two drinks.</li>
        </ul>
      </section>

      <section id="apps-and-tech" className={styles.section}>
        <h2>Tech &amp; Apps Worth Setting Up Before You Land</h2>
        <ul>
          <li><strong>Live location sharing</strong> with one trusted person back home. Apple Find My, Google Maps location share, or Life360. Set it to expire when your trip ends.</li>
          <li><strong>Uber and Lyft</strong> &mdash; download both and set up payment before you arrive. Both have in-app emergency buttons that connect to 911.</li>
          <li><strong>Google Maps offline</strong> &mdash; download LA offline before arriving so you can navigate without signal.</li>
          <li><strong>911 saved to favorites.</strong> Hotel front desk too.</li>
          <li><strong>Portable phone charger</strong> isn&apos;t an app, but it&apos;s essential &mdash; LA distances drain batteries fast.</li>
        </ul>
      </section>

      <section id="if-something-feels-wrong" className={styles.section}>
        <h2>If Something Feels Wrong: Decision Tree</h2>
        <p>
          Most safety incidents are avoidable with one early decision. Use this
          mental flow:
        </p>
        <ol className={styles.decisionList}>
          <li><strong>Am I in immediate danger?</strong> Yes &rarr; 911. Move toward the nearest open business or group. No &rarr; continue.</li>
          <li><strong>Is the situation around a person, a location, or a feeling?</strong> Person &rarr; create distance, change direction. Location &rarr; head to a populated area. Feeling &rarr; trust it. Reroute even without an obvious reason.</li>
          <li><strong>Can I get inside somewhere?</strong> Yes &rarr; do it now. Hotels, shops, restaurants are all valid. Pause and decide what&apos;s next from inside. No &rarr; rideshare to a known location.</li>
          <li><strong>Am I making this decision sober and clear-headed?</strong> If not, the answer is always &ldquo;take a rideshare directly to my hotel and decide tomorrow.&rdquo;</li>
        </ol>
        <p>
          The thread connecting these: change your context first, deliberate second.
          You don&apos;t need to justify the decision to anyone, including yourself.
        </p>
      </section>

      <section id="three-habits-female-solo" className={styles.section}>
        <h2>Three Habits That Cover 80% of Risk</h2>
        <p>
          If you do nothing else from this guide, do these three things:
        </p>
        <ol>
          <li><strong>Share live location with one person back home</strong> for the duration of the trip. Two taps in your phone. Removes ambiguity if anything happens.</li>
          <li><strong>Use rideshare after dark in unfamiliar areas</strong> &mdash; and never walk to an isolated parking structure alone.</li>
          <li><strong>Trust the early signal.</strong> If a block, a person, a vibe pings your awareness, change direction immediately. The cost of being wrong is zero.</li>
        </ol>
        <p>
          LA is a city where solo women have great trips by the millions every year.
          It rewards confidence and a little planning. The rest is just paying
          attention &mdash; which you already know how to do.
        </p>
      </section>

    </article>
  );
}
