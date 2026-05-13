'use client';

import styles from './WhyVisit.module.css';

export default function WhyVisit() {
  return (
    <section className={styles.section} aria-labelledby="why-visit-nyc-heading">
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 id="why-visit-nyc-heading" className={styles.title}>
            Why NYC Works for So Many Trips
          </h2>
          <p className={styles.intro}>
            New York City attracts travelers with very different interests, schedules, and expectations—and that’s
            exactly why it works for so many kinds of trips. Whether you’re visiting for the first time or returning
            with a specific plan in mind, NYC gives you the flexibility to shape the experience around what matters
            most to you.
          </p>
        </header>

        <div className={styles.grid}>
          <article className={styles.card}>
            <h3 className={styles.cardTitle}>Variety Without Relocation</h3>
            <p className={styles.cardBody}>
              Few cities offer such a wide range of experiences without requiring you to move locations. Different
              neighborhoods deliver entirely different moods—from fast‑paced and iconic to calm and residential—often
              just minutes apart.
            </p>
          </article>

          <article className={styles.card}>
            <h3 className={styles.cardTitle}>Depth for Short or Long Stays</h3>
            <p className={styles.cardBody}>
              New York City works just as well for a focused three‑day visit as it does for a longer, more immersive
              stay. The city rewards both efficient planning and slower exploration, depending on how much time you
              have.
            </p>
          </article>

          <article className={styles.card}>
            <h3 className={styles.cardTitle}>A Trip You Can Personalize</h3>
            <p className={styles.cardBody}>
              NYC isn’t about doing one “right” itinerary. It’s a city where your choices—where you stay, how you get
              around, what you prioritize—shape the experience far more than checking off a list of sights.
            </p>
            <p className={styles.cardBody}>
              That said, the sheer number of options can feel overwhelming. In New York City, where you stay matters,
              and a little guidance goes a long way toward turning a busy destination into a smooth, enjoyable trip.
            </p>
          </article>
        </div>

        {/* Optional soft assist line – render only if you decide to use it in the flow */}
        {/* <p className={styles.softAssist}>
          If you’re not sure where to begin, we can help you narrow down the choices based on your trip style.
        </p> */}
      </div>
    </section>
  );
}
