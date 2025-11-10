export async function getFaq() {
  const [faqTravelHubData] = await Promise.all([
    fetch(`https://www.travelamerica.work/data//faq/travelhubfaq.json`).then(res => res.json()),
  ]);
  return {faqTravelHubData };
}