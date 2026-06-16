import { LANDMARKS } from '../../landmarks-data';
import styles from '../../lalandmark.module.css';

export default function LandmarkList() {
  return (
    <section className={styles.landmarkList}>
      {LANDMARKS.map((l) => (
        <article key={l.id} id={l.id} className={styles.landmarkCard}>
          <h2 className={styles.landmarkName}>{l.name}</h2>
          <p className={styles.landmarkNeighborhood}>{l.neighborhood}</p>
          <dl className={styles.landmarkMeta}>
            <div className={styles.metaRow}>
              <dt>Address</dt>
              <dd>{l.address}</dd>
            </div>
            <div className={styles.metaRow}>
              <dt>Getting there</dt>
              <dd>{l.subway}</dd>
            </div>
            <div className={styles.metaRow}>
              <dt>Hours</dt>
              <dd>{l.hours}</dd>
            </div>
            <div className={styles.metaRow}>
              <dt>Ticket</dt>
              <dd>{l.ticket}</dd>
            </div>
            <div className={styles.metaRow}>
              <dt>Time needed</dt>
              <dd>{l.timeNeeded}</dd>
            </div>
            <div className={styles.metaRow}>
              <dt>Best time to go</dt>
              <dd>{l.bestTime}</dd>
            </div>
          </dl>
          <div className={styles.landmarkBody}>
            <h3 className={styles.landmarkSubhead}>What to do</h3>
            <p>{l.whatToDo}</p>
            <h3 className={styles.landmarkSubhead}>Solo traveler tip</h3>
            <p>{l.soloTip}</p>
          </div>
        </article>
      ))}
    </section>
  );
}
