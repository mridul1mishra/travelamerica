"use client";
import { useParams } from "next/navigation";
import HeroBanner from "./components/HeroBanner/HeroBanner";
import NavigationHeader from "./components/NavigationHeader/NavigationHeader";
import Link from 'next/link';
import Image from 'next/image';
import styles from './SoloItinerary.module.css';
import Footer from "./components/Footer/Footer";
import BookingCTA from "./components/BookingCTA/BookingCTA";
import EmailSignup from "./components/EmailSignup/EmailSignup";
import FAQ from "./components/FAQ/FAQ";
import { getFaq, getFaqItinerary } from "@/app/lib/FaqData";

interface FaqItem {
  id?: string;
  question: string;
  answer: string;
}

// Define props for the component
interface SoloItineraryClientProps {
  grouped: Record<string, FaqItem[]>;
}

export default async function SoloItineraryClient({ grouped }: SoloItineraryClientProps) {
    

    return(
      <>
    <div className="App">
      <NavigationHeader />
      <HeroBanner image={`/data/majorcities/newyork/assets/solo-travel-itinerary.png`} bannerText="Solo Travel Itinerary for New York City" />
      <BookingCTA variant="slim" text="Book your New York trip →" href="/destination/nyc/booking?tab=hotels&from=solo-itinerary" label="See NYC hotels" />
      <section className={styles.splitSection} style={{  textAlign: "center" }}>
                <div style={{ width: "100%", textAlign: "center" }}>
                <h1  className={styles.sectionheading}>3-Day Solo Travel Itinerary for New York City</h1>
                </div>
      </section>  
      <section className={styles.splitSection}>
        <div className={styles.imageWrapper}>
          <Image
            src="/data/majorcities/newyork/assets/daysolonew.png"
            alt="Map of solo travel route through Central Park and Rockefeller Center in NYC"
            fill
            className={styles.mapImage}
          />
        </div>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Day 1: NYC Landmarks for Solo Travelers</h2>
          <p className={styles.subheading}>Start with the classics — the big sights and a few easy wins to get your bearings.</p>
          <ul className={styles.itineraryList}>
              <li className={styles.subheading}>🌅Morning: Central Park(Bethesda Terrace → Strawberry Fields
              <p className={styles.description}>Easy walk on your own, and the views hold up.</p>
              </li>
            
              <li className={styles.subheading}>☀️Afternoon: Rockefeller Center → Top of the Rock
              <p className={styles.description}>Best skyline shots, smooth solo flow.</p>
              </li>
              <li className={styles.subheading}>☀️Midday: The Met to MoMA
              <p className={styles.description}>Pick one or do both — great art either way, and easy to get around.</p>
              </li>
              <li className={styles.subheading}>🌙Evening: Dinner at Time Out Market or Eataly Flatiron
              <p className={styles.description}>Great solo dining energy, safe and lively.</p>
              </li>
          </ul>
          <Link href="/destination/nyc/solo-trip-to-nyc" className={styles.ctaButton}>
            Solo Trip to NYC Guide
          </Link>
        </div>
      </section>
      <EmailSignup source="solo-itinerary" />
      <section className={styles.splitSection}>
          <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Day 2: Neighborhoods & Culture</h2>
          <p className={styles.subheading}>Get local. Today’s about walking, eating, and soaking up NYC’s creative energy.</p>
          <ul className={styles.itineraryList}>
              <li className={styles.subheading}>🌅Morning: Coffee + bagel in West Village — Joe Coffee or Murray’s Bagels</li>
              <li className={styles.subheading}>☀️Afternoon: Explore SoHo galleries or shop in Nolita</li>
              <li className={styles.subheading}>☀️Midday: Walk the High Line → lunch at Chelsea Market</li>
              <li className={styles.subheading}>🌙Evening: Catch a Broadway show — solo seats are easy to grab</li>
          </ul>
          <Link href="/destination/nyc/landmark" className={styles.ctaButton}>
            Best neighborhoods for solo travelers in NYC
          </Link>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src="/data/majorcities/newyork/assets/day2solo.png"
            alt="Scenic view of New York City landmarks featured in the Day 2 solo travel itinerary"
            fill
            className={styles.mapImage}
          />
        </div>  
      </section>
      <section className={styles.splitSection}>
        <div className={styles.imageWrapper}>
          <Image
            src="/data/majorcities/newyork/assets/day3.png"
            alt="Day 3 solo travel highlights in New York City featuring local experiences and iconic sights"
            fill
            className={styles.mapImage}
          />
        </div>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Day 3: Brooklyn & Local Vibes</h2>
          <p className={styles.subheading}>Cross the river. Brooklyn offers chill parks, great food, and skyline views.</p>
          <ul className={styles.itineraryList}>
              <li className={styles.subheading}>🌅Morning: Take the Staten Island Ferry for free Statue of Liberty views</li>
              <li className={styles.subheading}>☀️Midday: Walk Brooklyn Bridge → explore DUMBO and lunch at Empire Stores</li>
              <li className={styles.subheading}>☀️Afternoon: Chill in Prospect Park or visit Brooklyn Museum</li>
              <li className={styles.subheading}>🌙Evening: Rooftop drink at Westlight or jazz at The Django</li>
          </ul>
          <Link href="/destination/nyc/food" className={styles.ctaButton}>
            Best Food Stops Along the Route
          </Link>
        </div>
      </section>
      <FAQ groupedFaqs={grouped}/>
      <BookingCTA variant="full" text="Book your stay for this itinerary" href="/destination/nyc/booking?tab=hotels&from=solo-itinerary" label="See NYC hotels" />
      <Footer />  
    </div>
    </>       
);
}
function capitalizeWords(str: string) {
  return str
    .toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase());
}
