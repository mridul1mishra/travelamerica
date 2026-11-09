"use client"
import Header from './components/Header/header';
import SafetyHero from './components/herobanner/safetyhero';
import styles from './orlandosafety.module.css';
import SafetyNarrative from './components/safetynarrative/SafetyNarrative';
import BookingCTA from './components/BookingCTA/BookingCTA';
import SafetyArticleTracker from '@/app/components/analytics/SafetyArticleTracker';
import BackToTop from '@/app/components/BackToTop';
import Footer from '@/app/components/Header/Footer/footer';

const navLinks = [
  { href: "/destination/orlando/best-areas-to-stay", label: "Best Areas to Stay" },
  { href: "/destination/orlando/solo-trip-to-orlando", label: "Solo Trip to Orlando" },
  { href: "/destination/orlando/safety-guide", label: "Orlando Safety" },
  { href: "/destination/orlando/orlando-female-solo-travel-guide", label: "Female Travel Guide" },
];

export default function OrlandoSafetyClient() {
  return (
    <>
        <Header links={navLinks} />
        <SafetyArticleTracker />
        <div className={styles.page}>
        <div className={styles.pageShell}>
        <SafetyHero />
        <SafetyNarrative />
        </div>
        <BookingCTA variant="full" headline="Ready to book your trip?" text="Compare Orlando hotels around the activities you plan to do most. Before confirming, check transport, parking, arrival arrangements and cancellation conditions so the booking fits the trip you have planned." href="/destination/orlando/hotel?from=safety-guide" label="Book your trip" ctaId="safe-area-hotels-bottom" placement="bottom_booking_band" />
        </div>
        <BackToTop targetId="orlando-safety-title" />
        <Footer />
      </>
  );
}
