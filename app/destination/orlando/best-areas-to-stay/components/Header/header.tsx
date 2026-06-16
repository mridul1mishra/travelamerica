"use client";
import styles from "./header.module.css";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

type NavLink = { href: string; label: string };

const DEFAULT_LINKS: NavLink[] = [
  { href: "/destination/nyc/best-areas-to-stay", label: "Best Areas to Stay" },
  { href: "/destination/nyc/solo-trip-to-nyc", label: "Solo Trip to NYC" },
  { href: "/destination/nyc/nyc-safety-guide", label: "NYC Safety" },
  { href: "/destination/nyc/nyc-female-solo-travel-guide", label: "Female Travel Guide" },
];

export default function Header({ links = DEFAULT_LINKS }: { links?: NavLink[] }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.brandlogo}>
        <Link href="/">
          <Image
            src="/Travels-Americas-logo-horizontal-v3.png"
            alt="Travels Americas Logo"
            width={285}
            height={76}
            sizes="(max-width: 768px) 200px, 285px"
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

          {links.map((l) => (
            <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
