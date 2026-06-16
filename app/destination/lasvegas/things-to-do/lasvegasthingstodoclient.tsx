'use client';
import Image from 'next/image';
import Link from 'next/link';
import styles from './lasvegasthingstodo.module.css';
import LasVegasNavHeader from '../solo-trip-to-lasvegas/components/lasvegasnavheader/LasVegasNavHeader';
import Footer from '../../../../app/components/Header/Footer/footer';
import BookingCTA from './components/BookingCTA/BookingCTA';

const categories = [
  { title: 'Shows & Residencies', blurb: 'Cirque du Soleil is the headline act — "O" at Bellagio (water stage, ~$110+) and "Mystère" at Treasure Island are the picks. Pop residencies rotate through the Colosseum at Caesars Palace, Dolby Live at Park MGM, and the Sphere. Book 3–5 days ahead; same-day Tix4Tonight booths sell discounted seats from ~$30.', href: '/destination/lasvegas/bookings?tab=activities&from=things-to-do' },
  { title: 'The Strip & Free Attractions', blurb: 'Walk the 4-mile boulevard — best done in two halves, after dark. Free: the Bellagio fountains (every 15–30 min, afternoon to midnight), the Conservatory, the Venetian\'s canals, and the Park MGM district. The Sphere\'s exterior "Exosphere" is free to view from outside.', href: '/destination/lasvegas/bookings?tab=activities&from=things-to-do' },
  { title: 'Fremont Street & Downtown', blurb: 'Downtown\'s covered LED canopy (Viva Vision) runs free light-and-music shows nightly. SlotZilla zip line flies the length of it (~$49–$69). Grittier, cheaper, older Vegas — worth one evening, plus the Arts District for craft cocktails.', href: '/destination/lasvegas/bookings?tab=activities&from=things-to-do' },
  { title: 'Pools, Dayclubs & Gondolas', blurb: 'Summer days belong to the pools and dayclubs — Encore Beach Club, Marquee at Cosmopolitan, Wet Republic at MGM ($30–$75 cover). Indoor and outdoor gondola rides glide through the Venetian\'s canals (~$39 per person). Book pool cabanas well ahead in peak heat.', href: '/destination/lasvegas/bookings?tab=activities&from=things-to-do' },
  { title: 'Museums & Culture', blurb: 'The Neon Museum is the standout — an outdoor boneyard of restored casino signs, best on the lit night tour (~$25–$40). The Mob Museum downtown ($30, allow 2–3 hrs) is genuinely excellent. AREA15 is an immersive art-and-entertainment campus; the Atomic Museum covers Nevada\'s nuclear-test history.', href: '/destination/lasvegas/bookings?tab=activities&from=things-to-do' },
  { title: 'Day Trips', blurb: 'Hoover Dam is 45 min away (dam tour ~$30). Red Rock Canyon is 30 min — a 13-mile scenic loop drive ($20/car) plus hiking. Valley of Fire is ~1 hr of stunning red sandstone. Grand Canyon West is ~2.5 hrs; the South Rim is a long ~4.5-hr day or an overnight.', href: '/destination/lasvegas/bookings?tab=activities&from=things-to-do' },
];

const buckets = [
  { title: 'Landmarks & Big Sights', blurb: 'Good for a first visit — the Strip, the Bellagio fountains, the Sphere, and the High Roller without zig-zagging the city all day.', href: '/destination/lasvegas/landmark' },
  { title: 'Culture & Museums', blurb: 'Best for travelers who enjoy slower exploration — the Neon Museum, the Mob Museum, AREA15, and downtown\'s Arts District.', href: '/destination/lasvegas/neighborhood-guide' },
  { title: 'Food & Local Experiences', blurb: 'Designed for travelers who want celebrity-chef tables, buffets, and the Chinatown food corridor to be the focus of their trip.', href: '/destination/lasvegas/food' },
  { title: 'Outdoors & Day Trips', blurb: 'Works well for visitors who want Red Rock Canyon, Hoover Dam, Valley of Fire, and the Grand Canyon paired with their Strip nights.', href: '/destination/lasvegas/itinerary' },
];

export default function LasVegasThingsToDoClient() {
  return (
    <>
      <LasVegasNavHeader />
      <BookingCTA variant="slim" text="Book your Las Vegas trip →" href="/destination/lasvegas/bookings?tab=activities&from=things-to-do" label="See tickets & tours" />

      {/* ── Full-width banner ── */}
      <section className={styles.banner}>
        <Image
          src="/data/majorcities/lasvegas/assets/lasvegas.webp"
          alt="Las Vegas Strip at night"
          fill
          priority
          className={styles.bannerImage}
        />
      </section>

      {/* ── Hero ── */}
      <section className={styles.heroSection}>
        <h1>The Best Things to Do in Las Vegas</h1>
        <p>
          Las Vegas is more than casinos. The difference between a great visit and an exhausting
          one usually comes down to pacing — the city runs hot and late, so you group the right
          things together and save the walking for after dark. This guide breaks Vegas into what&apos;s
          actually worth your time: the shows, the free Strip spectacle, the pools, downtown&apos;s
          Fremont Street, the museums, and the day trips into the desert.
        </p>
        <div className={styles.heroCtas}>
          <Link href="/destination/lasvegas/bookings?tab=activities&from=things-to-do" className={styles.primaryCta}>
            Book tickets &amp; tours
          </Link>
          <Link href="/destination/lasvegas/itinerary" className={styles.secondaryCta}>
            See 3-day itinerary
          </Link>
        </div>
      </section>

      {/* ── Category grid ── */}
      <section className={styles.gridSection}>
        <h2>What to Do in Las Vegas</h2>
        <p className={styles.sectionIntro}>
          Six categories that cover the full range of what Vegas offers, with real prices and
          time estimates — prioritise by what matters most to you.
        </p>
        <div className={styles.grid}>
          {categories.map(({ title, blurb, href }) => (
            <Link key={title} href={href} className={styles.card}>
              <h3>{title}</h3>
              <p>{blurb}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ── The Icons ── white */}
      <section className={styles.textSection}>
        <h2>The icons (do at least a few)</h2>
        <p>
          These are the names everyone knows, and they&apos;re famous for a reason. You don&apos;t need all
          of them — pick the ones that match your trip.
        </p>
        <ul>
          <li><strong>The Bellagio Fountains</strong> — free, every 15–30 minutes from afternoon to midnight. The single best free show in the city.</li>
          <li><strong>The Sphere</strong> — the 366-foot LED dome at the Venetian. The exterior &quot;Exosphere&quot; is free to see; immersive shows inside run from ~$59.</li>
          <li><strong>Cirque du Soleil</strong> — &quot;O&quot; at Bellagio is the flagship (~$110+); &quot;Mystère&quot; at Treasure Island is the value pick.</li>
          <li><strong>Fremont Street Experience</strong> — downtown&apos;s free LED-canopy light shows run every night, with live bands and the SlotZilla zip line overhead.</li>
          <li><strong>The High Roller</strong> — a 550-foot observation wheel at the LINQ, ~$25–$37. Sunset and after-dark cabins are the best.</li>
          <li><strong>Venetian Gondola Rides</strong> — indoor and outdoor canal rides with a singing gondolier, ~$39 per person.</li>
          <li><strong>The Strip after dark</strong> — worth walking once, end to end in two halves, for the sheer sensory overload. See it, then duck into a casino to cool off.</li>
        </ul>
        <p>Pick <strong>one</strong> headline show and <strong>one</strong> view — the tickets add up fast on the Strip.</p>
      </section>

      {/* ── Free things ── tinted */}
      <section className={styles.tintSection}>
        <h2>Free things to do in Las Vegas</h2>
        <p>
          You can have a genuinely great Vegas night for almost nothing. Some of the best
          spectacle on the Strip doesn&apos;t cost a cent.
        </p>
        <ul>
          <li><strong>Bellagio Fountains &amp; Conservatory</strong> — the choreographed water show outside and the free seasonal botanical displays inside, both free and both stunning.</li>
          <li><strong>Fremont Street light shows</strong> — the Viva Vision canopy runs free shows nightly downtown, with free live music on multiple stages.</li>
          <li><strong>The Venetian&apos;s canals &amp; St. Mark&apos;s Square</strong> — wander the indoor replica of Venice, free to walk through.</li>
          <li><strong>The Exosphere</strong> — the Sphere&apos;s exterior LED display is free to view from across the street; best after dark.</li>
          <li><strong>Casino spectacle</strong> — the Flamingo wildlife habitat, the Park MGM district, and the themed lobbies are all free to stroll.</li>
          <li><strong>Red Rock Canyon scenic overlooks</strong> — the visitor centre and several roadside viewpoints are free, 30 minutes from the Strip.</li>
        </ul>
      </section>

      {/* ── Museums ── white */}
      <section className={styles.textSection}>
        <h2>Museums worth the ticket</h2>
        <ul>
          <li><strong>The Neon Museum</strong> — an outdoor boneyard of restored vintage casino signs; the lit night tour (~$25–$40) is far better than daytime.</li>
          <li><strong>The Mob Museum</strong> — downtown, in the old federal courthouse ($30). Genuinely excellent on organised crime and law enforcement; allow 2–3 hours.</li>
          <li><strong>AREA15</strong> — an immersive art-and-entertainment campus off-Strip; Omega Mart is the headline attraction.</li>
          <li><strong>The Atomic Museum</strong> — a Smithsonian-affiliate covering Nevada&apos;s nuclear-testing history; surprising and well done.</li>
          <li><strong>The Las Vegas Natural History Museum &amp; The Discovery</strong> — the best picks with kids, both near downtown.</li>
        </ul>
      </section>

      {/* ── By area ── tinted */}
      <section className={styles.tintSection}>
        <h2>Things to do by area</h2>
        <p>Group your days by area to cut down on Strip traffic and walking in the heat.</p>
        <ul>
          <li><strong>South Strip</strong> — Mandalay Bay&apos;s Shark Reef, the MGM district, T-Mobile Arena and the Park, plus the New York-New York roller coaster.</li>
          <li><strong>Centre Strip</strong> — the Bellagio fountains, Caesars Palace and the Forum Shops, the Cosmopolitan, the LINQ Promenade and the High Roller.</li>
          <li><strong>North Strip</strong> — the Venetian, the Sphere, the Wynn/Encore, and the Strat&apos;s thrill rides and observation deck.</li>
          <li><strong>Downtown &amp; Fremont</strong> — the Fremont Street Experience, the Mob Museum, the Neon Museum, and the Arts District for cocktails and galleries.</li>
          <li><strong>Off-Strip</strong> — AREA15, the Chinatown food corridor on Spring Mountain Road, and easy access to Red Rock Canyon to the west.</li>
        </ul>
      </section>

      {/* ── Experience buckets ── white + grid */}
      <section className={styles.textSection}>
        <h2>Plan by what you want to focus on</h2>
        <p style={{ color: '#555', marginBottom: '28px', maxWidth: '640px' }}>
          Not every Vegas trip is the same. Pick your focus and the right activities follow.
        </p>
        <div className={styles.grid}>
          {buckets.map(({ title, blurb, href }) => (
            <Link key={title} href={href} className={styles.card}>
              <h3>{title}</h3>
              <p>{blurb}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ── 2026 ── tinted */}
      <section className={styles.tintSection}>
        <h2>2026: a big year to visit</h2>
        <p>
          The <strong>Sphere</strong> continues to rotate blockbuster immersive shows and concert
          residencies, and the <strong>Las Vegas Grand Prix</strong> returns to the Strip circuit in
          November — book stays months early if your trip overlaps the race. Major residencies and
          championship fights at T-Mobile Arena round out a packed calendar, so check what&apos;s on
          before you lock in your dates.
        </p>
      </section>

      {/* ── Budget ── white */}
      <section className={styles.textSection}>
        <h2>Las Vegas on a budget</h2>
        <ul>
          <li>Lean on the free spectacle — the fountains, Fremont Street, and the casino interiors cost nothing.</li>
          <li>Do <strong>one</strong> headline show, not several; the prices stack up fast.</li>
          <li>Buy same-day discounted show seats at Tix4Tonight booths (often 30–50% off).</li>
          <li>Eat in Chinatown on Spring Mountain Road instead of Strip restaurants — far better value.</li>
          <li>Watch for resort fees and parking charges when you budget; they add up across a few nights.</li>
        </ul>
      </section>

      {/* ── FAQ ── */}
      <section className={styles.faqSection}>
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

      {/* ── Assisted CTA ── */}
      <section className={styles.ctaSection}>
        <h2>Not sure how to shape your Las Vegas experience?</h2>
        <p>
          Tell us what you want to focus on, and we&apos;ll help you plan where to stay and how to
          structure your visit.
        </p>
        <Link href="/destination/lasvegas#planning-intent" className={styles.primaryCta}>
          Get help planning my Las Vegas trip
        </Link>
      </section>

      {/* ── Nav resource strip ── */}
      <section className={styles.navStrip}>
        <h3>Navigate Las Vegas with Confidence</h3>
        <p>
          Getting around is essential to doing what you want to do in Vegas. Check out our{' '}
          <Link href="/destination/lasvegas/neighborhood-guide">Strip &amp; neighbourhood guide</Link>{' '}
          to plan your routes and understand the layout.
        </p>
        <p>
          Also useful:{' '}
          <Link href="/destination/lasvegas/food">Las Vegas food guide</Link>,{' '}
          <Link href="/destination/lasvegas/best-areas-to-stay">best areas to stay</Link>,{' '}
          <Link href="/destination/lasvegas/itinerary">3-day itinerary</Link>.
        </p>
      </section>

      <BookingCTA variant="full" text="Book skip-the-line tickets and show seats" href="/destination/lasvegas/bookings?tab=activities&from=things-to-do" label="See tickets & tours" />
      <Footer />
    </>
  );
}
