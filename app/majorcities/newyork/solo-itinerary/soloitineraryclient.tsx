"use client";
import { useParams } from "next/navigation";
import Header from "../../../components/Header/header";
import Link from 'next/link';
import Image from 'next/image';
import styles from './SoloItinerary.module.css';
import Footer from "@/app/components/Header/Footer/footer";


export default function SoloItineraryClient() {
    const params = useParams();
    const cityParam = params?.city;
    const city = Array.isArray(cityParam) ? cityParam[0] : cityParam;
    const citiesWithoutBanner = ['lasvegas'];
    const schema = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  "name": "Solo Travel Itinerary for New York City",
  "description": "Explore NYC solo with this 3-day itinerary covering landmarks, neighborhoods, and Brooklyn vibes.",
  "touristType": { "@type": "Audience", "name": "Solo Travelers" },
  "itinerary": {
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Day 1: Midtown Landmarks",
        "item": { "@type": "TouristAttraction", "name": "Times Square" }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Day 2: Neighborhood Exploration",
        "item": { "@type": "TouristAttraction", "name": "Central Park" }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Day 3: Solo Dining & Culture",
        "item": { "@type": "TouristAttraction", "name": "NYC Ferry" }
      }
    ]
  },
  "provider": {
    "@type": "Organization",
    "name": "Travel America",
    "url": "https://www.travelamerica.work",
    "logo": "https://www.travelamerica.work/data/logo3.png"
  }
};


    return(
      <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    <div className="App">
      <Header image={`/data/majorcities/newyork/assets/solo-travel-itinerary.png`} bannerText={city && !citiesWithoutBanner.includes(city) ? `Solo Travel Itinerary for New York City` : ""} />
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
          <p className={styles.subheading}>Start with the classics. Today’s about iconic sights and easy wins.</p>
          <ul className={styles.itineraryList}>
              <li className={styles.subheading}>🌅Morning: Central Park — Bethesda Terrace to Strawberry Fields</li>
              <li className={styles.subheading}>☀️Afternoon: Rockefeller Center — Top of the Rock</li>
              <li className={styles.subheading}>☀️Midday: The Met to MoMA</li>
              <li className={styles.subheading}>🌙Evening: Dinner at Time Out Market or Eataly Flatiron</li>
          </ul>
          <Link href="/majorcities/newyork/solo-travel" className={styles.ctaButton}>
            NYC solo travel safety tips
          </Link>
        </div>
      </section>
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
          <Link href="/majorcities/newyork/food" className={styles.ctaButton}>
            Best Food Stops Along the Route
          </Link>
        </div>
      </section>
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
