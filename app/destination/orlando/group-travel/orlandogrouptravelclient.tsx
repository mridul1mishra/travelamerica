"use client";
import OrlandoNavHeader from "./components/orlandonavheader/OrlandoNavHeader";
import Link from 'next/link';
import Image from 'next/image';
import Footer from "./components/Footer/footer";
import styles from './grouptravel.module.css';
import BookingCTA from './components/BookingCTA/BookingCTA';
import FAQAccordion from './components/FAQAccordion/faqsection';
import faqData from '@/content/destination/orlando/group-travel/faq/faqsection.json';

export default function OrlandoGroupTravelClient() {


return (
  <>
    <OrlandoNavHeader />
    <BookingCTA variant="slim" text="Book group-friendly Orlando hotels and tickets â†’" href="/destination/orlando/bookings?tab=hotels&from=group-travel" label="Book group trip" />
    <main className={styles.container}>
      <h1 className={styles.pageTitle}>Group Travel in Orlando</h1>
      <p className={styles.intro}>
        Orlando is one of the world&apos;s most visited group destinations â€” theme parks built for crowds, resort complexes with group-rate rooms, and a conference and convention industry that handles groups of every size. The challenge is logistics: keeping 6 or 60 people moving together across parks that take a full day each. This guide covers group tickets, transport, dining, and the practical stuff that makes or breaks a group trip.
      </p>
      <FAQAccordion faqs={faqData} />
      <BookingCTA variant="full" text="Find group-friendly Orlando hotels and packages" href="/destination/orlando/bookings?tab=hotels&from=group-travel" label="Book group trip" />
    </main>
    <Footer />
  </>
);
}
