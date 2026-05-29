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
          "item": "https://www.travelsamericas.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "New York",
          "item": "https://www.travelsamericas.com/majorcities/newyork/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Group Landmarks",
          "item": "https://www.travelsamericas.com/majorcities/newyork/group-landmarks"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Group Travel in New York City – Landmark Guide!",
      "description": "A guide to New York City landmarks for groups across Manhattan, Brooklyn and the Bronx, with booking tips, group rates and what's worth doing by season.",
      "image": "https://www.travelsamericas.com/images/group-landmarks-banner.png",
      "author": {
        "@type": "Organization",
        "name": "Travels Americas"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Travels Americas",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.travelsamericas.com/images/logo.png"
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.travelsamericas.com/majorcities/newyork/group-landmarks"
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
  "description": "A guide to group travel in New York City, organized by borough, with landmarks, activities and seasonal highlights.",
  "author": {
    "@type": "Organization",
    "name": "Travels Americas",
    "url": "https://www.travelsamericas.com"
  },
  "datePublished": "2025-12-01",
  "image": "https://www.travelsamericas.com/data/majorcities/newyork/assets/group-travel-nyc.jpg",
  "articleSection": [
    "Manhattan Landmarks & Activities",
    "Brooklyn Seasonal Experiences",
    "Bronx Heritage & Hidden Gems"
  ],
  "mainEntity": [
    {
      "@type": "TouristAttraction",
      "name": "Statue of Liberty & Ellis Island",
      "description": "A half-day ferry trip; book the earliest slot to beat the lines."
    },
    {
      "@type": "TouristAttraction",
      "name": "Times Square & Broadway",
      "description": "A short walk from Rockefeller Center and easy to keep a group together."
    },
    {
      "@type": "TouristAttraction",
      "name": "Rockefeller Center",
      "description": "Observation deck and, in winter, the rink and tree."
    },
    {
      "@type": "TouristAttraction",
      "name": "MoMA & The Met",
      "description": "Both offer guided group entry that skips the ticket line."
    },
    {
      "@type": "TouristAttraction",
      "name": "Hudson River Cruises & High Line",
      "description": "A cruise gives everyone the skyline without walking; the High Line is flat and ends at Chelsea Market."
    },
    {
      "@type": "TouristAttraction",
      "name": "Brooklyn Bridge & DUMBO",
      "description": "Walk from the Manhattan side toward DUMBO to keep the skyline in front of you."
    },
    {
      "@type": "TouristAttraction",
      "name": "Brooklyn by Season",
      "description": "Ice skating in Prospect Park in winter, cherry blossoms at the Botanic Garden in spring, brewery tours in summer."
    },
    {
      "@type": "TouristAttraction",
      "name": "Yankee Stadium & NY Botanical Garden",
      "description": "Group tickets are cheap for a home game; the garden nearby has group rates."
    },
    {
      "@type": "TouristAttraction",
      "name": "Arthur Avenue",
      "description": "The Bronx's Little Italy: family-run delis and restaurants. Book ahead for larger groups."
    },
    {
      "@type": "TouristAttraction",
      "name": "Poe’s Cottage & Wave Hill",
      "description": "A quick literary stop and a quiet public garden over the Hudson; good half-day add-ons."
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
          <h2 className={styles.heading}>Manhattan: The Landmarks Worth Doing as a Group</h2>
          <p className={styles.subheading}>🚶‍♂️ Start with the big ones. The Statue of Liberty and Ellis Island take a half day with the ferry, so book the earliest slot you can — lines are much shorter before 10am. Times Square and Rockefeller Center are short walks apart and work well for a group that wants to stay together.</p>
          <p className={styles.subheading}>📸 For something more active, MoMA and the Met both offer guided group entry that skips the ticket line. Midtown escape rooms are an easy team activity, and food tours through Chinatown and Little Italy keep everyone moving and fed at the same time.</p>
          <p  className={styles.subheading}>🧭 To wind down, a Hudson River cruise gives the whole group the skyline without anyone having to walk, and the High Line is a flat, easy stroll that ends right at Chelsea Market if you want lunch after.</p>
          <Link href="/majorcities/newyork/group-itinerary" className={styles.ctaButton}>
            Explore your Group trip plan
          </Link>
        </div>
      </section>
      <section className={styles.splitSection}>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Brooklyn: Skyline Walks and Things to Do by Season</h2>
          <p className={styles.subheading}>🚶‍♂️ Walk the Brooklyn Bridge from the Manhattan side toward DUMBO — that direction puts the skyline in front of you the whole way. It's about 25 minutes at a group pace, and you come out near the waterfront parks and cafes.</p>
          <p className={styles.subheading}>📸 The season changes what's on. In winter there's ice skating at the LeFrak Center in Prospect Park and holiday lights; in spring the Brooklyn Botanic Garden's cherry blossoms are the draw, usually late April.</p>
          <p  className={styles.subheading}>🧭 Summer brings free concerts and brewery tours around Williamsburg and Bushwick — easy for a group since you can book a tasting ahead and most spots have long shared tables.</p>
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
          <h2 className={styles.heading}>The Bronx: Ballgames, Gardens, and a Real Little Italy</h2>
          <p className={styles.subheading}>🗽 If you can line the trip up with a Yankees home game, group tickets are some of the cheapest in the city. The New York Botanical Garden is a short ride away and has group rates, with the orchid show in spring and a train show around the holidays.</p>
          <p className={styles.subheading}>🚶‍♀️ Arthur Avenue is the Bronx's Little Italy and, locals will tell you, the better one. It's mostly family-run delis, bakeries and sit-down places — book ahead for a group of more than six since the rooms are small.</p>
          <p  className={styles.subheading}>🧭 For something quieter, Poe's Cottage is a quick, cheap stop for the literary-minded, and Wave Hill is a public garden overlooking the Hudson that rarely gets crowded. Both are easy add-ons if you've got a half day spare.</p>
          <Link href="/majorcities/newyork/group-dining" className={styles.ctaButton}>
            Best Eats Near These Landmarks
          </Link>
        </div>
      </section>
       <Footer />
       </>

    )
}
