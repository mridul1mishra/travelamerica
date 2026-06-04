import styles from "./MetroBasics.module.css";
import type { MetroBasics as MetroBasicsType } from "../types-metroSafetyGuide";

interface Props {
  data: MetroBasicsType;
}

export default function MetroBasics({ data }: Props) {
  const {
    how_the_system_works,
    peak_vs_off_peak,
    fare_basics,
    station_layouts,
    train_types
  } = data;

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Metro Basics</h2>

      <div className={styles.block}>
        <h3 className={styles.heading}>How the System Works</h3>
        <p className={styles.text}>{how_the_system_works}</p>
      </div>

      <div className={styles.block}>
        <h3 className={styles.heading}>Peak vs Off‑Peak</h3>

        <div className={styles.peakGrid}>
          <div className={styles.peakCard}>
            <h4 className={styles.subheading}>Peak Hours</h4>
            <p className={styles.text}>{peak_vs_off_peak.peak}</p>
          </div>

          <div className={styles.peakCard}>
            <h4 className={styles.subheading}>Off‑Peak Hours</h4>
            <p className={styles.text}>{peak_vs_off_peak.off_peak}</p>
          </div>
        </div>
      </div>

      <div className={styles.block}>
        <h3 className={styles.heading}>Fare Basics</h3>
        <p className={styles.text}>{fare_basics}</p>
      </div>

      <div className={styles.block}>
        <h3 className={styles.heading}>Station Layouts</h3>
        <p className={styles.text}>{station_layouts}</p>
      </div>

      <div className={styles.block}>
        <h3 className={styles.heading}>Train Types</h3>
        <p className={styles.text}>{train_types}</p>
      </div>
    </section>
  );
}
