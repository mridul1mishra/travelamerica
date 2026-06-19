import styles from "./quicksummarygrid.module.css";

export default function QuickSummaryGrid() {
  const gridItems = [
    {
      category: "Safest",
      pick: "Upper West Side",
      anchor: "#upper-west-side",
    },
    {
      category: "Best for First-Timers",
      pick: "Midtown East",
      anchor: "#midtown-east",
    },
    {
      category: "Best for Nightlife",
      pick: "Williamsburg",
      anchor: "#williamsburg",
    },
    {
      category: "Best Budget",
      pick: "Long Island City",
      anchor: "#long-island-city",
    },
  ];

  return (
    <section className={styles.gridWrapper}>
      <h2>Quick Summary</h2>
      <div className={styles.grid}>
        {gridItems.map((item) => (
          <a key={item.category} href={item.anchor} className={styles.card}>
            <div className={styles.category}>{item.category}</div>
            <div className={styles.pick}>{item.pick}</div>
          </a>
        ))}
      </div>
    </section>
  );
}
