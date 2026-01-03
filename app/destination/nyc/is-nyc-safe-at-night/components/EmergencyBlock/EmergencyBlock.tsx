import styles from "./EmergencyBlock.module.css";
import type { EmergencyBlockProps } from "../typesafeatnight";

export default function EmergencyBlock({
  call911,
  call311,
  nypdPrecinctLocator,
  nearestHospital,
  subwayHelpPoints,
  lateNightTransportLinks
}: EmergencyBlockProps) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Emergency & Local Resources</h2>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3 className={styles.title}>Emergency Numbers</h3>
            <p><strong>911:</strong> {call911}</p>
            <p><strong>311:</strong> {call311}</p>
          </div>

          <div className={styles.card}>
            <h3 className={styles.title}>NYPD Precinct Locator</h3>
            <a href={nypdPrecinctLocator} className={styles.link} target="_blank">
              Find Your Precinct
            </a>
          </div>

          <div className={styles.card}>
            <h3 className={styles.title}>Nearest Hospital</h3>
            <p>{nearestHospital}</p>
          </div>

          <div className={styles.card}>
            <h3 className={styles.title}>Subway Help Points</h3>
            <p>{subwayHelpPoints}</p>
          </div>

          {lateNightTransportLinks && (
            <div className={styles.card}>
              <h3 className={styles.title}>Late‑Night Transport Links</h3>
              <ul className={styles.list}>
                {lateNightTransportLinks.map((link, i) => (
                  <li key={i}>
                    <a href={link} className={styles.link} target="_blank">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
