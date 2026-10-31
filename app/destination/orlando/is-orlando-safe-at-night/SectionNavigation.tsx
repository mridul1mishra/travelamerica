"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./section-navigation.module.css";

type SectionNavigationItem = readonly [id: string, label: string];

export default function SectionNavigation({ items }: { items: readonly SectionNavigationItem[] }) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const linksRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const syncActiveId = () => {
      const fragment = window.location.hash.slice(1);
      const nextActiveId = items.some(([id]) => id === fragment) ? fragment : null;
      setActiveId(nextActiveId);

      if (nextActiveId) {
        const list = linksRef.current;
        const activeLink = list?.querySelector<HTMLAnchorElement>(`a[href="#${CSS.escape(nextActiveId)}"]`);
        if (list && activeLink) {
          const listBounds = list.getBoundingClientRect();
          const linkBounds = activeLink.getBoundingClientRect();
          if (linkBounds.left < listBounds.left) {
            list.scrollTo({ left: list.scrollLeft + linkBounds.left - listBounds.left - 8, behavior: "auto" });
          } else if (linkBounds.right > listBounds.right) {
            list.scrollTo({ left: list.scrollLeft + linkBounds.right - listBounds.right + 8, behavior: "auto" });
          }
        }
      }
    };

    syncActiveId();
    window.addEventListener("hashchange", syncActiveId);
    window.addEventListener("resize", syncActiveId);
    return () => {
      window.removeEventListener("hashchange", syncActiveId);
      window.removeEventListener("resize", syncActiveId);
    };
  }, [items]);

  return (
    <nav className={styles.panel} aria-label="Explore this guide">
      <span className={styles.label}>Explore this guide</span>
      <ul className={styles.links} ref={linksRef}>
        {items.map(([id, label]) => (
          <li key={id}>
            <a className={styles.link} href={`#${id}`} aria-current={activeId === id ? "location" : undefined}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
