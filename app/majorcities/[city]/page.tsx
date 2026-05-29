import React from "react";
import Footer from "../../components/Header/Footer/footer";
import Header from "../../components/Header/header";
import Placevisit from "../../components/majorcities/placevisitsection/placevisit";
import CityUI from "./cityui";
import { getAirportData } from "@/app/lib/getAirportData";
import NewYorkNarrative from "./components/CityNarrative/NewYorkNarrative";

type PageProps = {
  params: Promise<{ city: string }>;
};


export default async function CityPage({ params }: PageProps) {
  const resolvedParams = await params;

  const city = resolvedParams?.city;
  // Lookup table for lat/lng, wiki, etc.
  // If a city isn't in this table, we still render the page but omit the
  // containedInPlace block from the schema rather than emitting literal `undefined`
  // values into JSON-LD (Google flags those as invalid structured data).
  const cityData: Record<string, { lat: string; lng: string; wiki: string }> = {
    newyork:    { lat: "40.7128",  lng: "-74.0060",  wiki: "New_York_City" },
    chicago:    { lat: "41.8781",  lng: "-87.6298",  wiki: "Chicago" },
    losangeles: { lat: "34.0522",  lng: "-118.2437", wiki: "Los_Angeles" },
    lasvegas:   { lat: "36.1699",  lng: "-115.1398", wiki: "Las_Vegas" },
    orlando:    { lat: "28.5383",  lng: "-81.3792",  wiki: "Orlando,_Florida" },
  };

  const data = cityData[city];
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    "@id": `https://www.travelsamericas.com/majorcities/${city}#destination`,
    "name": `${city.charAt(0).toUpperCase() + city.slice(1)} City`,
    "description": `Discover ${city} City: landmarks, food, and solo travel experiences for travelers in America.`,
    "url": `https://www.travelsamericas.com/majorcities/${city}`,
    "image": `https://www.travelsamericas.com/data/${city}.jpg`,
    "touristType": "Solo Travelers",
  };
  if (data) {
    schema.containedInPlace = {
      "@type": "City",
      "@id": `https://en.wikipedia.org/wiki/${data.wiki}`,
      "name": city,
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": data.lat,
        "longitude": data.lng,
      },
    };
  }

  const schema1 = city === "newyork" ? {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "New York City Travel Hub",
  "description": "Your complete guide to solo travel in New York City — attractions, food, safety tips, and itineraries.",
  "url": "https://www.travelsamericas.com/destination/nyc",
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.travelsamericas.com"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "New York City",
        "item": "https://www.travelsamericas.com/destination/nyc"
      }
    ]
  },
  "about": {
    "@type": "City",
    "name": "New York City",
    "sameAs": [
      "https://en.wikipedia.org/wiki/New_York_City",
      "https://www.nyc.gov"
    ]
  },
  "mainEntity": {
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is New York City safe for solo travelers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, NYC is generally safe for solo travelers, especially in well-known areas like Manhattan. Stay alert in crowded places and use common travel precautions."
        }
      },
      {
        "@type": "Question",
        "name": "What are the best neighborhoods to stay in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Popular solo-friendly neighborhoods include Midtown Manhattan, Brooklyn’s Williamsburg, and the Upper West Side."
        }
      }
    ]
  },
  "hasPart": {
    "@type": "ItemList",
    "name": "New York City Travel Clusters",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Top Attractions",
        "url": "https://www.travelsamericas.com/destination/nyc/landmark"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Food & Dining",
        "url": "https://www.travelsamericas.com/destination/nyc/food"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Solo Travel Tips",
        "url": "https://www.travelsamericas.com/destination/nyc/solo-trip-to-nyc"
      }
    ]
  }

  }: null;
  const citiesWithoutBanner = ['lasvegas'];
    if (!city) return <div>Loading place visit data...</div>;
    const {
      airportsection,
      propertySections,
      personaContent,
      plantripcontentsections,
      hotels,
      cruises,
      placevisit,
    } = await getAirportData(city);
    return (
      <>
      <div className="App">
              <Header image={`/data/majorcities/${city}/assets/${city}.jpeg`} bannerText={`Welcome to ${capitalizeWords(city)}!`} />
              {city === "newyork" && <NewYorkNarrative />}
              <CityUI
                airportsection={airportsection}
                propertySections={propertySections}
                personaContent={personaContent}
                plantripcontentsections={plantripcontentsections}
                hotels={hotels}
                cruises={cruises}
                city={city}
              />

              <Placevisit content={placevisit}/>
              <Footer />
              <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}/>
        {schema1 && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema1) }}/>
      )}
      </div>
      </>
    );

}
function capitalizeWords(str: string) {
  return str
    .toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase());
}
