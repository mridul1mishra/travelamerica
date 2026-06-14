"use client";

// Thin city config wrapper — all booking UI lives in BookingClient.
import BookingClient, { type CityBookingConfig } from "@/app/components/booking/BookingClient";
import bookFlights from "@/content/cities/newyork/bookflights.json";
import hotelsData from "@/content/cities/newyork/hotels.json";
import thingsToDoData from "@/content/cities/newyork/thingstodo.json";

const config: CityBookingConfig = {
  cityName: "New York",
  cityHref: "/destination/nyc",
  bookingHref: "/destination/nyc/booking",
  headerImage: "/data/majorcities/newyork/assets/newyork.jpeg",
  bannerText: "Book your New York trip",
  pageTitle: "",
  tabs: [
    { key: "flights",    label: "Flights",       icon: "✈️" },
    { key: "hotels",     label: "Hotels",        icon: "🏨" },
    { key: "activities", label: "Things to Do",  icon: "🗽" },
  ],
  tabRail: {
    flights: {
      nextStep: { label: "Next: book your hotel →", toTab: "hotels" },
      guides: [
        { href: "/destination/nyc/nyc-subway-map",   label: "Getting from the airport" },
        { href: "/destination/nyc/solo-itinerary",   label: "Plan your days: solo itinerary" },
        { href: "/destination/nyc/nyc-safety-guide", label: "NYC safety tips" },
      ],
    },
    hotels: {
      nextStep: { label: "Next: things to do in NYC →", toTab: "activities" },
      guides: [
        { href: "/destination/nyc/best-areas-to-stay",  label: "Where to stay in NYC" },
        { href: "/destination/nyc/neighborhood-guide",  label: "Compare neighborhoods" },
        { href: "/destination/nyc/is-nyc-safe-at-night", label: "Safe areas at night" },
      ],
    },
    activities: {
      nextStep: { label: "Compare return flights →", toTab: "flights" },
      guides: [
        { href: "/destination/nyc/things-to-do", label: "Full NYC attractions guide" },
        { href: "/destination/nyc/landmark",     label: "Top NYC landmarks" },
        { href: "/destination/nyc/food",         label: "Where to eat in NYC" },
      ],
    },
  },
  relatedGroups: [
    {
      heading: "Plan",
      links: [
        { href: "/destination/nyc/solo-itinerary",           label: "Solo NYC itinerary" },
        { href: "/destination/nyc/group-travel#itinerary",   label: "NYC group travel guide" },
        { href: "/destination/nyc/neighborhood-guide",       label: "NYC neighborhood guide" },
        { href: "/destination/nyc/best-areas-to-stay",       label: "Best areas to stay in NYC" },
      ],
    },
    {
      heading: "Stay safe & get around",
      links: [
        { href: "/destination/nyc/is-nyc-safe-at-night", label: "Is NYC safe at night?" },
        { href: "/destination/nyc/nyc-safety-guide",     label: "NYC safety guide" },
        { href: "/destination/nyc/nyc-subway-map",       label: "NYC subway map" },
      ],
    },
    {
      heading: "Explore",
      links: [
        { href: "/destination/nyc/things-to-do", label: "Things to do in NYC" },
        { href: "/destination/nyc/landmark",     label: "Top NYC landmarks" },
        { href: "/destination/nyc/food",         label: "Where to eat in NYC" },
      ],
    },
  ],
  flights:    bookFlights as CityBookingConfig["flights"],
  hotels:     hotelsData  as CityBookingConfig["hotels"],
  activities: thingsToDoData as CityBookingConfig["activities"],
};

const nycBookingIntro = (
  <section style={{ maxWidth: '720px', margin: '0 auto 32px', padding: '0 16px' }}>
    <h2 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '12px' }}>
      Book your New York City trip
    </h2>
    <p style={{ color: '#555', lineHeight: 1.6, marginBottom: '12px' }}>
      NYC hotels price unpredictably — the same room can swing 40% depending on the week.
      Avoid booking over major events (UN General Assembly in September, NYC Marathon in
      November, Fashion Week in February and September). Mid-January through March and
      late August are the lowest-demand windows; expect 25–35% below peak rates.
    </p>
    <ul style={{ color: '#555', lineHeight: 1.8, paddingLeft: '20px', marginBottom: '12px' }}>
      <li><strong>Flights:</strong> JFK and EWR typically beat LGA on international and long-haul routes. Book 6–8 weeks ahead for domestic, 10–14 weeks for transatlantic.</li>
      <li><strong>Hotels:</strong> Stay near a subway express stop (1/2/3 on the West Side; 4/5/6 on the East Side; A/C/E for Midtown West) — you'll save time every day.</li>
      <li><strong>Activities:</strong> Book Empire State Building and Statue of Liberty ferry tickets at least 3–5 days ahead. TKTS in Times Square sells same-day Broadway discounts from 30–50% off.</li>
    </ul>
  </section>
);

export default function BookFlightsClient() {
  return <BookingClient config={config} introSection={nycBookingIntro} />;
}
