'use client';
import Image from 'next/image';
import Link from 'next/link';
import styles from './nycthingstodoclient.module.css';
import Header from "@/app/components/destination/header/header";
import Footer from "../../../../app/components/Header/Footer/footer";
import BookingCTA from "@/app/components/destination/BookingCTA/BookingCTA";

export default function NYCThingsToDoClient() {
  return (
    <>
    <Header />
    <BookingCTA variant="slim" text="Book your New York trip →" href="/destination/nyc/booking?tab=activities&from=things-to-do" label="See tickets & tours" />
    <main className={styles.container}>
      {/* Hero / Visual Header */}
      <section className={styles.banner}>
        <Image
        src="/destination/nyc-things-to-do.jpg"
        alt="Experience and activities in NewYork City"
        fill
        priority
        className={styles.bannerImage}
        />
      </section>
      <section className={styles.hero}>
        <h1>The Best Things to Do in New York City</h1>
        <p>
          New York rewards a plan. There are more things to do in NYC than any one trip can hold,
          and the difference between a great visit and an exhausting one usually comes down to
          grouping the right things together and not crossing the city five times a day. This guide
          breaks the city into what&apos;s actually worth your time — the iconic stuff, the free stuff,
          the neighborhoods, and the views — so you can build days that flow instead of sprint. Mix
          two or three of these per day and leave room to wander; the wandering is half of why
          people fall for this city.
        </p>
      </section>

      {/* The Icons */}
      <section className={styles.bridge}>
        <h2>The icons (do at least a few)</h2>
        <p>
          These are the names everyone knows, and they&apos;re famous for a reason. You don&apos;t need all
          of them — pick the ones that match your trip.
        </p>
        <ul>
          <li><strong>Statue of Liberty &amp; Ellis Island</strong> — half a day with the ferry from Battery Park.
          Book the earliest slot; lines balloon after 10 AM. Ferry + grounds runs around $25–30;
          crown access books months ahead.</li>
          <li><strong>Empire State Building</strong> — the 86th-floor open-air deck is the classic. Tickets from ~$44.
          Late evening (after 9 PM) means full skyline lights and almost no line.</li>
          <li><strong>Top of the Rock</strong> — three-tier deck at Rockefeller Center, from ~$39. The local pick over
          the Empire State, because the Empire State is <em>in</em> your photo here.</li>
          <li><strong>SUMMIT One Vanderbilt</strong> — the newest deck: mirrored rooms, glass ledges, an art
          installation as much as a viewpoint. Good for first-timers who want the &quot;wow.&quot;</li>
          <li><strong>Edge at Hudson Yards</strong> — the highest open-air sky deck in the Western Hemisphere, ~$42.</li>
          <li><strong>Brooklyn Bridge</strong> — free, 24/7. Walk Manhattan to DUMBO so the skyline sits ahead of
          you. About 35–45 minutes.</li>
          <li><strong>Times Square</strong> — worth seeing once, after dark, for the sensory overload. See it, then
          walk two avenues in any direction for better, cheaper food.</li>
        </ul>
        <p>Pick <strong>one</strong> paid observation deck, not three — the views rhyme and the tickets add up fast.</p>
      </section>

      {/* Free things */}
      <section className={styles.bridge}>
        <h2>Free things to do in NYC</h2>
        <p>
          You can have a genuinely great NYC day for $0. Some of the best experiences in the city
          don&apos;t cost anything.
        </p>
        <ul>
          <li><strong>Staten Island Ferry</strong> — free, 25 minutes each way, passes the Statue of Liberty.
          The best free skyline cruise in the city.</li>
          <li><strong>Central Park</strong> — 843 acres. Bethesda Terrace, Bow Bridge, the Mall, the Ramble,
          the Reservoir loop. Easy to lose a whole afternoon.</li>
          <li><strong>The High Line</strong> — a 1.45-mile elevated park over the West Side, from the Meatpacking
          District to Hudson Yards. Walk it north-to-south and hop off at Chelsea Market for lunch.</li>
          <li><strong>Grand Central Terminal</strong> — the Beaux-Arts main concourse and the whispering gallery
          downstairs. Free to walk through.</li>
          <li><strong>The Oculus &amp; Little Island</strong> — the soaring transit hub at the WTC, and the floating
          park on the Hudson at 13th St. Both free, both photogenic.</li>
          <li><strong>Free museum hours</strong> — MoMA is free Friday 4–8 PM; the Whitney is free Friday 5–10 PM.
          MoMA PS1 in Long Island City went fully free starting January 2026. The National Museum
          of the American Indian (Lower Manhattan) and the Bronx Museum of the Arts are always free.</li>
          <li><strong>SummerStage &amp; Bryant Park</strong> — free outdoor concerts, movies, and fitness classes
          run all summer across the parks.</li>
        </ul>
      </section>

      {/* Museums */}
      <section className={styles.bridge}>
        <h2>Museums worth the ticket</h2>
        <ul>
          <li><strong>The Metropolitan Museum of Art</strong> — the big one. $30 for out-of-state adults;
          NY/NJ/CT residents and students pay what they wish. Friday and Saturday evenings (open till 9 PM)
          are dramatically quieter than weekend days.</li>
          <li><strong>MoMA</strong> — modern heavyweights (the Van Gogh everyone wants). Go early or Friday evening.</li>
          <li><strong>American Museum of Natural History</strong> — the best pick with kids; the new Gilder Center
          is worth seeing.</li>
          <li><strong>The Tenement Museum</strong> — guided tours of restored Lower East Side apartments;
          small-group and genuinely moving.</li>
          <li><strong>The Guggenheim &amp; The Frick</strong> — the spiral and the mansion, both Upper East Side,
          both quick.</li>
        </ul>
      </section>

      {/* By neighborhood */}
      <section className={styles.bridge}>
        <h2>Things to do by neighborhood</h2>
        <p>Group your days by area to cut down on subway time.</p>
        <ul>
          <li><strong>Lower Manhattan &amp; DUMBO</strong> — Statue ferry, 9/11 Memorial (plaza free), Brooklyn
          Bridge walk, finish with the bridge-framed Empire State shot on Washington St.</li>
          <li><strong>Midtown</strong> — Top of the Rock, Grand Central, the New York Public Library, MoMA,
          a Broadway show at night.</li>
          <li><strong>Chelsea &amp; the West Side</strong> — the High Line, Chelsea Market, the galleries, Little Island.</li>
          <li><strong>Upper East Side</strong> — the Met, the Guggenheim, the Frick, then into Central Park out the back.</li>
          <li><strong>Brooklyn</strong> — Prospect Park, the Brooklyn Botanic Garden (cherry blossoms in late April),
          Williamsburg for food and bars, the Brooklyn Heights Promenade for the skyline.</li>
        </ul>
      </section>

      {/* 2026 */}
      <section className={styles.bridge}>
        <h2>2026: a big year to visit</h2>
        <p>
          Two things make 2026 unusual. The city is going all-in on <strong>America&apos;s 250th anniversary</strong> around
          July 4 — <strong>Sail250</strong> brings an international fleet of tall ships into New York Harbor alongside
          a special Macy&apos;s fireworks show. And the <strong>FIFA World Cup</strong> comes to the region, with matches
          at MetLife Stadium and fan-fest viewing at Rockefeller Center. If you&apos;re visiting around either,
          book stays early — the city fills up.
        </p>
      </section>

      {/* Budget */}
      <section className={styles.bridge}>
        <h2>NYC on a budget</h2>
        <ul>
          <li>Walk the bridges and parks; they&apos;re free and they&apos;re the best of the city.</li>
          <li>Do <strong>one</strong> paid view, not several.</li>
          <li>Eat at food halls and by-the-slice counters instead of sit-down tourist spots.</li>
          <li>Use a 7-day unlimited MetroCard/OMNY cap instead of single rides if you&apos;re moving a lot.</li>
          <li>TKTS at the red steps in Times Square sells same-day Broadway seats at 20–50% off from ~3 PM.</li>
        </ul>
      </section>

      {/* Experience Buckets */}
      <section className={styles.grid}>
        <Link href="/destination/nyc/neighborhood-guide?interest=sightseeing" className={styles.card} style={{ textDecoration: "none", color: "inherit" }}>
          <h3>Landmarks &amp; Big Sights</h3>
          <p>
            Good for a first visit, when you want to hit the names everyone
            knows without spending half the day on the subway between them.
          </p>
        </Link>

        <Link href="/destination/nyc/neighborhood-guide?interest=culture" className={styles.card} style={{ textDecoration: "none", color: "inherit" }}>
          <h3>Culture &amp; Museums</h3>
          <p>
            Best for travelers who enjoy slower exploration, museums, galleries,
            and neighborhoods with strong cultural character.
          </p>
        </Link>

        <Link href="/destination/nyc/neighborhood-guide?interest=food" className={styles.card} style={{ textDecoration: "none", color: "inherit" }}>
          <h3>Food &amp; Local Experiences</h3>
          <p>
            Designed for travelers who want dining, neighborhoods, and everyday
            NYC life to be the focus of their trip.
          </p>
        </Link>

        <Link href="/destination/nyc/neighborhood-guide?interest=outdoors" className={styles.card} style={{ textDecoration: "none", color: "inherit" }}>
          <h3>Outdoors &amp; Walking</h3>
          <p>
            Works well for visitors who enjoy parks, long walks, and balancing
            busy areas with calmer spaces.
          </p>
        </Link>
      </section>

      {/* FAQ */}
      <section className={styles.bridge}>
        <h2>Common questions</h2>

        <h3>What are the top free things to do in NYC?</h3>
        <p>
          The Staten Island Ferry, Central Park, the High Line, the Brooklyn Bridge walk,
          Grand Central, the 9/11 Memorial plaza, and free museum hours at MoMA (Fri) and
          the Whitney (Fri).
        </p>

        <h3>How many days do you need in New York City?</h3>
        <p>
          Four to five days lets you do the major icons, a couple of museums, two or three
          neighborhoods, and a Broadway show without rushing.
        </p>

        <h3>What&apos;s the one view to pick if you only do one?</h3>
        <p>
          Top of the Rock for the best skyline photo (the Empire State is in the frame), or
          SUMMIT One Vanderbilt for the most novel experience.
        </p>

        <h3>What&apos;s new for 2026?</h3>
        <p>
          America&apos;s 250th-anniversary events and Sail250 around July 4, and FIFA World Cup
          matches in the region — both draw large crowds, so book early if your trip overlaps.
        </p>
      </section>

      {/* Decision Bridge */}
      <section className={styles.bridge}>
        <p>
          What you want to do in New York City directly affects where you should stay.
          Choosing the right area can save time, reduce travel fatigue, and make the
          trip feel smoother.
        </p>
      </section>

      {/* Assisted CTA */}
      <section className={styles.cta}>
        <h2>Not sure how to shape your NYC experience?</h2>
        <p>
          Tell us what you want to focus on, and we&apos;ll help you plan where to
          stay and how to structure your visit.
        </p>
        <Link href="/destination/nyc#planning-intent" className={styles.primaryCta}>
          Get help planning my NYC trip
        </Link>
      </section>

      {/* Navigation Resource */}
      <section className={styles.bridge} style={{ marginTop: '2rem' }}>
        <h3>Navigate NYC with Confidence</h3>
        <p>
          Getting around is essential to doing what you want to do in NYC. Check out our{" "}
          <Link href="/destination/nyc/nyc-subway-map">
            interactive subway map
          </Link>
          {" "}to plan your routes and understand the system.
        </p>
        <p>
          Also useful:{" "}
          <Link href="/destination/nyc/neighborhood-guide">neighborhood guide</Link>,{" "}
          <Link href="/destination/nyc/food">NYC food guide</Link>,{" "}
          <Link href="/destination/nyc/landmark">landmarks guide</Link>,{" "}
          <Link href="/destination/nyc/group-travel">group travel guide</Link>.
        </p>
      </section>
    </main>
    <BookingCTA variant="full" text="Book skip-the-line tickets and audio tours" href="/destination/nyc/booking?tab=activities&from=things-to-do" label="See tickets & tours" />
    <Footer />
    </>
  );
}
