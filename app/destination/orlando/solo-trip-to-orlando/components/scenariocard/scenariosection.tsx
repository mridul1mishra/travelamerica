import data from "@/content/destination/orlando/solo-trip-to-orlando/scenario.json";
import { ScenarioCard } from "./scenariocard";
import styles from "./scenariocard.module.css";

export function ScenarioSection() {
  return (
    <section className={styles["scenario-section"]}>
      <div className={styles["scenario-section__inner"]}>
        <h2 className={styles["scenario-section__heading"]}>Real Solo-Travel Scenarios in Orlando</h2>
        <p className={styles["scenario-section__intro"]}>
          These are real situations solo travellers face in Orlando. Each one is designed to help
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
            />
          ))}
        </div>
      </div>
    </section>
  );
}
