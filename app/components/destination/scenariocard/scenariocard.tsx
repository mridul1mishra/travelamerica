import { ScenarioCardProps } from "@/app/models/destination/scenariocardprops";

export function ScenarioCard({ title, context, advice, cta }: ScenarioCardProps) {
  return (
    <div className="scenario-card">
      <h3 className="scenario-card__title">{title}</h3>
      <p className="scenario-card__context"><strong>Context:</strong> {context}</p>
      <p className="scenario-card__advice"><strong>Advice:</strong> {advice}</p>
      <a href="#" className="scenario-card__cta">{cta}</a>
    </div>
  );
}
