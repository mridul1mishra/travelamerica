import styles from "./TrustBlock.module.css";
import type { TrustBlockProps } from "../typesafeatnight";

export default function TrustBlock({
  methodology,
  localInsights,
  dataSources,
  editorialProcess,
  safetyExpertsConsulted
}: TrustBlockProps) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Why You Can Trust This Guide</h2>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3 className={styles.title}>Methodology</h3>
            <p className={styles.text}>{methodology}</p>
          </div>

          <div className={styles.card}>
            <h3 className={styles.title}>Local Insights</h3>
            <p className={styles.text}>{localInsights}</p>
          </div>

          <div className={styles.card}>
            <h3 className={styles.title}>Data Sources</h3>
            <ul className={styles.list}>
              {dataSources.map((source, i) => (
                <li key={i}>{source}</li>
              ))}
            </ul>
          </div>

          <div className={styles.card}>
            <h3 className={styles.title}>Editorial Process</h3>
            <p className={styles.text}>{editorialProcess}</p>
          </div>

          
        </div>
      </div>
    </section>
  );
}
