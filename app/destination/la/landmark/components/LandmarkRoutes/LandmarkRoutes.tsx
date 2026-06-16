import styles from '../../lalandmark.module.css';

export default function LandmarkRoutes() {
  return (
    <section className={styles.routeSection} id="suggested-routes">
      <h2 className={styles.sectionheading}>Suggested 1-Day Landmark Routes</h2>

      <article className={styles.routeCard}>
        <h3>Classic First-Timer Route (1 day, car or rideshare)</h3>
        <ol>
          <li><strong>9:00 AM</strong> &mdash; Griffith Observatory (arrive early for parking and clear morning air)</li>
          <li><strong>11:30 AM</strong> &mdash; Hollywood Walk of Fame &amp; TCL Chinese Theatre forecourt</li>
          <li><strong>1:00 PM</strong> &mdash; Lunch off Hollywood Blvd</li>
          <li><strong>2:30 PM</strong> &mdash; The Getty Center (art + city views from the terraces)</li>
          <li><strong>6:00 PM</strong> &mdash; Sunset on the Santa Monica Pier</li>
          <li><strong>8:00 PM</strong> &mdash; Dinner in Santa Monica or Venice</li>
        </ol>
      </article>

      <article className={styles.routeCard}>
        <h3>Slow-Paced Solo Route (1 day, low-energy)</h3>
        <ol>
          <li><strong>10:00 AM</strong> &mdash; The Getty Center (3 hours, take it gallery by gallery)</li>
          <li><strong>1:30 PM</strong> &mdash; Lunch at the Getty cafe or in Brentwood</li>
          <li><strong>3:00 PM</strong> &mdash; Walk the Venice Canals and Abbot Kinney Blvd</li>
          <li><strong>4:30 PM</strong> &mdash; Stroll the Venice boardwalk north to Santa Monica</li>
          <li><strong>6:30 PM</strong> &mdash; Sunset on the Santa Monica Pier</li>
          <li><strong>8:00 PM</strong> &mdash; Dinner on Main Street, Santa Monica</li>
        </ol>
      </article>

      <article className={styles.routeCard}>
        <h3>Free Landmarks Day (1 day, $0 attractions + transit)</h3>
        <ol>
          <li><strong>9:00 AM</strong> &mdash; Griffith Observatory (free) and the Hollywood Sign view</li>
          <li><strong>11:30 AM</strong> &mdash; Metro to downtown; Union Station + Olvera Street (free)</li>
          <li><strong>1:00 PM</strong> &mdash; Cheap taquitos on Olvera Street</li>
          <li><strong>2:00 PM</strong> &mdash; The Broad (free general admission; reserve a timed slot)</li>
          <li><strong>3:30 PM</strong> &mdash; Walk past Walt Disney Concert Hall + Grand Park</li>
          <li><strong>4:30 PM</strong> &mdash; LACMA&apos;s free &apos;Urban Light&apos; installation on Museum Row</li>
          <li><strong>6:30 PM</strong> &mdash; Venice Beach boardwalk before sunset (free)</li>
        </ol>
      </article>
    </section>
  );
}
