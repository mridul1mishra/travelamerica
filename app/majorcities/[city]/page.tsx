import React, {JSX} from "react";
import Footer from "../../components/Header/Footer/footer";
import Header from "../../components/Header/header";
import Placevisit from "../../components/majorcities/placevisitsection/placevisit";
import Airportsection from "../../components/majorcities/airportsection/airportsection";
import Propertylisting from "../../components/majorcities/flightsection/propertylisting"
import Plantripsection from "../../components/majorcities/plantripsection/plantripsection";
import Plantripcontent from "../../components/majorcities/plantripcontent/plantripcontent";
import CityUI from "./cityui";
import { getSectionData } from "@/app/lib/getAirportData";
type PageProps = {
  params: { city: string };
};


export default async function CityPage({ params }: PageProps) {
  const resolvedParams = await params;
  
  const city = resolvedParams?.city;
  const citiesWithoutBanner = ['lasvegas'];
    if (!city) return <div>Loading place visit data...</div>;
    const { airportsection, propertySections, personaContent, plantripcontentsections } = await getSectionData(city);
    return (
      <div className="App">
              <Header image={`/data/majorcities/${city}/assets/${city}.jpeg`} bannerText={!citiesWithoutBanner.includes(city) ? `Welcome to ${capitalizeWords(city)}!` : ""} />
              
              <CityUI airportsection={airportsection} propertySections={propertySections} personaContent={personaContent} plantripcontentsections={plantripcontentsections} city={""}/>
              
              <Placevisit city={city}/>
              <Footer />
      </div>
    );

}
function capitalizeWords(str: string) {
  return str
    .toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase());
}