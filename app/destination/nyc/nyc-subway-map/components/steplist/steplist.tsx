import { StepList } from "../../nyc-subway-map";

export function StepListComponent({ purpose, howToRead }: StepList) {
  return (
    <section className="step-list">
      <h2>{purpose}</h2>
      <ul>
        {howToRead.map((step, i) => (
          <li key={i}>{step}</li>
        ))}
      </ul>
    </section>
  );
}
