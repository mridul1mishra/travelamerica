import styles from "./PackingEssentials.module.css";

interface PackingEssentialsProps {
  items: readonly string[];
  subtitle?: string;
}

export default function PackingEssentials({
  items,
  subtitle = "Your must‑carry safety kit for NYC",
}: PackingEssentialsProps) {
  return (
    <section id="packing-gear-essentials" className={styles.wrapper}>
      <div className={styles.colorBand} />

      <h2 className={styles.title}>Packing & Gear Essentials</h2>
      <p className={styles.subtitle}>{subtitle}</p>

      <ul className={styles.grid}>
        {items.map((item, i) => (
          <li key={i} className={styles.item}>
            <span className={styles.bullet} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
