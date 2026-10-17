"use client";

import BookingClient, { type CityBookingConfig } from "./components/BookingClient/BookingClient";
import FAQAccordion from "./components/FAQAccordion/FAQAccordion";
import faqData from "@/content/destination/lasvegas/booking/faq/faqsection.json";
import bookFlights from "@/content/cities/lasvegas/bookflights.json";
import thingsToDoData from "@/content/cities/lasvegas/thingstodo.json";
import { lasvegasHotelAreaPresets } from "@/app/lib/lasvegasHotelAreas";

const config: CityBookingConfig = {
  cityName: "Las Vegas",
  cityHref: "/destination/lasvegas",
  bookingHref: "/destination/lasvegas/hotel",
  headerImage: "/data/majorcities/lasvegas/assets/lasvegas.webp",
  bannerText: "Book your Las Vegas trip",
  pageTitle: "Book Your Las Vegas Trip",
  tabs: [
    { key: "flights", label: "Flights", icon: "plane" },
    { key: "hotels", label: "Hotels", icon: "hotel" },
    { key: "activities", label: "Things to Do", icon: "ticket" },
  ],
  tabRail: {
    flights: {
      nextStep: { label: "Next: book your hotel", toTab: "hotels" },
      guides: [
        { href: "/destination/lasvegas/things-to-do", label: "Top things to do in Las Vegas" },
        { href: "/destination/lasvegas/neighborhood-guide", label: "Las Vegas neighborhood guide" },
        { href: "/destination/lasvegas/safety-guide", label: "Las Vegas safety tips" },
      ],
    },
    hotels: {
      nextStep: { label: "Next: things to do in Las Vegas", toTab: "activities" },
      guides: [
        { href: "/destination/lasvegas/best-areas-to-stay", label: "Best areas to stay in Las Vegas" },
        { href: "/destination/lasvegas/neighborhood-guide", label: "Las Vegas neighborhood guide" },
        { href: "/destination/lasvegas/safety-guide", label: "Safe neighborhoods" },
      ],
    },
    activities: {
      nextStep: { label: "Compare return flights", toTab: "flights" },
      guides: [
        { href: "/destination/lasvegas/things-to-do", label: "Full Las Vegas attractions guide" },
        { href: "/destination/lasvegas/landmark", label: "Top Las Vegas landmarks" },
        { href: "/destination/lasvegas/food", label: "Where to eat in Las Vegas" },
      ],
    },
  },
  relatedGroups: [
    {
      heading: "Plan",
      links: [
        { href: "/destination/lasvegas/things-to-do", label: "Top things to do in Las Vegas" },
        { href: "/destination/lasvegas/landmark", label: "Best landmarks on the Strip" },
        { href: "/destination/lasvegas/best-areas-to-stay", label: "Best areas to stay" },
      ],
    },
    {
      heading: "Get around",
      links: [
        { href: "/destination/lasvegas/itinerary", label: "3-day Las Vegas itinerary" },
        { href: "/destination/lasvegas/solo-itinerary", label: "Solo Las Vegas itinerary" },
        { href: "/destination/lasvegas/safety-guide", label: "Las Vegas safety guide" },
      ],
    },
    {
      heading: "Explore",
      links: [
        { href: "/destination/lasvegas/things-to-do", label: "Hoover Dam & Grand Canyon tours" },
        { href: "/destination/lasvegas/food", label: "Where to eat in Las Vegas" },
        { href: "/destination/lasvegas/itinerary", label: "3-day Las Vegas itinerary" },
      ],
    },
  ],
  bookingTips: [
    { heading: "Flights", text: "LAS is the practical airport. Book domestic flights about 5-7 weeks ahead." },
    { heading: "Hotels", text: "Resort fees can add $35-50/night, so compare the full nightly cost." },
    { heading: "Activities", text: "Book Sphere, Cirque, clubs, and pool parties earlier than casual attractions." },
  ],
  flights: bookFlights as CityBookingConfig["flights"],
  hotels: [],
  hotelListingHref: "/destination/lasvegas/hotel",
  hotelCount: 50,
  activities: thingsToDoData as CityBookingConfig["activities"],
};

type Category = "hotels" | "flights" | "activities";

const routes: Record<Category, string> = {
  hotels: "/destination/lasvegas/hotel",
  flights: "/destination/lasvegas/flight",
  activities: "/destination/lasvegas/tours-and-tickets",
};

const titles = {
  flights: "Compare Flights to Las Vegas",
  activities: "Book Las Vegas Activities, Tours & Tickets",
};

const intros = {
  flights: "Compare sample fares to Las Vegas and plan your airport transfer. Check current prices with the provider.",
  activities: "Browse Las Vegas tours, attractions, and tickets. Compare experiences by category and check availability with the provider.",
};

export default function LasVegasBookingsClient({ hotels, category = hotels ? "hotels" : "flights" }: { hotels?: CityBookingConfig["hotels"]; category?: Category }) {
  if (category === "hotels") return <BookingClient config={{ ...config, hotels: hotels ?? [], category: "hotels", onDemandGoogleRatings: true, bookingHref: routes.hotels,
    hotelAreaPresets: lasvegasHotelAreaPresets, pageTitle: "Find Your Las Vegas Hotel", introText: "Browse Las Vegas hotels and sign in to check current prices with the provider.", bookingTips: config.bookingTips?.filter(tip => tip.heading === "Hotels"),
    categoryRoutes: routes,
  }} />;
  return <BookingClient config={{ ...config, category, categoryRoutes: routes, bookingHref: routes[category],
    bannerText: titles[category], pageTitle: titles[category], introText: intros[category],
    bookingTips: config.bookingTips?.filter(tip => tip.heading !== "Hotels"),
  }} faqSection={<FAQAccordion faqs={faqData} />} />;
}
