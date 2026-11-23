import styles from "@/app/destination/city-hub.module.css";

// Admission rules and hours taken from each institution's own visitor page.
// Re-check hours and parking charges before each update; they move seasonally.
export default function MuseumAdmission() {
  return (
    <section className={styles.section} aria-labelledby="la-museum-admission">
      <h2 id="la-museum-admission" className={styles.sectionTitle}>
        The big ones are free. Parking and reservations are the real cost
      </h2>
      <p className={styles.sectionIntro}>
        Los Angeles is unusual among big American cities in how much of its best art and science
        costs nothing to see. What varies is whether you need to book, and what it costs to leave
        the car. Plan around those two things rather than around ticket prices.
      </p>
      <div className={styles.grid}>
        <article className={styles.card}>
          <h3 className={styles.cardTitle}>Getty Center</h3>
          <p className={styles.cardBody}>
            Admission is free, but it requires a timed-entry reservation, which is also free. The
            cost is parking: $25 per car or motorcycle, dropping to $15 after 3pm and $10 after 6pm,
            and free on Saturdays after 6pm. Open Tuesday to Friday and Sunday 10am to 6:30pm, and
            Saturday 10am to 9pm. Closed Mondays. The late Saturday opening plus free evening
            parking makes Saturday evening the cheapest time to go.
          </p>
          <p className={styles.cardMeta}>Source: getty.edu</p>
        </article>
        <article className={styles.card}>
          <h3 className={styles.cardTitle}>Griffith Observatory</h3>
          <p className={styles.cardBody}>
            Free to enter the building and the grounds, with no reservation needed. Open Tuesday to
            Friday from noon to 10pm, and Saturday and Sunday from 10am to 10pm. Closed Mondays.
            The weekday noon opening catches people out, so a morning visit only works at the
            weekend. There is paid parking near the building and free parking further downhill,
            which means a walk up.
          </p>
          <p className={styles.cardMeta}>Source: griffithobservatory.lacity.gov</p>
        </article>
        <article className={styles.card}>
          <h3 className={styles.cardTitle}>The Broad</h3>
          <p className={styles.cardBody}>
            General admission is always free. A timed ticket in advance is recommended rather than
            required, and walk-ups are available daily, so a spare hour downtown can become a
            gallery visit. The Infinity Mirror Room is the exception and does need an advance
            reservation. Open Tuesday, Wednesday and Friday 11am to 5pm, Thursday 11am to 8pm, and
            weekends 10am to 6pm. Closed Mondays, Thanksgiving and Christmas Day.
          </p>
          <p className={styles.cardMeta}>Source: thebroad.org</p>
        </article>
        <article className={styles.card}>
          <h3 className={styles.cardTitle}>LACMA</h3>
          <p className={styles.cardBody}>
            Open Monday, Tuesday and Thursday 11am to 6pm, Friday 11am to 8pm, and weekends 10am to
            7pm. It is closed on Wednesdays, which is the one to watch, along with Thanksgiving and
            Christmas. The permanent collection now sits in the David Geffen Galleries, which run
            free docent-led tours. Note that the Monday opening is unusual &mdash; most of the other
            museums on this list close that day, so a Monday in LA is a LACMA day.
          </p>
          <p className={styles.cardMeta}>Source: lacma.org</p>
        </article>
      </div>
      <p className={styles.sectionIntro}>
        Between them these four cover Mondays, Wednesdays and late evenings, so there is usually
        something open. Hours and parking charges change seasonally, so confirm on the day.
      </p>
    </section>
  );
}
