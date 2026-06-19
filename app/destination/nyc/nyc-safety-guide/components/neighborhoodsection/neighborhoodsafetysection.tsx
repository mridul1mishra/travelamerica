import styles from "./neighborhoodsafety.module.css";
import NeighborhoodSafetyCard from "./neighborhoodsafetycard";
import neighborhoods from "./neighborhoodsafetydata";

export default function NeighborhoodSafetySection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Neighborhood Safety Breakdown</h2>
        <p className={styles.subtitle}>
          How safe are NYC neighborhoods for solo travelers?
        </p>

        <div className={styles.grid}>
          {neighborhoods.map((item) => (
            <NeighborhoodSafetyCard
              key={item.id}
              name={item.name}
              safetyLevel={item.safetyLevel}
              tips={item.tips}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
