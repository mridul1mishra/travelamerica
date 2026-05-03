"use client"
import HeroSection from './components/Hero/HeroSection';
import PlanningIntent from './components/PlanningIntent/PlanningIntent';
import WhyVisit from './components/WhyVisit/WhyVisit';
import AttractionsHub from './components/AttractionsHub/AttractionHub';
import NeighborhoodsHub from './components/NeighborhoodsHub/NeighborhoodsHub';
import ExperiencesHub from './components/Experiencehub/ExperiencesHub';
import BestTime from './components/Besttime/BestTime';
import WhereToStay from './components/WhereToStay/WhereToStay';
import ItinerariesPreview from './components/ItinerariesPreview/ItinerariesPreview';
import TravelTips from './components/TravelTips/TravelTips';
import DataCaptureCTA from './components/DataCapture/DataCaptureCTA';
import Header from "@/app/components/destination/header/header";
import Footer from "../../../app/components/Header/Footer/footer";
import styles from './nyc.module.css';



export default function NycHubPage() {
  return (
    <main className={styles.container}>
      <Header />
      <HeroSection />
      <PlanningIntent />
      <WhyVisit />
      <AttractionsHub />
      <NeighborhoodsHub />
      <ExperiencesHub />
      <BestTime />
      <WhereToStay />
      <ItinerariesPreview />
      <TravelTips />
      <DataCaptureCTA />
      <Footer />
    </main>
  );
}
