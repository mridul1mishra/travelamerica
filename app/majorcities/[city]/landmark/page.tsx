"use client";
import { useParams } from "next/navigation";
import Header from "../../../components/Header/header";
import Link from 'next/link';
import Image from 'next/image';
import styles from './landmark.module.css';
import Footer from "@/app/components/Header/Footer/footer";
export default function LandmarkPage() {
    const params = useParams();
    const cityParam = params?.city;
    const city = Array.isArray(cityParam) ? cityParam[0] : cityParam;
    const citiesWithoutBanner = ['lasvegas'];
    return(
        <>
       <Header image={`/data/majorcities/${city}/assets/landmark-banner.png`} bannerText={city && !citiesWithoutBanner.includes(city) ? `Solo Travel ${capitalizeWords(city)}!` : ""} />
       <section className={styles.splitSection}>
        <div className={styles.imageWrapper}>
          <Image
            src="/data/majorcities/newyork/assets/landmark_manhattan.png"
            alt="Day 1 NYC Route Map"
            fill
            className={styles.mapImage}
          />
        </div>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Manhattan: Bold streets, solo thrills, endless discovery.</h2>
          <p className={styles.subheading}>🚶‍♂️Manhattan invites solo discovery—iconic views from the Empire State, peaceful strolls in Central Park, sensory immersion in Times Square, and quiet reflection at The Met and MoMA. Bold, cinematic, endlessly walkable.</p>
          <p className={styles.subheading}>📸 Manhattan suits solo travelers with walkable streets, reliable transit, endless sights, and cozy cafés. It’s safe, spontaneous, and full of energy—ideal for unplanned detours, solo photo ops, and cultural immersion.</p>
          <p  className={styles.subheading}>🧭 Manhattan invites solo spontaneity with walkable landmarks, flexible itineraries, and central stays. Explore museums, cafés, and vibrant streets at your own pace—no rigid plans, just freedom to wander and reflect.</p>
          <Link href="/majorcities/newyork/food" className={styles.ctaButton}>
            Discover More NYC Landmarks 🗽
          </Link>
        </div>
      </section>
      <section className={styles.splitSection}>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Brooklyn: Creative corners, solo rhythm, local soul.</h2>
          <p className={styles.subheading}>🚶‍♂️Brooklyn invites solo travelers to roam creative streets, linger in indie bookstores, savor skyline views from Dumbo, and reflect in Prospect Park. It’s soulful, walkable, and full of unexpected solo moments.</p>
          <p className={styles.subheading}>📸 Brooklyn rewards solo travelers with creative freedom, walkable neighborhoods, and soulful spaces. Explore indie shops, quiet parks, and vibrant cafés—no schedule, no pressure, just your rhythm and the borough’s pulse.</p>
          <p  className={styles.subheading}>🧭 Brooklyn unfolds best with flexible plans—loop through creative hubs, pause in parks, stay near transit, and explore cafés by vibe. Modular itineraries make solo discovery easy, soulful, and self-paced.</p>
          <Link href="/majorcities/newyork/solo-itinerary" className={styles.ctaButton}>
            Discover More NYC Landmarks 🗽
          </Link>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src="/data/majorcities/newyork/assets/landmark_brooklyn.png"
            alt="Day 1 NYC Route Map"
            fill
            className={styles.mapImage}
          />
        </div>
      </section>
      <section className={styles.splitSection}>
        <div className={styles.imageWrapper}>
          <Image
            src="/data/majorcities/newyork/assets/landmark_sol.png"
            alt="Day 1 NYC Route Map"
            fill
            className={styles.mapImage}
          />
        </div>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Statue of Liberty: Stand solo in the shadow of freedom.</h2>
          <p className={styles.subheading}>🗽Stand solo beneath the Statue of Liberty and feel the scale of freedom. Ferry views, skyline moments, and quiet reflection make this landmark a cinematic, introspective experience for solo travelers.</p>
          <p className={styles.subheading}>🚶‍♀️ Visiting the Statue of Liberty alone means no distractions—just your thoughts, the wind, and the skyline. It’s empowering, peaceful, and perfect for solo photo ops and personal reflection.</p>
          <p  className={styles.subheading}>🧭 Plan your visit with morning ferries, skyline loops, and nearby solo-friendly cafés. Stay central, time it right, and pair it with Lower Manhattan walks for a seamless solo itinerary.</p>
          <Link href="/majorcities/newyork" className={styles.ctaButton}>
            Discover More NYC Landmarks 🗽
          </Link>
        </div>
      </section>
       <Footer />
       </>

    )
}
function capitalizeWords(str: string) {
  return str
    .toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase());
}