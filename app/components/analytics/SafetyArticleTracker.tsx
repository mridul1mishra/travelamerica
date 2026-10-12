"use client";

import { useEffect } from "react";

// Survives React remounts and client navigation; a document reload resets it.
const viewed = new Set<string>();

export default function SafetyArticleTracker() {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>("[data-safety-section], [data-hotel-cta-module]");
    const cleanups: Array<() => void> = [];

    targets.forEach((target) => {
      const isSection = target.hasAttribute("data-safety-section");
      const id = isSection ? target.id : target.dataset.ctaId;
      if (!id) return;
      const pageLocation = window.location.href;
      const key = `${pageLocation}:${isSection ? "section" : "cta"}:${id}`;
      if (viewed.has(key)) return;
      let elapsed = 0;
      let started: number | null = null;
      let visible = false;
      let timer: ReturnType<typeof setTimeout> | undefined;

      function update() {
        const now = performance.now();
        if (started !== null) elapsed += now - started;
        started = null;
        clearTimeout(timer);
        if (viewed.has(key)) return;
        if (elapsed >= 2000) {
          viewed.add(key);
          const name = isSection ? "safety_section_view" : "hotel_cta_view";
          const params = isSection
            ? { page_location: pageLocation, section_id: id }
            : { page_location: pageLocation, cta_id: id, cta_placement: target.dataset.ctaPlacement };
          if (typeof window.gtag === "function") window.gtag("event", name, params);
          else {
            // Queue for the existing Google tag; do not initialize another tag.
            const win = window as Window & { dataLayer?: unknown[] };
            win.dataLayer = win.dataLayer || [];
            function queue(..._args: unknown[]) {
              void _args;
              // Google's gtag queue uses Arguments objects, not GTM event objects.
              // eslint-disable-next-line prefer-rest-params
              win.dataLayer!.push(arguments);
            }
            queue("event", name, params);
          }
          observer.disconnect();
          return;
        }
        if (visible && document.visibilityState === "visible") {
          started = now;
          timer = setTimeout(update, 2000 - elapsed);
        }
      }

      const observer = new IntersectionObserver((entries) => {
        // Account for each transition, including multiple entries in one delivery.
        for (const entry of entries) {
          if (started !== null) elapsed += Math.max(0, entry.time - started);
          started = null;
          visible = entry.isIntersecting && entry.intersectionRatio >= 0.5;
          if (visible && document.visibilityState === "visible") started = entry.time;
        }
        update();
      }, { threshold: [0, 0.5] });
      observer.observe(target);
      document.addEventListener("visibilitychange", update);
      cleanups.push(() => {
        observer.disconnect();
        clearTimeout(timer);
        document.removeEventListener("visibilitychange", update);
      });
    });
    return () => cleanups.forEach((cleanup) => cleanup());
  }, []);

  return null;
}
