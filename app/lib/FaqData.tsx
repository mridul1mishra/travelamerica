export async function getFaq() {
  const [faqTravelHubData] = await Promise.all([
    fetch(`/data//faq/travelhubfaq.json`).then(res => res.json()),
  ]);
  return {faqTravelHubData };
}