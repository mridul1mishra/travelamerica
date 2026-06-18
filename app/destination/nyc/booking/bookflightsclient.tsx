"use client";

import BookingClient, { type CityBookingConfig } from "./components/BookingClient/BookingClient";
import FAQAccordion from "./components/FAQAccordion";
import faqData from "@/content/destination/nyc/booking/faq/faqsection.json";
import bookFlights from "@/content/cities/newyork/bookflights.json";
import hotelsData from "@/content/cities/newyork/hotels.json";
import thingsToDoData from "@/content/cities/newyork/thingstodo.json";

const config: CityBookingConfig = {
  cityName: "New York",
  cityHref: "/destination/nyc",
  bookingHref: "/destination/nyc/booking",
  headerImage: "/data/majorcities/newyork/assets/newyork.jpeg",
  bannerText: "Book your New York trip",
  pageTitle: "Book Your New York Trip",
  tabs: [
    { key: "flights", label: "Flights", icon: "plane" },
    { key: "hotels", label: "Hotels", icon: "hotel" },
    { key: "activities", label: "Things to Do", icon: "ticket" },
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
  bookingTips: [
    { heading: "Airports", text: "JFK, LaGuardia, and Newark can all work. Choose by transfer time, not only airfare." },
    { heading: "Transit", text: "Most first-time trips are easier by subway and walking than by rental car." },
    { heading: "Hotels", text: "Midtown is convenient, but Chelsea, Flatiron, Downtown Brooklyn, and Long Island City can be better value." },
  ],
  flights: bookFlights as CityBookingConfig["flights"],
  hotels: hotelsData as CityBookingConfig["hotels"],
  activities: thingsToDoData as CityBookingConfig["activities"],
};

export default function BookFlightsClient() {
  return <BookingClient config={config} faqSection={<FAQAccordion faqs={faqData} />} />;
}
