// app/not-found.tsx
//
// Global 404 page — shown whenever Next.js cannot match a URL to any route
// in the entire app.  This is a pure Server Component (no "use client"), so
// it ships zero JavaScript overhead beyond what the header/footer already need.
//
// Next.js App Router notes:
//   • not-found.tsx files cannot export a `metadata` object — the framework
//     automatically sets the HTTP status to 404 and the title to "404 Not Found"
//     using the root layout's metadata template.
//   • The file MUST export a default React component (no async required here
//     because there is no server-side data fetching).

import Link from "next/link";
import SimpleHeader from "./components/Header/SimpleHeader";
import Footer from "./components/Header/Footer/footer";
import styles from "./not-found.module.css";

// ── Schema ──────────────────────────────────────────────────────────────────
// WebPage with BreadcrumbList helps Google understand this is a system page,
// not an accidentally indexed 404.
const notFoundSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.travelsamericas.com/404",
      "name": "Page Not Found — Travels Americas",
      "url": "https://www.travelsamericas.com",
      "description":
        "The page you were looking for could not be found. Browse our USA city travel guides for New York, Los Angeles, Las Vegas, and Orlando.",
      "isPartOf": {
        "@type": "WebSite",
        "name": "Travels Americas",
        "url": "https://www.travelsamericas.com",
      },
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.travelsamericas.com",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Page Not Found",
        },
      ],
    },
  ],
};

// ── City destination cards ───────────────────────────────────────────────────
const CITIES = [
  {
    href: "/destination/nyc",
    emoji: "🗽",
    name: "New York City",
    blurb:
      "Solo travel, safety guides, subway maps, best neighborhoods, and where to eat in the city that never sleeps.",
    label: "Explore NYC guides →",
  },
  {
    href: "/destination/la",
    emoji: "🌴",
    name: "Los Angeles",
    blurb:
      "Hollywood, Venice Beach, Griffith Observatory, and the best neighborhoods to stay in when visiting LA.",
    label: "Explore LA guides →",
  },
  {
    href: "/destination/lasvegas",
    emoji: "🎰",
    name: "Las Vegas",
    blurb:
      "Strip hotels, Fremont Street, day trips to Hoover Dam, and everything you need for a solo or group Vegas trip.",
    label: "Explore Las Vegas guides →",
  },
  {
    href: "/destination/orlando",
    emoji: "🎢",
    name: "Orlando",
    blurb:
      "Walt Disney World, Universal Studios, Kennedy Space Center, and practical tips for making the most of Orlando.",
    label: "Explore Orlando guides →",
  },
];

// ── Popular guide links ──────────────────────────────────────────────────────
// Intentionally broad across all four cities so there is something useful
// regardless of which city the visitor was trying to reach.
const POPULAR_GUIDES = [
  { href: "/destination/nyc/solo-trip-to-nyc",           label: "Solo Trip to NYC 2026" },
  { href: "/destination/nyc/nyc-safety-guide",           label: "Is NYC Safe? Honest Guide" },
  { href: "/destination/nyc/best-areas-to-stay",         label: "Best Areas to Stay in NYC" },
  { href: "/destination/nyc/subway-safety-guide",        label: "NYC Subway Safety Guide" },
  { href: "/destination/nyc/nyc-female-solo-travel-guide", label: "NYC Female Solo Travel Guide" },
  { href: "/destination/nyc/neighborhood-guide",         label: "NYC Neighborhood Guide" },
  { href: "/destination/la/safety-guide",                label: "Is Los Angeles Safe?" },
  { href: "/destination/la/best-areas-to-stay",          label: "Best Areas to Stay in LA" },
  { href: "/destination/la/itinerary",                   label: "LA 3-Day Itinerary" },
  { href: "/destination/lasvegas/safety-guide",          label: "Is Las Vegas Safe?" },
  { href: "/destination/lasvegas/best-areas-to-stay",    label: "Best Areas in Las Vegas" },
  { href: "/destination/orlando/itinerary",              label: "Orlando 5-Day Itinerary" },
];

// ── Component ────────────────────────────────────────────────────────────────
export default function NotFound() {
  return (
    <>
      {/* Structured data */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(notFoundSchema) }}
      />

      <div className={styles.page}>
        {/* ── Header ── */}
        <SimpleHeader />

        <main className={styles.main} id="main-content">

          {/* ── Hero ── */}
          <section className={styles.hero} aria-labelledby="not-found-heading">
            <p className={styles.code} aria-hidden="true">404</p>

            <h1 id="not-found-heading" className={styles.headline}>
              We couldn&apos;t find that page
            </h1>

            <p className={styles.subline}>
              The page you&apos;re looking for may have moved, been renamed, or
              never existed. Try heading back to the homepage or browse one of
              our destination guides below.
            </p>

            <div className={styles.ctaRow}>
              <Link href="/" className={styles.btnPrimary}>
                ← Back to Homepage
              </Link>
              <Link href="/destination/nyc" className={styles.btnSecondary}>
                Browse Destinations
              </Link>
            </div>
          </section>

          {/* ── City destination cards ── */}
          <section
            className={styles.section}
            aria-labelledby="destinations-heading"
          >
            <h2 id="destinations-heading" className={styles.sectionTitle}>
              Where would you like to go?
            </h2>
            <p className={styles.sectionSubtitle}>
              We cover four iconic US cities — pick yours and start planning.
            </p>

            <div className={styles.cityGrid} role="list">
              {CITIES.map((city) => (
                <Link
                  key={city.href}
                  href={city.href}
                  className={styles.cityCard}
                  role="listitem"
                  aria-label={`${city.name} travel guides`}
                >
                  <span className={styles.cityEmoji} aria-hidden="true">
                    {city.emoji}
                  </span>
                  <h3 className={styles.cityName}>{city.name}</h3>
                  <p className={styles.cityBlurb}>{city.blurb}</p>
                  <span className={styles.cityArrow} aria-hidden="true">
                    {city.label}
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* ── Divider ── */}
          <div className={styles.divider} aria-hidden="true" />

          {/* ── Popular guides ── */}
          <section
            className={styles.guidesSection}
            aria-labelledby="popular-guides-heading"
          >
            <h2 id="popular-guides-heading" className={styles.sectionTitle}>
              Most popular guides
            </h2>
            <p className={styles.sectionSubtitle}>
              Some of our most-read pages across all four cities.
            </p>

            <ul className={styles.guidesGrid} aria-label="Popular travel guides">
              {POPULAR_GUIDES.map((guide) => (
                <li key={guide.href}>
                  <Link href={guide.href} className={styles.guideLink}>
                    <span className={styles.guideArrow} aria-hidden="true">→</span>
                    {guide.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* ── Help strip ── */}
          <div className={styles.helpStrip} role="complementary" aria-label="Contact information">
            <p>Still can&apos;t find what you&apos;re looking for?</p>
            <Link href="mailto:info@travelsamericas.com" className={styles.helpLink}>
              Email us at info@travelsamericas.com
            </Link>
          </div>
        </main>

        {/* ── Footer ── */}
        <Footer />
      </div>
    </>
  );
}
