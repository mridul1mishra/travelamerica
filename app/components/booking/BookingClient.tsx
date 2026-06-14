"use client";

// Shared booking tab UI used by all 4 city booking pages.
// Previously duplicated as bookflightsclient.tsx, labookingsclient.tsx,
// lasvegasbookingsclient.tsx, and orlandobookingsclient.tsx (~2,400 lines combined).
// Now a single component driven by a cityConfig prop.

import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Header from "@/app/components/Header/header";
import Footer from "@/app/components/Header/Footer/footer";
import "@/app/components/majorcities/flightsection/propertylisting.css";
import styles from "@/app/destination/nyc/booking/booking.module.css";

// ── Shared types ────────────────────────────────────────────────────────────

export type TabKey = "flights" | "hotels" | "activities";

export type FlightRow = {
  airline: { name: string; logo: string };
  departure: { time: string; city: string; date?: string };
  arrival: { time: string; city: string };
  duration: string;
  price: string;
  buttonUrl: string;
  buttonText: string;
  highlight?: boolean;
};

export type Hotel = {
  img: string;
  title: string;
  area?: string;
  rating?: number | null;
  reviews?: number | null;
  price: string;
  url: string;
};

export type Activity = {
  img: string;
  title: string;
  category?: string;
  rating?: number | null;
  reviews?: number | null;
  ranking?: string | null;
  priceLevel?: string | null;
  description?: string;
  url: string;
};

export type RailGuide = { href: string; label: string };
export type RailConfig = {
  nextStep: { label: string; toTab: TabKey };
  guides: RailGuide[];
};

export type RelatedLink = { href: string; label: string };
export type RelatedGroup = { heading: string; links: RelatedLink[] };

export type TabDef = { key: TabKey; label: string; icon: string };

export interface CityBookingConfig {
  /** City display name, e.g. "New York" */
  cityName: string;
  /** Path to city hub, e.g. /destination/nyc */
  cityHref: string;
  /** Path to bookings page, e.g. /destination/nyc/booking */
  bookingHref: string;
  /** Header banner image path */
  headerImage: string;
  /** Header banner text */
  bannerText: string;
  /** Page h1 */
  pageTitle: string;
  /** Tab definitions (allows city-specific icon, e.g. 🗽 vs 🌴) */
  tabs: TabDef[];
  /** Sidebar rail config per tab */
  tabRail: Record<TabKey, RailConfig>;
  /** Footer related-guide groups */
  relatedGroups: RelatedGroup[];
  /** Flights data */
  flights: { title: string; header: string[]; rows: FlightRow[] };
  /** Hotels data */
  hotels: Hotel[];
  /** Activities / things-to-do data */
  activities: Activity[];
}

// ── Helper ───────────────────────────────────────────────────────────────────

function getInitialTab(param: string | null, validTabs: Set<TabKey>): TabKey {
  if (param && validTabs.has(param as TabKey)) return param as TabKey;
  return "flights";
}

// ── Shared component ─────────────────────────────────────────────────────────

function BookingClientInner({ config, introSection, faqSection }: { config: CityBookingConfig; introSection?: React.ReactNode; faqSection?: React.ReactNode }) {
  const {
    cityName, cityHref, bookingHref, headerImage, bannerText, pageTitle,
    tabs, tabRail, relatedGroups, flights, hotels, activities,
  } = config;

  const validTabs = new Set<TabKey>(tabs.map((t) => t.key));
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<TabKey>(() =>
    getInitialTab(searchParams.get("tab")?.toLowerCase() ?? null, validTabs)
  );

  return (
    <div className="App">
      <Header image={headerImage} bannerText={bannerText} />

      <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
        <ol className={styles.breadcrumbList}>
          <li className={styles.breadcrumbItem}>
            <a href="/" className={styles.breadcrumbLink}>Home</a>
          </li>
          <li aria-hidden="true" className={styles.breadcrumbSep}>›</li>
          <li className={styles.breadcrumbItem}>
            <a href={cityHref} className={styles.breadcrumbLink}>{cityName}</a>
          </li>
          <li aria-hidden="true" className={styles.breadcrumbSep}>›</li>
          <li className={styles.breadcrumbItem}>
            <span aria-current="page" className={styles.breadcrumbCurrent}>Book your trip</span>
          </li>
        </ol>
      </nav>

      {pageTitle && <h1 className={styles.relatedHeading}>{pageTitle}</h1>}

      {introSection}

      {/* Tab bar */}
      <div className={styles.tabBar} role="tablist" aria-label="Booking options">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            role="tab"
            aria-selected={activeTab === tab.key}
            className={`${styles.tab} ${activeTab === tab.key ? styles.active : ""}`}
            onClick={() => setActiveTab(tab.key)}
          >
            <span className={styles.icon}>{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Flights tab */}
      {activeTab === "flights" && (
        <section className="flight-section content-section">
          <h2>{flights.title}</h2>
          <div className="flight-layout">
            <div className="flight-table">
              <div className="flight-row header">
                {flights.header.map((head, idx) => (
                  <div key={idx} className="cell">{head}</div>
                ))}
              </div>
              {flights.rows.length === 0 ? (
                <p className={styles.emptyState}>Live flight prices are being updated — check back soon.</p>
              ) : (
                flights.rows.map((row, idx) => (
                  <div key={idx} className={`flight-row ${row.highlight ? "highlight" : ""}`}>
                    <div className="cell airline">
                      <img src={row.airline.logo} alt={row.airline.name} className="image" width={32} height={32} />
                    </div>
                    <div className="cell">
                      <div>{row.departure.time}</div>
                      <small>{row.departure.city}</small>
                      {row.departure.date && <small className={styles.flightDate}>{row.departure.date}</small>}
                    </div>
                    <div className="cell">
                      <div>{row.arrival.time}</div>
                      <small>{row.arrival.city}</small>
                    </div>
                    <div className="cell">{row.duration}</div>
                    <div className="cell price">{row.price}</div>
                    <div className="cell">
                      <a href={row.buttonUrl} className="btn">{row.buttonText}</a>
                    </div>
                    {/* Mobile-only stacked layout */}
                    <div className="cell mobile-flight-stack">
                      <div className="airline-row">
                        <img src={row.airline.logo} alt={row.airline.name} className="airline-logo" width={32} height={32} />
                        <span className="airline-name">{row.airline.name}</span>
                      </div>
                      <div className="time-city-row">
                        <div className="segment">
                          <div className="time">{row.departure.time}</div>
                          <small className="city">{row.departure.city}</small>
                          {row.departure.date && <small className={styles.flightDate}>{row.departure.date}</small>}
                        </div>
                        <div className="segment">
                          <div className="time">{row.arrival.time}</div>
                          <small className="city">{row.arrival.city}</small>
                        </div>
                      </div>
                      <div className="duration-price-row">
                        <div>{row.duration}</div>
                        <div className="price">{row.price}</div>
                      </div>
                      <div className="button-row">
                        <a href={row.buttonUrl} className="btn">{row.buttonText}</a>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>
      )}

      {/* Hotels tab */}
      {activeTab === "hotels" && (
        <section className={styles.actSection}>
          <h2 className={styles.actHeading}>Book Hotels in {cityName}</h2>
          {hotels.length === 0 ? (
            <p className={styles.emptyState}>Live hotel prices are being updated — check back soon.</p>
          ) : (
            <div className={styles.actGrid}>
              {hotels.map((h, i) => (
                <a className={styles.actCard} key={i} href={h.url} target="_blank" rel="noopener noreferrer">
                  <div className={styles.actImageWrap}>
                    <img src={h.img} alt={h.title} className={styles.actImage} width={300} height={200} />
                    <span className={styles.actCategory}>Hotel</span>
                  </div>
                  <div className={styles.actBody}>
                    <h3 className={styles.actTitle}>{h.title}</h3>
                    {h.area && <p className={styles.actArea}>{h.area}</p>}
                    <div className={styles.actMeta}>
                      {h.rating != null && <span className={styles.actRating}>★ {h.rating}</span>}
                      {h.reviews != null && <span className={styles.actReviews}>{h.reviews.toLocaleString()} reviews</span>}
                    </div>
                    <div className={styles.actFooter}>
                      <span className={styles.actPrice}>{h.price}<span className={styles.actPriceUnit}> / night</span></span>
                      <span className={styles.actCta}>View hotel →</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          )}
        </section>
      )}

      {/* Activities tab */}
      {activeTab === "activities" && (
        <section className={styles.actSection}>
          <h2 className={styles.actHeading}>Things to Do in {cityName}</h2>
          {activities.length === 0 ? (
            <p className={styles.emptyState}>Activities are being updated — check back soon.</p>
          ) : (
            <div className={styles.actGrid}>
              {activities.map((a, i) => (
                <a className={styles.actCard} key={i} href={a.url} target="_blank" rel="noopener noreferrer">
                  <div className={styles.actImageWrap}>
                    <img src={a.img} alt={a.title} className={styles.actImage} width={300} height={200} />
                    {a.category && <span className={styles.actCategory}>{a.category}</span>}
                  </div>
                  <div className={styles.actBody}>
                    <h3 className={styles.actTitle}>{a.title}</h3>
                    <div className={styles.actMeta}>
                      {a.rating != null && <span className={styles.actRating}>★ {a.rating}</span>}
                      {a.reviews != null && <span className={styles.actReviews}>{a.reviews.toLocaleString()} reviews</span>}
                    </div>
                    {a.ranking && <p className={styles.actRanking}>{a.ranking}</p>}
                    {a.description && <p className={styles.actDesc}>{a.description}</p>}
                    <div className={styles.actFooter}>
                      <span className={styles.actPrice}>{a.priceLevel || "See prices"}</span>
                      <span className={styles.actCta}>View tour →</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          )}
        </section>
      )}

      {/* Tab-aware rail */}
      {(() => {
        const rail = tabRail[activeTab];
        return (
          <div className={styles.railContainer}>
            <button className={styles.railNextStep} onClick={() => setActiveTab(rail.nextStep.toTab)}>
              {rail.nextStep.label}
            </button>
            <p className={styles.railHeadline}>Helpful guides</p>
            <ul className={styles.railGuides}>
              {rail.guides.map((g) => (
                <li key={g.href}><a href={g.href}>{g.label}</a></li>
              ))}
            </ul>
          </div>
        );
      })()}

      {/* Related guides footer */}
      <section className={styles.relatedFooter} aria-label="Related guides">
        <div className={styles.relatedFooterInner}>
          <h2 className={styles.relatedHeading}>Plan your {cityName} trip</h2>
          <div className={styles.relatedGroups}>
            {relatedGroups.map((group) => (
              <div key={group.heading} className={styles.relatedGroup}>
                <h3 className={styles.relatedGroupTitle}>{group.heading}</h3>
                <ul className={styles.relatedLinks}>
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <a href={link.href} className={styles.relatedLink}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {faqSection}
      <Footer />
    </div>
  );
}

// useSearchParams() must be wrapped in a Suspense boundary for static export.
export default function BookingClient({ config, introSection, faqSection }: { config: CityBookingConfig; introSection?: React.ReactNode; faqSection?: React.ReactNode }) {
  return (
    <Suspense fallback={null}>
      <BookingClientInner config={config} introSection={introSection} faqSection={faqSection} />
    </Suspense>
  );
}
