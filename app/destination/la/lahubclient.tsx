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
import styles from './la.module.css';
import BookingCTA from './components/BookingCTA/BookingCTA';

const navLinks = [
  { href: "/destination/la/best-areas-to-stay", label: "Best Areas to Stay" },
  { href: "/destination/la/solo-trip-to-la", label: "Solo Trip to LA" },
  { href: "/destination/la/safety-guide", label: "LA Safety" },
  { href: "/destination/la/la-female-solo-travel-guide", label: "Female Travel Guide" },
];

export default function LAHubClient() {
  return (
    <main className={styles.container}>
      <Header links={navLinks} />
      <HeroSection />
      <BookingCTA variant="slim" text="Book your Los Angeles trip →" href="/destination/la/bookings?tab=flights&from=la-hub" label="Book your LA trip" />
      <PlanningIntent />
      <WhyVisit />
      <AttractionsHub />
      <NeighborhoodsHub />
      <ExperiencesHub />
      <WhereToStay />
      <ItinerariesPreview />
      <DataCaptureCTA />
      <BookingCTA variant="full" text="Compare flights, hotels and tickets for your trip" href="/destination/la/bookings?tab=flights&from=la-hub" label="Book your LA trip" />
      <Footer />
    </main>
  );
}
