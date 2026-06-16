// Server Component â€” no hooks used. Interactive bits (header, planning intent) are client components.
import HeroSection from './components/Hero/HeroSection';
import PlanningIntent from './components/PlanningIntent/PlanningIntent';
import WhyVisit from './components/WhyVisit/WhyVisit';
import AttractionsHub from './components/AttractionsHub/AttractionHub';
import NeighborhoodsHub from './components/NeighborhoodsHub/NeighborhoodsHub';
import ExperiencesHub from './components/ExperiencesHub/ExperiencesHub';
import WhereToStay from './components/WhereToStay/WhereToStay';
import ItinerariesPreview from './components/ItinerariesPreview/ItinerariesPreview';
import DataCaptureCTA from './components/DataCapture/DataCaptureCTA';
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import styles from './orlando.module.css';
import BookingCTA from './components/BookingCTA/BookingCTA';

const navLinks = [
  { href: "/destination/orlando/best-areas-to-stay", label: "Best Areas to Stay" },
  { href: "/destination/orlando/solo-trip-to-orlando", label: "Solo Trip to Orlando" },
  { href: "/destination/orlando/safety-guide", label: "Orlando Safety" },
  { href: "/destination/orlando/orlando-female-solo-travel-guide", label: "Female Travel Guide" },
];

export default function OrlandoHubClient() {
  return (
    <main className={styles.container}>
      <Header links={navLinks} />
      <HeroSection />
      <BookingCTA variant="slim" text="Book hotels for your Orlando trip â†’" href="/destination/orlando/bookings?tab=hotels&from=orlando-hub" label="Book your Orlando trip" />
      <PlanningIntent />
      <WhyVisit />
      <AttractionsHub />
      <NeighborhoodsHub />
      <ExperiencesHub />
      <WhereToStay />
      <ItinerariesPreview />
      <DataCaptureCTA />
      <BookingCTA variant="full" text="Find the right hotel for your stay" href="/destination/orlando/bookings?tab=hotels&from=orlando-hub" label="Book your Orlando trip" />
      <Footer />
    </main>
  );
}
