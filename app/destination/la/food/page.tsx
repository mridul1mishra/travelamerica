export const metadata = {
  title: 'Best Food in Los Angeles 2026 | Where to Eat & What to Order',
  description: "Where to eat in LA — the best tacos, ramen, Korean BBQ, farmers markets, and splurge restaurants across the city.",
  alternates: { canonical: 'https://www.travelsamericas.com/destination/la/food' },
  openGraph: { title: 'Best Food in Los Angeles 2026', description: 'The honest LA food guide — best tacos, ramen, Korean BBQ, markets, and where to splurge.', url: 'https://www.travelsamericas.com/destination/la/food', type: 'website' },
};
import LAFoodClient from './lafoodclient';
export default function LAFoodPage() { return <LAFoodClient />; }
