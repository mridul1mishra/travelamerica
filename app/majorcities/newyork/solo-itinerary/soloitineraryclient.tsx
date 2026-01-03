"use client";
import { useParams } from "next/navigation";
import Header from "../../../components/Header/header";
import Link from 'next/link';
import Image from 'next/image';
import styles from './SoloItinerary.module.css';
import Footer from "@/app/components/Header/Footer/footer";
import FAQ from "@/app/components/faq/faq";
import { getFaq, getFaqItinerary } from "@/app/lib/FaqData";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

// Define props for the component
interface SoloItineraryClientProps {
  grouped: Record<string, FaqItem[]>;
}

export default async function SoloItineraryClient({ grouped }: SoloItineraryClientProps) {
    
    const schema = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  "name": "Solo Travel Itinerary for New York City",
  "description": "Explore NYC solo with this 3-day itinerary covering landmarks, neighborhoods, and Brooklyn vibes.",
  "touristType": {"@type": "Audience", "name": "Solo Travelers" },
  "about": [{"@type": "Thing","name": "Solo Travel" }, {"@type": "Place", "name": "New York City"}],
  "mainEntityOfPage": {
    "@type": "WebPage",
    "name": "Solo NYC Travel Itinerary",
    "url": "https://www.travelamerica.work/majorcities/newyork/solo-itinerary"
  },
  "image": {
    "@type": "ImageObject",
    "url": "https://www.travelamerica.work/data/majorcities/newyork/assets/solo-travel-itinerary.png",
    "height": 600,
    "width": 1200
  },
  "provider": {
    "@type": "Organization",
    "name": "Travel America",
    "url": "https://www.travelamerica.work",
    "logo": "https://www.travelamerica.work/data/logo3.png"
  }
};
    const schema1 = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is New York City safe for solo travelers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, NYC is generally safe for solo travelers if you stay aware of your surroundings, avoid isolated areas late at night, and use common sense in busy neighborhoods."
      }
    },
    {
      "@type": "Question",
      "name": "What is the best 3-day solo itinerary for New York City?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A popular 3-day solo itinerary includes: Day 1 exploring Manhattan landmarks like Times Square and Central Park, Day 2 visiting museums and neighborhoods such as SoHo and Greenwich Village, and Day 3 discovering Brooklyn highlights like the Brooklyn Bridge and DUMBO."
      }
    },
    {
      "@type": "Question",
      "name": "Which neighborhoods are best for solo travelers in NYC?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Midtown Manhattan, Greenwich Village, and Williamsburg are great for solo travelers thanks to their walkability, vibrant food scenes, and safe, lively atmosphere."
      }
    },
    {
      "@type": "Question",
      "name": "What are the best food spots for solo travelers in NYC?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Solo travelers often enjoy casual yet iconic spots like Katz’s Delicatessen, Joe’s Pizza, and Chelsea Market, where dining alone feels natural and welcoming."
      }
    },
    {
      "@type": "Question",
      "name": "How can solo travelers get around NYC easily?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The subway is the fastest and most affordable way to get around NYC. Solo travelers should buy a MetroCard or OMNY tap card, and use apps like Google Maps for navigation."
      }
    }
  ]
};
const schema2 = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "NYC Solo Traveler 3-Day Itinerary",
  "itemListOrder": "Ordered",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Day 1: Times Square, Broadway, and Central Park",
      "description": "Start your solo trip with iconic sights, a Broadway show, and a peaceful walk in Central Park."
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Day 2: Statue of Liberty, Ellis Island, and 9/11 Memorial",
      "description": "Explore NYC’s history and resilience with visits to Liberty Island, Ellis Island Immigration Museum, and the 9/11 Memorial."
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Day 3: Museums and Local Dining",
      "description": "Spend the day at The Met or MoMA, then enjoy solo-friendly dining spots like ramen counters or cozy cafés."
    }
  ]
};
const schema3 = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Experience NYC in 3 Days as a Solo Traveler",
  "description": "Step-by-step solo travel itinerary for exploring New York City in three days.",
  "totalTime": "P3D",
  "supply": [
    { "@type": "HowToSupply", "name": "MetroCard or OMNY pass" },
    { "@type": "HowToSupply", "name": "Comfortable walking shoes" },
    { "@type": "HowToSupply", "name": "Portable charger" }
  ],
  "tool": [
    { "@type": "HowToTool", "name": "Citymapper or Transit App" },
    { "@type": "HowToTool", "name": "NYC Ferry" }
  ],
  "step": [
    {
      "@type": "HowToStep",
      "name": "Day 1: Explore Midtown & Central Park",
      "text": "Visit Times Square, catch a Broadway show, and enjoy a solo walk through Central Park."
    },
    {
      "@type": "HowToStep",
      "name": "Day 2: Discover NYC’s History",
      "text": "Take a ferry to the Statue of Liberty and Ellis Island, then visit the 9/11 Memorial & Museum."
    },
    {
      "@type": "HowToStep",
      "name": "Day 3: Museums & Local Dining",
      "text": "Spend the day at The Met or MoMA, then enjoy solo-friendly dining spots like ramen counters or cozy cafés."
    }
  ]
};
const schema4 = {
  "@context": "https://schema.org",
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
      "name": "Solo Travel",
      "item": "https://www.travelamerica.work/majorcities/newyork/solo-travel"
    }
  ]
};

    return(
      <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema1) }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema3) }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema4) }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema2) }}/>
    <div className="App">
      <Header image={`/data/majorcities/newyork/assets/solo-travel-itinerary.png`} bannerText="Solo Travel Itinerary for New York City" />
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
              <li className={styles.subheading}>🌅Morning: Central Park(Bethesda Terrace → Strawberry Fields
              <p className={styles.description}>Easy solo-friendly walk, iconic views.</p>
              </li>
            
              <li className={styles.subheading}>☀️Afternoon: Rockefeller Center → Top of the Rock</li>
              <li className={styles.subheading}>☀️Midday: The Met to MoMA</li>
              <li className={styles.subheading}>🌙Evening: Dinner at Time Out Market or Eataly Flatiron</li>
          </ul>
          <Link href="/destination/nyc/solo-trip=to-nyc" className={styles.ctaButton}>
            Solo Trip to NYC Guide
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
      <FAQ groupedFaqs={grouped}/>
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
