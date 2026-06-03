// Server Component — no hooks used; child components handle their own interactivity.
import HeroSection from './components/Hero/HeroSection';
import PlanningIntent from './components/PlanningIntent/PlanningIntent';
import WhyVisit from './components/WhyVisit/WhyVisit';
import AttractionsHub from './components/AttractionsHub/AttractionHub';
import NeighborhoodsHub from './components/NeighborhoodsHub/NeighborhoodsHub';
import ExperiencesHub from './components/ExperiencesHub/ExperiencesHub';
import WhereToStay from './components/WhereToStay/WhereToStay';
import ItinerariesPreview from './components/ItinerariesPreview/ItinerariesPreview';
import DataCaptureCTA from './components/DataCapture/DataCaptureCTA';
import Header from "@/app/components/destination/header/header";
import Footer from "../../../app/components/Header/Footer/footer";
import styles from './nyc.module.css';
import BookingCTA from './components/BookingCTA/BookingCTA';

export default function NycHubPage() {
  return (
    <main className={styles.container}>
      <Header />
      <HeroSection />
      <BookingCTA variant="slim" text="Book your New York trip →" href="/destination/nyc/booking?tab=flights&from=nyc-hub" label="Book your NYC trip" />
      <PlanningIntent />
      <WhyVisit />
      <AttractionsHub />
      <NeighborhoodsHub />
      <ExperiencesHub />
      <WhereToStay />
      <ItinerariesPreview />
      <DataCaptureCTA />
      <BookingCTA variant="full" text="Compare flights, hotels and tickets for your trip" href="/destination/nyc/booking?tab=flights&from=nyc-hub" label="Book your NYC trip" />
      <Footer />
    </main>
  );
}
