import styles from "./SectionSafestNeighborhoods.module.css";
import TipBox from "./TipBox";
import WarningBox from "./warningbox";
import TerracottaDivider from "./terracottadivider";

export default function SectionSafestNeighborhoods() {
  return (
    <section className={styles.section}>
    <div className={styles.container}>
      <h2 className={styles.title}>Safest Neighborhoods</h2>

      <p className={styles.paragraph}>
        The Upper West Side consistently ranks as one of Manhattan’s safest
        residential areas, thanks to its well-lit avenues, family-oriented
        atmosphere, and strong community presence.
      </p>

      <p className={styles.paragraph}>
        You’ll find a steady flow of locals walking dogs, grabbing groceries, or
        heading to Riverside Park — all of which contribute to a sense of
        everyday normalcy that solo travelers often appreciate.
      </p>

      <p className={styles.paragraph}>
        Crime rates here skew lower than the city average, especially for
        violent incidents. That said, standard big-city awareness still applies.
      </p>
    <div className={styles.tipMapRow}>
        <div className={styles.tipCol}>
             <TipBox> Stay on main avenues like Broadway or Amsterdam at night — they’re brighter and have more foot traffic. </TipBox>
        </div>
        <div className={styles.mapCol}>
            <img src="/destination/bestareatostay/mini-map.png" alt="Mini-map of Upper West Side" className={styles.mapImage} />
        </div> 
    </div>
    <WarningBox>
      Avoid empty side streets late at night — stick to avenues with steady foot traffic.
    </WarningBox>

      <a href="/nyc/subway-safety" className={styles.internalLink}>
        See subway safety tips →
      </a>

      <TerracottaDivider />
    </div>
    </section>
  );
}
