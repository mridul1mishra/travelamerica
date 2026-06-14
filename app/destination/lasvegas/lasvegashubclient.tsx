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
import Footer from "@/app/components/Header/Footer/footer";
import styles from './lasvegas.module.css';
import BookingCTA from './components/BookingCTA/BookingCTA';

const navLinks = [
  { href: "/destination/lasvegas/best-areas-to-stay", label: "Best Areas to Stay" },
  { href: "/destination/lasvegas/solo-trip-to-lasvegas", label: "Solo Trip to Vegas" },
  { href: "/destination/lasvegas/safety-guide", label: "Vegas Safety" },
  { href: "/destination/lasvegas/lasvegas-female-solo-travel-guide", label: "Female Travel Guide" },
];

export default function LasVegasHubClient() {
  return (
    <main className={styles.container}>
      <Header links={navLinks} />
      <HeroSection />
      <BookingCTA variant="slim" text="Book hotels for your Las Vegas trip →" href="/destination/lasvegas/bookings?tab=hotels&from=lasvegas-hub" label="Book your Vegas trip" />
      <PlanningIntent />
      <WhyVisit />
      <AttractionsHub />
      <NeighborhoodsHub />
      <ExperiencesHub />
      <WhereToStay />
      <ItinerariesPreview />
      <DataCaptureCTA />
      <BookingCTA variant="full" text="Find the right hotel for your stay" href="/destination/lasvegas/bookings?tab=hotels&from=lasvegas-hub" label="Book your Vegas trip" />
      <Footer />
    </main>
  );
}
