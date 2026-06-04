'use client';
import Image from 'next/image';
import Link from 'next/link';
import styles from './lasvegasthingstodo.module.css';
import Header from "@/app/components/destination/header/header";
import Footer from "../../../../app/components/Header/Footer/footer";
import BookingCTA from "@/app/components/destination/BookingCTA/BookingCTA";

// Las Vegas-only: detailed practical categories preserved from the original LV page.
const categories = [
  { title: "Shows & Residencies", blurb: "Cirque du Soleil is the headline act — 'O' at Bellagio (water, ~$110+) and 'Mystère' at Treasure Island are the picks. Pop residencies rotate through the Colosseum at Caesars Palace, Dolby Live at Park MGM, and the Sphere. Book 3–5 days ahead; same-day Tix4Tonight booths sell discounted seats from ~$30.", href: "/destination/lasvegas/bookings?tab=activities&from=things-to-do" },
  { title: "The Strip & Free Attractions", blurb: "Walk the 4-mile boulevard — best done in two halves, after dark. Free: the Bellagio fountains (every 15–30 min from afternoon to midnight), the Conservatory, the Venetian's canals, and the Park MGM district. Allow a full evening end-to-end. The Sphere's exterior LED 'Exosphere' is free to view from outside.", href: "/destination/lasvegas/bookings?tab=activities&from=things-to-do" },
  { title: "Fremont Street & Downtown", blurb: "Downtown's covered LED canopy (Viva Vision) runs free light-and-music shows nightly. SlotZilla zip line flies the length of it (~$49–$69). Grittier, cheaper, older Vegas — worth one evening, plus the Arts District nearby for craft cocktails.", href: "/destination/lasvegas/bookings?tab=activities&from=things-to-do" },
  { title: "Pools, Dayclubs & Gondolas", blurb: "Summer days belong to the pools and dayclubs — Encore Beach Club, Marquee at Cosmopolitan, Wet Republic at MGM ($30–$75 cover, more for events). Indoor and outdoor gondola rides glide through the Venetian's canals (~$39 per person). Book pool cabanas well ahead in peak heat.", href: "/destination/lasvegas/bookings?tab=activities&from=things-to-do" },
  { title: "Museums & Culture", blurb: "The Neon Museum is the standout — an outdoor 'boneyard' of restored casino signs, best on the lit night tour (~$25–$40). The Mob Museum downtown ($30, allow 2–3 hrs) is genuinely excellent. AREA15 is an immersive art-and-entertainment campus; the Atomic Museum covers Nevada's nuclear-test history.", href: "/destination/lasvegas/bookings?tab=activities&from=things-to-do" },
  { title: "Day Trips", blurb: "Hoover Dam is 45 min away (dam tour ~$30). Red Rock Canyon is 30 min — a 13-mile scenic loop drive ($20/car) plus hiking. Valley of Fire is ~1 hr of stunning red sandstone. Grand Canyon West (with the Skywalk) is ~2.5 hrs; the South Rim is a long ~4.5-hr day or an overnight.", href: "/destination/lasvegas/bookings?tab=activities&from=things-to-do" },
];

export default function LasVegasThingsToDoClient() {
  return (
    <>
    <Header links={[
      { href: "/destination/lasvegas/best-areas-to-stay", label: "Best Areas to Stay" },
      { href: "/destination/lasvegas/solo-trip-to-lasvegas", label: "Solo Trip to Las Vegas" },
      { href: "/destination/lasvegas/safety-guide", label: "Las Vegas Safety" },
      { href: "/destination/lasvegas/lasvegas-female-solo-travel-guide", label: "Female Travel Guide" },
    ]} />
    <BookingCTA variant="slim" text="Book your Las Vegas trip →" href="/destination/lasvegas/bookings?tab=activities&from=things-to-do" label="See tickets & tours" />
    <main className={styles.container}>
      {/* Hero / Visual Header */}
      <section className={styles.banner}>
        <Image
        src="/data/majorcities/lasvegas/assets/lasvegas.webp"
        alt="Experiences and activities in Las Vegas"
        fill
        priority
        className={styles.bannerImage}
        />
      </section>
      <section className={styles.hero}>
        <h1>The Best Things to Do in Las Vegas</h1>
        <p>
          Las Vegas is more than casinos. The difference between a great visit and an exhausting
          one usually comes down to pacing — the city runs hot and late, so you group the right
          things together and save the walking for after dark. This guide breaks Vegas into what&apos;s
          actually worth your time: the shows, the free Strip spectacle, the pools, downtown&apos;s
          Fremont Street, the museums, and the day trips into the desert. Mix two or three of these
          per day, leave the afternoon heat for a pool or a museum, and the city is a lot easier to love.
        </p>
        {/* Las Vegas-only: quick-action buttons */}
        <div className={styles.heroCtas}>
          <Link href="/destination/lasvegas/bookings?tab=activities&from=things-to-do" className={styles.primaryCta}>
            Book tickets &amp; tours
          </Link>
          <Link href="/destination/lasvegas/itinerary" className={styles.secondaryCta}>
            See 3-day itinerary
          </Link>
        </div>
      </section>

      {/* The Icons */}
      <section className={styles.bridge}>
        <h2>The icons (do at least a few)</h2>
        <p>
          These are the names everyone knows, and they&apos;re famous for a reason. You don&apos;t need all
          of them — pick the ones that match your trip.
        </p>
        <ul>
          <li><strong>The Bellagio Fountains</strong> — free, every 15–30 minutes from afternoon to midnight.
          The single best free show in the city; watch from the sidewalk or a Cosmopolitan balcony bar.</li>
          <li><strong>The Sphere</strong> — the 366-foot LED dome at the Venetian. The exterior &quot;Exosphere&quot; is
          free to see; immersive shows inside (like the Postcard from Earth experience) run from ~$59.</li>
          <li><strong>Cirque du Soleil</strong> — &quot;O&quot; at Bellagio is the flagship (water stage, ~$110+); &quot;Mystère&quot;
          at Treasure Island is the value pick. Multiple shows run nightly across the Strip.</li>
          <li><strong>Fremont Street Experience</strong> — downtown&apos;s free LED-canopy light shows run every night,
          with live bands and the SlotZilla zip line overhead.</li>
          <li><strong>The High Roller</strong> — a 550-foot observation wheel at the LINQ, ~$25–$37. A full rotation
          takes about 30 minutes; sunset and after-dark cabins are the best.</li>
          <li><strong>Venetian Gondola Rides</strong> — indoor and outdoor canal rides with a singing gondolier,
          ~$39 per person. Touristy, yes, but a classic.</li>
          <li><strong>The Strip after dark</strong> — worth walking once, end to end in two halves, for the sheer
          sensory overload. See it, then duck into a casino to cool off.</li>
        </ul>
        <p>Pick <strong>one</strong> headline show and <strong>one</strong> view — the tickets add up fast on the Strip.</p>
      </section>

      {/* Free things */}
      <section className={styles.bridge}>
        <h2>Free things to do in Las Vegas</h2>
        <p>
          You can have a genuinely great Vegas night for almost nothing. Some of the best
          spectacle on the Strip doesn&apos;t cost a cent.
        </p>
        <ul>
          <li><strong>Bellagio Fountains &amp; Conservatory</strong> — the choreographed water show outside and the
          free seasonal botanical displays inside, both free and both stunning.</li>
          <li><strong>Fremont Street light shows</strong> — the Viva Vision canopy runs free shows nightly downtown,
          with free live music on multiple stages.</li>
          <li><strong>The Venetian&apos;s canals &amp; St. Mark&apos;s Square</strong> — wander the indoor replica of Venice,
          free to walk through (the gondola ride is the paid part).</li>
          <li><strong>The Exosphere</strong> — the Sphere&apos;s exterior LED display is free to view from across the
          street; best after dark.</li>
          <li><strong>Casino spectacle</strong> — the Flamingo wildlife habitat, the Park MGM district, and the
          themed lobbies (Caesars, the Venetian) are all free to stroll.</li>
          <li><strong>Red Rock Canyon scenic overlooks</strong> — while the loop drive has a small fee, the visitor
          center and several roadside viewpoints are free, 30 minutes from the Strip.</li>
        </ul>
      </section>

      {/* Museums */}
      <section className={styles.bridge}>
        <h2>Museums worth the ticket</h2>
        <ul>
          <li><strong>The Neon Museum</strong> — the standout. An outdoor &quot;boneyard&quot; of restored vintage casino
          signs; the lit night tour (~$25–$40) is far better than daytime.</li>
          <li><strong>The Mob Museum</strong> — downtown, in the old federal courthouse ($30). Genuinely excellent on
          organized crime and law enforcement; allow 2–3 hours.</li>
          <li><strong>AREA15</strong> — an immersive art-and-entertainment campus off-Strip (Omega Mart is the
          headline attraction); part gallery, part funhouse.</li>
          <li><strong>The Atomic Museum</strong> — a Smithsonian-affiliate covering Nevada&apos;s nuclear-testing history;
          surprising and well done.</li>
          <li><strong>The Las Vegas Natural History Museum &amp; The Discovery</strong> — the best picks with kids,
          both near downtown.</li>
        </ul>
      </section>

      {/* By area */}
      <section className={styles.bridge}>
        <h2>Things to do by area</h2>
        <p>Group your days by area to cut down on Strip traffic and walking in the heat.</p>
        <ul>
          <li><strong>South Strip</strong> — Mandalay Bay&apos;s Shark Reef, the MGM district, T-Mobile Arena and the
          Park, plus the New York-New York roller coaster.</li>
          <li><strong>Center Strip</strong> — the Bellagio fountains, Caesars Palace and the Forum Shops, the
          Cosmopolitan, the LINQ Promenade and the High Roller.</li>
          <li><strong>North Strip</strong> — the Venetian, the Sphere, the Wynn/Encore, and the Strat&apos;s thrill rides
          and observation deck.</li>
          <li><strong>Downtown &amp; Fremont</strong> — the Fremont Street Experience, the Mob Museum, the Neon Museum,
          and the Arts District for cocktails and galleries.</li>
          <li><strong>Off-Strip</strong> — AREA15, the Chinatown food corridor on Spring Mountain Road, and easy
          access to Red Rock Canyon to the west.</li>
        </ul>
      </section>

      {/* 2026 */}
      <section className={styles.bridge}>
        <h2>2026: a big year to visit</h2>
        <p>
          Vegas keeps adding marquee events. The <strong>Sphere</strong> continues to rotate blockbuster
          immersive shows and concert residencies, and the <strong>Las Vegas Grand Prix</strong> returns to the
          Strip circuit in November — book stays months early if your trip overlaps the race. Major
          residencies and championship fights at T-Mobile Arena and the new stadiums round out a
          packed calendar, so check what&apos;s on before you lock in your dates.
        </p>
      </section>

      {/* Budget */}
      <section className={styles.bridge}>
        <h2>Las Vegas on a budget</h2>
        <ul>
          <li>Lean on the free spectacle — the fountains, Fremont Street, and the casino interiors cost nothing.</li>
          <li>Do <strong>one</strong> headline show, not several; the prices stack up fast.</li>
          <li>Buy same-day discounted show seats at Tix4Tonight booths (often 30–50% off).</li>
          <li>Eat in Chinatown on Spring Mountain Road instead of Strip restaurants — far better value.</li>
          <li>Watch for resort fees and parking charges when you budget; they add up across a few nights.</li>
        </ul>
      </section>

      {/* Las Vegas-only: detailed practical category grid */}
      <section aria-labelledby="categories-lv">
        <h2 id="categories-lv">What to Do in Las Vegas</h2>
        <p className={styles.sectionIntro}>
          Six categories that cover the full range of what Vegas offers, with real prices and time
          estimates — prioritize by what matters most to you.
        </p>
        <div className={styles.grid}>
          {categories.map(({ title, blurb, href }) => (
            <Link key={title} href={href} className={styles.card} style={{ textDecoration: "none", color: "inherit" }}>
              <h3>{title}</h3>
              <p>{blurb}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Experience Buckets */}
      <section className={styles.grid}>
        <Link href="/destination/lasvegas/neighborhood-guide?interest=sightseeing" className={styles.card} style={{ textDecoration: "none", color: "inherit" }}>
          <h3>Landmarks &amp; Big Sights</h3>
          <p>
            Good for a first visit, when you want the Strip, the Bellagio fountains,
            and the Sphere without zig-zagging the city all day.
          </p>
        </Link>

        <Link href="/destination/lasvegas/neighborhood-guide?interest=culture" className={styles.card} style={{ textDecoration: "none", color: "inherit" }}>
          <h3>Culture &amp; Museums</h3>
          <p>
            Best for travelers who enjoy slower exploration — the Neon Museum,
            the Mob Museum, AREA15, and downtown&apos;s Arts District.
          </p>
        </Link>

        <Link href="/destination/lasvegas/food" className={styles.card} style={{ textDecoration: "none", color: "inherit" }}>
          <h3>Food &amp; Local Experiences</h3>
          <p>
            Designed for travelers who want celebrity-chef tables, buffets, and the
            Chinatown food corridor to be the focus of their trip.
          </p>
        </Link>

        <Link href="/destination/lasvegas/neighborhood-guide?interest=outdoors" className={styles.card} style={{ textDecoration: "none", color: "inherit" }}>
          <h3>Outdoors &amp; Day Trips</h3>
          <p>
            Works well for visitors who want Red Rock Canyon, Hoover Dam, Valley of
            Fire, and the Grand Canyon paired with their Strip nights.
          </p>
        </Link>
      </section>

      {/* FAQ */}
      <section className={styles.bridge}>
        <h2>Common questions</h2>

        <h3>What are the top free things to do in Las Vegas?</h3>
        <p>
          The Bellagio fountains and Conservatory, the Fremont Street light shows, the
          Venetian&apos;s canals and St. Mark&apos;s Square, the Sphere&apos;s exterior Exosphere, and
          wandering the themed casino lobbies.
        </p>

        <h3>How many days do you need in Las Vegas?</h3>
        <p>
          Three to four days lets you walk the Strip, see a headline show, spend a day at a
          pool or downtown, and fit in one desert day trip without rushing.
        </p>

        <h3>What&apos;s the one show to pick if you only see one?</h3>
        <p>
          Cirque du Soleil&apos;s &quot;O&quot; at Bellagio for the spectacle, or an immersive show at the
          Sphere for the most novel, only-in-Vegas experience.
        </p>

        <h3>What&apos;s new for 2026?</h3>
        <p>
          The Sphere keeps rotating new immersive shows and residencies, and the Las Vegas
          Grand Prix returns to the Strip in November — both draw big crowds, so book early
          if your trip overlaps.
        </p>
      </section>

      {/* Decision Bridge */}
      <section className={styles.bridge}>
        <p>
          What you want to do in Las Vegas directly affects where you should stay.
          Choosing the right area can save time, cut down on walking in the heat, and
          make the trip feel smoother.
        </p>
      </section>

      {/* Assisted CTA */}
      <section className={styles.cta}>
        <h2>Not sure how to shape your Las Vegas experience?</h2>
        <p>
          Tell us what you want to focus on, and we&apos;ll help you plan where to
          stay and how to structure your visit.
        </p>
        <Link href="/destination/lasvegas#planning-intent" className={styles.primaryCta}>
          Get help planning my Las Vegas trip
        </Link>
      </section>

      {/* Navigation Resource */}
      <section className={styles.bridge} style={{ marginTop: '2rem' }}>
        <h3>Navigate Las Vegas with Confidence</h3>
        <p>
          Getting around is essential to doing what you want to do in Vegas. Check out our{" "}
          <Link href="/destination/lasvegas/neighborhood-guide">
            Strip &amp; neighborhood guide
          </Link>
          {" "}to plan your routes and understand the layout.
        </p>
        <p>
          Also useful:{" "}
          <Link href="/destination/lasvegas/food">Las Vegas food guide</Link>,{" "}
          <Link href="/destination/lasvegas/best-areas-to-stay">best areas to stay</Link>,{" "}
          <Link href="/destination/lasvegas/itinerary">3-day itinerary</Link>.
        </p>
      </section>
    </main>
    <BookingCTA variant="full" text="Book skip-the-line tickets and show seats" href="/destination/lasvegas/bookings?tab=activities&from=things-to-do" label="See tickets & tours" />
    <Footer />
    </>
  );
}
