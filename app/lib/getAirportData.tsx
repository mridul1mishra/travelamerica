export async function getAirportData(city: string) {
  const [airportsection, propertySections, personaContent, plantripRaw] = await Promise.all([
    fetch(`http://localhost:3000/data/majorcities/${city}/airportsection.json`).then(res => res.json()),
    fetch(`http://localhost:3000/data/majorcities/${city}/propertylisting.json`).then(res => res.json()),
    fetch(`http://localhost:3000/data/majorcities/${city}/plantrip.json`).then(res => res.json()),
    fetch(`http://localhost:3000/data/majorcities/${city}/plantripcontent.json`).then(res => res.json()),
  ]);
  const plantripcontentsections = plantripRaw.plantripcontentsection;
  return { airportsection, propertySections, personaContent, plantripcontentsections };
}

