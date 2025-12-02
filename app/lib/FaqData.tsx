export async function getFaq() {
  const [faqTravelHubData] = await Promise.all([
    fetch(`https://www.travelamerica.work/data/faq/travelhubfaq.json`).then(res => res.json()),
  ]);
  return {faqTravelHubData };
}
export async function getFaqItinerary() {
  const [faqTravelHubData] = await Promise.all([
    fetch(`http://localhost:3000/data/faq/itineraryfaq.json`).then(res => res.json()),
  ]);
  return {faqTravelHubData };
}