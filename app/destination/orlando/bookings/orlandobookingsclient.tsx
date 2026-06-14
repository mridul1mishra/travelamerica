"use client";

// Thin city config wrapper — all booking UI lives in BookingClient.
import BookingClient, { type CityBookingConfig } from "@/app/components/booking/BookingClient";
import FAQAccordion from '@/app/components/destination/faqsection/faqsection';
import faqData from '@/content/destination/orlando/booking/faq/faqsection.json';
import bookFlights from "@/content/cities/orlando/bookflights.json";
import hotelsData from "@/content/cities/orlando/hotels.json";
import thingsToDoData from "@/content/cities/orlando/thingstodo.json";

const config: CityBookingConfig = {
  cityName: "Orlando",
  cityHref: "/destination/orlando",
  bookingHref: "/destination/orlando/bookings",
  headerImage: "/data/majorcities/orlando/assets/orlando.webp",
  bannerText: "Book your Orlando trip",
  pageTitle: "Book Your Orlando Trip",
  tabs: [
    { key: "flights",    label: "Flights",       icon: "✈️" },
    { key: "hotels",     label: "Hotels",        icon: "🏨" },
    { key: "activities", label: "Things to Do",  icon: "🎡" },
  ],
  tabRail: {
    flights: {
      nextStep: { label: "Next: book your hotel →", toTab: "hotels" },
      guides: [
        { href: "/destination/orlando/things-to-do",   label: "Top things to do in Orlando" },
        { href: "/destination/orlando/neighborhood-guide", label: "Orlando neighborhood guide" },
        { href: "/destination/orlando/safety-guide",   label: "Orlando safety tips" },
      ],
    },
    hotels: {
      nextStep: { label: "Next: things to do in Orlando →", toTab: "activities" },
      guides: [
        { href: "/destination/orlando/best-areas-to-stay", label: "Best areas to stay in Orlando" },
        { href: "/destination/orlando/neighborhood-guide",  label: "Orlando neighborhood guide" },
        { href: "/destination/orlando/safety-guide",        label: "Safe neighborhoods" },
      ],
    },
    activities: {
      nextStep: { label: "Compare return flights →", toTab: "flights" },
      guides: [
        { href: "/destination/orlando/things-to-do", label: "Full Orlando attractions guide" },
        { href: "/destination/orlando/landmark",     label: "Top Orlando landmarks" },
        { href: "/destination/orlando/food",         label: "Where to eat in Orlando" },
      ],
    },
  },
  relatedGroups: [
    {
      heading: "Plan",
      links: [
        { href: "/destination/orlando/things-to-do",       label: "Top things to do in Orlando" },
        { href: "/destination/orlando/landmark",           label: "Orlando theme parks & landmarks" },
        { href: "/destination/orlando/best-areas-to-stay", label: "Best areas to stay" },
      ],
    },
    {
      heading: "Get around",
      links: [
        { href: "/destination/orlando/itinerary",      label: "5-day Orlando itinerary" },
        { href: "/destination/orlando/solo-itinerary", label: "Solo Orlando itinerary" },
        { href: "/destination/orlando/safety-guide",   label: "Orlando safety guide" },
      ],
    },
    {
      heading: "Explore",
      links: [
        { href: "/destination/orlando/things-to-do", label: "Disney vs Universal guide" },
        { href: "/destination/orlando/food",         label: "Where to eat in Orlando" },
        { href: "/destination/orlando/itinerary",    label: "5-day Orlando itinerary" },
      ],
    },
  ],
  flights:    bookFlights    as CityBookingConfig["flights"],
  hotels:     hotelsData     as CityBookingConfig["hotels"],
  activities: thingsToDoData as CityBookingConfig["activities"],
};

const orlandoBookingFaq = <FAQAccordion faqs={faqData} />;

export default function OrlandoBookingsClient() {
  return <BookingClient config={config} faqSection={orlandoBookingFaq} />;
}
