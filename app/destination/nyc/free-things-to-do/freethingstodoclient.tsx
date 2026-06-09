'use client';
import NycNavHeader from '../solo-trip-to-nyc/components/nycnavheader/NycNavHeader';
import HeroSection from './components/herosection/HeroSection';
import FreeCategories from './components/freecategories/FreeCategories';
import MuseumTable from './components/museumtable/MuseumTable';
import SeasonalEvents from './components/seasonalevents/SeasonalEvents';
import SavingsTips from './components/savingstips/SavingsTips';
import BookingCTA from '@/app/components/destination/BookingCTA/BookingCTA';
import FAQAccordion from '@/app/components/destination/faqsection/faqsection';
import EmailSignup from '@/app/components/destination/EmailSignup/EmailSignup';
import Footer from '@/app/components/Header/Footer/footer';

const faqData = [
  { question: 'What is the best free thing to do in NYC?', answer: 'The Staten Island Ferry — free 24/7, runs every 30 minutes, and gives you a 25-minute harbour cruise with unobstructed Statue of Liberty and lower Manhattan skyline views from the water.' },
  { question: 'Which NYC museums are completely free?', answer: 'MoMA PS1 is free for all visitors (as of January 2026). The National Museum of the American Indian and American Folk Art Museum are always free. The 9/11 Memorial Plaza (not museum) is free.' },
  { question: 'Can you visit Central Park for free?', answer: 'Yes — the entire 843-acre park is free to enter and explore. Free events include Shakespeare in the Park (summer), SummerStage concerts, outdoor yoga, and guided walking tours on weekends.' },
  { question: 'Is the Brooklyn Bridge free to walk?', answer: 'Yes — the pedestrian walkway is free and open 24/7. Walking from Manhattan to Brooklyn takes 30–45 minutes at a relaxed pace with elevated views of both skylines.' },
  { question: 'Are there free concerts in NYC?', answer: 'Yes — summer is particularly generous. SummerStage (citywide, free), Bryant Park Movies (Monday evenings), NYC Philharmonic and Met Opera in the Parks (July), and Shakespeare in the Park are all free or low-cost.' },
  { question: 'What free things can I do on a rainy day in NYC?', answer: 'The NYC Public Library main branch, Grand Central Terminal (free to explore), Chelsea Market (free to walk), museum free hours, and most covered markets and food halls are all free and weather-proof.' },
];

export default function FreeThingsToDoClient() {
  return (
    <>
      <NycNavHeader />
      <HeroSection />
      <BookingCTA
        variant="slim"
        text="Book your New York trip →"
        href="/destination/nyc/booking?tab=activities&from=free-things-to-do"
        label="Book your trip"
      />
      <FreeCategories />
      <MuseumTable />
      <EmailSignup source="free-things-to-do" />
      <SeasonalEvents />
      <SavingsTips />
      <FAQAccordion faqs={faqData} />
      <BookingCTA
        variant="full"
        text="Book guided tours and experiences for your NYC trip"
        href="/destination/nyc/booking?tab=activities&from=free-things-to-do"
        label="See tours & tickets"
      />
      <Footer />
    </>
  );
}
