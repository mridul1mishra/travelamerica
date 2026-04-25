import styles from "./header.module.css";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.brandlogo}>
        <Link href="/">
          <Image
            src="/data/logo.webp"
            alt="Travel Americas Logo"
            width={150}
            height={150}
            priority
          />
        </Link>
      </div>

      <nav className={styles.nav}>
        <button
          className={styles.hamburger}
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open menu"
        >
          ☰
        </button>

        <ul className={`${styles.navlinks} ${isMenuOpen ? styles.active : ""}`}>
          <li className={styles.closebtn}>
            <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
              ✕
            </button>
          </li>

          <li><Link href="/destination/nyc/best-areas-to-stay">Best Areas to Stay</Link></li>
          <li><Link href="/destination/nyc/solo-trip-to-nyc">Solo Trip to NYC</Link></li>
          <li><Link href="/destination/nyc/is-nyc-safe-at-night">NYC Safety</Link></li>
          <li><Link href="/destination/nyc/nyc-female-solo-travel-guide">Female Travel Guide</Link></li>
        </ul>
      </nav>
    </header>
  );
}
