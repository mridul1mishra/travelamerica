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

const lvBookingFaq = <FAQAccordion faqs={faqData} />;

export default function LasVegasBookingsClient() {
  return <BookingClient config={config} faqSection={lvBookingFaq} />;
}
