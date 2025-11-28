"use client";
import { useParams } from "next/navigation";
import Header from "../../../components/Header/header";
import Link from 'next/link';
import Image from 'next/image';
import styles from './groupitinerary.module.css';
import Footer from "@/app/components/Header/Footer/footer";

export default function GroupItineraryClient() {
    const schema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "3-Day New York City Group Travel Itinerary",
  "description": "Plan the perfect 3-day NYC trip for groups with museums, parks, Broadway, and a Hudson River dinner cruise.",
  "author": {
    "@type": "Organization",
    "name": "YourBrandName"
  },
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "TouristAttraction",
        "position": 1,
        "name": "Metropolitan Museum of Art",
        "description": "Quiet reflection in timeless galleries."
      },
      {
        "@type": "TouristAttraction",
        "position": 2,
        "name": "Central Park",
        "description": "Tree-lined paths and lakeside views."
      },
      {
        "@type": "TouristAttraction",
        "position": 3,
        "name": "Guggenheim Museum",
        "description": "Modern art in iconic spiral galleries."
      },
      {
        "@type": "TouristAttraction",
        "position": 4,
        "name": "Frick Collection",
        "description": "Intimate encounters with European masterpieces."
      },
      {
        "@type": "Event",
        "position": 5,
        "name": "Hudson River Dinner Cruise",
        "description": "Group dancing, skyline views, and shared plates."
      }
    ]
  }
};

    return(
        <>
        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
        <div className="App">
            <Header image={`/data/majorcities/newyork/assets/group/nyc-group-itinerary-brooklyn-bridge-sunset.jpg`} bannerText="Group of friends sharing tacos and coffee on a rooftop terrace overlooking Brooklyn Bridge and East River at sunset in NYC" />
            <section className={styles.splitSection} style={{ textAlign: "center" }}>
                <div style={{ width: "100%", textAlign: "center" }}>
                    <h1  className={styles.sectionheading}>3 Days in New York City!</h1>
                    <p>Step into New York with friends or fellow travelers — from Broadway nights to museum mornings, Central Park strolls to a Hudson River dinner cruise. This 3‑day itinerary blends culture, connection, and skyline views, giving groups the perfect balance of discovery and relaxation</p>
                </div>
            </section>  
            <section className={styles.splitSection}>
                <div className={styles.imageWrapper}>
                <Image src="/data/majorcities/newyork/assets/group/nyc-group-itinerary-day1-times-square-chelsea-market-broadway.png" alt="Day 1 NYC group itinerary map featuring Times Square, Top of the Rock, Chelsea Market, High Line, Hell’s Kitchen, and Broadway highlights"
                    fill className={styles.mapImage}/>
                </div>
                <div className={styles.textWrapper}>
                <h2 className={styles.heading}>Day 1: Broadway Nights, Group Delights</h2>
                <p className={styles.subheading}></p>
                <ul className={styles.itineraryList}>
                    <li className={styles.subheading}>🌅Start your 3‑day New York group itinerary in Times Square, where friends grab coffee, snap photos, and soak in the neon buzz. Head to Rockefeller Center’s Top of the Rock for panoramic skyline views — perfect for group shots and planning the day ahead.</li>
                    <li className={styles.subheading}>☀️Chelsea Market anchors the afternoon with bustling halls, artisan shops, and local flavors. Groups then wander toward the High Line, where elevated paths and skyline views spark playful energy. Friends savor tacos, travelers capture stylish photos, and families pause for street performances—shared laughter and spontaneous moments leave everyone energized for the evening ahead.</li>
                    <li className={styles.subheading}>🌙Cap off the night with dinner in Hell’s Kitchen. Friends can enjoy hearty meals, shared plates, or cocktails before heading to a  Broadway show. As the lights dim 🎶, anticipation builds, and the shared awe of the performance unifies the group — ending the Day 1 with laughter, wonder, and lasting connection.</li>
                </ul>
                <Link href="/majorcities/newyork/group-travel" className={styles.ctaButton}>
                    NYC group travel safety tips
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
          <Link href="/majorcities/newyork/group-landmarks" className={styles.ctaButton}>
            Best neighborhoods for Group travelers in NYC
          </Link>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src="/data/majorcities/newyork/assets/group/nyc-group-itinerary-day2-harlem-museums-east-village.png"
            alt="Scene-based illustration of group interaction at Natural History Museum with kids pointing at dinosaur skeleton and adults reacting with playful awe"
            fill
            className={styles.mapImage}
          />
        </div>  
            </section>
            <section className={styles.splitSection}>
                <div className={styles.imageWrapper}>
                <Image src="/data/majorcities/newyork/assets/group/nyc-group-itinerary-day3-dinner-cruise-dancing-manhattan.png" alt="Scene-based illustration of Day 3 NYC group itinerary with friends dancing on a Hudson River dinner cruise, Manhattan skyline, and live jazz band"
                    fill className={styles.mapImage}/>
                </div>
                <div className={styles.textWrapper}>
                <h2 className={styles.heading}>Day 3: Culture, Cruise, and Companionship</h2>
                <p className={styles.subheading}></p>
                <ul className={styles.itineraryList}>
                    <li className={styles.subheading}>🌅After the excitement of Broadway and the East Village, Day 3 begins at a gentler pace. Groups step into the Metropolitan Museum of Art, where timeless galleries invite quiet reflection and awe. A short walk into Central Park offers tree‑lined paths and lakeside views, creating a restorative balance of art and nature to ease into the day.</li>
                    <li className={styles.subheading}>☀️The afternoon continues with New York museums, offering groups a reflective pace after the city’s energy. At the Guggenheim Museum, modern art unfolds within its iconic spiral galleries, while the Frick Collection provides intimate encounters with European masterpieces. Together, these cultural landmarks enrich the group travel itinerary in NYC, balancing discovery with relaxation.</li>
                    <li className={styles.subheading}>🌙On the third evening in New York, the pace stays gentle. Groups gather at a Hudson River dinner cruise, where city lights shimmer across the water and conversation flows easily. Solo travelers find quiet reflection on deck, couples enjoy intimate skyline views, and larger groups share laughter over shared plates. The evening blends dining, scenery, and calm energy, ensuring the New York group travel itinerary ends with balance and memorable moments.</li>
                </ul>
                <Link href="/majorcities/newyork/solo-travel" className={styles.ctaButton}>
                    Explore Your Solo Trip Plan
                </Link>
                </div>
            </section>
      <Footer />  
    </div>
    </>
    );
}