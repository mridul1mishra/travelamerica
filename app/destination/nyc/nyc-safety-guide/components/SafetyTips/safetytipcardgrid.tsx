import styles from "./safetytips.module.css";
import SafetyTipCard from "./safetytipcard";
import safetyTips from "./safetytipsData";

export default function SafetyTipsGrid() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Safety Tips</h2>
        <p className={styles.subtitle}>
          Quick advice for staying safe in New York City.
        </p>

        <div className={styles.grid}>
          {safetyTips.map((tip) => (
            <SafetyTipCard
              key={tip.id}
              title={tip.title}
              description={tip.description}
              icon={tip.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
