"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import styles from "./booking.module.css";
import "./components/BookingHeader.css";
import "./components/propertylisting.css";
import ActivitiesTab from "./components/ActivitiesTab";
import BookingIntro from "./components/BookingIntro";
import BookingTabs from "./components/BookingTabs";
import BreadcrumbNav from "./components/BreadcrumbNav";
import FAQAccordion from "./components/FAQAccordion";
import FlightsTab from "./components/FlightsTab";
import GuideRail from "./components/GuideRail";
import HeroBanner from "./components/HeroBanner/HeroBanner";
import HotelsTab from "./components/HotelsTab";
import NavigationHeader from "./components/NavigationHeader/NavigationHeader";
import RelatedGuides from "./components/RelatedGuides";
import type { CityBookingConfig, TabKey } from "./components/bookingTypes";
import faqData from "@/content/destination/nyc/booking/faq/faqsection.json";
import bookFlights from "@/content/cities/newyork/bookflights.json";
import hotelsData from "@/content/cities/newyork/hotels.json";
import thingsToDoData from "@/content/cities/newyork/thingstodo.json";

function getInitialTab(param: string | null, validTabs: Set<TabKey>): TabKey {
  if (param && validTabs.has(param as TabKey)) return param as TabKey;
  return "flights";
}

const config: CityBookingConfig = {
  cityName: "New York",
  cityHref: "/destination/nyc",
  bookingHref: "/destination/nyc/booking",
  headerImage: "/data/majorcities/newyork/assets/newyork.jpeg",
  bannerText: "Book your New York trip",
  pageTitle: "",
  tabs: [
    { key: "flights", label: "Flights", icon: "" },
    { key: "hotels", label: "Hotels", icon: "" },
    { key: "activities", label: "Things to Do", icon: "" },
  ],
  tabRail: {
    flights: {
      nextStep: { label: "Next: book your hotel", toTab: "hotels" },
      guides: [
        { href: "/destination/nyc/nyc-subway-map", label: "Getting from the airport" },
        { href: "/destination/nyc/solo-itinerary", label: "Plan your days: solo itinerary" },
        { href: "/destination/nyc/nyc-safety-guide", label: "NYC safety tips" },
      ],
    },
    hotels: {
      nextStep: { label: "Next: things to do in NYC", toTab: "activities" },
      guides: [
        { href: "/destination/nyc/best-areas-to-stay", label: "Where to stay in NYC" },
        { href: "/destination/nyc/neighborhood-guide", label: "Compare neighborhoods" },
        { href: "/destination/nyc/is-nyc-safe-at-night", label: "Safe areas at night" },
      ],
    },
    activities: {
      nextStep: { label: "Compare return flights", toTab: "flights" },
      guides: [
        { href: "/destination/nyc/things-to-do", label: "Full NYC attractions guide" },
        { href: "/destination/nyc/landmark", label: "Top NYC landmarks" },
        { href: "/destination/nyc/food", label: "Where to eat in NYC" },
      ],
    },
  },
  relatedGroups: [
    {
      heading: "Plan",
      links: [
        { href: "/destination/nyc/solo-itinerary", label: "Solo NYC itinerary" },
        { href: "/destination/nyc/group-travel#itinerary", label: "NYC group travel guide" },
        { href: "/destination/nyc/neighborhood-guide", label: "NYC neighborhood guide" },
        { href: "/destination/nyc/best-areas-to-stay", label: "Best areas to stay in NYC" },
      ],
    },
    {
      heading: "Stay safe & get around",
      links: [
        { href: "/destination/nyc/is-nyc-safe-at-night", label: "Is NYC safe at night?" },
        { href: "/destination/nyc/nyc-safety-guide", label: "NYC safety guide" },
        { href: "/destination/nyc/nyc-subway-map", label: "NYC subway map" },
      ],
    },
    {
      heading: "Explore",
      links: [
        { href: "/destination/nyc/things-to-do", label: "Things to do in NYC" },
        { href: "/destination/nyc/landmark", label: "Top NYC landmarks" },
        { href: "/destination/nyc/food", label: "Where to eat in NYC" },
      ],
    },
  ],
  flights: bookFlights as CityBookingConfig["flights"],
  hotels: hotelsData as CityBookingConfig["hotels"],
  activities: thingsToDoData as CityBookingConfig["activities"],
};

const nycBookingFaq = <FAQAccordion faqs={faqData} />;

function BookFlightsContent() {
  const searchParams = useSearchParams();
  const validTabs = new Set<TabKey>(config.tabs.map((tab) => tab.key));
  const [activeTab, setActiveTab] = useState<TabKey>(() =>
    getInitialTab(searchParams.get("tab")?.toLowerCase() ?? null, validTabs)
  );

  return (
    <div className="App">
      <NavigationHeader />
      <HeroBanner image={config.headerImage} bannerText={config.bannerText} variant={config.headerVariant} />
      <BreadcrumbNav cityName={config.cityName} cityHref={config.cityHref} />

      {config.pageTitle ? <h1 className={styles.pageHeading}>{config.pageTitle}</h1> : null}
      <BookingIntro />

      <BookingTabs tabs={config.tabs} activeTab={activeTab} onSelectTab={setActiveTab} />

      {activeTab === "flights" ? <FlightsTab flights={config.flights} /> : null}
      {activeTab === "hotels" ? <HotelsTab cityName={config.cityName} hotels={config.hotels} /> : null}
      {activeTab === "activities" ? (
        <ActivitiesTab cityName={config.cityName} activities={config.activities} />
      ) : null}

      <GuideRail rail={config.tabRail[activeTab]} onSelectTab={setActiveTab} />
      <RelatedGuides cityName={config.cityName} groups={config.relatedGroups} />

      {nycBookingFaq}
    </div>
  );
}

export default function BookFlightsClient() {
  return (
    <Suspense>
      <BookFlightsContent />
    </Suspense>
  );
}
