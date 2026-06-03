"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Header from "../../components/Header/header";
import Footer from "@/app/components/Header/Footer/footer";
import "@/app/components/majorcities/flightsection/propertylisting.css";
import styles from "@/app/destination/nyc/booking/booking.module.css";
import bookFlights from "@/content/cities/lasvegas/bookflights.json";
import hotelsData from "@/content/cities/lasvegas/hotels.json";
import thingsToDoData from "@/content/cities/lasvegas/thingstodo.json";
import type { Row } from "@/app/models/propertylisting";

type FlightRow = Row & {
  departure: Row["departure"] & { date?: string };
};

type BookFlights = {
  title: string;
  header: string[];
  rows: FlightRow[];
};

type Hotel = {
  img: string;
  title: string;
  area?: string;
  rating?: number | null;
  reviews?: number | null;
  price: string;
  url: string;
};

type Activity = {
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

type TabKey = "flights" | "hotels" | "activities";

type NextStep = { label: string; toTab: TabKey };
type RailConfig = { nextStep: NextStep };

const TAB_RAIL: Record<TabKey, RailConfig> = {
  flights: {
    nextStep: { label: "Next: book your hotel →", toTab: "hotels" },
  },
  hotels: {
    nextStep: { label: "Next: things to do in Las Vegas →", toTab: "activities" },
  },
  activities: {
    nextStep: { label: "Compare return flights →", toTab: "flights" },
  },
};

const TABS: { key: TabKey; label: string; icon: string }[] = [
  { key: "flights", label: "Flights", icon: "✈️" },
  { key: "hotels", label: "Hotels", icon: "🏨" },
  { key: "activities", label: "Things to Do", icon: "🎰" },
];

const VALID_TABS = new Set<TabKey>(TABS.map((t) => t.key));

function getInitialTab(param: string | null): TabKey {
  if (param && VALID_TABS.has(param as TabKey)) {
    return param as TabKey;
  }
  return "flights";
}

function LasVegasClientInner() {
  const { title, header, rows } = bookFlights as BookFlights;
  const hotels = hotelsData as Hotel[];
  const activities = thingsToDoData as Activity[] || [];

  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<TabKey>(() =>
    getInitialTab(searchParams.get("tab")?.toLowerCase() ?? null)
  );

  return (
    <div className="App">
      <Header
        image="/data/majorcities/lasvegas/assets/lasvegas.webp"
        bannerText="Book your Las Vegas trip"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.travelsamericas.com/",
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Las Vegas",
                "item": "https://www.travelsamericas.com/destination/lasvegas",
              },
            ],
          }),
        }}
      />

      <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
        <ol className={styles.breadcrumbList}>
          <li className={styles.breadcrumbItem}>
            <a href="/" className={styles.breadcrumbLink}>Home</a>
          </li>
          <li aria-hidden="true" className={styles.breadcrumbSep}>›</li>
          <li className={styles.breadcrumbItem}>
            <span aria-current="page" className={styles.breadcrumbCurrent}>Las Vegas</span>
          </li>
        </ol>
      </nav>

      <div className={styles.tabBar} role="tablist" aria-label="Booking options">
        {TABS.map((tab) => (
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

      {activeTab === "flights" && (
        <section className="flight-section content-section">
          <h2>{title}</h2>
          <div className="flight-layout">
            <div className="flight-table">
              <div className="flight-row header">
                {header.map((head, idx) => (
                  <div key={idx} className="cell">{head}</div>
                ))}
              </div>

              {rows.length === 0 ? (
                <p className={styles.emptyState}>
                  Live flight prices are being updated — check back soon.
                </p>
              ) : (
                rows.map((row, idx) => (
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

      {activeTab === "hotels" && (
        <section className={styles.actSection}>
          <h2 className={styles.actHeading}>Book Hotels in Las Vegas</h2>
          {hotels.length === 0 ? (
            <p className={styles.emptyState}>
              Live hotel prices are being updated — check back soon.
            </p>
          ) : (
            <div className={styles.actGrid}>
              {hotels.map((h, i) => (
                <a
                  className={styles.actCard}
                  key={i}
                  href={h.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className={styles.actImageWrap}>
                    <img src={h.img} alt={h.title} className={styles.actImage} width={300} height={200} />
                    <span className={styles.actCategory}>Hotel</span>
                  </div>
                  <div className={styles.actBody}>
                    <h3 className={styles.actTitle}>{h.title}</h3>
                    {h.area && <p className={styles.actArea}>{h.area}</p>}
                    <div className={styles.actMeta}>
                      {h.rating != null && (
                        <span className={styles.actRating}>★ {h.rating}</span>
                      )}
                      {h.reviews != null && (
                        <span className={styles.actReviews}>
                          {h.reviews.toLocaleString()} reviews
                        </span>
                      )}
                    </div>
                    <div className={styles.actFooter}>
                      <span className={styles.actPrice}>
                        {h.price}
                        <span className={styles.actPriceUnit}> / night</span>
                      </span>
                      <span className={styles.actCta}>View hotel →</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          )}
        </section>
      )}

      {activeTab === "activities" && (
        <section className={styles.actSection}>
          <h2 className={styles.actHeading}>Things to Do in Las Vegas</h2>
          {activities.length === 0 ? (
            <p className={styles.emptyState}>
              Activities are being updated — check back soon.
            </p>
          ) : (
            <div className={styles.actGrid}>
              {activities.map((a, i) => (
                <a
                  className={styles.actCard}
                  key={i}
                  href={a.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className={styles.actImageWrap}>
                    <img src={a.img} alt={a.title} className={styles.actImage} width={300} height={200} />
                    {a.category && <span className={styles.actCategory}>{a.category}</span>}
                  </div>
                  <div className={styles.actBody}>
                    <h3 className={styles.actTitle}>{a.title}</h3>
                    <div className={styles.actMeta}>
                      {a.rating != null && (
                        <span className={styles.actRating}>★ {a.rating}</span>
                      )}
                      {a.reviews != null && (
                        <span className={styles.actReviews}>
                          {a.reviews.toLocaleString()} reviews
                        </span>
                      )}
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

      {(() => {
        const rail = TAB_RAIL[activeTab];
        return (
          <div className={styles.railContainer}>
            <button
              className={styles.railNextStep}
              onClick={() => setActiveTab(rail.nextStep.toTab)}
            >
              {rail.nextStep.label}
            </button>
          </div>
        );
      })()}

      <Footer />
    </div>
  );
}

// useSearchParams() must be wrapped in a Suspense boundary for static export.
export default function LasVegasClient() {
  return (
    <Suspense fallback={null}>
      <LasVegasClientInner />
    </Suspense>
  );
}
