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
            <h3 className={styles.cardTitle}>Five Boroughs, Completely Different Worlds</h3>
            <p className={styles.cardBody}>
              Midtown Manhattan puts you within walking distance of Times Square, Central Park, and the Empire State
              Building. Brooklyn Heights gives you skyline views and a quieter pace. Williamsburg has the best
              independent restaurant and nightlife scene outside Manhattan — and it&apos;s 20 minutes on the L train.
              You can move between entirely different versions of the city in under half an hour.
            </p>
          </article>

          <article className={styles.card}>
            <h3 className={styles.cardTitle}>A Food Scene That Goes Far Beyond Manhattan</h3>
            <p className={styles.cardBody}>
              Jackson Heights in Queens has some of the best South Asian and Latin food in the country. Flushing is
              the place for dim sum and hand-pulled noodles. Arthur Avenue in the Bronx is old-school Italian done
              properly. The best meals in NYC are often $15 at a counter with no tourists in sight — you just need
              to know which borough to head to.
            </p>
          </article>

          <article className={styles.card}>
            <h3 className={styles.cardTitle}>Three Days or Ten — the City Scales</h3>
            <p className={styles.cardBody}>
              A focused three-day trip covers essential Manhattan landmarks, a Brooklyn afternoon, and a proper
              dinner without feeling rushed. A longer stay opens up day trips — the Hudson Valley is 90 minutes
              north by train, the Jersey Shore is under an hour, and the Catskills are two hours if you rent a car.
            </p>
            <p className={styles.cardBody}>
              Where you stay shapes the whole trip. Midtown is convenient but expensive. The Upper West Side is
              calmer and better value. Long Island City and Williamsburg are the best budget picks with fast subway
              access to Manhattan.
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
