import styles from "./safetycardgrid.module.css";
import SafetyCard from "./safetycard";
import safetyCards from "./safetycarddata";

export default function SafetyCardGrid() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>NYC Safety Essentials</h2>
        <p className={styles.subtitle}>
          Quick, practical safety principles every traveler should know.
        </p>

        <div className={styles.grid}>
          {safetyCards.map((card) => (
            <SafetyCard key={card.id} title={card.title} tips={card.tips} />
          ))}
        </div>
      </div>
    </section>
  );
}
