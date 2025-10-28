"use client";
import React, {JSX, useState, useEffect} from "react";
import { useParams } from "next/navigation";
import Footer from "../../components/Header/Footer/footer";
import Header from "../../components/Header/header";
import Airportsection from "../../components/majorcities/airportsection/airportsection";
import Propertylisting from "../../components/majorcities/flightsection/propertylisting"
import Plantripsection from "../../components/majorcities/plantripsection/plantripsection";
import Plantripcontent from "../../components/majorcities/plantripcontent/plantripcontent";
import Placevisit from "../../components/majorcities/placevisitsection/placevisit";
import Cities from "../../models/majorcities";
import airportsectionData from "../../data/majorcities/Newyork/airportsection.json";
import PropertyListingModel, { Section } from "../../models/propertylisting";
import propertylistingData from "../../data/majorcities/Newyork/propertylisting.json"
import Personas from "../../models/personas";
import { PlantripcontentSection, PlantripcontentJson } from "../../models/plantripcontent";
import { PlaceVisitSection, PlacevisitJson } from "../../models/placevisit";


const newyorkContent: Cities[] = airportsectionData as Cities[];
const propertyListing: PropertyListingModel  = propertylistingData as PropertyListingModel ;
const sections: Section[] = propertyListing.sections;






export default function CityPage() {
    const params = useParams();
    const cityParam = params?.city;
const city = Array.isArray(cityParam) ? cityParam[0] : cityParam;
    const [activeSection, setActiveSection] = useState<number | null>(1);
    const [activeGroup, setActiveGroup] = useState<number | null>(1);
    const [content, setContent] = useState<PlaceVisitSection | null>(null);
    const [airportsection, setairportSection] = useState<Cities | null>(null)
    const [propertySections, setPropertySections] = useState<Section[]>([]);
    const [personaContent, setPersonaContent] = useState<Personas | null>(null);
    const [plantripcontentsections, setplantripcontentSections] = useState<PlantripcontentSection[]>([]);
    const [loading, setLoading] = useState(true);
    const citiesWithoutBanner = ['lasvegas'];
  
 
useEffect(() => {
  if (!city) return;
  setLoading(true);
  Promise.all([
    fetch(`/data/majorcities/${city}/airportsection.json`).then((res) => res.json()),
    fetch(`/data/majorcities/${city}/propertylisting.json`).then((res) => res.json()),
    fetch(`/data/majorcities/${city}/plantrip.json`).then((res) => res.json()),
    fetch(`/data/majorcities/${city}/plantripcontent.json`).then((res) => res.json()),
  ])
    .then(([airportData, Propertylisting, personaData, plantripData]) => {
      setairportSection(airportData);
      setPropertySections(Propertylisting.sections || []);
      setPersonaContent(personaData);
      setplantripcontentSections(plantripData.plantripcontentsection || []);
    })
    .catch((err) => console.error(`Error loading data for ${city}:`, err))
    .finally(() => setLoading(false));
}, [city]);

if (loading) {
  return <div>Loading...</div>;
}

if (!airportsection || !personaContent || !plantripcontentsections || !propertySections) {
  return <div>No data available for {city}</div>;
}
if (!city) return <div>Loading place visit data...</div>;;
  
    return(
        
        <div className="App">
      <Header image={`/data/majorcities/${city}/assets/${city}.jpeg`} bannerText={!citiesWithoutBanner.includes(city) ? `Welcome to ${capitalizeWords(city)}!` : ""} />
          
            
              
              <Airportsection content={airportsection} onSelect={setActiveSection} />
              <Propertylisting content={propertySections} active={activeSection} />
              <Plantripsection content={personaContent} onSelect={setActiveGroup} />
              <Plantripcontent content={plantripcontentsections} active={activeGroup}/>
              <Placevisit city={city}/>
              
            
     
      <Footer />
      </div>
      
    );
};
function capitalizeWords(str: string) {
  return str
    .toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase());
}
