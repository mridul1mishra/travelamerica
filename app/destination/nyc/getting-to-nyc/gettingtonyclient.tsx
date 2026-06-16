'use client';
import NycNavHeader from "./components/NycNavHeader/NycNavHeader";
import HeroSection from './components/herosection/HeroSection';
import AirportTabs from './components/airporttabs/AirportTabs';
import ScamWarning from './components/scamwarning/ScamWarning';
import ArrivalTips from './components/arrivaltips/ArrivalTips';
import BookingCTA from "./components/BookingCTA/BookingCTA";
import FAQAccordion from "./components/FAQAccordion/FAQAccordion";
import EmailSignup from "./components/EmailSignup/EmailSignup";
import Footer from "./components/Footer/Footer";

const faqData = [
  { question: 'What is the cheapest way to get from JFK to Manhattan?', answer: 'The AirTrain + subway is the cheapest at around $10.40 per person (50–70 min to Midtown). Take the AirTrain to Jamaica station, then the E train into Midtown.' },
  { question: 'Is there a subway from LaGuardia Airport?', answer: 'No direct subway line serves LaGuardia. Take the free Q70 LaGuardia Link bus to Jackson Heights–Roosevelt Ave, then connect to the E, F, M, N, or R subway lines into Manhattan.' },
  { question: 'How long does it take to get from Newark Airport to Manhattan?', answer: 'The NJ Transit train takes 45–60 minutes to Penn Station (34th Street) and costs about $17.85. One ticket covers the AirTrain from the terminal and the NJ Transit train.' },
  { question: 'Can I take an Uber from JFK to Manhattan?', answer: 'Yes — rideshare from JFK costs $70–$100+ depending on traffic and surge pricing. Follow airport signs to the designated rideshare pickup zones. Do not accept rides from people approaching you inside the terminal.' },
  { question: 'What is the Uber Shuttle from JFK?', answer: 'Uber Shuttle is a fixed-rate ($25/person) shared shuttle that runs from JFK terminals 4 & 5 to Grand Central and Port Authority (Route 1) or to Downtown Brooklyn and Chinatown (Route 2). Book in advance via the Uber app.' },
  { question: 'Which NYC airport is easiest to travel from?', answer: 'For public transit: JFK has the best connection (AirTrain + subway). For rail reliability: Newark has the most consistent train service (NJ Transit to Penn Station). For proximity: LaGuardia is the closest but has the fewest transit options.' },
];

export default function GettingToNYCClient() {
  return (
    <>
      <NycNavHeader />
      <HeroSection />
      <BookingCTA
        variant="slim"
        text="Book your New York trip →"
        href="/destination/nyc/booking?tab=hotels&from=getting-to-nyc"
        label="Book your trip"
      />
      <AirportTabs />
      <EmailSignup source="getting-to-nyc" />
      <ScamWarning />
      <ArrivalTips />
      <FAQAccordion faqs={faqData} />
      <BookingCTA
        variant="full"
        text="Book flights and hotels for your NYC trip"
        href="/destination/nyc/booking?tab=hotels&from=getting-to-nyc"
        label="Book your trip"
      />
      <Footer />
    </>
  );
}
