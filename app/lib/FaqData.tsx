export async function getFaq() {
  const [faqTravelHubData] = await Promise.all([
    fetch(`http://localhost:3000/data//faq/travelhubfaq.json`).then(res => res.json()),
  ]);
  return {faqTravelHubData };
}