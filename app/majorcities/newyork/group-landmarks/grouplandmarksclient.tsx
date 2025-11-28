"use client";
import { useParams } from "next/navigation";
import Header from "../../../components/Header/header";
import Link from 'next/link';
import Image from 'next/image';
import styles from './grouptravellandmarks.module.css';
import Footer from "@/app/components/Header/Footer/footer";
export default function GroupLandmarksPage() {
    const citiesWithoutBanner = ['lasvegas'];
    const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.travelamerica.work/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "New York",
          "item": "https://www.travelamerica.work/majorcities/newyork/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Group Landmarks",
          "item": "https://www.travelamerica.work/majorcities/newyork/group-landmarks"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Group Travel in New York City – Landmark Guide!",
      "description": "Explore Manhattan, Brooklyn, and Bronx landmarks designed for group travelers — from icons like the Statue of Liberty to hidden gems and seasonal celebrations.",
      "image": "https://www.travelamerica.work/images/group-landmarks-banner.png",
      "author": {
        "@type": "Organization",
        "name": "Travel America"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Travel America",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.travelamerica.work/images/logo.png"
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.travelamerica.work/majorcities/newyork/group-landmarks"
      },
      "keywords": "Group travel New York City, Manhattan landmarks, Brooklyn skyline, Bronx hidden gems, NYC group tours",
      "touristType": "Group Travelers"
    }
  ]
};



    return(
        <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}/>
       <Header image={`/data/majorcities/newyork/assets/group/nyc-group-travel-landmarks.png`} bannerText="Solo Travel in New York City – Landmark Guide!" />
       <section className={styles.splitSection} style={{ textAlign: "center" }}>
                <div style={{ width: "100%", textAlign: "center" }}>
                <h1  className={styles.sectionheading}>Group Travel in New York City – Landmark Guide!</h1>
                </div>
      </section> 
       <section className={styles.splitSection}>
        <div className={styles.imageWrapper}>
          <Image
            src="/data/majorcities/newyork/assets/group/group-travel-nyc-1280x853.jpg"
            alt="Route map of Manhattan landmarks for solo travelers, including Times Square, Central Park, and Empire State Building."
            fill
            className={styles.mapImage}
          />
        </div>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Manhattan Together: Icons, Culture, and Skyline Moments for Groups</h2>
          <p className={styles.subheading}>🚶‍♂️Group travelers exploring Manhattan landmarks share ferries to the Statue of Liberty, reflect together at Ellis Island, feel the shared pulse of Broadway lights in Times Square, and capture skyline moments at Rockefeller Center. 🗽🌆🎭 — New York’s icons shine brightest together.</p>
          <p className={styles.subheading}>📸 Manhattan group activities range from classic museum tours at MoMA, the Met with guided entry, to Midtown escape rooms that spark teamwork, flavorful food tours weaving through Chinatown and Little Italy, and cutting-edge multisensory attractions in Chelsea—together offering unforgettable experiences for groups.</p>
          <p  className={styles.subheading}>🧭 Groups in Manhattan can savor Hudson River cruises with sweeping skyline views, stroll the High Line’s elevated gardens and art installations. — scenic, festive, and unforgettable moments across New York City</p>
          <Link href="/majorcities/newyork/solo-itinerary" className={styles.ctaButton}>
            Add to Your NYC Itinerary
          </Link>
        </div>
      </section>
      <section className={styles.splitSection}>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Brooklyn’s Hidden Harmony: Skyline Views, Blossoms, and Festive Belonging</h2>
          <p className={styles.subheading}>🚶‍♂️Marvels of design inspire awe, Brooklyn's Skyline views meet creative streets. It’s the harmony of ambition meeting artistry, weaving unforgettable shared stories.</p>
          <p className={styles.subheading}>📸 Season after season, blossoms return, colors deepen, and holiday lights draw us close — group travel experiences that transform time together into lasting connections and shared belonging.</p>
          <p  className={styles.subheading}>🧭 Festive sensations — laughter on ice, rhythms in summer, toasts in breweries — transform each season into celebrations of belonging and connections.</p>
          <Link href="/majorcities/newyork/solo-travel" className={styles.ctaButton}>
            Solo Travel Tips for Exploring Safely
          </Link>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src="/data/majorcities/newyork/assets/group/group-travel-nyc-brooklyn-1280x853.jpg"
            alt="Friends enjoying city waterfront with urban skyline in the background"
            fill
            className={styles.mapImage}
          />
        </div>
      </section>
      <section className={styles.splitSection}>
        <div className={styles.imageWrapper}>
          <Image
            src="/data/majorcities/newyork/assets/group/group-travel-nyc-small-bronx.png"
            alt="Group of travelers exploring Bronx seasonal highlights from Yankee Stadium to Wave Hill and Poe’s Cottage"
            fill
            className={styles.mapImage}
          />
        </div>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>The Bronx: Heritage, Hidden Gems, and Year‑Round Connections</h2>
          <p className={styles.subheading}>🗽This stadium’s roar and the garden’s bloom unfold Bronx seasons into vivid, year‑round celebrations for festival‑minded groups of travelers.</p>
          <p className={styles.subheading}>🚶‍♀️ When travelers land, the Bronx invites them to walk its historic streets, taste its cultural flavors, and join its global connections — culminating in a living heritage shared across every season.</p>
          <p  className={styles.subheading}>🧭 Discover Bronx hidden gems — from literary echoes at Poe’s Cottage to authentic tastes on Arthur Avenue and natural escapes at Wave Hill. These attractions connect history, culture, and nature, offering group travelers authentic experiences year‑round reasons to visit the Bronx.</p>
          <Link href="/majorcities/newyork/food" className={styles.ctaButton}>
            Best Eats Near These Landmarks
          </Link>
        </div>
      </section>
       <Footer />
       </>

    )
}
