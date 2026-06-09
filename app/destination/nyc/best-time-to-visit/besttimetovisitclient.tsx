'use client';
import NycNavHeader from '../solo-trip-to-nyc/components/nycnavheader/NycNavHeader';
import HeroSection from './components/herosection/HeroSection';
import SeasonCards from './components/seasoncards/SeasonCards';
import MonthGrid from './components/monthgrid/MonthGrid';
import TravelerTypes from './components/travelertypes/TravelerTypes';
import BookingCTA from '@/app/components/destination/BookingCTA/BookingCTA';
import FAQAccordion from '@/app/components/destination/faqsection/faqsection';
import EmailSignup from '@/app/components/destination/EmailSignup/EmailSignup';
import Footer from '@/app/components/Header/Footer/footer';

const faqData = [
  { question: 'What is the best month to visit New York City?', answer: 'April–May and September–October are the best overall months: mild weather, manageable crowds, and hotel rates 20–30% below peak summer levels. May is arguably the single best month for a first visit.' },
  { question: 'What is the cheapest time to visit NYC?', answer: 'January and February offer the lowest prices of the year — hotels run 30–40% below summer peak. The city is cold but fully operational and much less crowded than any other season.' },
  { question: 'Is NYC worth visiting in winter?', answer: 'Yes — especially December (for holiday atmosphere) and January/February (for low prices and thin crowds). Every major museum, Broadway show, and restaurant is open and accessible year-round.' },
  { question: 'How hot does NYC get in summer?', answer: 'July and August regularly reach 28–32°C with high humidity. Heat index can make it feel hotter. Plan indoor breaks around midday and stay hydrated on walking days.' },
  { question: 'When does fall foliage peak in NYC?', answer: 'Fall foliage peaks in Central Park and Prospect Park in mid-to-late October. Riverside Park and Fort Tryon Park are also excellent, often slightly later.' },
  { question: 'What events should I plan my trip around?', answer: "Cherry Blossom Festival (April), Fleet Week (May), NYC Pride (June), Macy's 4th of July Fireworks, US Open (late August–September), NYC Marathon (first Sunday in November), and the Rockefeller tree lighting (December) are the most popular anchors." },
];

export default function BestTimeToVisitClient() {
  return (
    <>
      <NycNavHeader />
      <HeroSection />
      <BookingCTA
        variant="slim"
        text="Book your New York trip →"
        href="/destination/nyc/booking?tab=flights&from=best-time-to-visit"
        label="Book your trip"
      />
      <SeasonCards />
      <MonthGrid />
      <EmailSignup source="best-time-to-visit" />
      <TravelerTypes />
      <FAQAccordion faqs={faqData} />
      <BookingCTA
        variant="full"
        text="Book flights and hotels for your NYC trip"
        href="/destination/nyc/booking?tab=flights&from=best-time-to-visit"
        label="Book your trip"
      />
      <Footer />
    </>
  );
}
