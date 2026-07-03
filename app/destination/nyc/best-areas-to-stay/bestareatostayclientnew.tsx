"use client"
import styles from './bestareatostay.module.css';
import Banner from "./components/Banner/Banner";
import SectionSafestNeighborhoods from "./components/SectionSafestNeighborhoods/SectionSafestNeighborhoods";
import SoloTripIntro from "./components/SoloTripIntro/SoloTripIntro";
import Header from "./components/Header/Header";
import faqData from "@/content/destination/bestplacetostay/faqsection.json";
import NeighborhoodRankingCards, { type Neighborhood } from "./components/NeighborhoodRankingCards/NeighborhoodRankingCards";
import Footer from "./components/Footer/Footer";
import FAQAccordion from "./components/FAQAccordion/FAQAccordion";
import BookingCTA from "./components/BookingCTA/BookingCTA";
import EmailSignup from "./components/EmailSignup/EmailSignup";
import nycNeighborhoodsData from '@/content/destination/nyc/neighborhoodRankings.json';

const nycNeighborhoods = nycNeighborhoodsData as Neighborhood[];

export default function Home() {
  return (
    <>
      <Header />
      <BookingCTA variant="slim" text="Book your New York trip" href="/destination/nyc/booking?tab=hotels&from=best-areas-to-stay" label="See NYC hotels" />
      <Banner
        cityName="New York City"
        cityHref="/destination/nyc"
        description="A local breakdown of the safest, most convenient neighborhoods for tourists, first-time visitors and solo travelers."
        guideBullets={[
          "The safest neighborhoods for solo travelers",
          "Where to stay for nightlife, food, or budget",
          "Areas to avoid (and why)",
          "How to choose based on subway access",
          "Local tips most tourists miss",
        ]}
      />
      <SoloTripIntro
        cityName="NYC"
        description="Exploring New York solo can feel thrilling or overwhelming. These guides help you decode the city's rhythm, avoid common pitfalls, and navigate confidently."
        bullets={[
          "Safest and most connected neighborhoods",
          "How to start your trip with confidence",
          "Packing smart for weather and walking",
        ]}
      />
      <section className={styles.editorialPanel} aria-labelledby="quick-picks-heading">
        <p className={styles.eyebrow}>Quick stay decisions</p>
        <h2 id="quick-picks-heading">Best areas to stay in NYC by traveler type</h2>
        <p>
          If you are choosing a hotel quickly, start with the neighborhood that matches your trip style. These are practical stay areas for tourists, first-time visitors, solo travelers, and travelers who want safe areas with simple subway access.
        </p>
        <div className={styles.decisionGrid}>
          <article>
            <h3>First-time visitor</h3>
            <p><strong>Midtown East</strong> keeps sightseeing simple without putting you directly in the Times Square crush.</p>
          </article>
          <article>
            <h3>Solo or safety-focused</h3>
            <p><strong>Upper West Side</strong> is calm, residential, walkable, and strong for late returns on active avenues.</p>
          </article>
          <article>
            <h3>Balanced food and access</h3>
            <p><strong>Chelsea</strong> works well if you want restaurants, galleries, the High Line, and easy Downtown/Midtown access.</p>
          </article>
          <article>
            <h3>Budget near Manhattan</h3>
            <p><strong>Long Island City</strong> usually gives better hotel value while keeping Midtown a short subway ride away.</p>
          </article>
          <article>
            <h3>History and waterfront</h3>
            <p><strong>Lower Manhattan</strong> is convenient for the 9/11 Memorial, Brooklyn Bridge, ferries, and Downtown routes.</p>
          </article>
          <article>
            <h3>Quiet Brooklyn base</h3>
            <p><strong>Brooklyn Heights</strong> gives you calm streets, skyline views, and quick access back to Manhattan.</p>
          </article>
        </div>
        <p className={styles.supportingLinks}>
          Need a wider comparison? Use the <a href="/destination/nyc/neighborhood-guide">NYC neighborhood guide</a>. Safety-first trip? Open the <a href="/destination/nyc/nyc-safety-guide">NYC safety hub</a> or the <a href="/destination/nyc/nyc-female-solo-travel-guide">solo female travel guide</a>.
        </p>
      </section>
      <SectionSafestNeighborhoods
        paragraphs={[
          "The Upper West Side consistently ranks as one of Manhattan's safest residential areas, thanks to its well-lit avenues, family-oriented atmosphere, and strong community presence.",
          "You'll find a steady flow of locals walking dogs, grabbing groceries, or heading to Riverside Park - all of which contribute to a sense of everyday normalcy that solo travelers often appreciate.",
          "Crime rates here skew lower than the city average, especially for violent incidents. That said, standard big-city awareness still applies.",
        ]}
        tip="Stay on main avenues like Broadway or Amsterdam at night - they're brighter and have more foot traffic."
        warning="Avoid empty side streets late at night - stick to avenues with steady foot traffic."
        mapImage={{ src: "/destination/bestareatostay/mini-map.png", alt: "Mini-map of Upper West Side" }}
      />
      <NeighborhoodRankingCards cityName="NYC" neighborhoods={nycNeighborhoods} />
      <EmailSignup source="best-areas-to-stay" />
      <div className={styles.container}>
        <FAQAccordion faqs={faqData} />
      </div>
      <BookingCTA variant="full" text="Compare live hotel prices in these neighborhoods" href="/destination/nyc/booking?tab=hotels&from=best-areas-to-stay" label="See NYC hotels" />
      <Footer />
    </>
  );
}
