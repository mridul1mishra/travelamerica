import { ScenarioCardProps } from "@/app/models/destination/scenariocardprops";
import styles from "./scenariocard.module.css";

export function ScenarioCard({ title, context, advice, cta }: ScenarioCardProps) {
  return (
    <div className={styles["scenario-card"]}>
      <h3 className={styles["scenario-card__title"]}>{title}</h3>
      <p className={styles["scenario-card__context"]}><strong>Context:</strong> {context}</p>
      <p className={styles["scenario-card__advice"]}><strong>Advice:</strong> {advice}</p>
      <a href="#" className={styles["scenario-card__cta"]}>{cta}</a>
    </div>
  );
}
