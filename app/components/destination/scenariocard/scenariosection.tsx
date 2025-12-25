import data from "@/app/data/destination/solotriptonyc/scenario.json";
import { ScenarioCard } from "./scenariocard";
import "./scenariocard.css";

export function ScenarioSection() {
  return (
    <section className="scenario-section">
      <div className="scenario-section__inner">
        <h2 className="scenario-section__heading">Real Solo-Travel Scenarios in NYC</h2>
        <p className="scenario-section__intro">
          These are real situations solo travelers face in New York. Each one is designed to help
          you move through the city with confidence, clarity, and calm.
        </p>

        <div className="scenario-section__grid">
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
