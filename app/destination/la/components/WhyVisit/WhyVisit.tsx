import styles from './WhyVisit.module.css';

export default function WhyVisit() {
  return (
    <section className={styles.section} aria-labelledby="why-visit-la-heading">
<div className={styles.container}>
        <header className={styles.header}>
          <h2 id="why-visit-la-heading" className={styles.title}>
            Why Los Angeles Works for So Many Trips
          </h2>
          <p className={styles.intro}>
            Los Angeles attracts travelers with genuinely different goals — beach trips, film industry
            pilgrimages, food-focused itineraries, outdoor adventures — and still delivers for all of them.
            That&apos;s because LA isn&apos;t one city; it&apos;s a collection of distinct places that happen to
            share a metro area, giving you the flexibility to shape the experience around what matters most.
          </p>
        </header>

        <div className={styles.grid}>
          <article className={styles.card}>
            <h3 className={styles.cardTitle}>Beaches, Mountains, and City in One Place</h3>
            <p className={styles.cardBody}>
              You can surf at Santa Monica in the morning, hike the Santa Monica Mountains at noon, and be at
              a Michelin-starred restaurant in WeHo by evening. Few cities compress that range of environments
              into a single day.
            </p>
          </article>

          <article className={styles.card}>
            <h3 className={styles.cardTitle}>A Food Scene That Rivals Anywhere</h3>
            <p className={styles.cardBody}>
              Korean BBQ in Koreatown, Japanese in Little Tokyo, tacos in Boyle Heights, and cutting-edge
              tasting menus in Silver Lake and WeHo. LA&apos;s food culture is quietly one of the world&apos;s
              best.
            </p>
          </article>

          <article className={styles.card}>
            <h3 className={styles.cardTitle}>A Trip You Can Build Around Your Pace</h3>
            <p className={styles.cardBody}>
              A focused four-day visit can hit Griffith Observatory, the Getty, Venice, and a studio tour
              without feeling rushed. A longer stay opens up day trips to Joshua Tree or Santa Barbara.
            </p>
            <p className={styles.cardBody}>
              Where you stay, how you get around, which neighborhoods you wander — your choices define what the
              trip actually is. That flexibility is LA&apos;s real selling point.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
