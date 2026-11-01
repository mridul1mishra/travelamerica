"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./section-navigation.module.css";

type SectionNavigationItem = readonly [id: string, label: string];

export default function SectionNavigation({ items }: { items: readonly SectionNavigationItem[] }) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const linksRef = useRef<HTMLUListElement>(null);
  const panelRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const panel = panelRef.current;
    const article = panel?.parentElement;
    if (!panel || !article) return;

    const updateHeight = () => {
      article.style.setProperty("--night-guide-navigation-height", `${panel.getBoundingClientRect().height}px`);
    };
    updateHeight();
    const observer = new ResizeObserver(updateHeight);
    observer.observe(panel);
    return () => {
      observer.disconnect();
      article.style.removeProperty("--night-guide-navigation-height");
    };
  }, []);

  useEffect(() => {
    let currentId: string | null = null;
    let frame = 0;
    const selectSection = (nextActiveId: string | null) => {
      if (nextActiveId === currentId) return;
      currentId = nextActiveId;
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

    const syncFromScroll = () => {
      frame = 0;
      const threshold = (panelRef.current?.getBoundingClientRect().height ?? 0) + 26;
      let nextActiveId: string | null = items[0]?.[0] ?? null;
      for (const [id] of items) {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= threshold) {
          nextActiveId = id;
        }
      }
      selectSection(nextActiveId);
    };
    const scheduleSync = () => {
      if (!frame) frame = window.requestAnimationFrame(syncFromScroll);
    };
    const syncFromHash = () => {
      const fragment = window.location.hash.slice(1);
      if (items.some(([id]) => id === fragment)) selectSection(fragment);
      scheduleSync();
    };

    syncFromScroll();
    window.addEventListener("scroll", scheduleSync, { passive: true });
    window.addEventListener("hashchange", syncFromHash);
    window.addEventListener("resize", scheduleSync);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleSync);
      window.removeEventListener("hashchange", syncFromHash);
      window.removeEventListener("resize", scheduleSync);
    };
  }, [items]);

  return (
    <nav className={styles.panel} aria-label="Explore this guide" ref={panelRef}>
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
