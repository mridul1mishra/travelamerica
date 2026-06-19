import styles from "./coresafetyprinciples.module.css";
import CoreSafetyPrincipleCard from "./CoreSafetyPrincipleCard";
import coreSafetyPrinciples from "./coreSafetyPrinciplesData";

export default function CoreSafetyPrinciplesGrid() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Core Safety Principles</h2>
        <p className={styles.subtitle}>
          NYC‑specific mindset anchors to help you stay confident and aware.
        </p>

        <div className={styles.grid}>
          {coreSafetyPrinciples.map((item) => (
            <CoreSafetyPrincipleCard
              key={item.id}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
