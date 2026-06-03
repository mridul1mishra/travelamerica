// app/destination/not-found.tsx
//
// Destination-scoped 404 page.
//
// Next.js App Router looks for the *closest* not-found.tsx to the erroring
// route. By placing this file at app/destination/, it catches any unknown
// route that starts with /destination/ — for example:
//
//   /destination/miami          → user typed a city we don't cover
//   /destination/nyc/wrong-slug → user hit a NYC sub-page that doesn't exist
//   /destination/la/wrong-slug  → same for LA
//
// The messaging here is intentionally more specific than the global 404:
// we tell the visitor which cities we *do* cover and give them quick-links
// into the most useful pages for each one, so they can immediately recover
// without going back to the homepage.
//
// Pure Server Component — no "use client" needed.

import Link from "next/link";
import SimpleHeader from "../components/Header/SimpleHeader";
import Footer from "../components/Header/Footer/footer";
import styles from "./destination-not-found.module.css";

// ── Schema ──────────────────────────────────────────────────────────────────
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.travelsamericas.com/destination",
      "name": "Destination Not Found — Travels Americas",
      "url": "https://www.travelsamericas.com/destination",
      "description":
        "This destination page doesn't exist. Browse our travel guides for New York City, Los Angeles, Las Vegas, and Orlando.",
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
          "name": "Destinations",
          "item": "https://www.travelsamericas.com/destination",
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Page Not Found",
        },
      ],
    },
  ],
};

// ── City data ────────────────────────────────────────────────────────────────
// Each city has an accent colour class, a short blurb, and 4 quick-links to
// its most popular pages so the user can go straight to useful content.
const CITIES = [
  {
    href: "/destination/nyc",
    emoji: "🗽",
    name: "New York City",
    accentClass: styles.accentNYC,
    blurb: "The ultimate solo and group travel destination — safety guides, subway maps, neighborhoods, and where to eat.",
    links: [
      { href: "/destination/nyc/solo-trip-to-nyc",              label: "Solo Trip to NYC" },
      { href: "/destination/nyc/best-areas-to-stay",            label: "Best Areas to Stay" },
      { href: "/destination/nyc/nyc-safety-guide",              label: "Is NYC Safe?" },
      { href: "/destination/nyc/subway-safety-guide",           label: "Subway Safety Guide" },
    ],
    hubLabel: "All NYC guides →",
  },
  {
    href: "/destination/la",
    emoji: "🌴",
    name: "Los Angeles",
    accentClass: styles.accentLA,
    blurb: "Hollywood, Venice Beach, the Getty, and the best neighborhoods in the city of angels.",
    links: [
      { href: "/destination/la/best-areas-to-stay",             label: "Best Areas to Stay" },
      { href: "/destination/la/safety-guide",                   label: "Is LA Safe?" },
      { href: "/destination/la/itinerary",                      label: "3-Day LA Itinerary" },
      { href: "/destination/la/la-female-solo-travel-guide",    label: "Female Solo Guide" },
    ],
    hubLabel: "All LA guides →",
  },
  {
    href: "/destination/lasvegas",
    emoji: "🎰",
    name: "Las Vegas",
    accentClass: styles.accentVegas,
    blurb: "The Strip, Fremont Street, Hoover Dam, and everything you need to plan a solo or group Vegas trip.",
    links: [
      { href: "/destination/lasvegas/best-areas-to-stay",       label: "Strip vs Downtown" },
      { href: "/destination/lasvegas/safety-guide",             label: "Is Las Vegas Safe?" },
      { href: "/destination/lasvegas/itinerary",                label: "3-Day LV Itinerary" },
      { href: "/destination/lasvegas/solo-itinerary",           label: "Solo LV Itinerary" },
    ],
    hubLabel: "All Las Vegas guides →",
  },
  {
    href: "/destination/orlando",
    emoji: "🎢",
    name: "Orlando",
    accentClass: styles.accentOrlando,
    blurb: "Walt Disney World, Universal Studios, Kennedy Space Center, and the best hotels near the parks.",
    links: [
      { href: "/destination/orlando/best-areas-to-stay",        label: "Near Disney vs Universal" },
      { href: "/destination/orlando/itinerary",                 label: "5-Day Orlando Itinerary" },
      { href: "/destination/orlando/safety-guide",              label: "Is Orlando Safe?" },
      { href: "/destination/orlando/solo-itinerary",            label: "Solo Orlando Itinerary" },
    ],
    hubLabel: "All Orlando guides →",
  },
];

// ── Component ────────────────────────────────────────────────────────────────
export default function DestinationNotFound() {
  return (
    <>
      {/* Structured data */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className={styles.page}>
        {/* ── Header ── */}
        <SimpleHeader />

        <main className={styles.main} id="main-content">

          {/* ── Hero ── */}
          <section className={styles.hero} aria-labelledby="dest-not-found-heading">

            {/* Map pin icon */}
            <div className={styles.iconWrap} aria-hidden="true">
              📍
            </div>

            <h1 id="dest-not-found-heading" className={styles.headline}>
              That destination page doesn&apos;t exist
            </h1>

            <p className={styles.subline}>
              We couldn&apos;t find the page you were looking for. It may have
              moved, or we may not cover that destination yet.
            </p>

            <p className={styles.sublineNote}>
              Travels Americas currently publishes in-depth guides for four US
              cities. Select one below to find what you need.
            </p>

            <div className={styles.ctaRow}>
              <Link href="/" className={styles.btnPrimary}>
                ← Back to Homepage
              </Link>
              <Link href="/about" className={styles.btnGhost}>
                About this site
              </Link>
            </div>
          </section>

          {/* ── City cards ── */}
          <section
            className={styles.section}
            aria-labelledby="covered-cities-heading"
          >
            <p className={styles.sectionLabel} aria-hidden="true">
              Currently covered
            </p>
            <h2 id="covered-cities-heading" className={styles.sectionTitle}>
              Cities we cover
            </h2>
            <p className={styles.sectionSub}>
              Click a city to browse all its guides, or jump straight to a
              popular page using the links inside each card.
            </p>

            <div className={styles.cityGrid} role="list">
              {CITIES.map((city) => (
                <article
                  key={city.href}
                  className={styles.cityCard}
                  role="listitem"
                  aria-label={`${city.name} travel guides`}
                >
                  {/* Coloured top accent bar */}
                  <div
                    className={`${styles.cityAccent} ${city.accentClass}`}
                    aria-hidden="true"
                  />

                  <div className={styles.cityBody}>
                    {/* Emoji + city name */}
                    <span className={styles.cityEmoji} aria-hidden="true">
                      {city.emoji}
                    </span>
                    <h3 className={styles.cityName}>{city.name}</h3>
                    <p className={styles.cityBlurb}>{city.blurb}</p>

                    {/* Quick links — 4 most useful pages per city */}
                    <ul
                      className={styles.cityLinks}
                      aria-label={`Popular ${city.name} guides`}
                    >
                      {city.links.map((link) => (
                        <li key={link.href}>
                          <Link href={link.href}>
                            <span aria-hidden="true">›</span>
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>

                    {/* Hub CTA */}
                    <Link
                      href={city.href}
                      className={styles.cityHubLink}
                      aria-label={`View all ${city.name} travel guides`}
                    >
                      {city.hubLabel}
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* ── Help strip ── */}
          <div
            className={styles.helpStrip}
            role="complementary"
            aria-label="Contact information"
          >
            <p>
              Travelling somewhere we don&apos;t cover yet? Let us know and
              we&apos;ll consider adding it.
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
    </>
  );
}
