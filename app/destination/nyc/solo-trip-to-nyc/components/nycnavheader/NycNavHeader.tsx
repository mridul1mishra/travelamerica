"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../solotriptonyc.module.css";

export default function NycNavHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <section className={`${styles.overlayheader} ${styles.scrolled}`}>
      <div className={styles.brandlogo}>
        <a href="/">
          <Image
            src="/Travels-Americas-logo-horizontal-v3.png"
            alt="Travels Americas Logo"
            width={285}
            height={76}
            sizes="(max-width: 768px) 200px, 285px"
            fetchPriority="high"
          />
        </a>
      </div>
      <nav className={styles.mainnav}>
        <button className={styles.hamburger} onClick={toggleMenu} aria-label="Toggle menu">
          ☰
        </button>
        <ul className={`${styles.navlinks} ${isMenuOpen ? styles.active : ""}`}>
          <li className={styles.closebtn}>
            <button onClick={closeMenu} aria-label="Close menu">✕</button>
          </li>
          <li><Link href="/destination/nyc/best-areas-to-stay">Best Areas to Stay</Link></li>
          <li><Link href="/destination/nyc/solo-trip-to-nyc">Solo Trip to NYC</Link></li>
          <li><Link href="/destination/nyc/nyc-safety-guide">NYC Safety</Link></li>
          <li><Link href="/destination/nyc/nyc-female-solo-travel-guide">Female Travel Guide</Link></li>
        </ul>
      </nav>
    </section>
  );
}
