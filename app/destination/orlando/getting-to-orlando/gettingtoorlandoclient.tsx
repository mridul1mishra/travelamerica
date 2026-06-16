'use client';
import OrlandoNavHeader from './components/orlandonavheader/OrlandoNavHeader';
import HeroSection from './components/herosection/HeroSection';
import AirportTabs from './components/airporttabs/AirportTabs';
import ScamWarning from './components/scamwarning/ScamWarning';
import ArrivalTips from './components/arrivaltips/ArrivalTips';
import BookingCTA from './components/BookingCTA/BookingCTA';
import FAQAccordion from './components/FAQAccordion/faqsection';
import EmailSignup from './components/EmailSignup/EmailSignup';
import Footer from './components/Footer/footer';

const faqData = [
  { question: 'What is the best way to get from MCO to Walt Disney World?', answer: 'For most visitors, a rental car is the most flexible option. If you prefer not to drive, Mears Connect offers shared and private shuttles directly to Disney resorts. Rideshare from MCO to Disney typically runs $30â€“60 depending on destination and traffic. Disney\'s Magical Express has been discontinued.' },
  { question: 'How far is MCO from Walt Disney World and Universal Studios?', answer: 'MCO is approximately 20â€“25 minutes from Walt Disney World and 15â€“20 minutes from Universal Orlando and I-Drive without traffic. Budget more time during peak hours and school holidays.' },
  { question: 'Is Sanford Airport (SFB) a good option for Orlando?', answer: 'SFB is worth considering if you find a much cheaper fare on Allegiant or a charter carrier. But SFB is about 45 miles north of Walt Disney World â€” a 50-minute drive without traffic. You will need a rental car or pre-booked shuttle; rideshare to Disney from SFB runs $80â€“120+, and no hotel or Disney shuttles serve SFB.' },
  { question: 'Can I take Brightline to Orlando?', answer: 'Yes â€” Brightline runs higher-speed trains from Miami, Fort Lauderdale, Boca Raton, and West Palm Beach to a station inside MCO Terminal C. You still need onward transport from MCO to reach Disney or Universal. Check brightline.com for current schedules, as these may change.' },
  { question: 'Is Disney\'s Magical Express still running?', answer: 'No â€” Magical Express was permanently discontinued in January 2022. The current Disney-area airport shuttle replacement is Mears Connect (mearstransportation.com), offering shared and private options between MCO and Disney properties.' },
  { question: 'Do I need a rental car in Orlando?', answer: 'For most trips, yes. Public transit is limited and does not practically reach the theme parks. Exceptions: guests staying entirely on Disney property (Disney\'s free internal bus/boat network covers all parks and resorts), or guests at Universal on-site hotels walking distance from Universal parks. For any off-property activity, a rental car is strongly recommended.' },
];

export default function GettingToOrlandoClient() {
  return (
    <>
      <OrlandoNavHeader />
      <HeroSection />
      <BookingCTA
        variant="slim"
        text="Book your Orlando trip â†’"
        href="/destination/orlando/bookings?tab=hotels&from=getting-to-orlando"
        label="Book your trip"
      />
      <AirportTabs />
      <EmailSignup source="getting-to-orlando" city="Orlando" />
      <ScamWarning />
      <ArrivalTips />
      <FAQAccordion faqs={faqData} />
      <BookingCTA
        variant="full"
        text="Book flights and hotels for your Orlando trip"
        href="/destination/orlando/bookings?tab=hotels&from=getting-to-orlando"
        label="Book your trip"
      />
      <Footer />
    </>
  );
}
