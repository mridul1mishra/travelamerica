"use client";

import BookingClient, { type CityBookingConfig } from "./components/BookingClient/BookingClient";
import FAQAccordion from "./components/FAQAccordion/FAQAccordion";
import faqData from "@/content/destination/la/booking/faq/faqsection.json";
import bookFlights from "@/content/cities/losangeles/booking/bookflights.json";
import thingsToDoData from "@/content/cities/losangeles/booking/thingstodo.json";
import { laHotelAreaPresets } from "@/app/lib/laHotelAreas";
import hotelFaqs from "@/content/cities/losangeles/hotel-faq.json";

const config: CityBookingConfig = {
  cityName: "Los Angeles",
  cityHref: "/destination/la",
  bookingHref: "/destination/la/bookings",
  headerImage: "/data/majorcities/losangeles/assets/losangeles.webp",
  bannerText: "Book your Los Angeles trip",
  pageTitle: "Book Your Los Angeles Trip",
  tabs: [
    { key: "flights", label: "Flights", icon: "plane" },
    { key: "hotels", label: "Hotels", icon: "hotel" },
    { key: "activities", label: "Things to Do", icon: "ticket" },
  ],
  tabRail: {
    flights: {
      nextStep: { label: "Next: book your hotel", toTab: "hotels" },
      guides: [
        { href: "/destination/la/things-to-do", label: "Top things to do in LA" },
        { href: "/destination/la/neighborhood-guide", label: "LA neighborhood guide" },
        { href: "/destination/la/la-metro-map", label: "Getting from LAX airport" },
      ],
    },
    hotels: {
      nextStep: { label: "Next: things to do in LA", toTab: "activities" },
      guides: [
        { href: "/destination/la/best-areas-to-stay", label: "Best areas to stay in LA" },
        { href: "/destination/la/neighborhood-guide", label: "Compare LA neighborhoods" },
        { href: "/destination/la/safety-guide", label: "LA safety guide" },
        { href: "/destination/la/is-la-safe-at-night", label: "Plan LA evenings and the hotel return" },
      ],
    },
    activities: {
      nextStep: { label: "Compare return flights", toTab: "flights" },
      guides: [
        { href: "/destination/la/things-to-do", label: "Full LA attractions guide" },
        { href: "/destination/la/landmark", label: "Top LA landmarks" },
        { href: "/destination/la/food", label: "Where to eat in LA" },
      ],
    },
  },
  relatedGroups: [
    {
      heading: "Plan",
      links: [
        { href: "/destination/la/things-to-do", label: "Top things to do in LA" },
        { href: "/destination/la/neighborhood-guide", label: "LA neighborhood guide" },
        { href: "/destination/la/best-areas-to-stay", label: "Best areas to stay" },
      ],
    },
    {
      heading: "Get around",
      links: [
        { href: "/destination/la/la-metro-map", label: "Getting from LAX airport" },
        { href: "/destination/la/itinerary", label: "4-day LA itinerary" },
        { href: "/destination/la/safety-guide", label: "LA safety guide" },
      ],
    },
    {
      heading: "Explore",
      links: [
        { href: "/destination/la/landmark", label: "Top LA landmarks" },
        { href: "/destination/la/food", label: "Where to eat in LA" },
        { href: "/destination/la/itinerary", label: "4-day LA itinerary" },
      ],
    },
  ],
  bookingTips: [
    {
      heading: "Airport",
      text: "LAX has the most inventory. BUR is faster for Hollywood, Studio City, and the Valley.",
    },
    {
      heading: "Transport",
      text: "Staying in one zone works well with rideshare. Crossing the city daily favors a car.",
    },
    {
      heading: "Hotels",
      text: "Santa Monica costs more; Downtown, Koreatown, and Mid-Wilshire often stretch the budget.",
    },
  ],
  flights: bookFlights as CityBookingConfig["flights"],
  hotels: [],
  hotelListingHref: "/destination/la/hotel",
  hotelCount: 50,
  activities: thingsToDoData as CityBookingConfig["activities"],
};

export default function LABookingsClient({ hotels }: { hotels?: CityBookingConfig["hotels"] }) {
  if (hotels) return <BookingClient config={{ ...config, hotels, category: "hotels", onDemandGoogleRatings: true,
    hotelAreaPresets: laHotelAreaPresets, bookingHref: "/destination/la/hotel", bannerText: "Find your Los Angeles hotel",
    pageTitle: "Find Your Los Angeles Hotel",
    introText: "Choose a hotel base for your shows, dining, beach visit or event. Compare neighborhoods and check the return route. Sign in to check current prices with the provider.",
    bookingTips: [{ heading: "Location", text: "Match the hotel to your main destinations. Nearby on a map does not guarantee an easy final walk; confirm the entrance and transport." }],
    categoryRoutes: { hotels: "/destination/la/hotel", flights: "/destination/la/bookings?tab=flights", activities: "/destination/la/bookings?tab=activities" }
  }} faqSection={<FAQAccordion faqs={hotelFaqs} />} />;
  return <BookingClient config={config} faqSection={<FAQAccordion faqs={faqData} />} />;
}
