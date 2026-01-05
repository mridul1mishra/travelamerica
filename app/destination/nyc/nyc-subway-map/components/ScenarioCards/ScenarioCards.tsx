import React from "react";
import styles from "./ScenarioCards.module.css";
import type { ScenarioCardsProps } from "../../nyc-subway-map";

export function ScenarioCards(props: ScenarioCardsProps) {
  const { routes, sectionTitle = "Best Subway Routes for Solo Travelers", className } = props;

  return (
    <section
      className={[
        styles.scenarioCardsSection,
        className ? className : ""
      ]
        .filter(Boolean)
        .join(" ")}
      aria-label={sectionTitle}
    >
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>{sectionTitle}</h2>
        <p className={styles.sectionSubtitle}>
          Quick, safe route snapshots you can screenshot and follow on the go.
        </p>
      </div>

      <div className={styles.cardsGrid}>
        {routes.map((route) => (
          <article key={route.title} className={styles.card}>
            <h3 className={styles.cardTitle}>{route.title}</h3>
            <ul className={styles.bulletList}>
              {route.bullets.map((item, index) => (
                <li key={index} className={styles.bulletItem}>
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

