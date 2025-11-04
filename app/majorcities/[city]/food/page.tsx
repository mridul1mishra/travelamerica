"use client";
import { useParams } from "next/navigation";
import Header from "../../../components/Header/header";
import Link from 'next/link';
import Image from 'next/image';
import styles from './food.module.css';
import Footer from "@/app/components/Header/Footer/footer";
export default function FoodPage() {
    const params = useParams();
    const cityParam = params?.city;
    const city = Array.isArray(cityParam) ? cityParam[0] : cityParam;
    const citiesWithoutBanner = ['lasvegas'];
    return(
        <>
        <Header image={`/data/majorcities/${city}/assets/banner-itinerary.png`} bannerText={city && !citiesWithoutBanner.includes(city) ? `Solo Travel ${capitalizeWords(city)}!` : ""} />
        <section className={styles.splitSection}>
                <div className={styles.imageWrapper}>
                <Image
                    src="/data/majorcities/newyork/assets/solodinercozy.png"
                    alt="Day 1 NYC Route Map"
                    fill
                    className={styles.mapImage}
                />
                </div>
                <div className={styles.textWrapper}>
                <h2 className={styles.heading}>Solo Dining, NYC Style: Cozy Counters & Elegant Bars</h2>
                <p className={styles.subheading}>🍜 <strong>Fast, flavorful, and perfect for solo diners on the go.</strong> - Ichiran Ramen, Mimi Cheng’s Dumplings, and Shake Shack offer fast, flavorful meals with counter seating or solo booths.</p>
                <p className={styles.subheading}>🍷 <strong>Bar Dining with Style -</strong> The Modern, Estela, and Café Sabarsky provide elegant bar seating where solo guests can enjoy refined food and ambiance.</p>
                <p className={styles.subheading}>🥯 <strong>Local Flavor & Theater Vibes -</strong> Murray’s Bagels, Grand Central Oyster Bar, and Joe Allen deliver iconic bites and Broadway-adjacent charm — ideal for pre- or post-show dining.</p>
                
                <Link href="/majorcities/newyork/landmark" className={styles.ctaButton}>
                    Discover More NYC Landmarks 🗽
                </Link>
                </div>
        </section>
        <section className={styles.splitSection}>
                
                <div className={styles.textWrapper}>
                <h2 className={styles.heading}>Flavor Hopping: NYC’s Most Delicious Food Hall Stops</h2>
                <p className={styles.subheading}>🏙️ <strong>DUMBO Eats with Views -</strong> Kick off with skyline views and curated eats like Pat LaFrieda burgers and rooftop cocktails.</p>
                <p className={styles.subheading}>🍣 <strong>Midtown’s Best Counter Culture -</strong> Hop to Grand Central for Roberta’s pizza, Takumi Tacos, and Blue Bottle coffee in a compact, solo-friendly space.</p>
                <p className={styles.subheading}>🥟 <strong>Chelsea Market: A Flavorful Finale -</strong> End with iconic tacos, hand-pulled noodles, and sweet treats in one of NYC’s most vibrant food halls.</p>
                
                <Link href="/majorcities/newyork/landmark" className={styles.ctaButton}>
                    Discover More NYC Landmarks 🗽
                </Link>
                </div>
                <div className={styles.imageWrapper}>
                <Image
                    src="/data/majorcities/newyork/assets/SoloDiner.png"
                    alt="Solo Diner"
                    fill
                    className={styles.mapImage}
                />
                </div>
        </section>
        <section className={styles.splitSection}>
                <div className={styles.imageWrapper}>
                <Image
                    src="/data/majorcities/newyork/assets/bagels.png"
                    alt="Day 1 NYC Route Map"
                    fill
                    className={styles.mapImage}
                />
                </div>
                <div className={styles.textWrapper}>
                <h2 className={styles.heading}>Bite Into the Bagel Capital</h2>
                <p className={styles.subheading}>🥯 <strong>Tradition in Every Bite -</strong>Iconic shops like Murray’s, Ess-a-Bagel, and Absolute Bagels serve traditional, hand-rolled bagels with timeless toppings.</p>
                <p className={styles.subheading}>🧈 <strong>Artisan Bagels & Inventive Toppings -</strong> Black Seed, Bagel Pub, and Utopia Bagels offer inventive flavors, wood-fired styles, and viral-worthy creations.</p>
                <p className={styles.subheading}>🗺️ <strong>Solo Bites & Schmear -</strong>Hudson Bagel, Apollo Bagels, and Tompkins Square Bagels provide cozy counters and outdoor seating — perfect for solo snacking.</p>
                
                <Link href="/majorcities/newyork/landmark" className={styles.ctaButton}>
                    Discover More NYC Landmarks 🗽
                </Link>
                </div>
        </section>
        <Footer />
        </>
    );
}
function capitalizeWords(str: string) {
  return str
    .toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase());
}