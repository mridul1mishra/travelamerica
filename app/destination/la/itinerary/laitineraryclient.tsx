import Header from "@/app/components/destination/header/header";
import Footer from "@/app/components/Header/Footer/footer";
import BookingCTA from "./components/BookingCTA/BookingCTA";
import styles from "@/app/destination/city-hub.module.css";
import ItineraryHero from "./components/ItineraryHero/ItineraryHero";
import ThreeDayItinerary from "./components/ThreeDayItinerary/ThreeDayItinerary";
import ItineraryFAQ from "./components/ItineraryFAQ/ItineraryFAQ";

export default function LAItineraryClient() {
  return (
    <main className={styles.container}>
      <Header links={[
        { href: "/destination/la/best-areas-to-stay", label: "Best Areas to Stay" },
        { href: "/destination/la/solo-trip-to-la", label: "Solo Trip to LA" },
        { href: "/destination/la/safety-guide", label: "LA Safety" },
        { href: "/destination/la/la-female-solo-travel-guide", label: "Female Travel Guide" },
      ]} />
      <ItineraryHero />
      <BookingCTA
        variant="slim"
        text="Book flights, hotels and activity tickets for your LA trip →"
        href="/destination/la/bookings"
        label="Book your trip"
      />
      <ThreeDayItinerary />
      <ItineraryFAQ />
      <BookingCTA
        variant="full"
        headline="Book your Los Angeles trip"
        text="Cheap flights to LAX, LA hotels, and skip-the-line tickets — all in one place."
        href="/destination/la/bookings"
        label="Compare flights, hotels & tickets"
      />
      <Footer />
    </main>
  );
}
