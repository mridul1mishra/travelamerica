import styles from "./wherenottostay.module.css";

export default function WhereNotToStay() {
  const areas = [
    {
      name: "Far East Harlem (East of 1st Ave)",
      reason:
        "Safety varies block by block, and the area can feel isolated at night with limited subway access.",
    },
    {
      name: "Certain Parts of the Bronx (Far North & East)",
      reason:
        "Long subway rides to Manhattan and sparse tourist infrastructure make it inconvenient for solo travelers.",
    },
    {
      name: "Penn Station Area (West 30s)",
      reason:
        "Chaotic, noisy, and transit-heavy with few walkable cafés or parks — overwhelming for first-timers.",
    },
    {
      name: "Times Square",
      reason:
        "Extremely crowded, touristy, and expensive with small hotel rooms and constant noise.",
    },
  ];

  return (
    <section className={styles.wrapper}>
      <h2>Where NOT to Stay in NYC (If You're Traveling Solo)</h2>
      <p className={styles.intro}>
        NYC is safe overall, but some areas may feel overwhelming, inconvenient,
        or inconsistent for solo travelers. These aren’t “dangerous” — just not
        ideal based on accessibility, comfort, and overall experience.
      </p>

      <div className={styles.list}>
        {areas.map((area) => (
          <div key={area.name} className={styles.card}>
            <div className={styles.icon}>🚫</div>
            <div>
              <h3>{area.name}</h3>
              <p>{area.reason}</p>
            </div>
          </div>
        ))}
      </div>

      <a href="/nyc-safety" className={styles.cta}>
        Read the Full NYC Safety Guide →
      </a>
    </section>
  );
}
