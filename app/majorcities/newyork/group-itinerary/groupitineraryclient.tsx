"use client";
import { useParams } from "next/navigation";
import Header from "../../../components/Header/header";
import Link from 'next/link';
import Image from 'next/image';
import styles from './groupitinerary.module.css';
import Footer from "@/app/components/Header/Footer/footer";

export default function GroupItineraryClient() {
    return(
        <>
        <div className="App">
            <Header image={`/data/majorcities/newyork/assets/solo-travel-itinerary.png`} bannerText={`Solo Travel Itinerary for New York City`} />
            <section className={styles.splitSection} style={{ paddingTop: "175px", textAlign: "center" }}>
                <div style={{ width: "100%", textAlign: "center" }}>
                    <h1  className={styles.sectionheading}>3-Day Group Travel Itinerary for New York City</h1>
                </div>
            </section>  
            <section className={styles.splitSection}>
                <div className={styles.imageWrapper}>
                <Image src="/data/majorcities/newyork/assets/daysolonew.png" alt="Map of solo travel route through Central Park and Rockefeller Center in NYC"
                    fill className={styles.mapImage}/>
                </div>
                <div className={styles.textWrapper}>
                <h2 className={styles.heading}>Day 1: Broadway Nights, Group Delights</h2>
                <p className={styles.subheading}></p>
                <ul className={styles.itineraryList}>
                    <li className={styles.subheading}>🌅Start your 3‑day New York group itinerary in Times Square, where friends grab coffee, snap photos, and soak in the neon buzz. Head to Rockefeller Center’s Top of the Rock for panoramic skyline views — perfect for group shots and planning the day ahead.</li>
                    <li className={styles.subheading}>☀️Chelsea Market anchors the NYC itinerary with bustling halls, artisan shops, local flavors, and shared discovery. Groups then wander toward the High Line, where elevated paths and city views spark playful energy. Male groups enjoy tacos, female groups capture stylish photos, and kids delight in ice cream stops and colorful murals. Shared laughter and spontaneous moments leave everyone energized by the city experience.</li>
                    <li className={styles.subheading}>🌙Cap off the night with dinner in Hell’s Kitchen, , one of the best neighborhoods for group dining in NYC. Friends can enjoy hearty meals,  shared plates, or cocktails before heading to a  Broadway show. Distinctive group behaviors blend naturally — playful banter, cozy conversations, and balanced laughter — flowing smoothly from food to theater. As the lights dim 🎶, anticipation builds, and the shared awe of the performance unifies the group — ending the first night with laughter, wonder, and lasting connection.</li>
                </ul>
                <Link href="/majorcities/newyork/solo-travel" className={styles.ctaButton}>
                    NYC solo travel safety tips
                </Link>
                </div>
            </section>
            <section className={styles.splitSection}>
          <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Day 2: Culture, Landmarks & Camaraderie</h2>
          <p className={styles.subheading}></p>
          <ul className={styles.itineraryList}>
              <li className={styles.subheading}>🌅 Harlem sets the tone with the Apollo Theater and street art celebrating jazz heritage. Chinatown’s markets and park games immerse visitors in tradition, while Little Italy’s churches, shops, and performances add historic charm, weaving culture into a shared group experience.</li>
              <li className={styles.subheading}>☀️The afternoon highlights New York’s cultural landmarks. At MoMA, groups pause before Starry Night, sharing quiet awe. The Natural History Museum shifts the mood with towering dinosaurs and immersive planetarium shows. The Tenement Museum reveals immigrant resilience, while the Whitney inspires reflection on modern American art, weaving culture into a shared group journey.</li>
              <li className={styles.subheading}>🌙As night falls, Times Square glows with neon spectacle and street performers. A Broadway show fills the evening with shared awe and applause. The group then drifts into the East Village, where live music and eclectic bars extend the rhythm of discovery, closing Day 2 with camaraderie.</li>
              
          </ul>
          <Link href="/majorcities/newyork/landmark" className={styles.ctaButton}>
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
                <Image src="/data/majorcities/newyork/assets/daysolonew.png" alt="Map of solo travel route through Central Park and Rockefeller Center in NYC"
                    fill className={styles.mapImage}/>
                </div>
                <div className={styles.textWrapper}>
                <h2 className={styles.heading}>Day 1: Culture, Cruise, and Companionship</h2>
                <p className={styles.subheading}></p>
                <ul className={styles.itineraryList}>
                    <li className={styles.subheading}>🌅After the excitement of Broadway and the East Village, Day 3 begins at a gentler pace. Groups step into the Metropolitan Museum of Art, where timeless galleries invite quiet reflection and awe. A short walk into Central Park offers tree‑lined paths and lakeside views, creating a restorative balance of art and nature to ease into the day.</li>
                    <li className={styles.subheading}>☀️The afternoon continues with New York museums, offering groups a reflective pace after the city’s energy. At the Guggenheim Museum, modern art unfolds within its iconic spiral galleries, while the Frick Collection provides intimate encounters with European masterpieces. Together, these cultural landmarks enrich the group travel itinerary in NYC, balancing discovery with relaxation.</li>
                    <li className={styles.subheading}>🌙On the third evening in New York, the pace stays gentle. Groups gather at a Hudson River dinner cruise, where city lights shimmer across the water and conversation flows easily. Solo travelers find quiet reflection on deck, couples enjoy intimate skyline views, and larger groups share laughter over shared plates. The evening blends dining, scenery, and calm energy, ensuring the New York group travel itinerary ends with balance and memorable moments.</li>
                </ul>
                <Link href="/majorcities/newyork/solo-travel" className={styles.ctaButton}>
                    NYC solo travel safety tips
                </Link>
                </div>
            </section>
      <Footer />  
    </div>
    </>
    );
}