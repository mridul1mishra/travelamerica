"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import Header from "../../../components/Header/header";
import Footer from "@/app/components/Header/Footer/footer";
import "@/app/components/majorcities/flightsection/propertylisting.css";
import styles from "./booking.module.css";
import bookFlights from "@/content/cities/newyork/bookflights.json";
import hotelsData from "@/content/cities/newyork/hotels.json";
import thingsToDoData from "@/content/cities/newyork/thingstodo.json";
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

type RailGuide = { href: string; label: string };
type RailConfig = { nextStep: { label: string; toTab: TabKey }; guides: RailGuide[] };

const TAB_RAIL: Record<TabKey, RailConfig> = {
  flights: {
    nextStep: { label: "Next: book your hotel →", toTab: "hotels" },
    guides: [
      { href: "/destination/nyc/nyc-subway-map", label: "Getting from the airport" },
      { href: "/destination/nyc/solo-itinerary", label: "Plan your days: solo itinerary" },
      { href: "/destination/nyc/nyc-safety-guide", label: "NYC safety tips" },
    ],
  },
  hotels: {
    nextStep: { label: "Next: things to do in NYC →", toTab: "activities" },
    guides: [
      { href: "/destination/nyc/best-areas-to-stay", label: "Where to stay in NYC" },
      { href: "/destination/nyc/neighborhood-guide", label: "Compare neighborhoods" },
      { href: "/destination/nyc/is-nyc-safe-at-night", label: "Safe areas at night" },
    ],
  },
  activities: {
    nextStep: { label: "Compare return flights →", toTab: "flights" },
    guides: [
      { href: "/destination/nyc/things-to-do", label: "Full NYC attractions guide" },
      { href: "/destination/nyc/landmark", label: "Top NYC landmarks" },
      { href: "/destination/nyc/food", label: "Where to eat in NYC" },
    ],
  },
};

const TABS: { key: TabKey; label: string; icon: string }[] = [
  { key: "flights", label: "Flights", icon: "✈️" },
  { key: "hotels", label: "Hotels", icon: "🏨" },
  { key: "activities", label: "Things to Do", icon: "🗽" },
];

const VALID_TABS = new Set<TabKey>(TABS.map((t) => t.key));

function getInitialTab(param: string | null): TabKey {
  if (param && VALID_TABS.has(param as TabKey)) {
    return param as TabKey;
  }
  return "flights";
}

export default function BookFlightsClient() {
  const { title, header, rows } = bookFlights as BookFlights;
  const hotels = hotelsData as Hotel[];
  const activities = thingsToDoData as Activity[];

  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<TabKey>(() =>
    getInitialTab(searchParams.get("tab")?.toLowerCase() ?? null)
  );

  return (
    <div className="App">
      <Header
        image={`/data/majorcities/newyork/assets/newyork.jpeg`}
        bannerText="Book your New York trip"
      />

      <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
        <ol className={styles.breadcrumbList}>
          <li>
            <a href="/" className={styles.breadcrumbLink}>Home</a>
          </li>
          <li aria-hidden="true" className={styles.breadcrumbSep}>›</li>
          <li>
            <a href="/destination/nyc" className={styles.breadcrumbLink}>New York</a>
          </li>
          <li aria-hidden="true" className={styles.breadcrumbSep}>›</li>
          <li>
            <span aria-current="page" className={styles.breadcrumbCurrent}>Book your trip</span>
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
            {/* Header */}
            <div className="flight-row header">
              {header.map((head, idx) => (
                <div key={idx} className="cell">{head}</div>
              ))}
            </div>

            {/* Rows */}
            {rows.map((row, idx) => (
              <div key={idx} className={`flight-row ${row.highlight ? "highlight" : ""}`}>
                {/* Desktop layout */}
                <div className="cell airline">
                  <img src={row.airline.logo} alt={row.airline.name} className="image" />
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
                    <img src={row.airline.logo} alt={row.airline.name} className="airline-logo" />
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
            ))}
          </div>
        </div>
      </section>
      )}

      {/* Hotels grid */}
      {activeTab === "hotels" && (
      <section className={styles.actSection}>
        <h2 className={styles.actHeading}>Book Hotels in New York</h2>
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
                <img src={h.img} alt={h.title} className={styles.actImage} />
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
      </section>
      )}

      {/* Things to Do grid */}
      {activeTab === "activities" && (
      <section className={styles.actSection}>
        <h2 className={styles.actHeading}>Things to Do in New York</h2>
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
                <img src={a.img} alt={a.title} className={styles.actImage} />
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
      </section>
      )}

      {/* Tab-aware Related + Next-step rail */}
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
            <p className={styles.railHeadline}>Helpful guides</p>
            <ul className={styles.railGuides}>
              {rail.guides.map((g) => (
                <li key={g.href}>
                  <a href={g.href}>{g.label}</a>
                </li>
              ))}
            </ul>
          </div>
        );
      })()}

      {/* Related guides footer */}
      <section className={styles.relatedGuides} aria-label="Related guides">
        <div className={styles.relatedGuidesInner}>
          <h2 className={styles.relatedGuidesHeading}>Plan your New York trip</h2>
          <div className={styles.relatedGuidesGrid}>
            <div className={styles.relatedGuidesGroup}>
              <h3 className={styles.relatedGuidesGroupTitle}>Plan</h3>
              <ul className={styles.relatedGuidesList}>
                <li><a href="/destination/nyc/solo-itinerary" className={styles.relatedGuidesLink}>Solo NYC itinerary</a></li>
                <li><a href="/destination/nyc/group-itinerary" className={styles.relatedGuidesLink}>Group NYC itinerary</a></li>
                <li><a href="/destination/nyc/neighborhood-guide" className={styles.relatedGuidesLink}>NYC neighborhood guide</a></li>
                <li><a href="/destination/nyc/best-areas-to-stay" className={styles.relatedGuidesLink}>Best areas to stay</a></li>
              </ul>
            </div>
            <div className={styles.relatedGuidesGroup}>
              <h3 className={styles.relatedGuidesGroupTitle}>Stay safe &amp; get around</h3>
              <ul className={styles.relatedGuidesList}>
                <li><a href="/destination/nyc/is-nyc-safe-at-night" className={styles.relatedGuidesLink}>Is NYC safe at night?</a></li>
                <li><a href="/destination/nyc/nyc-safety-guide" className={styles.relatedGuidesLink}>NYC safety guide</a></li>
                <li><a href="/destination/nyc/nyc-subway-map" className={styles.relatedGuidesLink}>NYC subway map</a></li>
              </ul>
            </div>
            <div className={styles.relatedGuidesGroup}>
              <h3 className={styles.relatedGuidesGroupTitle}>Explore</h3>
              <ul className={styles.relatedGuidesList}>
                <li><a href="/destination/nyc/things-to-do" className={styles.relatedGuidesLink}>Things to do in NYC</a></li>
                <li><a href="/destination/nyc/landmark" className={styles.relatedGuidesLink}>Top NYC landmarks</a></li>
                <li><a href="/destination/nyc/food" className={styles.relatedGuidesLink}>Where to eat in NYC</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
