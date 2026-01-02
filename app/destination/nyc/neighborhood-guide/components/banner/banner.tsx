import React from "react";
import styles from "./banner.module.css";

export default function NeighborhoodBanner() {
  return (
    <section className={styles.banner}>
      <div className={styles.container}>
        {/* Left: Text */}
        <div className={styles.textBlock}>
          <div className={styles.meta}>
            <span className={styles.icon}>◎</span>
            <span>NYC Neighborhoods · Solo Travel</span>
          </div>

          <h1 className={styles.title}>
            NYC Neighborhood Guide for Solo Travelers
          </h1>

          <p className={styles.subheading}>
            Understand the vibe, safety patterns, and day–night feel of every
            major NYC neighborhood — so you can choose the right area with
            clarity and confidence.
          </p>

          <div className={styles.tags}>
            <span className={styles.tag}>Solo‑friendly</span>
            <span className={styles.tag}>Safety‑anchored</span>
            <span className={styles.tag}>Updated for 2026</span>
          </div>
        </div>

        {/* Right: Illustration placeholder */}
        <div className={styles.illustration}>
          NYC map / compass illustration
        </div>
      </div>
    </section>
  );
}
