'use client';
import OrlandoNavHeader from './components/orlandonavheader/OrlandoNavHeader';
import HeroSection from './components/herosection/HeroSection';
import SeasonCards from './components/seasoncards/SeasonCards';
import MonthGrid from './components/monthgrid/MonthGrid';
import TravelerTypes from './components/travelertypes/TravelerTypes';
import BookingCTA from './components/BookingCTA/BookingCTA';
import FAQAccordion from './components/FAQAccordion/faqsection';
import EmailSignup from './components/EmailSignup/EmailSignup';
import Footer from './components/Footer/footer';

const faqData = [
  { question: 'What is the best month to visit Orlando?', answer: 'Late Septemberâ€“October and late Januaryâ€“February are the best overall months: lower crowd levels at the parks, more comfortable temperatures, and hotel rates well below peak summer and holiday pricing. October is the single best month for most visitors â€” short wait times, Halloween events, and EPCOT\'s Food & Wine Festival all overlap.' },
  { question: 'What is the cheapest time to visit Orlando?', answer: 'January and February (after the first week of January) offer the lowest prices of the year. Off-site hotels can be 30â€“40% cheaper than summer peak, park wait times are at their shortest, and the weather is mild and dry â€” ideal for long days outdoors.' },
  { question: 'Is Orlando worth visiting in summer?', answer: 'Summer is the busiest and most expensive time. That said, parks offer their longest operating hours, water parks are in full swing, and the evening entertainment calendar is at its peak. If you go in summer, arrive at park opening, use the Lightning Lane or equivalent, and take a mid-afternoon break during the hottest/stormiest part of the day (1â€“4pm).' },
  { question: 'Does Orlando\'s weather affect the parks?', answer: 'Summer afternoons bring near-daily thunderstorms â€” typically brief but intense. Outdoor rides close during lightning alerts, usually for 30â€“60 minutes. Morning visits avoid most storms. Outdoor attractions like water parks and some outdoor queues are most affected.' },
  { question: 'When does fall start to feel good in Orlando?', answer: 'Late September marks the transition â€” humidity drops, temperatures ease from their summer peak, and school is back so weekday crowds shrink noticeably. By mid-October the weather is genuinely pleasant for walking, with daytime highs around 26â€“28Â°C and cool evenings.' },
  { question: 'What events should I plan my Orlando trip around?', answer: "EPCOT Flower & Garden Festival (Marchâ€“June), Mickey's Not-So-Scary Halloween Party (Septâ€“Oct, select nights, separate ticket), EPCOT Food & Wine Festival (Julyâ€“Nov), Universal's Halloween Horror Nights (Septâ€“Nov, separate ticket), Mickey's Very Merry Christmas Party (Novâ€“Dec, separate ticket), and EPCOT Festival of the Arts (Janâ€“Feb) are the most popular anchors." },
];

export default function BestTimeToVisitClient() {
  return (
    <>
      <OrlandoNavHeader />
      <HeroSection />
      <BookingCTA
        variant="slim"
        text="Book your Orlando trip â†’"
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
