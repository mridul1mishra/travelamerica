import styles from './WhyVisit.module.css';

export default function WhyVisit() {
  return (
    <section className={styles.section} aria-labelledby="why-visit-lasvegas-heading">
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 id="why-visit-lasvegas-heading" className={styles.title}>
            Why Las Vegas Works for So Many Trips
          </h2>
          <p className={styles.intro}>
            Las Vegas works for an unusually wide range of travelers — couples, solo visitors, groups, people who
            gamble and people who never touch a table. That&apos;s because Vegas isn&apos;t one trip; it&apos;s
            dozens packed into a few square miles. The key is deciding which version of Vegas you actually want
            before you arrive, then shaping the trip around it.
          </p>
        </header>

        <div className={styles.grid}>
          <article className={styles.card}>
            <h3 className={styles.cardTitle}>Everything Concentrated on the Strip</h3>
            <p className={styles.cardBody}>
              The 4-mile Las Vegas Boulevard puts dozens of casino-resorts, restaurants, bars, pools, and
              entertainment venues within walking distance. Most visitors spend the bulk of their trip in a
              roughly 10-block radius — no car required.
            </p>
          </article>

          <article className={styles.card}>
            <h3 className={styles.cardTitle}>World-Class Shows and Dining</h3>
            <p className={styles.cardBody}>
              Residency concerts, multiple Cirque du Soleil productions, comedy clubs, and magic shows give Vegas
              more live entertainment per square mile than almost anywhere. Nearly every major chef — Gordon
              Ramsay, José Andrés, Wolfgang Puck — has a restaurant on the Strip.
            </p>
          </article>

          <article className={styles.card}>
            <h3 className={styles.cardTitle}>An Underrated Base for the Southwest</h3>
            <p className={styles.cardBody}>
              Hoover Dam (30 min), Red Rock Canyon (30 min), Valley of Fire (1 hr), and Grand Canyon West (2.5 hr)
              are all day-trip distance. Zion National Park is 2.5 hours northeast.
            </p>
            <p className={styles.cardBody}>
              A 4–5 day trip that mixes a couple of day trips with Strip time is one of the best-value itineraries
              in the country — rent a car for the day-trip days, use rideshare on the Strip nights.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
