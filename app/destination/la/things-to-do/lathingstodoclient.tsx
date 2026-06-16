'use client';
import styles from './lathingstodo.module.css';
import Header from "@/app/components/destination/header/header";
import Footer from "../../../../app/components/Header/Footer/footer";
import BookingCTA from "./components/BookingCTA/BookingCTA";
import ThingsToDoHero from './components/ThingsToDoHero/ThingsToDoHero';
import ExperienceBuckets from './components/ExperienceBuckets/ExperienceBuckets';
import CategoriesGrid from './components/CategoriesGrid/CategoriesGrid';
import DecisionBridge from './components/DecisionBridge/DecisionBridge';
import PlanningCTA from './components/PlanningCTA/PlanningCTA';
import NavigationResource from './components/NavigationResource/NavigationResource';

export default function LAThingsToDoClient() {
  return (
    <>
    <Header links={[
      { href: "/destination/la/best-areas-to-stay", label: "Best Areas to Stay" },
      { href: "/destination/la/solo-trip-to-la", label: "Solo Trip to LA" },
      { href: "/destination/la/safety-guide", label: "LA Safety" },
      { href: "/destination/la/la-female-solo-travel-guide", label: "Female Travel Guide" },
    ]} />
    <BookingCTA variant="slim" text="Book your Los Angeles trip →" href="/destination/la/bookings?tab=activities&from=things-to-do" label="See tickets & tours" />
    <main className={styles.container}>
      <ThingsToDoHero />
      <ExperienceBuckets />
      <CategoriesGrid />
      <DecisionBridge />
      <PlanningCTA />
      <NavigationResource />
    </main>
    <BookingCTA variant="full" text="Book skip-the-line tickets and guided tours" href="/destination/la/bookings?tab=activities&from=things-to-do" label="See tickets & tours" />
    <Footer />
    </>
  );
}
