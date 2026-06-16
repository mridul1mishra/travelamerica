'use client';
import OrlandoNavHeader from './components/orlandonavheader/OrlandoNavHeader';
import HeroSection from './components/herosection/HeroSection';
import FreeCategories from './components/freecategories/FreeCategories';
import MuseumTable from './components/museumtable/MuseumTable';
import SeasonalEvents from './components/seasonalevents/SeasonalEvents';
import SavingsTips from './components/savingstips/SavingsTips';
import BookingCTA from './components/BookingCTA/BookingCTA';
import FAQAccordion from './components/FAQAccordion/faqsection';
import EmailSignup from './components/EmailSignup/EmailSignup';
import Footer from './components/Footer/footer';

const faqData = [
  { question: 'What are the best free things to do in Orlando beyond the theme parks?', answer: 'Disney Springs (free entry), Lake Eola Park, Kraft Azalea Garden in Winter Park, Tibet-Butler Preserve, Mead Botanical Garden, Universal CityWalk, and the Lake Eola Farmers Market every Sunday are all free. Orlando has more free experiences than most visitors expect.' },
  { question: 'Is Disney Springs really free to enter?', answer: 'Yes â€” completely free to enter and explore. No theme park ticket or reservation required. Parking is free in the Lime and Orange garages (first hour) and free all day in the overflow lots. You only pay for food, shopping, or specific paid attractions inside.' },
  { question: 'Are there free nature experiences near Orlando?', answer: 'Yes. Tibet-Butler Preserve offers a free 0.75-mile boardwalk through Florida wetlands. Lake Apopka Wildlife Drive is free for pedestrians and cyclists â€” one of Florida\'s best birding spots, especially October through March. Mead Botanical Garden (48 acres) and Kraft Azalea Garden are both free and open daily.' },
  { question: 'Which Orlando museums have free entry?', answer: 'The Charles Hosmer Morse Museum of American Art (world\'s finest Tiffany glass collection) is free on Friday evenings 4â€“8pm, November through April. The Orange County Regional History Center is free on second Sundays. The Orlando Museum of Art is free on third Thursdays 6â€“9pm.' },
  { question: 'What free things can families do in Orlando?', answer: 'Lake Eola Park has free playgrounds and a free walkway around the lake. Universal CityWalk has free street performers on weekend evenings. Disney Springs has free live entertainment and character sightings. Tibet-Butler Preserve is great for kids interested in Florida wildlife.' },
  { question: 'Are there free events in Orlando?', answer: 'Yes. The Lake Eola Farmers Market runs every Sunday morning (free to attend). Milk District Art Strolls (First Fridays) are free. Disney Springs hosts free live music on weekend evenings. The Winter Park Sidewalk Art Festival in March has free admission.' },
];

export default function FreeThingsToDoClient() {
  return (
    <>
      <OrlandoNavHeader />
      <HeroSection />
      <BookingCTA
        variant="slim"
        text="Book your Orlando trip â†’"
        href="/destination/orlando/bookings?tab=activities&from=free-things-to-do"
        label="Book your trip"
      />
      <FreeCategories />
      <MuseumTable />
      <EmailSignup source="free-things-to-do" city="Orlando" />
      <SeasonalEvents />
      <SavingsTips />
      <FAQAccordion faqs={faqData} />
      <BookingCTA
        variant="full"
        text="Book guided tours and experiences for your Orlando trip"
        href="/destination/orlando/bookings?tab=activities&from=free-things-to-do"
        label="See tours & tickets"
      />
      <Footer />
    </>
  );
}
