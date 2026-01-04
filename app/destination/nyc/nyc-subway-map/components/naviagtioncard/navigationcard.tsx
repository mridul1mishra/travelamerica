"use client";

import styles from "./navigationcard.module.css";
import type { QuickNavItem } from "./nyc-subway-map.d.ts";

interface IconCardGridProps {
  items: QuickNavItem[];
}

export default function IconCardGrid({ items }: IconCardGridProps) {
  return (
    <section className={styles.wrapper}>
      <div className={styles.grid}>
        {items.map((item) => (
          <a
            key={item.anchor}
            href={`#${item.anchor}`}
            className={styles.card}
          >
            <div className={styles.iconWrapper}>
              <span className={styles.icon}>🧭</span>
            </div>

            <p className={styles.label}>{item.label}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

