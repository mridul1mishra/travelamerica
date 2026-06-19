import styles from "./decisionframework.module.css";

export default function DecisionFramework() {
  const factors = [
    {
      icon: "🛡️",
      title: "Safety Level",
      text: "NYC is safe overall, but block‑by‑block variation matters. Look for well‑lit, residential streets with steady foot traffic.",
    },
    {
      icon: "🚇",
      title: "Transit Access",
      text: "Your subway line matters more than your ZIP code. Prioritize neighborhoods with direct access to the lines you'll use most.",
    },
    {
      icon: "🚶",
      title: "Walkability",
      text: "Some areas feel effortless on foot; others require more transit. Choose a neighborhood with cafés, groceries, and parks nearby.",
    },
    {
      icon: "🌙",
      title: "Night Vibe",
      text: "Decide whether you want quiet evenings or lively nightlife. NYC neighborhoods shift dramatically after dark.",
    },
    {
      icon: "💸",
      title: "Budget Fit",
      text: "Hotel prices vary widely. Midtown East and Long Island City offer value; Williamsburg and SoHo skew premium.",
    },
    {
      icon: "📍",
      title: "Distance to Attractions",
      text: "Staying central saves time. Pick a neighborhood that minimizes your daily transit time to your must‑see spots.",
    },
  ];

  return (
    <section className={styles.wrapper}>
      <h2>How to Choose the Right Neighborhood</h2>

      <div className={styles.grid}>
        {factors.map((item) => (
          <div key={item.title} className={styles.card}>
            <div className={styles.icon}>{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
