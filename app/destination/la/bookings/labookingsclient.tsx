"use client";

// Thin city config wrapper — all booking UI lives in BookingClient.
import BookingClient, { type CityBookingConfig } from "@/app/components/booking/BookingClient";
import FAQAccordion from '@/app/components/destination/faqsection/faqsection';
import faqData from '@/content/destination/la/booking/faq/faqsection.json';
import bookFlights from "@/content/cities/losangeles/booking/bookflights.json";
import hotelsData from "@/content/cities/losangeles/booking/hotels.json";
import thingsToDoData from "@/content/cities/losangeles/booking/thingstodo.json";

const config: CityBookingConfig = {
  cityName: "Los Angeles",
  cityHref: "/destination/la",
  bookingHref: "/destination/la/bookings",
  headerImage: "/data/majorcities/losangeles/assets/losangeles.webp",
  bannerText: "Book your Los Angeles trip",
  pageTitle: "Book Your Los Angeles Trip",
  tabs: [
    { key: "flights",    label: "Flights",       icon: "✈️" },
    { key: "hotels",     label: "Hotels",        icon: "🏨" },
    { key: "activities", label: "Things to Do",  icon: "🌴" },
  ],
  tabRail: {
    flights: {
      nextStep: { label: "Next: book your hotel →", toTab: "hotels" },
      guides: [
        { href: "/destination/la/things-to-do",   label: "Top things to do in LA" },
        { href: "/destination/la/neighborhood-guide", label: "LA neighborhood guide" },
        { href: "/destination/la/la-metro-map",   label: "Getting from LAX airport" },
      ],
    },
    hotels: {
      nextStep: { label: "Next: things to do in LA →", toTab: "activities" },
      guides: [
        { href: "/destination/la/best-areas-to-stay", label: "Best areas to stay in LA" },
        { href: "/destination/la/neighborhood-guide",  label: "Compare LA neighborhoods" },
        { href: "/destination/la/safety-guide",        label: "LA safety guide" },
      ],
    },
    activities: {
      nextStep: { label: "Compare return flights →", toTab: "flights" },
      guides: [
        { href: "/destination/la/things-to-do",    label: "Full LA attractions guide" },
        { href: "/destination/la/landmark",        label: "Top LA landmarks" },
        { href: "/destination/la/food",            label: "Where to eat in LA" },
      ],
    },
  },
  relatedGroups: [
    {
      heading: "Plan",
      links: [
        { href: "/destination/la/things-to-do",       label: "Top things to do in LA" },
        { href: "/destination/la/neighborhood-guide",  label: "LA neighborhood guide" },
        { href: "/destination/la/best-areas-to-stay", label: "Best areas to stay" },
      ],
    },
    {
      heading: "Get around",
      links: [
        { href: "/destination/la/la-metro-map",   label: "Getting from LAX airport" },
        { href: "/destination/la/itinerary",      label: "4-day LA itinerary" },
        { href: "/destination/la/safety-guide",   label: "LA safety guide" },
      ],
    },
    {
      heading: "Explore",
      links: [
        { href: "/destination/la/landmark",  label: "Top LA landmarks" },
        { href: "/destination/la/food",      label: "Where to eat in LA" },
        { href: "/destination/la/itinerary", label: "4-day LA itinerary" },
      ],
    },
  ],
  flights:    bookFlights    as CityBookingConfig["flights"],
  hotels:     hotelsData     as CityBookingConfig["hotels"],
  activities: thingsToDoData as CityBookingConfig["activities"],
};

const laBookingIntro = (
  <section style={{ maxWidth: '720px', margin: '0 auto 32px', padding: '0 16px' }}>
    <h2 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '12px' }}>
      Book your Los Angeles trip
    </h2>
    <p style={{ color: '#555', lineHeight: 1.6, marginBottom: '12px' }}>
      LAX flights are most competitive 6–8 weeks out for domestic and 10–12 weeks for international.
      Avoid booking during awards season (late January–February), the LA Marathon weekend (March),
      and Thanksgiving week — hotel rates spike 30–50%. Mid-January and late August are the lowest-demand
      windows for both flights and hotels.
    </p>
    <ul style={{ color: '#555', lineHeight: 1.8, paddingLeft: '20px', marginBottom: '12px' }}>
      <li><strong>Airport:</strong> LAX is the main hub. Burbank (BUR) is faster for the Valley and Studio City — no international flights but far less congestion. Long Beach (LGB) works for the south side of the city.</li>
      <li><strong>Car vs. rideshare:</strong> If you're staying in one area (Santa Monica, Silver Lake, Downtown), rideshare is fine. If you're crossing the city daily, a rental car saves time — but budget $25–40/day for parking on top of the rental.</li>
      <li><strong>Hotels:</strong> Santa Monica and Venice command a premium but put you near the beach and walkable restaurants. Downtown and Koreatown offer better value with Metro access. Mid-Wilshire is the best mid-range option for central positioning.</li>
    </ul>
  </section>
);

const laBookingFaq = <FAQAccordion faqs={faqData} />;

export default function LABookingsClient() {
  return <BookingClient config={config} introSection={laBookingIntro} faqSection={laBookingFaq} />;
}
