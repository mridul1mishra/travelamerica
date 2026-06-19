"use client";

import { useState } from "react";
import { SCENARIOS, type ScenarioCategory } from "./scenario";
import styles from "./ScenarioFilter.module.css";

const categories: ScenarioCategory[] = [
  "Street",
  "Transit",
  "Accommodation",
  "Social"
];

function getBandClass(category: ScenarioCategory) {
  switch (category) {
    case "Street":
      return styles.bandStreet;
    case "Transit":
      return styles.bandTransit;
    case "Accommodation":
      return styles.bandAccommodation;
    case "Social":
      return styles.bandSocial;
    default:
      return "";
  }
}

export default function ScenarioFilter() {
  const [activeCategory, setActiveCategory] = useState<ScenarioCategory>("Street");

  const filteredScenarios = SCENARIOS.filter(
    (scenario) => scenario.category === activeCategory
  );

  return (
    <div className={styles.container}>
      {/* Filter Pills */}
      <div className={styles.pills}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`${styles.pill} ${
              activeCategory === cat ? styles.pillActive : ""
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Scenario Cards */}
      <div>
        {filteredScenarios.map((scenario) => (
          <div key={scenario.id} className={styles.card}>
            <div className={`${styles.band} ${getBandClass(scenario.category)}`} />
            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>{scenario.title}</h3>
              <ul className={styles.cardList}>
                {scenario.content.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
