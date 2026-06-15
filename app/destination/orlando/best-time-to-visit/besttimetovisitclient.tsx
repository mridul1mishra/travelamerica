'use client';
import OrlandoNavHeader from '../solo-trip-to-orlando/components/orlandonavheader/OrlandoNavHeader';
import HeroSection from './components/herosection/HeroSection';
import SeasonCards from './components/seasoncards/SeasonCards';
import MonthGrid from './components/monthgrid/MonthGrid';
import TravelerTypes from './components/travelertypes/TravelerTypes';
import BookingCTA from '@/app/components/destination/BookingCTA/BookingCTA';
import FAQAccordion from '@/app/components/destination/faqsection/faqsection';
import EmailSignup from '@/app/components/destination/EmailSignup/EmailSignup';
import Footer from '@/app/components/Header/Footer/footer';

const faqData = [
  { question: 'What is the best month to visit Orlando?', answer: 'Late September–October and late January–February are the best overall months: lower crowd levels at the parks, more comfortable temperatures, and hotel rates well below peak summer and holiday pricing. October is the single best month for most visitors — short wait times, Halloween events, and EPCOT\'s Food & Wine Festival all overlap.' },
  { question: 'What is the cheapest time to visit Orlando?', answer: 'January and February (after the first week of January) offer the lowest prices of the year. Off-site hotels can be 30–40% cheaper than summer peak, park wait times are at their shortest, and the weather is mild and dry — ideal for long days outdoors.' },
  { question: 'Is Orlando worth visiting in summer?', answer: 'Summer is the busiest and most expensive time. That said, parks offer their longest operating hours, water parks are in full swing, and the evening entertainment calendar is at its peak. If you go in summer, arrive at park opening, use the Lightning Lane or equivalent, and take a mid-afternoon break during the hottest/stormiest part of the day (1–4pm).' },
  { question: 'Does Orlando\'s weather affect the parks?', answer: 'Summer afternoons bring near-daily thunderstorms — typically brief but intense. Outdoor rides close during lightning alerts, usually for 30–60 minutes. Morning visits avoid most storms. Outdoor attractions like water parks and some outdoor queues are most affected.' },
  { question: 'When does fall start to feel good in Orlando?', answer: 'Late September marks the transition — humidity drops, temperatures ease from their summer peak, and school is back so weekday crowds shrink noticeably. By mid-October the weather is genuinely pleasant for walking, with daytime highs around 26–28°C and cool evenings.' },
  { question: 'What events should I plan my Orlando trip around?', answer: "EPCOT Flower & Garden Festival (March–June), Mickey's Not-So-Scary Halloween Party (Sept–Oct, select nights, separate ticket), EPCOT Food & Wine Festival (July–Nov), Universal's Halloween Horror Nights (Sept–Nov, separate ticket), Mickey's Very Merry Christmas Party (Nov–Dec, separate ticket), and EPCOT Festival of the Arts (Jan–Feb) are the most popular anchors." },
];

export default function BestTimeToVisitClient() {
  return (
    <>
      <OrlandoNavHeader />
      <HeroSection />
      <BookingCTA
        variant="slim"
        text="Book your Orlando trip →"
        href="/destination/orlando/bookings?tab=hotels&from=best-time-to-visit"
        label="Book your trip"
      />
      <SeasonCards />
      <MonthGrid />
      <EmailSignup source="best-time-to-visit" city="Orlando" />
      <TravelerTypes />
      <FAQAccordion faqs={faqData} />
      <BookingCTA
        variant="full"
        text="Book flights and hotels for your Orlando trip"
        href="/destination/orlando/bookings?tab=hotels&from=best-time-to-visit"
        label="Book your trip"
      />
      <Footer />
    </>
  );
}
