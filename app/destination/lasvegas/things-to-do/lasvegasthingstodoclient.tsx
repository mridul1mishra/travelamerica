'use client';
import Image from 'next/image';
import Link from 'next/link';
import styles from './lasvegasthingstodo.module.css';
import LasVegasNavHeader from '../solo-trip-to-lasvegas/components/lasvegasnavheader/LasVegasNavHeader';
import Footer from '../../../../app/components/Header/Footer/footer';
import BookingCTA from './components/BookingCTA/BookingCTA';

const categories = [
  { title: 'Shows & Residencies', blurb: 'Choose a headline show such as "O" at Bellagio or "Mystère" at Treasure Island, or check the residency calendars at Caesars Palace, Park MGM and Sphere. Reserve ahead when a particular performance matters; availability and prices depend on the show, date and seat.', href: '/destination/lasvegas/tours-and-tickets?from=things-to-do' },
  { title: 'The Strip & Free Attractions', blurb: 'Explore the resort corridor in manageable sections, preferably after dark. Free stops include the Bellagio fountains and Conservatory, the Venetian\'s canals and the Park MGM district. Sphere\'s exterior Exosphere is free to view; indoor events require tickets.', href: '/destination/lasvegas/tours-and-tickets?from=things-to-do' },
  { title: 'Fremont Street & Downtown', blurb: 'Downtown\'s covered Viva Vision canopy and live entertainment make it worth an evening. The SlotZilla zip line is a separate paid activity with prices that vary by ride and day. Pair Fremont Street with a downtown museum or the Arts District.', href: '/destination/lasvegas/tours-and-tickets?from=things-to-do' },
  { title: 'Pools, Dayclubs & Gondolas', blurb: 'Summer days belong to the pools and dayclubs — Encore Beach Club, Marquee at Cosmopolitan, Wet Republic at MGM ($30–$75 cover). Indoor and outdoor gondola rides glide through the Venetian\'s canals; the ride is paid, but the canals are free to explore. Book pool cabanas well ahead in peak heat.', href: '/destination/lasvegas/tours-and-tickets?from=things-to-do' },
  { title: 'Museums & Culture', blurb: 'Choose the Neon Museum for restored casino signs outdoors, or the Mob Museum for an indoor look at organised crime and law enforcement. AREA15 is an immersive art-and-entertainment campus; the Atomic Museum covers Nevada\'s nuclear-test history.', href: '/destination/lasvegas/tours-and-tickets?from=things-to-do' },
  { title: 'Day Trips', blurb: 'Hoover Dam is 45 min away (dam tour ~$30). Red Rock Canyon is 30 min — a 13-mile scenic loop drive ($20/car) plus hiking. Valley of Fire is ~1 hr of stunning red sandstone. Grand Canyon West is ~2.5 hrs; the South Rim is a long ~4.5-hr day or an overnight.', href: '/destination/lasvegas/tours-and-tickets?from=things-to-do' },
];

const topAttractions = [
  {
    id: 'bellagio-fountains',
    name: 'Fountains of Bellagio',
    why: 'Choose this for a short, classic Vegas spectacle without buying a ticket. It fits easily into a center-Strip walk or an evening near Bellagio.',
    area: 'Center Strip, outside Bellagio.',
    cost: 'Free to watch.',
    time: 'Allow about 20–30 minutes, including the wait for a show.',
    timing: 'After dark is a good choice for the illuminated setting. Check the official schedule for your day; weather can cancel performances.',
    booking: 'No ticket or reservation needed.',
    href: 'https://bellagio.mgmresorts.com/en/entertainment/fountains-of-bellagio.html',
    linkLabel: 'Check the official Bellagio fountain schedule',
  },
  {
    id: 'sphere',
    name: 'Sphere',
    why: 'Choose between seeing the Exosphere outside and attending a ticketed event inside. The exterior display and an indoor show are different experiences.',
    area: 'East of the Strip, behind The Venetian.',
    cost: 'Free to view the exterior; indoor events are paid. Check the event calendar for prices by show, date and seat.',
    time: 'Allow about 15–30 minutes outside. For The Wizard of Oz at Sphere, allow about two hours including pre-show entry and the 75-minute presentation; other events vary.',
    timing: 'After dark for the exterior. For an indoor event, follow the arrival instructions on your ticket; late seating is not permitted for The Wizard of Oz.',
    booking: 'No reservation for exterior viewing. A ticket is required for an indoor event; book ahead if a specific date matters.',
    href: 'https://thesphere.com/shows/wizard-of-oz-experience',
    linkLabel: 'Check official Sphere show details and tickets',
  },
  {
    id: 'o-cirque-du-soleil',
    name: '"O" by Cirque du Soleil',
    why: 'Choose this if a major theatrical production matters more than another sightseeing stop. Its water-based stage makes it a distinct evening experience.',
    area: 'O Theatre at Bellagio, Center Strip.',
    cost: 'Paid. Check the live calendar for your performance, seat category, taxes and fees.',
    time: 'The show runs 90 minutes without an intermission. Allow about 2–2¼ hours including arrival and seating.',
    timing: 'Choose a performance that fits your dinner and travel plans, and check the live calendar rather than assuming a fixed showtime.',
    booking: 'A show ticket is required. Reserve ahead when a particular date or seat matters; there is no universal booking lead time.',
    href: 'https://bellagio.mgmresorts.com/en/entertainment/o-by-cirque-du-soleil.html',
    linkLabel: 'Check official "O" performances and tickets',
  },
  {
    id: 'fremont-street',
    name: 'Fremont Street Experience',
    why: 'Choose this for downtown atmosphere, the Viva Vision canopy and live entertainment rather than a conventional ticketed attraction.',
    area: 'Downtown Las Vegas.',
    cost: 'The pedestrian area and Viva Vision shows are free. SlotZilla is a separate paid ride.',
    time: 'Allow about 1½–3 hours if you also want to explore the surrounding blocks.',
    timing: 'Visit after dark for the canopy and downtown lights. Check the official calendar for featured shows and entertainment.',
    booking: 'No ticket needed for the public area and free canopy shows. Check SlotZilla separately if you want to ride.',
    href: 'https://fremontstreetexperience.com/',
    linkLabel: 'Check official Fremont Street events and visitor information',
  },
  {
    id: 'high-roller',
    name: 'High Roller Observation Wheel',
    why: 'Choose this for a skyline view from an observation cabin and a predictable ride length that fits into a center-Strip evening.',
    area: 'LINQ Promenade, Center Strip.',
    cost: 'Paid. Check current operator prices and ticket conditions for your visit.',
    time: 'The ride takes about 30 minutes. Allow about one hour total for entry, the ride and exit.',
    timing: 'Aim for sunset if changing light is your priority, or after dark for the city lights.',
    booking: 'A ride ticket is required. Check ticket validity and availability ahead if your schedule is tight.',
    href: 'https://www.caesars.com/linq/things-to-do/attractions/high-roller',
    linkLabel: 'Check official High Roller information and tickets',
  },
  {
    id: 'venetian-gondolas',
    name: 'Gondola Rides at The Venetian',
    why: 'Choose this if the gondola ride itself appeals to you. You can explore the resort canals and St. Mark’s Square without paying for a ride.',
    area: 'The Venetian, on the Strip.',
    cost: 'The ride is paid; exploring the resort canals is free. Check current shared and private ride prices for your date.',
    time: 'The ride takes about 10–13 minutes. Allow about 30–45 minutes total with ticketing and waiting.',
    timing: 'Choose an indoor or outdoor ride to suit the conditions and experience you want.',
    booking: 'A ride ticket is required. Check current reservation arrangements and availability with the operator.',
    href: 'https://www.venetianlasvegas.com/resort/attractions/gondola-rides.html',
    linkLabel: 'Check official Venetian gondola options and tickets',
  },
  {
    id: 'strip-after-dark',
    name: 'The Strip after dark',
    why: 'Choose a flexible self-guided walk to see the resort lights and free spectacles. Pick one manageable section instead of trying to cover the entire boulevard.',
    area: 'The Strip; choose a section near your hotel or evening plans.',
    cost: 'Free to walk; individual attractions, food and transport cost extra.',
    time: 'Allow about 1½–3 hours for one section with stops, not the entire Strip. The STRAT-to-Mandalay Bay span is roughly 4.5 miles before detours.',
    timing: 'After dark for the lights. Account for pedestrian bridges, detours and the weather when choosing your route.',
    booking: 'No reservation for a self-guided walk. Check any ticketed stops separately.',
    href: 'https://www.visitlasvegas.com/experience/post/walking-the-las-vegas-strip/',
    linkLabel: 'Read the official Las Vegas Strip walking guide',
  },
  {
    id: 'neon-museum',
    name: 'The Neon Museum',
    why: 'Choose this for vintage casino signs, design and Las Vegas history in an outdoor setting, rather than another casino or show.',
    area: 'North of Fremont Street, in the downtown area.',
    cost: 'Paid. Daytime and evening admission differ; check current prices, processing fees and any tour add-ons.',
    time: 'Allow about 60–90 minutes. Allow additional time if you book a separate History Tour.',
    timing: 'Choose an evening admission for illuminated signs. Check seasonal hours and weather before choosing your time.',
    booking: 'Advance booking is strongly recommended, especially for timed evening admission.',
    href: 'https://neonmuseum.org/',
    linkLabel: 'Check official Neon Museum admission and hours',
  },
  {
    id: 'mob-museum',
    name: 'The Mob Museum',
    why: 'Choose this for a substantial indoor museum on organised crime and law enforcement. It pairs well with Fremont Street later in the day.',
    area: 'Downtown Las Vegas, at 300 Stewart Avenue.',
    cost: 'Paid. Compare current general admission and experience packages; discounts and eligibility conditions vary.',
    time: 'Plan about 2–3 hours for a first visit without rushing the exhibits.',
    timing: 'Morning or early afternoon works well if you want to continue to Fremont Street after dark.',
    booking: 'Online reservations are strongly encouraged. Choose the admission package that matches the experiences you want.',
    href: 'https://themobmuseum.org/plan-your-visit/purchase-tickets/',
    linkLabel: 'Check official Mob Museum admission options',
  },
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
      <BookingCTA variant="slim" text="Book your Las Vegas trip →" href="/destination/lasvegas/tours-and-tickets?from=things-to-do" label="See tickets & tours" />

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
          <Link href="/destination/lasvegas/tours-and-tickets?from=things-to-do" className={styles.primaryCta}>
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
          Six categories that cover the full range of what Vegas offers. Prioritise by what
          matters most to you, then compare the signature attractions below.
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

      {/* ── Top attractions ── white */}
      <section className={styles.textSection} id="top-attractions" aria-labelledby="top-attractions-heading">
        <h2 id="top-attractions-heading">Top Las Vegas attractions to compare</h2>
        <p>
          You don&apos;t need all of them. Choose a few signature experiences by where they are,
          what they cost, how long they take and whether they need a reservation. Time allowances
          below are planning estimates unless a show or ride duration is stated, and exclude
          travel between attractions. Prices, schedules and availability change; use the official
          links to check your travel date.
        </p>
        {topAttractions.map(({ id, name, why, area, cost, time, timing, booking, href, linkLabel }) => (
          <article key={id} id={id} aria-labelledby={`${id}-heading`}>
            <h3 id={`${id}-heading`}>{name}</h3>
            <p>{why}</p>
            <ul>
              <li><strong>Location:</strong> {area}</li>
              <li><strong>Cost:</strong> {cost}</li>
              <li><strong>Time to allow:</strong> {time}</li>
              <li><strong>When to go:</strong> {timing}</li>
              <li><strong>Booking:</strong> {booking}</li>
            </ul>
            <p><a href={href}>{linkLabel}</a></p>
          </article>
        ))}
        <p>Pick <strong>one</strong> headline show and <strong>one</strong> view — the tickets add up fast on the Strip.</p>
        <p>
          Next, use our <Link href="/destination/lasvegas/landmark">Las Vegas landmarks guide</Link>{' '}
          for more sightseeing detail, the{' '}
          <Link href="/destination/lasvegas/itinerary">3-day itinerary</Link> to group your days,
          or the <Link href="/destination/lasvegas/strip-transportation-map">Strip transportation guide</Link>{' '}
          to plan how to get around.
        </p>
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
          <li><strong>The Neon Museum</strong> — restored vintage casino signs in an outdoor setting. Compare daytime and evening admission in the attraction shortlist above.</li>
          <li><strong>The Mob Museum</strong> — downtown, in the old federal courthouse, with exhibits on organised crime and law enforcement. See the shortlist above for visit planning and official admission options.</li>
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

      <BookingCTA variant="full" text="Book skip-the-line tickets and show seats" href="/destination/lasvegas/tours-and-tickets?from=things-to-do" label="See tickets & tours" />
      <Footer />
    </>
  );
}
