import React, {JSX} from "react";
import Footer from "../../components/Header/Footer/footer";
import Header from "../../components/Header/header";
import Placevisit from "../../components/majorcities/placevisitsection/placevisit";
import CityUI from "./cityui";
import { getAirportData } from "@/app/lib/getAirportData";
import Head from "next/head";
type PageProps = {
  params: { city: string };
};


export default async function CityPage({ params }: PageProps) {
  const resolvedParams = await params;
  
  const city = resolvedParams?.city;
  // optional: lookup table for lat/lng, wiki, etc.
  const cityData: Record<string, { lat: string; lng: string; wiki: string }> = {
    newyork: { lat: "40.7128", lng: "-74.0060", wiki: "New_York_City" },
    chicago: { lat: "41.8781", lng: "-87.6298", wiki: "Chicago" },
    // add more cities here
  };

  const data = cityData[city];
  const schema = {"@context": "https://schema.org",
    "@type": "FAQ",
    "@id": `https://www.travelamerica.work/majorcities/${city}#destination`,
    "name": `${city.charAt(0).toUpperCase() + city.slice(1)} City`,
    "description": `Discover ${city} City: landmarks, food, and solo travel experiences for travelers in America.`,
    "url": `https://www.travelamerica.work/majorcities/${city}`,
    "containedInPlace": {
      "@type": "City",
      "@id": `https://en.wikipedia.org/wiki/${data?.wiki}`,
      "name": city,
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": data?.lat,
        "longitude": data?.lng,
      },
    },
    "image": `https://www.travelamerica.work/data/${city}.jpg`,
    "touristType": "Solo Travelers",
  };
  const canonicalUrl = `https://www.travelamerica.work/majorcities/${city}`;
  const citiesWithoutBanner = ['lasvegas'];
    if (!city) return <div>Loading place visit data...</div>;
    const { airportsection, propertySections, personaContent, plantripcontentsections } = await getAirportData(city);
    return (
      <>
      <div className="App">
              <Header image={`/data/majorcities/${city}/assets/${city}.jpeg`} bannerText={!citiesWithoutBanner.includes(city) ? `Welcome to ${capitalizeWords(city)}!` : ""} />
              
              <CityUI airportsection={airportsection} propertySections={propertySections} personaContent={personaContent} plantripcontentsections={plantripcontentsections} city={""}/>
              
              <Placevisit city={city}/>
              <Footer />
              <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      </div>
      </>
    );

}
function capitalizeWords(str: string) {
  return str
    .toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase());
}
