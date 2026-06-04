import data from "@/content/destination/la/solo-trip-to-la/scenario.json";
import { ScenarioCard } from "./scenariocard";
import styles from "./scenariocard.module.css";

export function ScenarioSection() {
  return (
    <section className={styles["scenario-section"]}>
      <div className={styles["scenario-section__inner"]}>
        <h2 className={styles["scenario-section__heading"]}>Real Solo-Travel Scenarios in LA</h2>
        <p className={styles["scenario-section__intro"]}>
          These are real situations solo travelers face in Los Angeles. Each one is designed to help
          you move through the city with confidence, clarity, and calm.
        </p>

        <div className={styles["scenario-section__grid"]}>
          {data.map((item, index) => (
            <ScenarioCard
              key={index}
              title={item.title}
              context={item.context}
              advice={item.advice}
              cta=""
              /*cta={item.cta}*/
            />
          ))}
        </div>
      </div>
    </section>
  );
}
