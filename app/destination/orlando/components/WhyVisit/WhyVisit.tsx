import styles from './WhyVisit.module.css';

export default function WhyVisit() {
  return (
    <section className={styles.section} aria-labelledby="why-visit-orlando-heading">
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 id="why-visit-orlando-heading" className={styles.title}>
            Why Orlando Works for So Many Trips
          </h2>
          <p className={styles.intro}>
            Orlando draws travelers with very different priorities — families chasing theme parks, couples after a
            quieter resort week, thrill-seekers, and day-trippers heading to the coast or the space coast. That range
            is exactly why it works for so many kinds of trips, whether it&apos;s your first visit or a return with a
            specific plan in mind.
          </p>
        </header>

        <div className={styles.grid}>
          <article className={styles.card}>
            <h3 className={styles.cardTitle}>More Than the Parks</h3>
            <p className={styles.cardBody}>
              Disney and Universal are the headline, but Orlando also has Kennedy Space Center, natural springs,
              world-class dining, and easy day trips to both Florida coasts — often within a 90-minute drive.
            </p>
          </article>

          <article className={styles.card}>
            <h3 className={styles.cardTitle}>Depth for Short or Long Stays</h3>
            <p className={styles.cardBody}>
              A focused three-day park trip works as well as a relaxed week mixing parks, springs, and beach days.
              Orlando rewards both tight planning and a slower pace, depending on how much time you have.
            </p>
          </article>

          <article className={styles.card}>
            <h3 className={styles.cardTitle}>Day Trips in Every Direction</h3>
            <p className={styles.cardBody}>
              Clearwater Beach and St. Pete on the Gulf Coast are 90 minutes west. Cocoa Beach and Cape Canaveral
              are 60 minutes east — you can watch a rocket launch and be back for a park evening. Springs like
              Wekiva and Blue Spring are under an hour north for a break from the parks.
            </p>
            <p className={styles.cardBody}>
              A 5–6 day trip that mixes two or three park days with a beach day and a springs half-day is one of
              the best-value Florida itineraries going. Most visitors never leave the resort corridor — and miss
              what makes the surrounding region genuinely interesting.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
