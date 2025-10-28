'use client';
import React, { useState, useEffect } from 'react';
import Footer from '../../components/Header/Footer/footer';
import Header from '../../components/Header/header';
import Airportsection from '../../components/majorcities/airportsection/airportsection';
import Propertylisting from '../../components/majorcities/flightsection/propertylisting';
import Plantripsection from '../../components/majorcities/plantripsection/plantripsection';
import Plantripcontent from '../../components/majorcities/plantripcontent/plantripcontent';
import Placevisit from '../../components/majorcities/placevisitsection/placevisit';
import Cities from '../../models/majorcities';
import PropertyListingModel, { Section } from '../../models/propertylisting';
import Personas from '../../models/personas';
import { PlantripcontentSection } from '../../models/plantripcontent';
import { PlaceVisitSection } from '../../models/placevisit';

function capitalizeWords(str: string) {
  return str.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
}

export default function CityPageClient({ city }: { city: string }) {
  

  const [activeSection, setActiveSection] = useState<number | null>(1);
  const [activeGroup, setActiveGroup] = useState<number | null>(1);
  const [airportsection, setAirportSection] = useState<Cities | null>(null);
  const [propertySections, setPropertySections] = useState<Section[]>([]);
  const [personaContent, setPersonaContent] = useState<Personas | null>(null);
  const [plantripcontentsections, setPlantripcontentSections] = useState<PlantripcontentSection[]>([]);
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
      .then(([airportData, propertyListing, personaData, plantripData]) => {
        setAirportSection(airportData);
        setPropertySections(propertyListing.sections || []);
        setPersonaContent(personaData);
        setPlantripcontentSections(plantripData.plantripcontentsection || []);
      })
      .catch((err) => console.error(`Error loading data for ${city}:`, err))
      .finally(() => setLoading(false));
  }, [city]);

  if (loading) return <div>Loading...</div>;
  if (!city || !airportsection || !personaContent || !plantripcontentsections || !propertySections) {
    return <div>No data available for {city}</div>;
  }

  return (
    <div className="App">
      <Header
        image={`/data/majorcities/${city}/assets/${city}.jpeg`}
        bannerText={!citiesWithoutBanner.includes(city) ? `Welcome to ${capitalizeWords(city)}!` : ''}
      />
      <Airportsection content={airportsection} onSelect={setActiveSection} />
      <Propertylisting content={propertySections} active={activeSection} />
      <Plantripsection content={personaContent} onSelect={setActiveGroup} />
      <Plantripcontent content={plantripcontentsections} active={activeGroup} />
      <Placevisit city={city} />
      <Footer />
    </div>
  );
}
