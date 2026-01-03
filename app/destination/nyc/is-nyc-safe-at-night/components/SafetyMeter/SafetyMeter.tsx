import styles from "./SafetyMeter.module.css";
import type { SafetyMeterProps } from "../typesafeatnight";

export default function SafetyMeter(props: SafetyMeterProps) {
  const { overallRating, meterScore, quickSummary, bestFor, avoidIf } = props;

  return (
    <section className={styles.safetyMeterSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>NYC Night Safety Verdict</h2>

        <div className={styles.meterWrapper}>
          <div className={styles.meterCircle}>
            <span className={styles.meterScore}>{meterScore}/10</span>
          </div>
          <p className={styles.overallRating}>{overallRating}</p>
        </div>

        <p className={styles.quickSummary}>{quickSummary}</p>

        <div className={styles.grid}>
          <div className={styles.block}>
            <h3 className={styles.subheading}>Best For</h3>
            <ul className={styles.list}>
              {bestFor.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className={styles.block}>
            <h3 className={styles.subheading}>Avoid If</h3>
            <ul className={styles.list}>
              {avoidIf.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
