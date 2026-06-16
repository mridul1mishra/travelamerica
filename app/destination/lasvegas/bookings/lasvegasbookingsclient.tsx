"use client";

// Thin city config wrapper — all booking UI lives in BookingClient.
import BookingClient, { type CityBookingConfig } from "@/app/components/booking/BookingClient";
import FAQAccordion from './components/FAQAccordion/FAQAccordion';
import faqData from '@/content/destination/lasvegas/booking/faq/faqsection.json';
import bookFlights from "@/content/cities/lasvegas/bookflights.json";
import hotelsData from "@/content/cities/lasvegas/hotels.json";
import thingsToDoData from "@/content/cities/lasvegas/thingstodo.json";
import styles from "./lasvegasbookings.module.css";

const config: CityBookingConfig = {
  cityName: "Las Vegas",
  cityHref: "/destination/lasvegas",
  bookingHref: "/destination/lasvegas/bookings",
  headerImage: "/data/majorcities/lasvegas/assets/lasvegas.webp",
  bannerText: "Book your Las Vegas trip",
  headerVariant: "wide",
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
  <section className={styles.introCard}>
    <p className={styles.eyebrow}>Before you book</p>
    <h2>
      Las Vegas prices are event-driven. Check the calendar first.
    </h2>
    <p className={styles.introText}>
      Las Vegas hotel pricing is driven almost entirely by events — the same room can be $80 on a Tuesday
      and $400 on a Friday. Avoid New Year&apos;s Eve, Super Bowl weekend, NFR (early December), CES (January),
      and major boxing or UFC events. Monday–Thursday stays on non-event weeks are typically 40–60% cheaper
      than the same hotel on a weekend.
    </p>
    <div className={styles.tipGrid}>
      <article>
        <span>Flights</span>
        <p>LAS is the practical airport. Book domestic flights about 5-7 weeks ahead.</p>
      </article>
      <article>
        <span>Hotels</span>
        <p>Resort fees add $35-50/night, so compare the full nightly cost.</p>
      </article>
      <article>
        <span>Activities</span>
        <p>Book Sphere, Cirque, clubs, and pool parties earlier than casual attractions.</p>
      </article>
    </div>
  </section>
);

const lvBookingFaq = <FAQAccordion faqs={faqData} />;

export default function LasVegasBookingsClient() {
  return <BookingClient config={config} introSection={lvBookingIntro} faqSection={lvBookingFaq} />;
}
