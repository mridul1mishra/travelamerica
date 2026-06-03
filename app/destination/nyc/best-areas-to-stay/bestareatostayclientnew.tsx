"use client"
import styles from './bestareatostay.module.css';
import Banner from '@/app/components/destination/bestareatostay/Banner/Banner';
import SectionSafestNeighborhoods from '@/app/components/destination/bestareatostay/safestneighborhood/safestneighborhood';
import SoloTripIntro from '@/app/components/destination/bestareatostay/solotripintro/solotripintro';
import Header from '@/app/components/destination/header/header';
import faqData from "@/content/destination/bestplacetostay/faqsection.json";
import NeighborhoodRankingCards, { Neighborhood } from '@/app/components/destination/neighborhoodrankingcard/neighborhoodrankingcard';
import Footer from '@/app/components/Header/Footer/footer';
import FAQAccordion from '@/app/components/destination/faqsection/faqsection';
import BookingCTA from '@/app/components/destination/BookingCTA/BookingCTA';
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
      <div className={styles.container}>
        <FAQAccordion faqs={faqData} />
      </div>
      <BookingCTA variant="full" text="Compare live hotel prices in these neighborhoods" href="/destination/nyc/booking?tab=hotels&from=best-areas-to-stay" label="See NYC hotels" />
      <Footer />
    </>
  );
}
