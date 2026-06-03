"use client";
// app/destination/error.tsx
//
// Destination-scoped error boundary — catches any unhandled runtime error
// that occurs inside any route under /destination/*.
//
// Because this file sits at app/destination/, Next.js prefers it over the
// app-level app/error.tsx for all destination routes. The global error.tsx
// only fires if there is NO closer boundary, so:
//   /destination/nyc/food (error) → caught here ✅
//   /about             (error)    → caught by app/error.tsx ✅
//
// The messaging here is deliberately more specific than the global boundary:
// we tell the user which destination page broke, and offer direct links to
// the other three cities so they can pivot immediately without going back to
// the homepage.
//
// Same Next.js rules as app/error.tsx:
//   • MUST be "use client"
//   • Props: { error: Error & { digest?: string }, reset: () => void }
//   • Cannot export metadata
//   • Does NOT replace the root layout

import { useEffect } from "react";
import Link from "next/link";
import SimpleHeader from "../components/Header/SimpleHeader";
import Footer from "../components/Header/Footer/footer";
import styles from "../error.module.css";

// ── Types ────────────────────────────────────────────────────────────────────
type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

// ── City cards ───────────────────────────────────────────────────────────────
// Shown below the retry CTA so the user can navigate to a working city hub
// if retrying doesn't help.
const CITIES = [
  {
    href: "/destination/nyc",
    emoji: "🗽",
    name: "New York City",
    blurb: "Solo guides, safety, neighborhoods, subway maps, and where to eat.",
    arrow: "NYC guides →",
  },
  {
    href: "/destination/la",
    emoji: "🌴",
    name: "Los Angeles",
    blurb: "Hollywood, Venice Beach, best neighborhoods, LA Metro, and safety.",
    arrow: "LA guides →",
  },
  {
    href: "/destination/lasvegas",
    emoji: "🎰",
    name: "Las Vegas",
    blurb: "Strip hotels, shows, Hoover Dam day trips, and solo travel tips.",
    arrow: "Las Vegas guides →",
  },
  {
    href: "/destination/orlando",
    emoji: "🎢",
    name: "Orlando",
    blurb: "Walt Disney World, Universal, Kennedy Space Center, and more.",
    arrow: "Orlando guides →",
  },
];

// ── Component ────────────────────────────────────────────────────────────────
export default function DestinationError({ error, reset }: ErrorProps) {

  // Log to console and GA — same pattern as the global error boundary.
  useEffect(() => {
    console.error("[Travels Americas] Destination error:", error);

    if (
      typeof window !== "undefined" &&
      typeof (window as Window & { gtag?: Function }).gtag === "function"
    ) {
      (window as unknown as Window & { gtag: Function }).gtag("event", "exception", {
        description: `[destination] ${error?.message ?? "Unknown error"}`,
        fatal: false,
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
        <section className={styles.hero} aria-labelledby="dest-error-heading">

          {/* Warning icon */}
          <div className={styles.iconWrap} aria-hidden="true">⚠️</div>

          <h1 id="dest-error-heading" className={styles.headline}>
            This destination page ran into a problem
          </h1>

          <p className={styles.subline}>
            Something went wrong while loading this guide. It&apos;s been
            logged on our end. Hitting &ldquo;Try again&rdquo; usually fixes it
            — most errors are temporary.
          </p>

          {/* Error digest for support reference */}
          {error?.digest && (
            <p className={styles.digest} aria-label="Error reference code">
              Ref: {error.digest}
            </p>
          )}

          <div className={styles.ctaRow}>
            {/* Primary: retry the failed render */}
            <button
              className={styles.btnRetry}
              onClick={reset}
              aria-label="Try loading this destination page again"
            >
              ↺ Try again
            </button>

            {/* Secondary: escape to homepage */}
            <Link href="/" className={styles.btnHome}>
              ← Back to Homepage
            </Link>
          </div>
        </section>

        {/* ── City cards ── */}
        {/* If the retry doesn't help, give the user working alternatives */}
        <section
          className={styles.section}
          aria-labelledby="other-destinations-heading"
        >
          <p className={styles.sectionLabel} aria-hidden="true">
            Working normally
          </p>
          <h2 id="other-destinations-heading" className={styles.sectionTitle}>
            Browse another destination
          </h2>
          <p className={styles.sectionSub}>
            These city guides are loading fine — pick one to continue planning.
          </p>

          <div className={styles.cityGrid} role="list">
            {CITIES.map((city) => (
              <Link
                key={city.href}
                href={city.href}
                className={styles.cityCard}
                role="listitem"
                aria-label={`Browse ${city.name} travel guides`}
              >
                <span className={styles.cityEmoji} aria-hidden="true">
                  {city.emoji}
                </span>
                <h3 className={styles.cityName}>{city.name}</h3>
                <p className={styles.cityBlurb}>{city.blurb}</p>
                <span className={styles.cityArrow} aria-hidden="true">
                  {city.arrow}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Help strip ── */}
        <div
          className={styles.helpStrip}
          role="complementary"
          aria-label="Support contact"
        >
          <p>
            Still not working? Drop us a line and we&apos;ll look into it.
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
