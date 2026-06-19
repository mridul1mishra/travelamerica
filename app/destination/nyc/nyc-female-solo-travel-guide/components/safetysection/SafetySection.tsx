import styles from "./SafetySection.module.css";

interface SafetySectionProps {
  id: string;
  title: string;
  color: string; // hex or tailwind-style token
  bullets: string[];
}

export default function SafetySection({ id, title, color, bullets }: SafetySectionProps) {
  return (
    <section id={id} className={styles.section}>
      <div className={styles.colorBand} style={{ backgroundColor: color }} />
      <h2 className={styles.title}>{title}</h2>

      <ul className={styles.list}>
        {bullets.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
