import styles from "./CorePrinciples.module.css";
import type { CorePrinciplesProps } from "../typesafeatnight";

export default function CorePrinciples({ principles }: CorePrinciplesProps) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>NYC Night Safety Principles</h2>

        <div className={styles.grid}>
          {principles.map((principle, index) => (
            <div key={index} className={styles.card}>
              <h3 className={styles.title}>{principle.title}</h3>

              <p className={styles.description}>{principle.description}</p>

              <p className={styles.example}>
                <strong>Example:</strong> {principle.example}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
