"use client";
import { useParams } from "next/navigation";
import Header from "../../../components/Header/header";
import Link from 'next/link';
import Image from 'next/image';
import styles from './grouptravellandmarks.module.css';
import Footer from "@/app/components/Header/Footer/footer";
export default function GroupLandmarksPage() {
    
    const breadcrumb = {
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
const faqschema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are the best landmarks in NYC for group visits?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Top group-friendly landmarks include the Statue of Liberty, Empire State Building, Times Square, Central Park, and the 9/11 Memorial & Museum."
      }
    },
    {
      "@type": "Question",
      "name": "Do NYC landmarks offer group discounts?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, many landmarks such as the Statue of Liberty, Empire State Building, and museums provide discounted rates for groups of 10 or more."
      }
    },
    {
      "@type": "Question",
      "name": "How can large groups book tickets for NYC landmarks?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Groups can book tickets online through official landmark websites or platforms like CityPASS. For very large groups, contacting the landmark directly is recommended."
      }
    },
    {
      "@type": "Question",
      "name": "Which NYC landmarks are best for photo opportunities with groups?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Times Square, Brooklyn Bridge, Top of the Rock, and Central Park are especially popular for group photos."
      }
    },
    {
      "@type": "Question",
      "name": "Are guided tours available for groups at NYC landmarks?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, most major landmarks such as the Statue of Liberty, Central Park, and the 9/11 Memorial offer guided tours tailored for groups."
      }
    }
  ]
};
const article = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Group Travel Experiences in New York City",
  "description": "A curated guide to group travel in New York City, featuring borough-based landmarks, activities, and seasonal highlights.",
  "author": {
    "@type": "Organization",
    "name": "Travel America",
    "url": "https://www.travelamerica.work"
  },
  "datePublished": "2025-12-01",
  "image": "https://www.travelamerica.work/data/majorcities/newyork/assets/group-travel-nyc.jpg",
  "articleSection": [
    "Manhattan Landmarks & Activities",
    "Brooklyn Seasonal Experiences",
    "Bronx Heritage & Hidden Gems"
  ],
  "mainEntity": [
    {
      "@type": "TouristAttraction",
      "name": "Statue of Liberty & Ellis Island",
      "description": "Group travelers share ferries to the Statue of Liberty and reflect together at Ellis Island."
    },
    {
      "@type": "TouristAttraction",
      "name": "Times Square & Broadway",
      "description": "Feel the shared pulse of Broadway lights in Times Square with group experiences."
    },
    {
      "@type": "TouristAttraction",
      "name": "Rockefeller Center",
      "description": "Capture skyline moments and festive group activities at Rockefeller Center."
    },
    {
      "@type": "TouristAttraction",
      "name": "MoMA & The Met",
      "description": "Classic museum tours with guided entry for groups in Manhattan."
    },
    {
      "@type": "TouristAttraction",
      "name": "Hudson River Cruises & High Line",
      "description": "Groups savor skyline views on river cruises and stroll the High Line’s elevated gardens."
    },
    {
      "@type": "TouristAttraction",
      "name": "Brooklyn Skyline & Creative Streets",
      "description": "Marvels of design and artistry create unforgettable shared stories for groups."
    },
    {
      "@type": "TouristAttraction",
      "name": "Brooklyn Seasonal Festivities",
      "description": "Holiday lights, ice skating, summer rhythms, and brewery toasts transform each season into group celebrations."
    },
    {
      "@type": "TouristAttraction",
      "name": "Yankee Stadium & Bronx Botanical Garden",
      "description": "The stadium’s roar and the garden’s bloom unfold Bronx seasons into vivid celebrations."
    },
    {
      "@type": "TouristAttraction",
      "name": "Bronx Cultural Streets & Arthur Avenue",
      "description": "Walk historic streets, taste authentic flavors, and join global connections in the Bronx."
    },
    {
      "@type": "TouristAttraction",
      "name": "Poe’s Cottage & Wave Hill",
      "description": "Discover hidden gems from literary echoes to natural escapes, offering authentic group experiences."
    }
  ]
};
const itemlist = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "NYC Group Traveler Landmarks by Borough",
  "itemListOrder": "Unordered",
  "itemListElement": [
    {
      "@type": "ItemList",
      "name": "Manhattan Landmarks",
      "itemListElement": [
        {
          "@type": "LandmarksOrHistoricalBuildings",
          "name": "Statue of Liberty",
          "description": "Iconic neoclassical sculpture on Liberty Island, popular for group tours.",
          "touristType": "Group Travelers",
          "address": { "@type": "PostalAddress", "addressLocality": "New York", "addressRegion": "NY" }
        },
        {
          "@type": "LandmarksOrHistoricalBuildings",
          "name": "Empire State Building",
          "description": "Skyscraper with group observation deck packages and private event spaces.",
          "touristType": "Group Travelers",
          "address": { "@type": "PostalAddress", "addressLocality": "New York", "addressRegion": "NY" }
        },
        {
          "@type": "LandmarksOrHistoricalBuildings",
          "name": "Central Park",
          "description": "Urban park ideal for group walking tours and picnics.",
          "touristType": "Group Travelers",
          "address": { "@type": "PostalAddress", "addressLocality": "New York", "addressRegion": "NY" }
        }
      ]
    },
    {
      "@type": "ItemList",
      "name": "Brooklyn Landmarks",
      "itemListElement": [
        {
          "@type": "LandmarksOrHistoricalBuildings",
          "name": "Brooklyn Bridge",
          "description": "Historic suspension bridge offering scenic group walks and photo opportunities.",
          "touristType": "Group Travelers",
          "address": { "@type": "PostalAddress", "addressLocality": "Brooklyn", "addressRegion": "NY" }
        },
        {
          "@type": "LandmarksOrHistoricalBuildings",
          "name": "Brooklyn Museum",
          "description": "Major art museum with group tours and cultural programs.",
          "touristType": "Group Travelers",
          "address": { "@type": "PostalAddress", "addressLocality": "Brooklyn", "addressRegion": "NY" }
        }
      ]
    },
    {
      "@type": "ItemList",
      "name": "Queens Landmarks",
      "itemListElement": [
        {
          "@type": "LandmarksOrHistoricalBuildings",
          "name": "Flushing Meadows–Corona Park",
          "description": "Expansive park with the Unisphere, ideal for group gatherings.",
          "touristType": "Group Travelers",
          "address": { "@type": "PostalAddress", "addressLocality": "Queens", "addressRegion": "NY" }
        },
        {
          "@type": "LandmarksOrHistoricalBuildings",
          "name": "Citi Field",
          "description": "Home of the New York Mets, offering group seating and tours.",
          "touristType": "Group Travelers",
          "address": { "@type": "PostalAddress", "addressLocality": "Queens", "addressRegion": "NY" }
        }
      ]
    },
    {
      "@type": "ItemList",
      "name": "Bronx Landmarks",
      "itemListElement": [
        {
          "@type": "LandmarksOrHistoricalBuildings",
          "name": "Yankee Stadium",
          "description": "Iconic sports venue with group ticket packages and tours.",
          "touristType": "Group Travelers",
          "address": { "@type": "PostalAddress", "addressLocality": "Bronx", "addressRegion": "NY" }
        },
        {
          "@type": "LandmarksOrHistoricalBuildings",
          "name": "Bronx Zoo",
          "description": "One of the largest zoos in the U.S., offering group admission and guided tours.",
          "touristType": "Group Travelers",
          "address": { "@type": "PostalAddress", "addressLocality": "Bronx", "addressRegion": "NY" }
        }
      ]
    },
    {
      "@type": "ItemList",
      "name": "Staten Island Landmarks",
      "itemListElement": [
        {
          "@type": "LandmarksOrHistoricalBuildings",
          "name": "Staten Island Ferry",
          "description": "Free ferry service offering scenic group rides between Staten Island and Manhattan.",
          "touristType": "Group Travelers",
          "address": { "@type": "PostalAddress", "addressLocality": "Staten Island", "addressRegion": "NY" }
        },
        {
          "@type": "LandmarksOrHistoricalBuildings",
          "name": "Staten Island Zoo",
          "description": "Family-friendly zoo with group programs and educational tours.",
          "touristType": "Group Travelers",
          "address": { "@type": "PostalAddress", "addressLocality": "Staten Island", "addressRegion": "NY" }
        }
      ]
    }
  ]
};
const howto = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Explore NYC Boroughs as a Group Traveler",
  "description": "Step-by-step guide for group travelers to experience New York City landmarks, activities, and seasonal highlights across Manhattan, Brooklyn, and the Bronx.",
  "totalTime": "P3D",
  "supply": [
    { "@type": "HowToSupply", "name": "Group MetroCards or OMNY passes" },
    { "@type": "HowToSupply", "name": "Portable chargers and shared first aid kit" },
    { "@type": "HowToSupply", "name": "Group itinerary and reservation details" }
  ],
  "tool": [
    { "@type": "HowToTool", "name": "Google Maps or Citymapper" },
    { "@type": "HowToTool", "name": "NYC Ferry and charter buses" }
  ],
  "step": [
    {
      "@type": "HowToStep",
      "name": "Day 1: Manhattan Icons",
      "text": "Share ferries to the Statue of Liberty, reflect together at Ellis Island, enjoy Broadway lights in Times Square, and capture skyline moments at Rockefeller Center."
    },
    {
      "@type": "HowToStep",
      "name": "Day 2: Manhattan Group Activities",
      "text": "Join guided museum tours at MoMA or The Met, try Midtown escape rooms, savor food tours in Chinatown and Little Italy, and explore multisensory attractions in Chelsea."
    },
    {
      "@type": "HowToStep",
      "name": "Day 3: Scenic Manhattan Routes",
      "text": "Cruise the Hudson River for skyline views, stroll the High Line’s elevated gardens, and enjoy festive group moments across New York City."
    },
    {
      "@type": "HowToStep",
      "name": "Brooklyn Seasonal Experiences",
      "text": "Marvel at Brooklyn’s skyline, explore creative streets, and celebrate seasons with ice skating, brewery tours, and summer rhythms."
    },
    {
      "@type": "HowToStep",
      "name": "Bronx Heritage & Hidden Gems",
      "text": "Cheer at Yankee Stadium, wander the Bronx Botanical Garden, explore Poe’s Cottage, taste Arthur Avenue’s authentic flavors, and relax at Wave Hill."
    }
  ]
};

    return(
        <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}/>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howto) }}/>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemlist) }}/>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqschema) }}/>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }}/>
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
          <Link href="/majorcities/newyork/group-itinerary" className={styles.ctaButton}>
            Explore your Group trip plan
          </Link>
        </div>
      </section>
      <section className={styles.splitSection}>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Brooklyn’s Hidden Harmony: Skyline Views, Blossoms, and Festive Belonging</h2>
          <p className={styles.subheading}>🚶‍♂️Marvels of design inspire awe, Brooklyn's Skyline views meet creative streets. It’s the harmony of ambition meeting artistry, weaving unforgettable shared stories.</p>
          <p className={styles.subheading}>📸 Season after season, blossoms return, colors deepen, and holiday lights draw us close — group travel experiences that transform time together into lasting connections and shared belonging.</p>
          <p  className={styles.subheading}>🧭 Festive sensations — laughter on ice, rhythms in summer, toasts in breweries — transform each season into celebrations of belonging and connections.</p>
          <Link href="/majorcities/newyork/group-travel" className={styles.ctaButton}>
            Group Travel Tips for Exploring Safely
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
          <Link href="/majorcities/newyork/group-dining" className={styles.ctaButton}>
            Best Eats Near These Landmarks
          </Link>
        </div>
      </section>
       <Footer />
       </>

    )
}
