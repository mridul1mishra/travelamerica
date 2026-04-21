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

          <li><Link href="/majorcities/newyork">New York</Link></li>
          <li><Link href="/majorcities/losangeles">Los Angeles</Link></li>
          <li><Link href="/majorcities/lasvegas">Las Vegas</Link></li>
          <li><Link href="/majorcities/orlando">Orlando</Link></li>
        </ul>
      </nav>
    </header>
  );
}
