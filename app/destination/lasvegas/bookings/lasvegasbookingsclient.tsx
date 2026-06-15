"use client";

// Thin city config wrapper — all booking UI lives in BookingClient.
import BookingClient, { type CityBookingConfig } from "@/app/components/booking/BookingClient";
import FAQAccordion from '@/app/components/destination/faqsection/faqsection';
import faqData from '@/content/destination/lasvegas/booking/faq/faqsection.json';
import bookFlights from "@/content/cities/lasvegas/bookflights.json";
import hotelsData from "@/content/cities/lasvegas/hotels.json";
import thingsToDoData from "@/content/cities/lasvegas/thingstodo.json";

const config: CityBookingConfig = {
  cityName: "Las Vegas",
  cityHref: "/destination/lasvegas",
  bookingHref: "/destination/lasvegas/bookings",
  headerImage: "/data/majorcities/lasvegas/assets/lasvegas.webp",
  bannerText: "Book your Las Vegas trip",
  pageTitle: "Book Your Las Vegas Trip",
  tabs: [
    { key: "flights",    label: "Flights",       icon: "✈️" },
    { key: "hotels",     label: "Hotels",        icon: "🏨" },
    { key: "activities", label: "Things to Do",  icon: "🎰" },
  ],
  tabRail: {
    flights: {
      nextStep: { label: "Next: book your hotel →", toTab: "hotels" },
      guides: [
        { href: "/destination/lasvegas/things-to-do",     label: "Top things to do in Las Vegas" },
        { href: "/destination/lasvegas/neighborhood-guide", label: "Las Vegas neighborhood guide" },
        { href: "/destination/lasvegas/safety-guide",     label: "Las Vegas safety tips" },
      ],
    },
    hotels: {
      nextStep: { label: "Next: things to do in Las Vegas →", toTab: "activities" },
      guides: [
        { href: "/destination/lasvegas/best-areas-to-stay", label: "Best areas to stay in Las Vegas" },
        { href: "/destination/lasvegas/neighborhood-guide",  label: "Las Vegas neighborhood guide" },
        { href: "/destination/lasvegas/safety-guide",        label: "Safe neighborhoods" },
      ],
    },
    activities: {
      nextStep: { label: "Compare return flights →", toTab: "flights" },
      guides: [
        { href: "/destination/lasvegas/things-to-do", label: "Full Las Vegas attractions guide" },
        { href: "/destination/lasvegas/landmark",     label: "Top Las Vegas landmarks" },
        { href: "/destination/lasvegas/food",         label: "Where to eat in Las Vegas" },
      ],
    },
  },
  relatedGroups: [
    {
      heading: "Plan",
      links: [
        { href: "/destination/lasvegas/things-to-do",       label: "Top things to do in Las Vegas" },
        { href: "/destination/lasvegas/landmark",           label: "Best landmarks on the Strip" },
        { href: "/destination/lasvegas/best-areas-to-stay", label: "Best areas to stay" },
      ],
    },
    {
      heading: "Get around",
      links: [
        { href: "/destination/lasvegas/itinerary",    label: "3-day Las Vegas itinerary" },
        { href: "/destination/lasvegas/solo-itinerary", label: "Solo Las Vegas itinerary" },
        { href: "/destination/lasvegas/safety-guide", label: "Las Vegas safety guide" },
      ],
    },
    {
      heading: "Explore",
      links: [
        { href: "/destination/lasvegas/things-to-do", label: "Hoover Dam & Grand Canyon tours" },
        { href: "/destination/lasvegas/food",         label: "Where to eat in Las Vegas" },
        { href: "/destination/lasvegas/itinerary",    label: "3-day Las Vegas itinerary" },
      ],
    },
  ],
  flights:    bookFlights    as CityBookingConfig["flights"],
  hotels:     hotelsData     as CityBookingConfig["hotels"],
  activities: thingsToDoData as CityBookingConfig["activities"],
};

const lvBookingIntro = (
  <section style={{ maxWidth: '720px', margin: '0 auto 32px', padding: '0 16px' }}>
    <h2 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '12px' }}>
      Book your Las Vegas trip
    </h2>
    <p style={{ color: '#555', lineHeight: 1.6, marginBottom: '12px' }}>
      Las Vegas hotel pricing is driven almost entirely by events — the same room can be $80 on a Tuesday
      and $400 on a Friday. Avoid New Year's Eve, Super Bowl weekend, NFR (early December), CES (January),
      and major boxing or UFC events. Monday–Thursday stays on non-event weeks are typically 40–60% cheaper
      than the same hotel on a weekend.
    </p>
    <ul style={{ color: '#555', lineHeight: 1.8, paddingLeft: '20px', marginBottom: '12px' }}>
      <li><strong>Flights:</strong> Harry Reid International (LAS) is the only practical option — it's 10 minutes from the Strip. Book 5–7 weeks ahead for domestic; Las Vegas is one of the most competitive flight routes in the US so prices rarely spike far in advance.</li>
      <li><strong>Hotels:</strong> On-Strip hotels charge resort fees ($35–50/night) on top of the room rate — factor this in when comparing prices. Off-Strip options like the Palms or Rio have dropped fees and offer 30–40% savings with a $10 Uber to the Strip.</li>
      <li><strong>Activities:</strong> Book show tickets 2–4 weeks ahead. Sphere and Cirque residencies sell out; most other shows have same-day availability. For clubs and pool parties, Friday and Saturday are always busier — Sunday is the best compromise of crowd size and atmosphere.</li>
    </ul>
  </section>
);

const lvBookingFaq = <FAQAccordion faqs={faqData} />;

export default function LasVegasBookingsClient() {
  return <BookingClient config={config} introSection={lvBookingIntro} faqSection={lvBookingFaq} />;
}
