"use client";
// app/error.tsx
//
// Global error boundary — catches any unhandled runtime error that occurs
// anywhere in the app that is NOT caught by a closer error.tsx first.
//
// Next.js App Router rules for error.tsx:
//   • MUST be a Client Component ("use client") — React error boundaries
//     are a client-side concept (componentDidCatch lifecycle).
//   • Receives two props:
//       error : Error & { digest?: string }
//                 — the thrown error. `digest` is a server-generated hash
//                   Next.js logs on the server; useful for correlating
//                   client-visible errors with server logs.
//       reset : () => void
//                 — calling this attempts to re-render the failed segment.
//                   If it succeeds the error UI disappears; if it throws
//                   again the error UI re-appears. Always offer this first.
//   • Does NOT replace the root layout — html/body/font/GA scripts from
//     layout.tsx still render. Only the page content is replaced.
//   • Cannot export metadata.
//   • NOTE: errors inside layout.tsx itself are NOT caught here — they need
//     a separate app/global-error.tsx (which replaces the entire document).

import { useEffect } from "react";
import Link from "next/link";
import SimpleHeader from "./components/Header/SimpleHeader";
import Footer from "./components/Header/Footer/footer";
import styles from "./error.module.css";

// ── Types ────────────────────────────────────────────────────────────────────
type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

// ── Popular links to help users navigate away from the broken page ────────────
const POPULAR_LINKS = [
  { href: "/destination/nyc",                        label: "NYC Travel Hub" },
  { href: "/destination/nyc/solo-trip-to-nyc",       label: "Solo Trip to NYC" },
  { href: "/destination/nyc/nyc-safety-guide",       label: "Is NYC Safe?" },
  { href: "/destination/la",                         label: "LA Travel Hub" },
  { href: "/destination/la/best-areas-to-stay",      label: "Best Areas in LA" },
  { href: "/destination/la/safety-guide",            label: "Is LA Safe?" },
  { href: "/destination/lasvegas",                   label: "Las Vegas Travel Hub" },
  { href: "/destination/lasvegas/best-areas-to-stay", label: "Best Areas in Las Vegas" },
  { href: "/destination/orlando",                    label: "Orlando Travel Hub" },
  { href: "/destination/orlando/itinerary",          label: "Orlando 5-Day Itinerary" },
  { href: "/about",                                  label: "About Travels Americas" },
  { href: "/",                                       label: "Homepage" },
];

// ── Component ────────────────────────────────────────────────────────────────
export default function GlobalError({ error, reset }: ErrorProps) {

  // Log the error so we have a record in GA and the browser console.
  // We use useEffect so this only runs client-side after mount — which is
  // guaranteed here since error.tsx is always a client component.
  useEffect(() => {
    // Console log for development and any future error monitoring tools.
    console.error("[Travels Americas] Unhandled error:", error);

    // Send to Google Analytics as an exception event.
    // gtag is injected globally by layout.tsx — we access it via window to
    // avoid TypeScript errors without adding a @types/gtag declaration.
    if (typeof window !== "undefined" && typeof (window as Window & { gtag?: Function }).gtag === "function") {
      (window as unknown as Window & { gtag: Function }).gtag("event", "exception", {
        description: error?.message ?? "Unknown error",
        fatal: false,
        // Include the server-side digest if available — helps correlate with
        // Next.js server logs when debugging production issues.
        ...(error?.digest ? { error_digest: error.digest } : {}),
      });
    }
  }, [error]);

  return (
    <div className={styles.page}>
      {/* ── Header ── */}
      <SimpleHeader />

      <main className={styles.main} id="main-content">

        {/* ── Hero ── */}
        <section className={styles.hero} aria-labelledby="error-heading">

          {/* Warning icon */}
          <div className={styles.iconWrap} aria-hidden="true">⚠️</div>

          <h1 id="error-heading" className={styles.headline}>
            Something went wrong
          </h1>

          <p className={styles.subline}>
            We hit an unexpected error on this page. This has been logged
            automatically. Try refreshing — most errors are temporary.
          </p>

          {/* Show the error digest only if Next.js provided one.
              This is a short hash that maps to the server-side stack trace,
              useful if someone contacts support. */}
          {error?.digest && (
            <p className={styles.digest} aria-label="Error reference code">
              Ref: {error.digest}
            </p>
          )}

          <div className={styles.ctaRow}>
            {/* Primary action: attempt to re-render the failed segment */}
            <button
              className={styles.btnRetry}
              onClick={reset}
              aria-label="Try loading the page again"
            >
              ↺ Try again
            </button>

            {/* Escape hatch: leave the broken page entirely */}
            <Link href="/" className={styles.btnHome}>
              ← Back to Homepage
            </Link>
          </div>
        </section>

        {/* ── Popular guides ── */}
        {/* Give the user somewhere useful to go if the retry doesn't work */}
        <section
          className={styles.section}
          aria-labelledby="popular-links-heading"
        >
          <p className={styles.sectionLabel} aria-hidden="true">
            While we sort this out
          </p>
          <h2 id="popular-links-heading" className={styles.sectionTitle}>
            Popular guides you can browse right now
          </h2>
          <p className={styles.sectionSub}>
            These pages are working normally — pick one to continue planning
            your trip.
          </p>

          <ul
            className={styles.linkGrid}
            aria-label="Popular travel guide links"
          >
            {POPULAR_LINKS.map((link) => (
              <li key={link.href} className={styles.linkItem}>
                <Link href={link.href}>
                  <span className={styles.linkArrow} aria-hidden="true">→</span>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* ── Divider ── */}
        <div className={styles.divider} aria-hidden="true" />

        {/* ── Help strip ── */}
        <div
          className={styles.helpStrip}
          role="complementary"
          aria-label="Support contact"
        >
          <p>
            If this keeps happening, let us know and we&apos;ll investigate.
          </p>
          <Link
            href="mailto:info@travelsamericas.com"
            className={styles.helpLink}
          >
            info@travelsamericas.com
          </Link>
        </div>
      </main>

      {/* ── Footer ── */}
      <Footer />
    </div>
  );
}
