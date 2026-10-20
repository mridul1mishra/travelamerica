"use client";

import styles from "./navigationcard.module.css";
import { Map, MapPin, Moon, Route, Smartphone, TrainFront } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { QuickNavItem } from "../../nyc-subway-map";

const iconsByAnchor: Record<string, LucideIcon> = {
  "how-to-read": Map,
  "best-routes": Route,
  safety: MapPin,
  "subway-trip-planning": Smartphone,
  "late-night-subway-tips": Moon,
  "subway-etiquette": TrainFront,
};

interface IconCardGridProps {
  items: QuickNavItem[];
}

export default function IconCardGrid({ items }: IconCardGridProps) {
  return (
    <section className={styles.wrapper}>
      <div className={styles.grid}>
        {items.map((item) => {
          const Icon = iconsByAnchor[item.anchor] ?? Map;
          return (
            <a
              key={item.anchor}
              href={`#${item.anchor}`}
              className={styles.card}
            >
              <div className={styles.iconWrapper}>
                <Icon className={styles.icon} aria-hidden="true" size={24} strokeWidth={2} />
              </div>

              <p className={styles.label}>{item.label}</p>
              {item.description && <p className={styles.description}>{item.description}</p>}
            </a>
          );
        })}
      </div>
    </section>
  );
}



