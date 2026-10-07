"use client";

import BookingClient, { type CityBookingConfig } from "./components/BookingClient/BookingClient";
import FAQAccordion from "./components/FAQAccordion";
import faqData from "@/content/destination/nyc/booking/faq/faqsection.json";
import bookFlights from "@/content/cities/newyork/bookflights.json";
import thingsToDoData from "@/content/cities/newyork/thingstodo.json";

const config: CityBookingConfig = {
  cityName: "New York",
  cityHref: "/destination/nyc",
  bookingHref: "/destination/nyc/booking",
  headerImage: "/data/majorcities/newyork/assets/newyork.jpeg",
  bannerText: "Book your New York trip",
  pageTitle: "Book Your New York Trip: Flights, Hotels & Things to Do",
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
    { heading: "Start with hotel zone", text: "Pick the area first: Midtown East for first-timers, Upper West Side for calm nights, Chelsea for food, or Long Island City for value." },
    { heading: "Check airport transfer", text: "JFK, LaGuardia, and Newark can all work. Choose by total transfer time to your hotel, not only airfare." },
    { heading: "Anchor the itinerary", text: "Book the fixed pieces first: hotel, flights, Broadway or observation deck, then keep neighborhood time flexible." },
  ],
  flights: bookFlights as CityBookingConfig["flights"],
  hotels: [],
  activities: thingsToDoData as CityBookingConfig["activities"],
};

export default function BookFlightsClient({ category = "flights", hotels = [] }: { hotels?: CityBookingConfig["hotels"]; category?: "flights" | "hotels" | "activities" }) {
  const titles = { flights: "Compare Flights to New York City", hotels: "Find Your New York City Hotel", activities: "Book NYC Activities, Tours & Tickets" };
  const intros = { flights: "Compare sample fares to New York and plan your airport transfer. Check current prices with the provider.", hotels: "Find a NYC hotel that fits your neighborhood, budget, and travel plans. Filter stays by price and rating, then check current rates with the provider.", activities: "Browse NYC tours, museums, and attraction tickets. Compare experiences by category and check availability with the provider." };
  const routes = { flights: "/destination/nyc/flight", hotels: "/destination/nyc/hotel", activities: "/destination/nyc/tours-and-tickets" };
  const focused = { ...config, hotels, category, categoryRoutes: routes, bookingHref: routes[category], bannerText: titles[category], pageTitle: titles[category], introText: intros[category], bookingTips: config.bookingTips?.filter((_, index) => index === (category === "hotels" ? 0 : category === "flights" ? 1 : 2)) };
  const faqs = faqData.filter((faq) => category === "hotels" ? /hotel in/i.test(faq.question) : category === "flights" ? /fly/i.test(faq.question) : /activities/i.test(faq.question));
  return <BookingClient config={focused} faqSection={<FAQAccordion faqs={faqs} />} />;
}
