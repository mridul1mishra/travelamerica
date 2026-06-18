"use client";

/* eslint-disable @next/next/no-img-element -- Remote booking inventory uses partner-hosted image URLs. */

import React, { Suspense, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import NavigationHeader from "@/app/components/Header/NavigationHeader";
import Footer from "@/app/components/Header/Footer/footer";
import styles from "./BookingClient.module.css";

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
export type BookingTip = { heading: string; text: string };

export interface CityBookingConfig {
  cityName: string;
  cityHref: string;
  bookingHref: string;
  headerImage: string;
  bannerText: string;
  pageTitle: string;
  tabs: TabDef[];
  tabRail: Record<TabKey, RailConfig>;
  relatedGroups: RelatedGroup[];
  bookingTips?: BookingTip[];
  flights: { title: string; header: string[]; rows: FlightRow[] };
  hotels: Hotel[];
  activities: Activity[];
}

function getInitialTab(param: string | null, validTabs: Set<TabKey>): TabKey {
  if (param && validTabs.has(param as TabKey)) return param as TabKey;
  return "flights";
}

function firstPrice(values: Array<string | null | undefined>) {
  return values.map((value) => value?.match(/\$[\d,]+/)?.[0]).find(Boolean) ?? "See prices";
}

function priceNumber(value: string | null | undefined) {
  const match = value?.match(/\$([\d,]+)/);
  return match ? Number(match[1].replace(/,/g, "")) : Number.POSITIVE_INFINITY;
}

function matchesHotelPrice(price: string, filter: string) {
  const value = priceNumber(price);
  if (filter === "under250") return value < 250;
  if (filter === "250to400") return value >= 250 && value <= 400;
  if (filter === "over400") return value > 400;
  return true;
}

function BookingIcon({ type }: { type: TabKey }) {
  if (type === "flights") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M21 16.2 3.7 21 3 19.3l7.2-4.9-5.4-5.3.9-1.5 7.2 3.4 4.8-7.8c.6-1 1.9-1.3 2.8-.6.9.6 1.2 1.8.6 2.7l-4.8 7.8 5.4 2.1-.7 1Z" />
      </svg>
    );
  }

  if (type === "hotels") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 20V5.8C4 4.8 4.8 4 5.8 4h6.4c1 0 1.8.8 1.8 1.8V9h4.2c1 0 1.8.8 1.8 1.8V20h-2v-3H6v3H4Zm2-5h12v-3.8c0-.1-.1-.2-.2-.2H14v2h-2V6.2c0-.1-.1-.2-.2-.2H6.2c-.1 0-.2.1-.2.2V15Zm2-6h2V7H8v2Zm0 4h2v-2H8v2Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 21V9.4L3.4 11 2.5 9.5 12 3l9.5 6.5-.9 1.5L18 9.4V21h-5v-6h-2v6H6Zm2-2h1v-6h6v6h1V8l-4-2.7L8 8v11Z" />
    </svg>
  );
}

const fallbackTips: BookingTip[] = [
  { heading: "Airport", text: "Compare airport location with transfer time before choosing the cheapest fare." },
  { heading: "Transport", text: "Check whether your daily plans work better by transit, rideshare, or rental car." },
  { heading: "Hotels", text: "Book around the neighborhood that matches your itinerary, not only the nightly rate." },
];

function BookingClientInner({ config, faqSection }: { config: CityBookingConfig; faqSection?: React.ReactNode }) {
  const { cityName, cityHref, headerImage, bannerText, pageTitle, tabs, tabRail, relatedGroups, flights, hotels, activities } = config;
  const validTabs = new Set<TabKey>(tabs.map((tab) => tab.key));
  const searchParams = useSearchParams();
  const bookingRef = useRef<HTMLElement | null>(null);
  const [activeTab, setActiveTab] = useState<TabKey>(() =>
    getInitialTab(searchParams.get("tab")?.toLowerCase() ?? null, validTabs)
  );
  const [hotelPriceFilter, setHotelPriceFilter] = useState("all");
  const [hotelRatingFilter, setHotelRatingFilter] = useState("all");
  const [hotelSort, setHotelSort] = useState("recommended");
  const [activityCategory, setActivityCategory] = useState("all");
  const [activitySort, setActivitySort] = useState("recommended");
  const rail = tabRail[activeTab];
  const activeLabel = tabs.find((tab) => tab.key === activeTab)?.label ?? "Bookings";
  const lowestFlight = flights.rows[0]?.price ?? "See prices";
  const lowestHotel = firstPrice(hotels.map((hotel) => hotel.price));
  const lowestActivity = firstPrice(activities.map((activity) => activity.priceLevel));
  const bookingTips = config.bookingTips ?? fallbackTips;
  const activityCategories = useMemo(
    () => Array.from(new Set(activities.map((activity) => activity.category).filter(Boolean))).sort() as string[],
    [activities]
  );
  const filteredHotels = useMemo(() => {
    return hotels
      .filter((hotel) => matchesHotelPrice(hotel.price, hotelPriceFilter))
      .filter((hotel) => hotelRatingFilter === "all" || (hotel.rating ?? 0) >= Number(hotelRatingFilter))
      .toSorted((a, b) => {
        if (hotelSort === "price") return priceNumber(a.price) - priceNumber(b.price);
        if (hotelSort === "rating") return (b.rating ?? 0) - (a.rating ?? 0);
        if (hotelSort === "reviews") return (b.reviews ?? 0) - (a.reviews ?? 0);
        return 0;
      });
  }, [hotelPriceFilter, hotelRatingFilter, hotelSort, hotels]);
  const filteredActivities = useMemo(() => {
    return activities
      .filter((activity) => activityCategory === "all" || activity.category === activityCategory)
      .toSorted((a, b) => {
        if (activitySort === "price") return priceNumber(a.priceLevel) - priceNumber(b.priceLevel);
        if (activitySort === "rating") return (b.rating ?? 0) - (a.rating ?? 0);
        if (activitySort === "reviews") return (b.reviews ?? 0) - (a.reviews ?? 0);
        return 0;
      });
  }, [activities, activityCategory, activitySort]);

  const chooseTab = (tab: TabKey, shouldScroll = false) => {
    setActiveTab(tab);
    if (shouldScroll) {
      window.requestAnimationFrame(() => {
        bookingRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  };

  return (
    <div className={styles.page}>
      <NavigationHeader />

      <main>
        <div className={styles.planningBlock}>
        <section className={styles.pageIntro} aria-label={bannerText}>
          <div>
            <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href={cityHref}>{cityName}</Link>
              <span>/</span>
              <span>Book your trip</span>
            </nav>
            <p className={styles.eyebrow}>{cityName} booking hub</p>
            <h1>{pageTitle}</h1>
            <p>
              Compare flights, hotels, and ticketed experiences without losing the LA-specific planning context:
              airport tradeoffs, parking costs, neighborhood fit, and seasonal price spikes.
            </p>
            <div className={styles.heroActions}>
              <button type="button" onClick={() => chooseTab("flights", true)}>Compare flights</button>
              <button type="button" onClick={() => chooseTab("hotels", true)}>Browse hotels</button>
            </div>
          </div>
          <div className={styles.introVisual}>
            <div className={styles.imageStrip}>
              <img src={headerImage} alt={`${cityName} travel scene`} />
            </div>
            <div className={styles.tipGrid}>
              {bookingTips.map((tip) => (
                <article key={tip.heading}>
                  <span>{tip.heading}</span>
                  <p>{tip.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.stats} aria-label="Booking options summary">
          <button type="button" onClick={() => chooseTab("flights", true)}>
            <span>Flights</span>
            <strong>{lowestFlight}</strong>
            <small>{flights.rows.length} sample routes</small>
            <span className={styles.statCta}>Browse flights →</span>
          </button>
          <button type="button" onClick={() => chooseTab("hotels", true)}>
            <span>Hotels</span>
            <strong>{lowestHotel}<span className={styles.statUnit}> /night</span></strong>
            <small>{hotels.length} stays listed</small>
            <span className={styles.statCta}>Browse hotels →</span>
          </button>
          <button type="button" onClick={() => chooseTab("activities", true)}>
            <span>Activities</span>
            <strong>{lowestActivity}</strong>
            <small>{activities.length} tours and tickets</small>
            <span className={styles.statCta}>Browse activities →</span>
          </button>
        </section>
        </div>

        <section className={styles.bookingShell} aria-label="Booking tools" ref={bookingRef}>
          <div className={styles.tabs} role="tablist" aria-label="Booking categories">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                type="button"
                role="tab"
                aria-selected={activeTab === tab.key}
                className={activeTab === tab.key ? styles.activeTab : ""}
                onClick={() => chooseTab(tab.key)}
              >
                <BookingIcon type={tab.key} />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          <div className={styles.workspace}>
            <section className={styles.resultsPanel}>
              <p className={styles.panelKicker}>Currently viewing {activeLabel}</p>

              {activeTab === "flights" && (
                <>
                  <h2>{flights.title}</h2>
                  <div className={styles.flightList}>
                    {flights.rows.map((row) => (
                      <article className={`${styles.flightCard} ${row.highlight ? styles.recommended : ""}`} key={`${row.departure.city}-${row.departure.date}-${row.arrival.city}`}>
                        <div className={styles.airlineBlock}>
                          <img src={row.airline.logo} alt={row.airline.name} width={44} height={44} />
                          <div>
                            <strong>{row.airline.name}</strong>
                            {row.highlight && <span>Good value</span>}
                          </div>
                        </div>
                        <div className={styles.routeBlock}>
                          <div>
                            <strong>{row.departure.time}</strong>
                            <span>{row.departure.city}</span>
                            {row.departure.date && <small>{row.departure.date}</small>}
                          </div>
                          <div className={styles.duration}>{row.duration}</div>
                          <div>
                            <strong>{row.arrival.time}</strong>
                            <span>{row.arrival.city}</span>
                          </div>
                        </div>
                        <div className={styles.priceBlock}>
                          <strong>{row.price}</strong>
                          <a href={row.buttonUrl} target="_blank" rel="noopener noreferrer">{row.buttonText}</a>
                        </div>
                      </article>
                    ))}
                  </div>
                </>
              )}

              {activeTab === "hotels" && (
                <>
                  <h2>Book Hotels in {cityName}</h2>
                  <div className={styles.filters} aria-label="Hotel filters">
                    <label>
                      Price
                      <select value={hotelPriceFilter} onChange={(event) => setHotelPriceFilter(event.target.value)}>
                        <option value="all">Any price</option>
                        <option value="under250">Under $250</option>
                        <option value="250to400">$250-$400</option>
                        <option value="over400">$400+</option>
                      </select>
                    </label>
                    <label>
                      Rating
                      <select value={hotelRatingFilter} onChange={(event) => setHotelRatingFilter(event.target.value)}>
                        <option value="all">Any rating</option>
                        <option value="4.5">4.5+</option>
                        <option value="4">4.0+</option>
                      </select>
                    </label>
                    <label>
                      Sort
                      <select value={hotelSort} onChange={(event) => setHotelSort(event.target.value)}>
                        <option value="recommended">Recommended</option>
                        <option value="price">Lowest price</option>
                        <option value="rating">Highest rating</option>
                        <option value="reviews">Most reviewed</option>
                      </select>
                    </label>
                  </div>
                  <div className={styles.cardGrid}>
                    {filteredHotels.map((hotel) => (
                      <a className={styles.bookingCard} key={hotel.title} href={hotel.url} target="_blank" rel="noopener noreferrer">
                        <img src={hotel.img} alt={hotel.title} />
                        <div className={styles.cardBody}>
                          <span className={styles.badge}>Hotel</span>
                          <h3>{hotel.title}</h3>
                          {hotel.area && <p>{hotel.area}</p>}
                          <div className={styles.metaRow}>
                            {hotel.rating != null && <span>{hotel.rating} rating</span>}
                            {hotel.reviews != null && <span>{hotel.reviews.toLocaleString()} reviews</span>}
                          </div>
                          <div className={styles.cardFooter}>
                            <strong>{hotel.price}<small> / night</small></strong>
                            <span>View hotel</span>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                  {filteredHotels.length === 0 && <p className={styles.emptyState}>No hotels match those filters.</p>}
                </>
              )}

              {activeTab === "activities" && (
                <>
                  <h2>Things to Do in {cityName}</h2>
                  <div className={styles.filters} aria-label="Activity filters">
                    <label>
                      Category
                      <select value={activityCategory} onChange={(event) => setActivityCategory(event.target.value)}>
                        <option value="all">All categories</option>
                        {activityCategories.map((category) => (
                          <option key={category} value={category}>{category}</option>
                        ))}
                      </select>
                    </label>
                    <label>
                      Sort
                      <select value={activitySort} onChange={(event) => setActivitySort(event.target.value)}>
                        <option value="recommended">Recommended</option>
                        <option value="price">Lowest price</option>
                        <option value="rating">Highest rating</option>
                        <option value="reviews">Most reviewed</option>
                      </select>
                    </label>
                  </div>
                  <div className={styles.cardGrid}>
                    {filteredActivities.map((activity) => (
                      <a className={styles.bookingCard} key={activity.title} href={activity.url} target="_blank" rel="noopener noreferrer">
                        <img src={activity.img} alt={activity.title} />
                        <div className={styles.cardBody}>
                          {activity.category && <span className={styles.badge}>{activity.category}</span>}
                          <h3>{activity.title}</h3>
                          <div className={styles.metaRow}>
                            {activity.rating != null && <span>{activity.rating} rating</span>}
                            {activity.reviews != null && <span>{activity.reviews.toLocaleString()} reviews</span>}
                          </div>
                          {activity.description && <p>{activity.description}</p>}
                          <div className={styles.cardFooter}>
                            <strong>{activity.priceLevel || "See prices"}</strong>
                            <span>View tour</span>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                  {filteredActivities.length === 0 && <p className={styles.emptyState}>No activities match those filters.</p>}
                </>
              )}
            </section>

            <aside className={styles.sidePanel} aria-label={`${activeLabel} next steps`}>
              <p className={styles.eyebrow}>Next step</p>
              <button type="button" onClick={() => chooseTab(rail.nextStep.toTab)}>
                {rail.nextStep.label}
              </button>
              <div className={styles.guideLinks}>
                <h3>Helpful guides</h3>
                {rail.guides.map((guide) => (
                  <Link key={guide.href} href={guide.href}>{guide.label}</Link>
                ))}
              </div>
            </aside>
          </div>
        </section>

        {faqSection}

        <section className={styles.related} aria-label={`Related ${cityName} guides`}>
          <div>
            <p className={styles.eyebrow}>Keep planning</p>
            <h2>Plan your {cityName} trip</h2>
          </div>
          <div className={styles.relatedGrid}>
            {relatedGroups.map((group) => (
              <div className={styles.relatedGroup} key={group.heading}>
                <h3>{group.heading}</h3>
                {group.links.map((link) => (
                  <Link key={link.href} href={link.href}>{link.label}</Link>
                ))}
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default function BookingClient(props: { config: CityBookingConfig; faqSection?: React.ReactNode }) {
  return (
    <Suspense>
      <BookingClientInner {...props} />
    </Suspense>
  );
}
