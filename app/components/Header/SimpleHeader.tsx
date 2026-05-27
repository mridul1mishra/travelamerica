import Image from "next/image";
import Link from "next/link";
import styles from "./SimpleHeader.module.css";

// Lightweight header for pages that don't need a hero banner: companydetails,
// privacy, termsandcondition. No useState, no useEffect, no usePathname, no
// optional image prop — just the logo and nav. Renders as a server component
// (no "use client"), which means zero JS shipped to the browser for the
// header on these pages.
//
// For pages WITH a hero banner (NYC guides, city hubs, etc.), use the
// regular <Header /> component instead.

type SimpleHeaderProps = {
  // Optional H1 to render under the nav. Defaults to no heading.
  pageTitle?: string;
};

export default function SimpleHeader({ pageTitle }: SimpleHeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.bar}>
        <Link href="/" className={styles.logoLink}>
          <Image
            src="/data/logo.webp"
            alt="Travels Americas"
            width={150}
            height={150}
            sizes="(max-width: 768px) 100px, 150px"
            priority
            fetchPriority="high"
          />
        </Link>

        <nav aria-label="Main navigation" className={styles.nav}>
          <ul>
            <li><Link href="/majorcities/newyork">New York</Link></li>
            <li><Link href="/majorcities/losangeles">Los Angeles</Link></li>
            <li><Link href="/majorcities/lasvegas">Las Vegas</Link></li>
            <li><Link href="/majorcities/orlando">Orlando</Link></li>
          </ul>
        </nav>
      </div>

      {pageTitle ? <h1 className={styles.pageTitle}>{pageTitle}</h1> : null}
    </header>
  );
}
