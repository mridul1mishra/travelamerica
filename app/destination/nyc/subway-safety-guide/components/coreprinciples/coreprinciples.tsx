import styles from "./coreprinciples.module.css";
import type { CorePrinciple } from "../types-subwaySafetyGuide";

interface Props {
  items: CorePrinciple[];
}

export default function CorePrinciples({ items }: Props) {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Core Safety Principles</h2>

      <div className={styles.grid}>
        {items.map((item, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.icon}>{/* Optional icon logic */}</div>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.description}>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
