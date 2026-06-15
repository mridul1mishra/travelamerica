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

const orlandoBookingIntro = (
  <section style={{ maxWidth: '720px', margin: '0 auto 32px', padding: '0 16px' }}>
    <h2 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '12px' }}>
      Book your Orlando trip
    </h2>
    <p style={{ color: '#555', lineHeight: 1.6, marginBottom: '12px' }}>
      Orlando park crowds follow school calendars closely. Mid-January through early February, late August,
      and the first two weeks of December are the lowest-demand windows — expect 20–30% lower hotel rates
      and noticeably shorter wait times. Avoid spring break (mid-March to mid-April), Thanksgiving week,
      and the week between Christmas and New Year's — these are the most expensive and crowded periods of the year.
    </p>
    <ul style={{ color: '#555', lineHeight: 1.8, paddingLeft: '20px', marginBottom: '12px' }}>
      <li><strong>Airport:</strong> Orlando International (MCO) is the main hub — 25 minutes to Disney, 30 to Universal. Sanford (SFB) is served by Allegiant and a few charters; it's cheaper but much further from the parks (45–55 minutes). Check whether the savings cover the extra transfer cost.</li>
      <li><strong>Park tickets:</strong> Disney and Universal use date-based pricing — booking the same ticket 60–90 days ahead is typically $20–40 cheaper than buying at the gate. Genie+ and Lightning Lane sell out for popular rides by 7am; buy the moment the park opens.</li>
      <li><strong>Hotels:</strong> On-site Disney and Universal hotels include early park entry, which pays back in wait time savings on busy days. Off-site hotels on International Drive are 20–30% cheaper and still within 15 minutes of both parks — the right call for shorter trips focused on 2–3 parks.</li>
    </ul>
  </section>
);

const orlandoBookingFaq = <FAQAccordion faqs={faqData} />;

export default function OrlandoBookingsClient() {
  return <BookingClient config={config} introSection={orlandoBookingIntro} faqSection={orlandoBookingFaq} />;
}
