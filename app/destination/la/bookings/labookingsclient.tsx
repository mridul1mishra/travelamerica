"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import Header from "../../../components/Header/header";
import Footer from "@/app/components/Header/Footer/footer";
import "@/app/components/majorcities/flightsection/propertylisting.css";
import styles from "@/app/destination/nyc/booking/booking.module.css";
import bookFlights from "@/content/cities/losangeles/booking/bookflights.json";
import hotelsData from "@/content/cities/losangeles/booking/hotels.json";
import thingsToDoData from "@/content/cities/losangeles/booking/thingstodo.json";
import type { Row } from "@/app/models/propertylisting";

type FlightRow = Row & { departure: Row["departure"] & { date?: string } };
type BookFlights = { title: string; header: string[]; rows: FlightRow[] };
type Hotel = { img: string; title: string; area?: string; rating?: number | null; reviews?: number | null; price: string; url: string };
type Activity = { img: string; title: string; category?: string; rating?: number | null; reviews?: number | null; ranking?: string | null; priceLevel?: string | null; description?: string; url: string };
type TabKey = "flights" | "hotels" | "activities";

const TAB_RAIL: Record<TabKey, { nextStep: { label: string; toTab: TabKey }; guides: { href: string; label: string }[] }> = {
  flights: {
    nextStep: { label: "Next: book your hotel →", toTab: "hotels" },
    guides: [
      { href: "/destination/la/getting-around", label: "Getting from LAX airport" },
      { href: "/destination/la/things-to-do", label: "Top things to do in LA" },
      { href: "/destination/la/neighborhoods", label: "LA neighborhood guide" },
    ],
  },
  hotels: {
    nextStep: { label: "Next: things to do in LA →", toTab: "activities" },
    guides: [
      { href: "/destination/la/best-areas-to-stay", label: "Best areas to stay in LA" },
      { href: "/destination/la/neighborhoods", label: "Compare LA neighborhoods" },
      { href: "/destination/la/safety-guide", label: "LA safety guide" },
    ],
  },
  activities: {
    nextStep: { label: "Compare return flights →", toTab: "flights" },
    guides: [
      { href: "/destination/la/things-to-do", label: "Full LA attractions guide" },
      { href: "/destination/la/beaches", label: "Best beaches in LA" },
      { href: "/destination/la/day-trips", label: "Day trips from Los Angeles" },
    ],
  },
};

const TABS = [
  { key: "flights" as TabKey, label: "Flights", icon: "✈️" },
  { key: "hotels" as TabKey, label: "Hotels", icon: "🏨" },
  { key: "activities" as TabKey, label: "Things to Do", icon: "🌴" },
];

const VALID_TABS = new Set<TabKey>(TABS.map((t) => t.key));

const RELATED_GROUPS = [
  {
    heading: "Plan",
    links: [
      { href: "/destination/la/things-to-do", label: "Top things to do in LA" },
      { href: "/destination/la/neighborhoods", label: "LA neighborhood guide" },
      { href: "/destination/la/best-areas-to-stay", label: "Best areas to stay" },
    ],
  },
  {
    heading: "Get around",
    links: [
      { href: "/destination/la/getting-around", label: "Getting from LAX airport" },
      { href: "/destination/la/day-trips", label: "Day trips from LA" },
      { href: "/destination/la/safety-guide", label: "LA safety guide" },
    ],
  },
  {
    heading: "Explore",
    links: [
      { href: "/destination/la/beaches", label: "Best beaches in Los Angeles" },
      { href: "/destination/la/food", label: "Where to eat in LA" },
      { href: "/destination/la/itinerary", label: "4-day LA itinerary" },
    ],
  },
];

function getInitialTab(param: string | null): TabKey {
  if (param && VALID_TABS.has(param as TabKey)) return param as TabKey;
  return "flights";
}

export default function LABookingsClient() {
  const { title, header, rows } = bookFlights as BookFlights;
  const hotels = hotelsData as Hotel[];
  const activities = thingsToDoData as Activity[];
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<TabKey>(() => getInitialTab(searchParams.get("tab")?.toLowerCase() ?? null));

  return (
    <div className="App">
      <Header image="/data/majorcities/losangeles/assets/losangeles.jpeg" bannerText="Book your Los Angeles trip" />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.travelsamericas.com/" },
          { "@type": "ListItem", "position": 2, "name": "Los Angeles", "item": "https://www.travelsamericas.com/destination/la" },
          { "@type": "ListItem", "position": 3, "name": "Book your trip", "item": "https://www.travelsamericas.com/destination/la/bookings" },
        ],
      }) }} />

      <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
        <ol className={styles.breadcrumbList}>
          <li className={styles.breadcrumbItem}><a href="/" className={styles.breadcrumbLink}>Home</a></li>
          <li aria-hidden="true" className={styles.breadcrumbSep}>›</li>
          <li className={styles.breadcrumbItem}><a href="/destination/la" className={styles.breadcrumbLink}>Los Angeles</a></li>
          <li aria-hidden="true" className={styles.breadcrumbSep}>›</li>
          <li className={styles.breadcrumbItem}><span aria-current="page" className={styles.breadcrumbCurrent}>Book your trip</span></li>
        </ol>
      </nav>

      <h1 className={styles.relatedHeading}>Book Your Los Angeles Trip</h1>

      <div className={styles.tabBar} role="tablist" aria-label="Booking options">
        {TABS.map((tab) => (
          <button key={tab.key} role="tab" aria-selected={activeTab === tab.key}
            className={`${styles.tab} ${activeTab === tab.key ? styles.active : ""}`}
            onClick={() => setActiveTab(tab.key)}>
            <span className={styles.icon}>{tab.icon}</span>{tab.label}
          </button>
        ))}
      </div>

      {activeTab === "flights" && (
        <section className="flight-section content-section">
          <h2>{title}</h2>
          <div className="flight-layout">
            <div className="flight-table">
              <div className="flight-row header">{header.map((h, i) => <div key={i} className="cell">{h}</div>)}</div>
              {rows.length === 0 ? <p className={styles.emptyState}>Live flight prices are being updated — check back soon.</p> : rows.map((row, idx) => (
                <div key={idx} className={`flight-row ${row.highlight ? "highlight" : ""}`}>
                  <div className="cell airline"><img src={row.airline.logo} alt={row.airline.name} className="image" width={32} height={32} /></div>
                  <div className="cell"><div>{row.departure.time}</div><small>{row.departure.city}</small>{row.departure.date && <small className={styles.flightDate}>{row.departure.date}</small>}</div>
                  <div className="cell"><div>{row.arrival.time}</div><small>{row.arrival.city}</small></div>
                  <div className="cell">{row.duration}</div>
                  <div className="cell price">{row.price}</div>
                  <div className="cell"><a href={row.buttonUrl} className="btn">{row.buttonText}</a></div>
                  <div className="cell mobile-flight-stack">
                    <div className="airline-row"><img src={row.airline.logo} alt={row.airline.name} className="airline-logo" width={32} height={32} /><span className="airline-name">{row.airline.name}</span></div>
                    <div className="time-city-row">
                      <div className="segment"><div className="time">{row.departure.time}</div><small className="city">{row.departure.city}</small>{row.departure.date && <small className={styles.flightDate}>{row.departure.date}</small>}</div>
                      <div className="segment"><div className="time">{row.arrival.time}</div><small className="city">{row.arrival.city}</small></div>
                    </div>
                    <div className="duration-price-row"><div>{row.duration}</div><div className="price">{row.price}</div></div>
                    <div className="button-row"><a href={row.buttonUrl} className="btn">{row.buttonText}</a></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeTab === "hotels" && (
        <section className={styles.actSection}>
          <h2 className={styles.actHeading}>Book Hotels in Los Angeles</h2>
          {hotels.length === 0 ? <p className={styles.emptyState}>Live hotel prices are being updated — check back soon.</p> : (
            <div className={styles.actGrid}>
              {hotels.map((h, i) => (
                <a className={styles.actCard} key={i} href={h.url} target="_blank" rel="noopener noreferrer">
                  <div className={styles.actImageWrap}><img src={h.img} alt={h.title} className={styles.actImage} width={300} height={200} /><span className={styles.actCategory}>Hotel</span></div>
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

      {activeTab === "activities" && (
        <section className={styles.actSection}>
          <h2 className={styles.actHeading}>Things to Do in Los Angeles</h2>
          {activities.length === 0 ? <p className={styles.emptyState}>Activities are being updated — check back soon.</p> : (
            <div className={styles.actGrid}>
              {activities.map((a, i) => (
                <a className={styles.actCard} key={i} href={a.url} target="_blank" rel="noopener noreferrer">
                  <div className={styles.actImageWrap}><img src={a.img} alt={a.title} className={styles.actImage} width={300} height={200} />{a.category && <span className={styles.actCategory}>{a.category}</span>}</div>
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

      {(() => {
        const rail = TAB_RAIL[activeTab];
        return (
          <div className={styles.railContainer}>
            <button className={styles.railNextStep} onClick={() => setActiveTab(rail.nextStep.toTab)}>{rail.nextStep.label}</button>
            <p className={styles.railHeadline}>Helpful guides</p>
            <ul className={styles.railGuides}>{rail.guides.map((g) => <li key={g.href}><a href={g.href}>{g.label}</a></li>)}</ul>
          </div>
        );
      })()}

      <section className={styles.relatedFooter} aria-label="Related guides">
        <div className={styles.relatedFooterInner}>
          <h2 className={styles.relatedHeading}>Plan your Los Angeles trip</h2>
          <div className={styles.relatedGroups}>
            {RELATED_GROUPS.map((group) => (
              <div key={group.heading} className={styles.relatedGroup}>
                <h3 className={styles.relatedGroupTitle}>{group.heading}</h3>
                <ul className={styles.relatedLinks}>
                  {group.links.map((link) => <li key={link.href}><a href={link.href} className={styles.relatedLink}>{link.label}</a></li>)}
                </ul>
              </div>
            ))}
                </div>
        </div>
      </section>
    </div>
  );
}
