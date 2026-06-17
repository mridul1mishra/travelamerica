"use client"
import Header from "@/app/components/destination/header/header";
import Footer from "@/app/components/Header/Footer/footer";
import styles from "./bestareatostay.module.css";
import BookingCTA from "./components/BookingCTA/BookingCTA";
import FAQAccordion from "./components/FAQAccordion/FAQAccordion";
import Banner from "./components/Banner/Banner";
import SoloTripIntro from "./components/SoloTripIntro/SoloTripIntro";
import SectionSafestNeighborhoods from "./components/SectionSafestNeighborhoods/SectionSafestNeighborhoods";
import NeighborhoodRankingCards, { Neighborhood } from "./components/NeighborhoodRankingCards/NeighborhoodRankingCards";
import AreasCompared from "./components/AreasCompared/AreasCompared";
import HotelBookingTips from "./components/HotelBookingTips/HotelBookingTips";
import faqData from "@/content/destination/la/bestplacetostay/faqsection.json";

const laNeighborhoods: Neighborhood[] = [
  {
    id: "santa-monica",
    rank: "#1 Best Overall",
    name: "Santa Monica",
    why: "LA's most walkable base — beach access, safe streets, and no car needed within the neighborhood.",
    image: "/data/majorcities/losangeles/assets/bestareas/santamonica.jpg",
    color: "var(--tint-green)",
    safety: "🟢 Very Safe",
    vibe: "Beach, walkable, family-friendly",
    transit: "Big Blue Bus, Expo Line",
    bestFor: ["First-timers", "Couples", "Beach lovers"],
    pros: ["Walkable grid", "Beach and pier access", "Safe and well-lit at night"],
    cons: ["Most expensive area ($200–$400/night)", "Far from Hollywood attractions"],
  },
  {
    id: "west-hollywood",
    rank: "#2 Best Nightlife",
    name: "West Hollywood",
    why: "Sunset Strip, top restaurants, and the best walkable nightlife scene in LA.",
    image: "/data/majorcities/losangeles/assets/bestareas/west_hollywood.jpg",
    color: "var(--tint-purple)",
    safety: "🟢 Safe",
    vibe: "Lively, social, LGBTQ+ friendly",
    transit: "West Hollywood CityLine",
    bestFor: ["Nightlife", "LGBTQ+ travelers", "Dining"],
    pros: ["Walkable bar and restaurant strip", "Central location", "Great hotel options"],
    cons: ["Noisy at night", "Mid–high pricing ($150–$300)"],
  },
  {
    id: "hollywood",
    rank: "#3 Best for Sightseeing",
    name: "Hollywood",
    why: "Walk of Fame, TCL Chinese Theatre, and central access at budget-friendly rates.",
    image: "/data/majorcities/losangeles/assets/bestareas/hollywood.jpg",
    color: "var(--tint-blue)",
    safety: "🟡 Mixed — varies by block",
    vibe: "Touristy, central, busy",
    transit: "Metro Red Line",
    bestFor: ["Sightseeing-focused trips", "Budget travelers", "First-timers"],
    pros: ["Budget to mid-range hotels ($100–$200)", "Near major attractions", "Good transit access"],
    cons: ["Very touristy", "Quality varies block by block"],
  },
  {
    id: "downtown-la",
    rank: "#4 Best Budget",
    name: "Downtown LA (DTLA)",
    why: "Best hotel value in LA with easy access to arts, food, and sports events.",
    image: "/data/majorcities/losangeles/assets/bestareas/downtownla.jpg",
    color: "var(--tint-yellow)",
    safety: "🟡 Improving — stay near Arts District",
    vibe: "Urban, arts-forward, food-rich",
    transit: "Metro Blue, Red, Gold lines",
    bestFor: ["Budget travelers", "Arts and food focus", "Concert-goers"],
    pros: ["Best hotel value ($120–$180)", "Excellent food and arts scene", "Good transit hub"],
    cons: ["Some blocks still rough", "Requires awareness of surroundings"],
  },
];


export default function LABestAreasClient() {
  return (
    <>
      <Header links={[
        { href: "/destination/la/best-areas-to-stay", label: "Best Areas to Stay" },
        { href: "/destination/la/solo-trip-to-la", label: "Solo Trip to LA" },
        { href: "/destination/la/safety-guide", label: "LA Safety" },
        { href: "/destination/la/la-female-solo-travel-guide", label: "Female Travel Guide" },
      ]} />
      <BookingCTA
        variant="slim"
        text="Compare live hotel prices across LA neighborhoods"
        href="/destination/la/bookings?tab=hotels&from=best-areas-to-stay"
        label="Browse LA hotels"
      />
      <Banner
        cityName="Los Angeles"
        cityHref="/destination/la"
        description="A neighborhood-by-neighborhood breakdown of LA - where to stay based on your budget, travel style, and what matters most to you."
        guideBullets={[
          "The safest and most convenient neighborhoods",
          "Where to stay for beach access, nightlife, or budget",
          "Areas to avoid and why",
          "How to choose without a car",
          "Local tips most tourists miss",
        ]}
      />
      <SoloTripIntro
        cityName="Los Angeles"
        description="LA's neighborhoods feel like separate cities. Your base determines your transport costs, safety, and overall experience. These guides help you choose wisely."
        bullets={[
          "Safest and most convenient neighborhoods",
          "How to get around without a car",
          "When to book and what to avoid",
        ]}
      />
      <SectionSafestNeighborhoods
        title="Safest Neighborhoods in LA"
        paragraphs={[
          "Santa Monica consistently ranks as LA's safest area for tourists - a walkable grid, well-lit streets, and a strong local presence make it the most comfortable base for first-time visitors and solo travelers.",
          "You'll find beach-goers, locals at the farmers market, and steady foot traffic day and night - the kind of everyday normalcy that keeps a neighborhood feeling safe and alive.",
          "Beverly Hills and West Hollywood also score well on safety. Crime rates in these areas skew significantly lower than LA's city average for violent incidents.",
        ]}
        tip="Stick to the westside neighborhoods at night - Santa Monica, West Hollywood, and Beverly Hills have the most consistent foot traffic and lighting."
        warning="Avoid walking alone in parts of Hollywood east of Vine, areas adjacent to Skid Row in DTLA, or unfamiliar side streets after dark."
      />
      <NeighborhoodRankingCards cityName="Los Angeles" neighborhoods={laNeighborhoods} />
      <AreasCompared />
      <HotelBookingTips />
      <div className={styles.container}>
        <FAQAccordion faqs={faqData} />
      </div>
      <BookingCTA
        variant="full"
        headline="Find the right Los Angeles hotel"
        text="Compare Santa Monica, Hollywood, WeHo, and DTLA hotels - live prices and real reviews."
        href="/destination/la/bookings?tab=hotels&from=best-areas-to-stay"
        label="Browse Los Angeles hotels"
      />
      <Footer />
    </>
  );
}
