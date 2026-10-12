"use client";

/* eslint-disable @next/next/no-img-element -- Remote booking inventory uses partner-hosted image URLs. */

import React, { Suspense, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import NavigationHeader from "@/app/components/Header/NavigationHeader";
import Footer from "@/app/components/Header/Footer/footer";
import styles from "./BookingClient.module.css";
import { HOTEL_TAGS, type HotelTag } from "@/app/lib/hotelTags";
import GoogleHotelRating from "@/app/components/hotels/GoogleHotelRating";
import HotelFilterPanel from "@/app/components/hotels/HotelFilterPanel";
import HotelFilterGroup from "@/app/components/hotels/HotelFilterGroup";
import { useMember } from "@/app/components/auth/MemberProvider";
import HotelPriceLink from "@/app/components/hotels/HotelPriceLink";

export type TabKey = "flights" | "hotels" | "activities";
export type HotelTier = "Standard" | "Premium" | "Luxury";

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
  address?: string | null;
  neighborhood?: string | null;
  city?: string;
  hotelTier?: HotelTier | null;
  hotelTierIsProvisional?: boolean;
  hotelTierEvidenceCoverage?: number;
  hotelId?: string;
  hotelSourceId?: string;
  googleRatingAvailable?: boolean;
  googleMapsUrl?: string;
  firstTimeVisitor?: boolean | null;
  safeArea?: boolean | null;
  systemMetadata?: {
    destination: string;
    displayOrder: number;
    isActive: boolean;
    featuredHotel: boolean;
    lastUpdated: string;
    affiliateEnabled: boolean;
    hasImages: boolean;
    hasDetailPage: boolean;
  };
  tags?: HotelTag[];
  tagOrder?: Partial<Record<HotelTag, number>>;
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
  hotelListingHref?: string;
  hotelCount?: number;
  headerImage: string;
  bannerText: string;
  pageTitle: string;
  tabs: TabDef[];
  category?: TabKey;
  onDemandGoogleRatings?: boolean;
  categoryRoutes?: Record<TabKey, string>;
  introText?: string;
  hotelAreaPresets?: { label: string; areas: string[] }[];
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
  if (filter !== "all" && !Number.isFinite(value)) return false;
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
  const { member, pending: memberPending, signIn } = useMember();
  const { cityName, cityHref, headerImage, bannerText, pageTitle, tabs, tabRail, relatedGroups, flights, hotels, activities } = config;
  const validTabs = new Set<TabKey>(tabs.map((tab) => tab.key));
  const searchParams = useSearchParams();
  const router = useRouter();
  const bookingRef = useRef<HTMLElement | null>(null);
  const [activeTab, setActiveTab] = useState<TabKey>(() =>
    config.category ?? getInitialTab(searchParams.get("tab")?.toLowerCase() ?? null, validTabs)
  );
  const [hotelPriceFilter, setHotelPriceFilter] = useState("all");
  const [hotelRatingFilter, setHotelRatingFilter] = useState("all");
  const [hotelTagFilter, setHotelTagFilter] = useState("all");
  const [selectedHotelTags, setSelectedHotelTags] = useState<HotelTag[]>([]);
  const [hotelSearch, setHotelSearch] = useState("");
  const [hotelTierFilter, setHotelTierFilter] = useState<HotelTier | "all">("all");
  const [hotelSort, setHotelSort] = useState("recommended");
  const [selectedHotelAreas, setSelectedHotelAreas] = useState<string[] | null>(null);
  const [selectedHotelPlans, setSelectedHotelPlans] = useState<string[] | null>(null);
  const neighborhoodOptions = Array.from(new Set(hotels.map(hotel => hotel.neighborhood).filter((area): area is string => Boolean(area)))).sort();
  // Preserve an unavailable requested area so it yields an honest empty result
  // instead of silently showing every hotel as if it matched the article link.
  const linkedHotelAreas = Array.from(new Set((searchParams.get("areas") ?? "").split("|").filter(Boolean)));
  const requestedHotelAreas = selectedHotelAreas ?? linkedHotelAreas;
  const hotelAreasKey = requestedHotelAreas.join("|");
  const areaPresets = (config.hotelAreaPresets ?? []).map(preset => ({
    ...preset, areas: preset.areas.filter(area => neighborhoodOptions.includes(area)),
  })).filter(preset => preset.areas.length > 0);
  const linkedPlans = (searchParams.get("plans") ?? "").split("|").filter(label => areaPresets.some(preset => preset.label === label));
  const exactPreset = areaPresets.find(preset => preset.areas.length === requestedHotelAreas.length && preset.areas.every(area => requestedHotelAreas.includes(area)));
  const requestedHotelPlans = selectedHotelPlans ?? (linkedPlans.length ? linkedPlans : exactPreset ? [exactPreset.label] : []);
  const [activityCategory, setActivityCategory] = useState("all");
  const [activitySort, setActivitySort] = useState("recommended");
  const rail = tabRail[activeTab];
  const activeLabel = tabs.find((tab) => tab.key === activeTab)?.label ?? "Bookings";
  const lowestFlight = flights.rows[0]?.price ?? "See prices";
  const lowestHotel = firstPrice(hotels.map((hotel) => hotel.price));
  const lowestActivity = firstPrice(activities.map((activity) => activity.priceLevel));
  const bookingTips = config.bookingTips ?? fallbackTips;
  const showHotelTierFilter = config.category === "hotels" && hotels.some((hotel) => hotel.hotelTier);
  const useOnDemandGoogleRatings = config.onDemandGoogleRatings === true && config.category === "hotels";
  const hasHotelPrices = !useOnDemandGoogleRatings;
  const hasHotelFilters = Boolean(hotelSearch.trim()) || Boolean(hotelAreasKey) || selectedHotelTags.length > 0 || (hasHotelPrices && hotelPriceFilter !== "all") || (!useOnDemandGoogleRatings && hotelRatingFilter !== "all") || hotelTagFilter !== "all" || (showHotelTierFilter && hotelTierFilter !== "all");
  const activityCategories = useMemo(
    () => Array.from(new Set(activities.map((activity) => activity.category).filter(Boolean))).sort() as string[],
    [activities]
  );
  const filteredHotels = useMemo(() => {
    const normalize = (value: string) => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    const terms = normalize(hotelSearch).trim().split(/\s+/).filter(Boolean);
    return hotels
      .filter(hotel => {
        const text = normalize([hotel.title, hotel.neighborhood, hotel.address, hotel.area].filter(Boolean).join(" "));
        return terms.every(term => text.includes(term));
      })
      .filter((hotel) => !hotelAreasKey || hotelAreasKey.split("|").includes(hotel.neighborhood ?? ""))
      .filter((hotel) => !hasHotelPrices || matchesHotelPrice(hotel.price, hotelPriceFilter))
      .filter((hotel) => useOnDemandGoogleRatings || hotelRatingFilter === "all" || (hotel.rating ?? 0) >= Number(hotelRatingFilter))
      .filter((hotel) => hotelTagFilter === "all" || hotel.tags?.includes(hotelTagFilter as HotelTag))
      .filter((hotel) => selectedHotelTags.every(tag => hotel.tags?.includes(tag)))
      .filter((hotel) => !showHotelTierFilter || hotelTierFilter === "all" || hotel.hotelTier === hotelTierFilter)
      .toSorted((a, b) => {
        if (hasHotelPrices && hotelSort === "price") return priceNumber(a.price) - priceNumber(b.price);
        if (!useOnDemandGoogleRatings && hotelSort === "rating") return (b.rating ?? 0) - (a.rating ?? 0);
        if (!useOnDemandGoogleRatings && hotelSort === "reviews") return (b.reviews ?? 0) - (a.reviews ?? 0);
        return 0;
      });
  }, [hotelSearch, hotelAreasKey, hotelPriceFilter, hotelRatingFilter, hotelTagFilter, selectedHotelTags, hotelTierFilter, hotelSort, hotels, showHotelTierFilter, useOnDemandGoogleRatings, hasHotelPrices]);
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

  const selectHotelAreas = (areas: string[], plans: string[] = []) => {
    setSelectedHotelAreas(areas);
    setSelectedHotelPlans(plans);
    if (config.category === "hotels") {
      const params = new URLSearchParams(searchParams.toString());
      if (areas.length) params.set("areas", areas.join("|"));
      else params.delete("areas");
      if (plans.length) params.set("plans", plans.join("|"));
      else params.delete("plans");
      router.replace(`${config.bookingHref}${params.size ? `?${params}` : ""}`, { scroll: false });
    }
  };
  const clearHotelFilters = () => {
    setHotelSearch("");
    selectHotelAreas([]);
    setHotelPriceFilter("all");
    setHotelRatingFilter("all");
    setHotelTagFilter("all");
    setSelectedHotelTags([]);
    setHotelTierFilter("all");
  };

  const chooseTab = (tab: TabKey, shouldScroll = false) => {
    if (tab === "hotels" && config.hotelListingHref && !config.category) {
      window.location.assign(config.hotelListingHref);
      return;
    }
    setActiveTab(tab);
    if (shouldScroll) {
      window.requestAnimationFrame(() => {
        bookingRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  };

  return (
    <div className={styles.page}>
      <NavigationHeader prefetch={config.category ? false : undefined} memberReturnTo={config.category === "hotels" ? config.bookingHref : undefined} />

      <main>
        <div className={styles.planningBlock}>
        <section className={`${styles.pageIntro} ${config.category ? styles.categoryIntro : ""}`} aria-label={bannerText}>
          <div>
            <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
              <Link prefetch={config.category ? false : undefined} href="/">Home</Link>
              <span>/</span>
              <Link prefetch={config.category ? false : undefined} href={cityHref}>{cityName}</Link>
              <span>/</span>
              <span>{config.category ? activeLabel : "Book your trip"}</span>
            </nav>
            <p className={styles.eyebrow}>{cityName} {config.category ? activeLabel.toLowerCase() : "booking hub"}</p>
            <h1>{pageTitle}</h1>
            <p>
              {config.introText ?? "Compare flights, hotels, and ticketed experiences without losing the practical planning context: airport tradeoffs, neighborhood fit, local transport, and seasonal price spikes."}
            </p>
            {config.category && <div className={styles.categoryActions}>
              <button type="button" onClick={() => chooseTab(activeTab, true)}>
                {activeTab === "hotels" ? "Explore hotels" : activeTab === "flights" ? "Explore flights" : "Explore tours & tickets"}
                <span aria-hidden="true">↓</span>
              </button>
              <span>{activeTab === "hotels" ? `${hotels.length} stays to explore` : activeTab === "flights" ? `${flights.rows.length} sample routes` : `${activities.length} experiences to explore`}</span>
            </div>}
            {!config.category && <div className={styles.heroActions}>
              <button type="button" onClick={() => chooseTab("flights", true)}>Compare flights</button>
              <button type="button" onClick={() => chooseTab("hotels", true)}>Browse hotels</button>
            </div>}
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

        {!config.category && <section className={styles.stats} aria-label="Booking options summary">
          <button type="button" onClick={() => chooseTab("flights", true)}>
            <span>Flights</span>
            <strong>{lowestFlight}</strong>
            <small>{flights.rows.length} sample routes</small>
            <span className={styles.statCta}>Browse flights →</span>
          </button>
          <button type="button" onClick={() => chooseTab("hotels", true)}>
            <span>Hotels</span>
            <strong>{lowestHotel}{Number.isFinite(priceNumber(lowestHotel)) && <span className={styles.statUnit}> /night</span>}</strong>
            <small>{config.hotelCount ?? hotels.length} stays listed</small>
            <span className={styles.statCta}>Browse hotels →</span>
          </button>
          <button type="button" onClick={() => chooseTab("activities", true)}>
            <span>Activities</span>
            <strong>{lowestActivity}</strong>
            <small>{activities.length} tours and tickets</small>
            <span className={styles.statCta}>Browse activities →</span>
          </button>
        </section>}
        </div>
        <section className={styles.bookingShell} aria-label="Booking tools" ref={bookingRef}>
          {!config.category && <div className={styles.tabs} role="tablist" aria-label="Booking categories">
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
          </div>}

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
                          <a
                            href={row.buttonUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-booking-type="flight"
                            data-item-name={`${row.airline.name} ${row.departure.city} to ${row.arrival.city}`}
                          >
                            {row.buttonText}
                          </a>
                        </div>
                      </article>
                    ))}
                  </div>
                </>
              )}

              {activeTab === "hotels" && (
                <>
                  <h2>Book Hotels in {cityName}</h2>
                  {config.category === "hotels" && <p className={styles.hotelIntro}>{useOnDemandGoogleRatings && !member
                    ? hotels.some(hotel => hotel.googleRatingAvailable)
                      ? "Register or sign in to view Google ratings and check hotel prices."
                      : "Register or sign in to check hotel prices."
                    : "Check current rates and availability with the provider."}</p>}
                  {config.category === "hotels" && hotels.some((hotel) => hotel.tags?.includes("NearSubway")) && <p className={styles.tagNote}>Near subway: within 500 metres of a listed MTA entrance in a straight line. Walking distance may be longer; check current entrance access.</p>}
                  <div className={config.category === "hotels" ? styles.hotelToolbar : undefined}>
                  {config.category === "hotels" && <div className={styles.hotelSearch}>
                    <label htmlFor="hotel-search">Search hotels</label>
                    <div>
                      <input id="hotel-search" type="search" value={hotelSearch} onChange={event => setHotelSearch(event.target.value)} placeholder="Hotel name, neighborhood or address" autoComplete="off" />
                      {hotelSearch && <button type="button" onClick={() => setHotelSearch("")}>Clear search</button>}
                    </div>
                  </div>}
                  <HotelFilterPanel enabled={config.category === "hotels"} initialOpen={searchParams.get("filters") === "open"} count={filteredHotels.length} active={hasHotelFilters} onClear={clearHotelFilters}>
                  <HotelFilterGroup enabled={config.category === "hotels" && areaPresets.length > 0} title="Base plans" selected={requestedHotelPlans.length} defaultOpen>
                  {config.category === "hotels" && areaPresets.length > 0 && <div className={styles.areaPresets}>
                    <h3>Choose a base for your plans</h3>
                    <p>Choose one or more. Check routes and return transport before booking.</p>
                    <fieldset className={styles.planCards}>
                      <legend>Choose any combination</legend>
                      {areaPresets.map(preset => {
                        const selected = requestedHotelPlans.includes(preset.label);
                        const count = hotels.filter(hotel => preset.areas.includes(hotel.neighborhood ?? "")).length;
                        return <label key={preset.label} className={`${styles.planCard} ${selected ? styles.planCardSelected : ""}`}>
                          <input type="checkbox" checked={selected} onChange={event => {
                            const plans = event.target.checked ? [...requestedHotelPlans, preset.label] : requestedHotelPlans.filter(label => label !== preset.label);
                            selectHotelAreas(Array.from(new Set(areaPresets.filter(preset => plans.includes(preset.label)).flatMap(preset => preset.areas))), plans);
                          }} />
                          <span className={styles.planCardText}><strong>{preset.label}</strong><span>{count} {count === 1 ? "hotel" : "hotels"}</span></span>
                        </label>;
                      })}
                    </fieldset>
                    <div className={styles.planSummary}>
                      <span aria-live="polite">{requestedHotelPlans.length ? `${requestedHotelPlans.length} ${requestedHotelPlans.length === 1 ? "plan" : "plans"} selected · ${filteredHotels.length} matching hotels` : "Select the places you want to explore"}</span>
                      {requestedHotelPlans.length > 0 && <button type="button" onClick={() => selectHotelAreas([])}>Clear plans</button>}
                    </div>
                  </div>}
                  </HotelFilterGroup>
                  <HotelFilterGroup enabled={config.category === "hotels" && neighborhoodOptions.length > 0} title="Neighborhoods" selected={requestedHotelAreas.length}>
                    {config.category === "hotels" && neighborhoodOptions.length > 0 && <fieldset className={styles.planCards}>
                      <legend>Choose one or more neighborhoods</legend>
                      {neighborhoodOptions.map(name => <label className={`${styles.planCard} ${requestedHotelAreas.includes(name) ? styles.planCardSelected : ""}`} key={name}>
                        <input type="checkbox" checked={requestedHotelAreas.includes(name)} onChange={event => selectHotelAreas(event.target.checked ? [...requestedHotelAreas, name] : requestedHotelAreas.filter(area => area !== name))} />
                        <span className={styles.planCardText}><strong>{name}</strong><span>({hotels.filter(hotel => hotel.neighborhood === name).length})</span></span>
                      </label>)}
                    </fieldset>}
                  </HotelFilterGroup>
                  <HotelFilterGroup enabled={config.category === "hotels" && hotels.some(hotel => hotel.tags?.length)} title="Hotel preferences" selected={selectedHotelTags.length}>
                    {config.category === "hotels" && hotels.some(hotel => hotel.tags?.length) && <>
                      <p className={styles.preferenceHint}>Choose one or more. Hotels must match every selected preference.</p>
                      <fieldset className={styles.planCards}>
                        <legend>Choose hotel preferences</legend>
                        {Object.entries(HOTEL_TAGS).filter(([key]) => hotels.some(hotel => hotel.tags?.includes(key as HotelTag))).map(([key, label]) => {
                          const tag = key as HotelTag;
                          return <label key={key} className={`${styles.planCard} ${selectedHotelTags.includes(tag) ? styles.planCardSelected : ""}`}>
                            <input type="checkbox" checked={selectedHotelTags.includes(tag)} onChange={event => setSelectedHotelTags(current => event.target.checked ? [...current, tag] : current.filter(value => value !== tag))} />
                            <span className={styles.planCardText}><strong>{label}</strong><span>({hotels.filter(hotel => hotel.tags?.includes(tag)).length})</span></span>
                          </label>;
                        })}
                      </fieldset>
                    </>}
                  {(!useOnDemandGoogleRatings || hasHotelPrices) && <div className={styles.filters} aria-label="Hotel filters">
                    {hasHotelPrices && <label>
                      Price
                      <select value={hotelPriceFilter} onChange={(event) => setHotelPriceFilter(event.target.value)}>
                        <option value="all">Any price</option>
                        <option value="under250">Under $250</option>
                        <option value="250to400">$250-$400</option>
                        <option value="over400">$400+</option>
                      </select>
                    </label>}
                    {!useOnDemandGoogleRatings && <label>
                      Rating
                      <select value={hotelRatingFilter} onChange={(event) => setHotelRatingFilter(event.target.value)}>
                        <option value="all">Any rating</option>
                        <option value="4.5">4.5+</option>
                        <option value="4">4.0+</option>
                      </select>
                    </label>}
                    {(!useOnDemandGoogleRatings || hasHotelPrices) && <label>
                      Sort
                      <select value={useOnDemandGoogleRatings && ["rating", "reviews"].includes(hotelSort) ? "recommended" : hotelSort} onChange={(event) => setHotelSort(event.target.value)}>
                        <option value="recommended">Recommended</option>
                        <option value="price">Lowest price</option>
                        {!useOnDemandGoogleRatings && <>
                          <option value="rating">Highest rating</option>
                          <option value="reviews">Most reviewed</option>
                        </>}
                      </select>
                    </label>}
                  </div>}
                  {showHotelTierFilter && <p id="hotel-tier-note" className={styles.tierNote}>Tiers reflect our assessment of rooms, service and amenities. Provisional tiers use available evidence and may change.</p>}
                  </HotelFilterGroup>
                  {showHotelTierFilter && <HotelFilterGroup enabled title="Hotel tier" selected={hotelTierFilter === "all" ? 0 : 1}>
                    <fieldset className={styles.planCards}>
                      <legend>Choose a hotel tier</legend>
                      {(["all", "Standard", "Premium", "Luxury"] as const).map(tier => <label className={styles.planCard} key={tier}>
                        <input type="radio" name="hotel-tier" checked={hotelTierFilter === tier} onChange={() => setHotelTierFilter(tier)} />
                        <span>{tier === "all" ? "All tiers" : tier}</span>
                      </label>)}
                    </fieldset>
                  </HotelFilterGroup>}
                  {config.category === "hotels" && !areaPresets.length && !neighborhoodOptions.length && !showHotelTierFilter && !hotels.some(hotel => hotel.tags?.length) && <p>Use the search box to find a hotel by name or address. More filters will appear as hotel details become available.</p>}
                  </HotelFilterPanel>
                  </div>
                  {config.category === "hotels" && <div className={styles.hotelResultsSummary}>
                    <p role="status">Showing {filteredHotels.length} of {hotels.length} hotels</p>
                    {hasHotelFilters && <button type="button" className={styles.clearFilters} onClick={clearHotelFilters}>Clear filters</button>}
                  </div>}
                  {config.category === "hotels" && hotelAreasKey && <p>Hotel areas: {requestedHotelAreas.join(" · ")}</p>}
                  <div className={styles.cardGrid}>
                    {filteredHotels.map((hotel) => {
                      const key = hotel.hotelId ?? hotel.hotelSourceId ?? hotel.title;
                      const priceUrl = useOnDemandGoogleRatings && hotel.hotelId ? `/api/hotel-prices/${hotel.hotelId}` : hotel.url;
                      const linkProps = {
                        href: priceUrl,
                        target: useOnDemandGoogleRatings && !member ? undefined : "_blank",
                        rel: "noopener noreferrer",
                        "data-booking-type": "hotel",
                        "data-item-name": hotel.title,
                        "aria-busy": useOnDemandGoogleRatings && memberPending ? true : undefined,
                        onClick: (event: React.MouseEvent<HTMLAnchorElement>) => {
                          if (!useOnDemandGoogleRatings || member) return;
                          event.preventDefault();
                          if (!memberPending) signIn(priceUrl, "prices");
                        },
                      };
                      const details = <>
                          <span className={styles.badge}>Hotel</span>
                          {showHotelTierFilter && hotel.hotelTier && <div className={styles.hotelTier}>
                            <span>{hotel.hotelTier}{hotel.hotelTierIsProvisional && " · Provisional"}</span>
                            {hotel.hotelTierIsProvisional && <small>
                              Based on available evidence; may change.
                              {hotel.hotelTierEvidenceCoverage != null && Number.isFinite(hotel.hotelTierEvidenceCoverage) && ` Evidence coverage: ${Math.round(hotel.hotelTierEvidenceCoverage)}%.`}
                            </small>}
                          </div>}
                          <h3>{hotel.title}</h3>
                          {hotel.area && <p>{hotel.area}</p>}
                          {hotel.neighborhood && <p>{hotel.neighborhood}</p>}
                          {hotel.address && <p>{hotel.address}</p>}
                          {!!hotel.tags?.length && <div className={styles.hotelTags} aria-label="Hotel tags">
                            {hotel.tags.map((tag) => <span key={tag}>{HOTEL_TAGS[tag]}</span>)}
                          </div>}
                      </>;
                      const footer = <div className={styles.cardFooter}>
                        <strong>{useOnDemandGoogleRatings ? "See prices" : hotel.price}{!useOnDemandGoogleRatings && Number.isFinite(priceNumber(hotel.price)) && <small> / night</small>}</strong>
                        <span>View hotel</span>
                      </div>;
                      return useOnDemandGoogleRatings ? <article className={styles.bookingCard} key={key} data-hotel-card={key}>
                        <a className={styles.hotelBookingLink} href={`/destination/${hotel.city}/hotel/${hotel.hotelId}`}>
                          <img src={hotel.img} alt={hotel.title} />
                          <div className={`${styles.cardBody} ${styles.hotelCardInfo}`}>{details}</div>
                        </a>
                        {hotel.googleRatingAvailable && hotel.hotelId && <div className={styles.hotelRatingSlot}>
                          <GoogleHotelRating hotelId={hotel.hotelId} hotelName={hotel.title} googleMapsUrl={hotel.googleMapsUrl} />
                        </div>}
                        <div className={`${styles.hotelFooterLink} ${styles.cardFooter}`}>
                          {hotel.hotelId && <HotelPriceLink hotelId={hotel.hotelId} />}
                          <a href={`/destination/${hotel.city}/hotel/${hotel.hotelId}`}>View hotel</a>
                        </div>
                      </article> : <a className={styles.bookingCard} key={key} {...linkProps}>
                        <img src={hotel.img} alt={hotel.title} />
                        <div className={styles.cardBody}>
                          {details}
                          <div className={styles.metaRow}>
                            {hotel.rating != null && <span>{hotel.rating} rating</span>}
                            {hotel.reviews != null && <span>{hotel.reviews.toLocaleString()} reviews</span>}
                          </div>
                          {footer}
                        </div>
                      </a>;
                    })}
                  </div>
                  {filteredHotels.length === 0 && <div className={styles.emptyState}>
                    <p>No hotels match those filters.</p>
                    {hasHotelFilters && <button type="button" className={styles.clearFilters} onClick={clearHotelFilters}>Clear filters</button>}
                  </div>}
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
                      <a
                        className={styles.bookingCard}
                        key={activity.title}
                        href={activity.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-booking-type="activity"
                        data-item-name={activity.title}
                      >
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
              {config.categoryRoutes ? <Link prefetch={config.category ? false : undefined} href={config.categoryRoutes[rail.nextStep.toTab]}>{rail.nextStep.label}</Link> : <button type="button" onClick={() => chooseTab(rail.nextStep.toTab)}>{rail.nextStep.label}</button>}
              <div className={styles.guideLinks}>
                <h3>Helpful guides</h3>
                {rail.guides.map((guide) => (
                  <Link prefetch={config.category ? false : undefined} key={guide.href} href={guide.href}>{guide.label}</Link>
                ))}
              </div>
            </aside>
          </div>
        </section>

        {faqSection}

        <section className={`${styles.related} ${config.category ? styles.categoryRelated : ""}`} aria-label={`Related ${cityName} guides`}>
          <div>
            <p className={styles.eyebrow}>Keep planning</p>
            <h2>Plan your {cityName} trip</h2>
          </div>
          <div className={styles.relatedGrid}>
            {relatedGroups.map((group) => (
              <div className={styles.relatedGroup} key={group.heading}>
                <h3>{group.heading}</h3>
                {group.links.map((link) => (
                  <Link prefetch={config.category ? false : undefined} key={link.href} href={link.href}>{link.label}</Link>
                ))}
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer prefetch={config.category ? false : undefined} />
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
