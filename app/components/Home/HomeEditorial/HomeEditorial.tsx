import Link from "next/link";
import styles from "./HomeEditorial.module.css";

// Every claim here must stay true of the guides themselves. If the editorial
// process changes, change this block too.
export default function HomeEditorial() {
  return (
    <section className={styles.wrap} aria-labeledby="home-editorial-heading">
      <h2 id="home-editorial-heading">How these guides are made</h2>
      <p className={styles.lead}>
        Travels Americas covers four US cities in depth rather than every city thinly. The guides
        are written for people planning a first or second visit, and they answer the practical
        questions that decide how a trip actually goes: which airport to fly into, which
        neighborhood to stay in, what a ride costs, and what is worth booking ahead.
      </p>

      <div className={styles.cards}>
        <article className={styles.card}>
          <h3>Who writes them</h3>
          <p>
            Guides are written by Mridul Mishra and reviewed by Manisha Shukla, and each page says
            which of them did which. You can read about both on our{" "}
            <Link href="/about">About page</Link>.
          </p>
        </article>

        <article className={styles.card}>
          <h3>Where the facts come from</h3>
          <p>
            Fares, admission rules and opening details are checked against the operator or the
            attraction itself, not against other travel sites. That means the transit authorities,
            the airport operators and the museums&apos; own pages.
          </p>
        </article>

        <article className={styles.card}>
          <h3>How they stay current</h3>
          <p>
            Every guide carries the date it was last updated, and the figures that move most, such
            as transit fares and admission rules, get re-checked rather than left to age. Where a
            price is likely to change, we say so and point you at the official source.
          </p>
        </article>
      </div>

      <p>
        Some links on this site are booking links, and we may earn a commission when you use them.
        That never decides what appears in a guide or the order things are listed in, and we do not
        accept payment for inclusion. Where a guide draws on a trip one of us actually took, it is
        labeled as our own experience and kept separate from the researched material. If you spot
        something out of date, <Link href="/contact">tell us</Link> and we will check it.
      </p>

      <div className={styles.start}>
        <div className={styles.startGrid}>
          <div>
            <h3>New York</h3>
            <ul className={styles.list}>
              <li><Link href="/destination/nyc/getting-to-nyc">Airport transfers</Link></li>
              <li><Link href="/destination/nyc/best-areas-to-stay">Where to stay</Link></li>
              <li><Link href="/destination/nyc/subway-safety-guide">Subway safety</Link></li>
            </ul>
          </div>
          <div>
            <h3>Los Angeles</h3>
            <ul className={styles.list}>
              <li><Link href="/destination/la/is-la-safe-at-night">Safe at night?</Link></li>
              <li><Link href="/destination/la/la-metro-map">Getting around</Link></li>
              <li><Link href="/destination/la/food">Where to eat</Link></li>
            </ul>
          </div>
          <div>
            <h3>Las Vegas</h3>
            <ul className={styles.list}>
              <li><Link href="/destination/lasvegas/safety-guide">Safety guide</Link></li>
              <li><Link href="/destination/lasvegas/strip-transportation-map">Getting around the Strip</Link></li>
              <li><Link href="/destination/lasvegas/food">Where to eat</Link></li>
            </ul>
          </div>
          <div>
            <h3>Orlando</h3>
            <ul className={styles.list}>
              <li><Link href="/destination/orlando/getting-to-orlando">Getting there</Link></li>
              <li><Link href="/destination/orlando/best-time-to-visit">When to go</Link></li>
              <li><Link href="/destination/orlando/free-things-to-do">Free things to do</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
