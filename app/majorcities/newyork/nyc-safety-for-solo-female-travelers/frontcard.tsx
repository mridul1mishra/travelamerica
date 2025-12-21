export function FrontCard({ scenario }) {
  return (
    <div className={styles["safety-front-card"]}>
      <div className={styles["safety-front-card__icon"]}>{scenario.icon}</div>

      <div className={styles["safety-front-card__content"]}>
        <h3 className={styles["safety-front-card__scenario"]}>
          {scenario.title}
        </h3>

        <p className={styles["safety-front-card__description"]}>
          {scenario.description}
        </p>
      </div>

      <div className={styles["safety-front-card__footer"]}>Tap to flip →</div>
    </div>
  );
}
