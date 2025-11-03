"use client";
import { useParams } from "next/navigation";
import Header from "../../../components/Header/header";
import Link from 'next/link';
import Image from 'next/image';
import styles from './SoloItinerary.module.css';
import Footer from "@/app/components/Header/Footer/footer";
export default function SoloItineraryPage() {
    const params = useParams();
    const cityParam = params?.city;
    const city = Array.isArray(cityParam) ? cityParam[0] : cityParam;
    const citiesWithoutBanner = ['lasvegas'];
    return(
    <div className="App">
      <Header image={`/data/majorcities/${city}/assets/banner-itinerary.png`} bannerText={city && !citiesWithoutBanner.includes(city) ? `Solo Travel ${capitalizeWords(city)}!` : ""} />
        
      <section className={styles.splitSection}>
        <div className={styles.imageWrapper}>
          <Image
            src="/data/majorcities/newyork/assets/daysolonew.png"
            alt="Day 1 NYC Route Map"
            fill
            className={styles.mapImage}
          />
        </div>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Day 1: Landmarks & Skyline Views</h2>
          <p className={styles.subheading}>Start with the classics. Today’s about iconic sights and easy wins.</p>
          <ul className={styles.itineraryList}>
              <li>Morning: Central Park — Bethesda Terrace to Strawberry Fields</li>
              <li>Afternoon: Rockefeller Center — Top of the Rock</li>
              <li>Midday: The Met to MoMA</li>
              <li>Evening: Dinner at Time Out Market or Eataly Flatiron</li>
          </ul>
          <Link href="/destination/newyork/landmark" className={styles.ctaButton}>
            Discover More NYC Landmarks 🗽
          </Link>
        </div>
      </section>
      <section className={styles.splitSection}>
          <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Day 2: Neighborhoods & Culture</h2>
          <p className={styles.subheading}>Get local. Today’s about walking, eating, and soaking up NYC’s creative energy.</p>
          <ul className={styles.itineraryList}>
              <li>Morning: Coffee + bagel in West Village — Joe Coffee or Murray’s Bagels</li>
              <li>Afternoon: Explore SoHo galleries or shop in Nolita</li>
              <li>Midday: Walk the High Line → lunch at Chelsea Market</li>
              <li>Evening: Catch a Broadway show — solo seats are easy to grab</li>
          </ul>
          <Link href="/destination/newyork/neighbourhood" className={styles.ctaButton}>
            Find Your NYC Neighborhood
          </Link>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src="/data/majorcities/newyork/assets/day2solo.png"
            alt="Day 2 NYC Image"
            fill
            className={styles.mapImage}
          />
        </div>  
      </section>
      <section className={styles.splitSection}>
        <div className={styles.imageWrapper}>
          <Image
            src="/data/majorcities/newyork/assets/day3.png"
            alt="Day 1 NYC Route Map"
            fill
            className={styles.mapImage}
          />
        </div>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Day 3: Brooklyn & Local Vibes</h2>
          <p className={styles.subheading}>Cross the river. Brooklyn offers chill parks, great food, and skyline views.</p>
          <ul className={styles.itineraryList}>
              <li>Morning: Take the Staten Island Ferry for free Statue of Liberty views</li>
              <li>Midday: Walk Brooklyn Bridge → explore DUMBO and lunch at Empire Stores</li>
              <li>Afternoon: Chill in Prospect Park or visit Brooklyn Museum</li>
              <li>Evening: Rooftop drink at Westlight or jazz at The Django</li>
          </ul>
          <Link href="/destination/newyork/food" className={styles.ctaButton}>
            Discover NYC’s Food Scene
          </Link>
        </div>
      </section>
      <Footer />  
    </div>       
);
}
function capitalizeWords(str: string) {
  return str
    .toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase());
}
