import Airportsection from '../../components/majorcities/airportsection/airportsection';
import Propertylisting from '../../components/majorcities/flightsection/propertylisting';
import Plantripsection from '../../components/majorcities/plantripsection/plantripsection';
import Plantripcontent from '../../components/majorcities/plantripcontent/plantripcontent';
import Placevisit from '../../components/majorcities/placevisitsection/placevisit';
import Footer from '../../components/Header/Footer/footer';
import Header from '../../components/Header/header';
import Cities from '../../models/majorcities';
import PropertyListingModel from '../../models/propertylisting';
import Personas from '../../models/personas';
import { PlantripcontentSection } from '../../models/plantripcontent';

export async function generateStaticParams() {
  return [
    { city: 'newyork' },
    { city: 'lasvegas' },
    { city: 'losangeles' },
    { city: 'orlando' },
  ];
}

function capitalizeWords(str: string) {
  return str.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
}

export default async function Page({ params }: { params: { city: string } }) {
  const city = params.city;

  try {
    const [airportData, propertyListing, personaData, plantripData] = await Promise.all([
      import(`../../data/majorcities/${city}/airportsection.json`),
      import(`../../data/majorcities/${city}/propertylisting.json`),
      import(`../../data/majorcities/${city}/plantrip.json`),
      import(`../../data/majorcities/${city}/plantripcontent.json`),
    ]);

    const citiesWithoutBanner = ['lasvegas'];

    return (
      <div className="App">
        <Header
          image={`/data/majorcities/${city}/assets/${city}.jpeg`}
          bannerText={!citiesWithoutBanner.includes(city) ? `Welcome to ${capitalizeWords(city)}!` : ''}
        />
        <Airportsection content={airportData.default} onSelect={() => {}} />
        <Propertylisting content={propertyListing.default.sections || []} active={1} />
        <Plantripsection content={personaData.default} onSelect={() => {}} />
        <Plantripcontent content={plantripData.default.plantripcontentsection || []} active={1} />
        <Placevisit city={city} />
        <Footer />
      </div>
    );
  } catch (err) {
    return <div>Error loading data for {city}</div>;
  }
}
