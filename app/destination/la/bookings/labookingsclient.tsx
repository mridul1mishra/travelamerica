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

const laBookingFaq = <FAQAccordion faqs={faqData} />;

export default function LABookingsClient() {
  return <BookingClient config={config} faqSection={laBookingFaq} />;
}
