"use client"
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import styles from "./neighborhoodguide.module.css";
// Dead imports for -notused/ folders removed. Their JSX usages below were already
// commented out, and the folders themselves were deleted during this cleanup pass.
import IntroSection  from "./components/introsection/introsection";
import CityOrganization from "./components/cityorganization/cityorganization";
import NeighborhoodsByStyle from "./components/Neighborhoodbystyle/Neighborhoodbystyle";
import PopularNeighborhoods from "./components/PopularNeighborhood/Popularneighborhood";
import WhereFirstTimersStay from "./components/Wherefirsttimerstay/wherefirsttimestay";
import GettingAround from "./components/Gettingaround/Gettingaround";
import SafetyOverview from "./components/SafetyOverview/Safetyoverview";
import NeighborhoodGuideCTA from "./components/Neighborhoodguidecta/Neighborhoodguidecta";
import BookingCTA from "./components/BookingCTA/BookingCTA";
import { WhyTrustThisGuide } from "./components/WhyTrustThisGuide/WhyTrustThisGuide";
import FAQAccordion from "./components/FAQAccordion/FAQAccordion";
import faqData from '@/content/destination/nyc/neighborhood-guide/faq/faqsection.json';

type Props = {
    interest?: string;
}
export default function Neighborhoodguide({interest}: Props) {
    return(
        <>
        <Header />
        <BookingCTA variant="slim" text="Book your New York trip →" href="/destination/nyc/booking?tab=hotels&from=neighborhood-guide" label="See NYC hotels" />
        <div className={styles.container}>
        <IntroSection />
        <section className={styles.routeRole} aria-labelledby="route-role-heading">
          <p className={styles.eyebrow}>How to use this guide</p>
          <h2 id="route-role-heading">Use this page to understand NYC neighborhoods, not just pick a hotel</h2>
          <p>
            This neighborhood guide compares the feel of Manhattan, Brooklyn, Queens, nightlife areas, food areas, safe residential bases, and sightseeing zones. If you only need the best areas to stay in NYC, use the stay-area ranking page; if you want to understand how the city fits together, stay here.
          </p>
          <div className={styles.roleGrid}>
            <article>
              <h3>For hotel decisions</h3>
              <p>Compare Upper West Side, Midtown East, Chelsea, Lower Manhattan, Long Island City, Williamsburg, and Brooklyn Heights by safety, subway access, and budget.</p>
              <a href="/destination/nyc/best-areas-to-stay">Open best areas to stay</a>
            </article>
            <article>
              <h3>For food and nightlife</h3>
              <p>Use Greenwich Village, SoHo, Williamsburg, Lower East Side, Chelsea, and Midtown as starting points depending on whether you want late rooms, restaurants, bars, or easy returns.</p>
              <a href="/destination/nyc/food">Open NYC food guide</a>
            </article>
            <article>
              <h3>For safety context</h3>
              <p>Safe areas still vary by block and hour. Use active avenues, well-lit subway access, and the safety hub before late-night routes or unfamiliar transfers.</p>
              <a href="/destination/nyc/nyc-safety-guide">Open NYC safety guide</a>
            </article>
          </div>
        </section>
        <CityOrganization />
        <NeighborhoodsByStyle interest={interest}/>
        <PopularNeighborhoods interest={interest}/>
        <WhereFirstTimersStay />
        <GettingAround />
        <SafetyOverview />
        <WhyTrustThisGuide />
        <FAQAccordion faqs={faqData} />
        <NeighborhoodGuideCTA />
        </div>
        <BookingCTA variant="full" text="See hotels in the best NYC neighborhoods" href="/destination/nyc/booking?tab=hotels&from=neighborhood-guide" label="See NYC hotels" />
        <Footer />
        </>
    )

}
