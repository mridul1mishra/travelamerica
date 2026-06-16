"use client";
import { useParams } from "next/navigation";
import HeroBanner from "../../../components/Header/HeroBanner";
import NavigationHeader from "../../../components/Header/NavigationHeader";
import Link from 'next/link';
import Image from 'next/image';
import styles from './lasoloitinerary.module.css';
import Footer from "@/app/components/Header/Footer/footer";
import BookingCTA from '@/app/components/destination/BookingCTA/BookingCTA';
import FAQ from "@/app/components/faq/faq";
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

export default async function LASoloItineraryClient({ grouped }: SoloItineraryClientProps) {


    return(
      <>
    <div className="App">
      <NavigationHeader />
      <HeroBanner image={`/data/majorcities/losangeles/assets/solo-travel-itinerary.png`} bannerText="Solo Travel Itinerary for Los Angeles" variant="wide" />
      <BookingCTA variant="slim" text="Book hotels for your Los Angeles trip →" href="/destination/la/bookings?tab=hotels&from=solo-itinerary" label="Book this trip" />
      <section className={styles.splitSection} style={{  textAlign: "center" }}>
                <div style={{ width: "100%", textAlign: "center" }}>
                <h1  className={styles.sectionheading}>3-Day Solo Travel Itinerary for Los Angeles</h1>
                </div>
      </section>
      <section className={styles.splitSection}>
        <div className={styles.imageWrapper}>
          <Image
            src="/data/majorcities/losangeles/assets/daysololosangeles.png"
            alt="Map of solo travel route through Griffith Observatory, Los Feliz, and Silver Lake in LA"
            fill
            className={styles.mapImage}
          />
        </div>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Day 1: Griffith, Los Feliz & Silver Lake</h2>
          <p className={styles.subheading}>Ease into LA with its most walkable corner — earn a view, then wander streets you can actually do on foot.</p>
          <ul className={styles.itineraryList}>
              <li className={styles.subheading}>🌅Morning: Griffith Observatory (hike up from the Greek Theatre lot, ~30 min)
              <p className={styles.description}>Free entry. Arrive before 10am to beat the tour groups and earn the city view.</p>
              </li>

              <li className={styles.subheading}>☀️Afternoon: Los Feliz Village → coffee at Courage Bagels or Sqirl
              <p className={styles.description}>One of LA's rare proper walking streets — independent shops along Vermont Ave.</p>
              </li>
              <li className={styles.subheading}>☀️Midday: Stroll the Silver Lake Reservoir loop
              <p className={styles.description}>Flat, scenic, and pleasant at dusk — easy to do solo at your own pace.</p>
              </li>
              <li className={styles.subheading}>🌙Evening: Dinner at the bar — Bar Moruno or Alimento in Silver Lake
              <p className={styles.description}>Great solo dining energy at the counter, safe and lively.</p>
              </li>
              <li className={styles.subheading}>🚗Getting around: Drive or rideshare to the observatory lot
              <p className={styles.description}>Solo tip: Griffith and Los Feliz are among the safest areas to walk alone in LA — start here to find your feet.</p>
              </li>
          </ul>
          <Link href="/destination/la/solo-trip-to-la" className={styles.ctaButton}>
            Solo Trip to LA Guide
          </Link>
        </div>
      </section>
      <section className={styles.splitSection}>
          <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Day 2: Venice Beach & Santa Monica</h2>
          <p className={styles.subheading}>Trade the car for a bike. Today is all coast — flat path, ocean on your right the whole way.</p>
          <ul className={styles.itineraryList}>
              <li className={styles.subheading}>🌅Morning: Rent a bike in Santa Monica ($15–$25/hr) and ride south to Venice</li>
              <li className={styles.subheading}>☀️Midday: Venice Boardwalk → lunch at the Gjusta counter on Abbot Kinney</li>
              <li className={styles.subheading}>☀️Afternoon: Back to Santa Monica — Third Street Promenade or a quiet swim at Annenberg Beach House</li>
              <li className={styles.subheading}>🌙Evening: Sunset from Santa Monica Pier, then a bar seat at Rustic Canyon</li>
              <li className={styles.subheading}>🚗Getting around: Park once in Santa Monica and bike the rest — no rideshare needed all day</li>
          </ul>
          <Link href="/destination/la/neighborhood-guide" className={styles.ctaButton}>
            Best neighborhoods for solo travelers in LA
          </Link>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src="/data/majorcities/losangeles/assets/day2solo.png"
            alt="Scenic view of Venice Beach and the Santa Monica Pier featured in the Day 2 solo travel itinerary"
            fill
            className={styles.mapImage}
          />
        </div>
      </section>
      <section className={styles.splitSection}>
        <div className={styles.imageWrapper}>
          <Image
            src="/data/majorcities/losangeles/assets/day3.png"
            alt="Day 3 solo travel highlights in Los Angeles featuring the Getty Center and Downtown Arts District"
            fill
            className={styles.mapImage}
          />
        </div>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Day 3: The Getty & Downtown Arts District</h2>
          <p className={styles.subheading}>Hilltop art in the morning, downtown grit in the afternoon — two very different sides of LA in one day.</p>
          <ul className={styles.itineraryList}>
              <li className={styles.subheading}>🌅Morning: The Getty Center — free admission, $20 parking, arrive at the 10am opening</li>
              <li className={styles.subheading}>☀️Midday: Drive to DTLA → lunch at a stall bar in Grand Central Market</li>
              <li className={styles.subheading}>☀️Afternoon: The Broad (book ahead, free-to-$18) → Arts District murals on Mateo St</li>
              <li className={styles.subheading}>🌙Evening: Coffee at Endorffeine, then a gallery walk from Hauser & Wirth</li>
              <li className={styles.subheading}>🚗Solo tip: Stick to Grand Ave and the Arts District core — avoid walking more than a few blocks east of Main St after dark</li>
          </ul>
          <Link href="/destination/la/food" className={styles.ctaButton}>
            Best Food Stops Along the Route
          </Link>
        </div>
      </section>
      <FAQ groupedFaqs={grouped}/>
      <BookingCTA variant="full" text="Find the right hotel for your LA stay" href="/destination/la/bookings?tab=hotels&from=solo-itinerary" label="Book your trip" />
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
