export async function getSectionData(city: string) {
  const [airportsection, propertySections, personaContent, plantripRaw] = await Promise.all([
    fetch(`https://www.travelamerica.work/data/majorcities/${city}/airportsection.json`).then(res => res.json()),
    fetch(`https://www.travelamerica.work/data/majorcities/${city}/propertylisting.json`).then(res => res.json()),
    fetch(`https://www.travelamerica.work/data/majorcities/${city}/plantrip.json`).then(res => res.json()),
    fetch(`https://www.travelamerica.work/data/majorcities/${city}/plantripcontent.json`).then(res => res.json()),
  ]);
  const plantripcontentsections = plantripRaw.plantripcontentsection;
  return { airportsection, propertySections, personaContent, plantripcontentsections };
}

