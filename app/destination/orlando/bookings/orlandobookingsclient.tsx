"use client";

import BookingClient, { type CityBookingConfig } from "./components/BookingClient/BookingClient";
import FAQAccordion from "./components/FAQAccordion/faqsection";
import faqData from "@/content/destination/orlando/booking/faq/faqsection.json";
import bookFlights from "@/content/cities/orlando/bookflights.json";
import thingsToDoData from "@/content/cities/orlando/thingstodo.json";
import { orlandoHotelAreaPresets } from "@/app/lib/orlandoHotelAreas";

const config: CityBookingConfig = {
  cityName: "Orlando",
  cityHref: "/destination/orlando",
  bookingHref: "/destination/orlando/hotel",
  headerImage: "/data/majorcities/orlando/assets/orlando.webp",
  bannerText: "Book your Orlando trip",
  pageTitle: "Book Your Orlando Trip",
  tabs: [
    { key: "flights", label: "Flights", icon: "plane" },
    { key: "hotels", label: "Hotels", icon: "hotel" },
    { key: "activities", label: "Things to Do", icon: "ticket" },
  ],
  tabRail: {
    flights: {
      nextStep: { label: "Next: book your hotel", toTab: "hotels" },
      guides: [
        { href: "/destination/orlando/things-to-do", label: "Top things to do in Orlando" },
        { href: "/destination/orlando/neighborhood-guide", label: "Orlando neighborhood guide" },
        { href: "/destination/orlando/safety-guide", label: "Orlando safety tips" },
      ],
    },
    hotels: {
      nextStep: { label: "Next: things to do in Orlando", toTab: "activities" },
      guides: [
        { href: "/destination/orlando/best-areas-to-stay", label: "Best areas to stay in Orlando" },
        { href: "/destination/orlando/neighborhood-guide", label: "Orlando neighborhood guide" },
        { href: "/destination/orlando/safety-guide", label: "Safe neighborhoods" },
      ],
    },
    activities: {
      nextStep: { label: "Compare return flights", toTab: "flights" },
      guides: [
        { href: "/destination/orlando/things-to-do", label: "Full Orlando attractions guide" },
        { href: "/destination/orlando/landmark", label: "Top Orlando landmarks" },
        { href: "/destination/orlando/food", label: "Where to eat in Orlando" },
      ],
    },
  },
  relatedGroups: [
    {
      heading: "Plan",
      links: [
        { href: "/destination/orlando/things-to-do", label: "Top things to do in Orlando" },
        { href: "/destination/orlando/landmark", label: "Orlando theme parks & landmarks" },
        { href: "/destination/orlando/best-areas-to-stay", label: "Best areas to stay" },
      ],
    },
    {
      heading: "Get around",
      links: [
        { href: "/destination/orlando/itinerary", label: "5-day Orlando itinerary" },
        { href: "/destination/orlando/solo-itinerary", label: "Solo Orlando itinerary" },
        { href: "/destination/orlando/safety-guide", label: "Orlando safety guide" },
      ],
    },
    {
      heading: "Explore",
      links: [
        { href: "/destination/orlando/things-to-do", label: "Disney vs Universal guide" },
        { href: "/destination/orlando/food", label: "Where to eat in Orlando" },
        { href: "/destination/orlando/itinerary", label: "5-day Orlando itinerary" },
      ],
    },
  ],
  bookingTips: [
    { heading: "Airport", text: "MCO is the main hub. Sanford can be cheaper, but often adds 45-55 minutes to transfers." },
    { heading: "Tickets", text: "Disney and Universal tickets are date-priced, so book earlier for busy school-break weeks." },
    { heading: "Hotels", text: "On-site hotels save park time; International Drive is usually better value for shorter trips." },
  ],
  flights: bookFlights as CityBookingConfig["flights"],
  hotels: [],
  hotelListingHref: "/destination/orlando/hotel",
  hotelCount: 50,
  activities: thingsToDoData as CityBookingConfig["activities"],
};

type Category = "hotels" | "flights" | "activities";

const routes: Record<Category, string> = {
  hotels: "/destination/orlando/hotel",
  flights: "/destination/orlando/flight",
  activities: "/destination/orlando/tours-and-tickets",
};

const titles = {
  flights: "Compare Flights to Orlando",
  activities: "Book Orlando Activities, Tours & Tickets",
};

const intros = {
  flights: "Compare sample fares to Orlando and plan your airport transfer. Check current prices with the provider.",
  activities: "Browse Orlando tours, attractions, and tickets. Compare experiences by category and check availability with the provider.",
};

export default function OrlandoBookingsClient({ hotels, category = hotels ? "hotels" : "flights" }: { hotels?: CityBookingConfig["hotels"]; category?: Category }) {
  if (category === "hotels") return <BookingClient config={{ ...config, hotels: hotels ?? [], category: "hotels", onDemandGoogleRatings: true, bookingHref: routes.hotels,
    hotelAreaPresets: orlandoHotelAreaPresets, pageTitle: "Find Your Orlando Hotel", introText: "Browse Orlando hotels and sign in to check current prices with the provider.", bookingTips: config.bookingTips?.filter(tip => tip.heading === "Hotels"),
    categoryRoutes: routes,
  }} />;
  return <BookingClient config={{ ...config, category, categoryRoutes: routes, bookingHref: routes[category],
    bannerText: titles[category], pageTitle: titles[category], introText: intros[category],
    bookingTips: config.bookingTips?.filter(tip => tip.heading !== "Hotels"),
  }} faqSection={<FAQAccordion faqs={faqData} />} />;
}
