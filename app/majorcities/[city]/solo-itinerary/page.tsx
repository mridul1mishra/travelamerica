"use client";
import { useParams } from "next/navigation";
import Header from "../../../components/Header/header";
import Link from 'next/link';
import Image from 'next/image';
import styles from './SoloItinerary.module.css';
export default function SoloItineraryPage() {
    const params = useParams();
    const cityParam = params?.city;
    const city = Array.isArray(cityParam) ? cityParam[0] : cityParam;
    const citiesWithoutBanner = ['lasvegas'];
    return(
    <div className="App">
      <Header image={`/data/majorcities/${city}/assets/${city}.jpeg`} bannerText={city && !citiesWithoutBanner.includes(city) ? `Welcome to ${capitalizeWords(city)}!` : ""} />
        
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
    </div>      
);
}
function capitalizeWords(str: string) {
  return str
    .toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase());
}
