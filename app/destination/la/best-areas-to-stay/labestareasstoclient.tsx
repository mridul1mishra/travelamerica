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
import LogisticsSections from "./components/LogisticsSections/LogisticsSections";
import HotelBookingTips from "./components/HotelBookingTips/HotelBookingTips";
import faqData from "@/content/destination/la/bestplacetostay/faqsection.json";

const laNeighborhoods: Neighborhood[] = [
  {
    id: "santa-monica",
    rank: "#1 Best Overall",
    name: "Santa Monica",
    why: "A beach-side base with the Metro E Line, Big Blue Bus service and Santa Monica Pier.",
    image: "/data/majorcities/losangeles/assets/bestareas/santamonica.jpg",
    color: "var(--tint-green)",
    safety: "See our LA safety guide for current advice",
    vibe: "Beach, walkable, family-friendly",
    transit: "Metro E Line, Big Blue Bus",
    bestFor: ["First-timers", "Couples", "Beach lovers"],
    pros: ["Beach and pier access", "Metro E Line to Downtown LA", "Big Blue Bus Rapid 10 on weekdays"],
    cons: ["15% hotel tax, the highest of the city rates we checked", "A longer trip to Hollywood attractions"],
  },
  {
    id: "west-hollywood",
    rank: "#2 Best Nightlife",
    name: "West Hollywood",
    why: "Sunset Strip and Santa Monica Boulevard, with free city-run CityLine buses.",
    image: "/data/majorcities/losangeles/assets/bestareas/west_hollywood.jpg",
    color: "var(--tint-purple)",
    safety: "See our LA safety guide for current advice",
    vibe: "Lively, social, LGBTQ+ friendly",
    transit: "Free CityLine buses (not rail); Metro B Line at Hollywood/Highland via CityLine Commuter",
    bestFor: ["Nightlife", "LGBTQ+ travelers", "Dining"],
    pros: ["Free CityLine bus service", "Near Hollywood and the Westside", "12.5% hotel tax, lower than the neighboring city rates we checked"],
    cons: ["CityLine Commuter runs only at set morning and evening hours", "CityLine Local runs daytime, Monday to Saturday"],
  },
  {
    id: "hollywood",
    rank: "#3 Best for Sightseeing",
    name: "Hollywood",
    why: "Walk of Fame and TCL Chinese Theatre, with three Metro B Line stations.",
    image: "/data/majorcities/losangeles/assets/bestareas/hollywood.jpg",
    color: "var(--tint-blue)",
    safety: "See our LA safety guide for current advice",
    vibe: "Touristy, central, busy",
    transit: "Metro B Line (formerly Red Line), DASH Hollywood",
    bestFor: ["Sightseeing-focused trips", "Budget travelers", "First-timers"],
    pros: ["Metro B Line stops at Hollywood/Western, Vine and Highland", "Near major attractions", "DASH Hollywood bus runs daily"],
    cons: ["Busy with visitors", "Surroundings vary block to block"],
  },
  {
    id: "downtown-la",
    rank: "#4 Best Budget",
    name: "Downtown LA (DTLA)",
    why: "The city's main rail hub, with arts, food and sports venues nearby.",
    image: "/data/majorcities/losangeles/assets/bestareas/downtownla.jpg",
    color: "var(--tint-yellow)",
    safety: "See our LA safety guide for current advice",
    vibe: "Urban, arts-forward, food-rich",
    transit: "Metro A, B, D and E Lines; DASH Downtown",
    bestFor: ["Budget travelers", "Arts and food focus", "Concert-goers"],
    pros: ["Four Metro rail lines at 7th St/Metro Center", "Union Station with Amtrak and Metrolink", "LAX FlyAway bus to Union Station"],
    cons: ["Surroundings vary block to block", "Check the area around your hotel before booking"],
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
        href="/destination/la/hotel?from=best-areas-to-stay"
        label="Browse LA hotels"
      />
      <Banner
        cityName="Los Angeles"
        cityHref="/destination/la"
        description="A neighborhood-by-neighborhood breakdown of LA - where to stay based on your budget, travel style, and what matters most to you."
        guideBullets={[
          "Neighborhoods compared, with the transit each one has",
          "Where to stay for the beach, nightlife or sightseeing",
          "Hotel taxes, fees and parking by area",
          "Metro, bus and shuttle options from each base",
          "What the published fares and schedules say",
        ]}
      />
      <SoloTripIntro
        cityName="Los Angeles"
        description="LA's neighborhoods feel like separate cities. Your base determines your transport costs, safety, and overall experience. These guides help you choose wisely."
        bullets={[
          "Neighborhoods compared by transit access",
          "Metro, bus and shuttle options from each base",
          "Taxes, fees and parking to budget for",
        ]}
        cards={[
          { icon: "🛡️", title: "For Safety", description: "Find areas with high visibility, foot traffic, and safe streets.", cta: "Safety guide", href: "/destination/la/safety-guide" },
          { icon: "🌃", title: "For Nightlife", description: "Explore solo-friendly venues with great vibes and easy access.", cta: "Things to do", href: "/destination/la/things-to-do" },
          { icon: "🍜", title: "For Foodies", description: "Discover local favorites and budget-friendly bites.", cta: "Food guide", href: "/destination/la/food" },
          { icon: "💸", title: "On a Budget", description: "Smart picks and free gems — great trips without overspending.", cta: "Solo trip guide", href: "/destination/la/solo-trip-to-la" },
        ]}
      />
      <SectionSafestNeighborhoods
        title="Staying safe in Los Angeles"
        paragraphs={[
          "Conditions in Los Angeles vary by neighborhood, by block and by time of day, and each of these areas is a separate city or district with its own police and services.",
          "We do not rank areas by safety on this page. Read our Los Angeles safety guide, check recent local advice, and look at the area around any hotel before you book.",
          "Whichever base you choose, plan your route back to the hotel before you go out in the evening, especially if you will rely on a bus or train.",
        ]}
        tip="Check your hotel's surroundings and your route home before you book, whichever area you choose."
        warning="Avoid unfamiliar areas late at night, and check recent local advice before choosing a hotel."
      />
      <NeighborhoodRankingCards cityName="Los Angeles" neighborhoods={laNeighborhoods} />
      <AreasCompared />
      <LogisticsSections />
      <HotelBookingTips />
      <div className={styles.container}>
        <FAQAccordion faqs={faqData} />
      </div>
      <BookingCTA
        variant="full"
        headline="Find the right Los Angeles hotel"
        text="Compare Santa Monica, Hollywood, WeHo, and DTLA hotels - live prices and real reviews."
        href="/destination/la/hotel?from=best-areas-to-stay"
        label="Browse Los Angeles hotels"
      />
      <Footer />
    </>
  );
}
