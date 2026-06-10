export const metadata = {
  title: "LA Group Travel Guide 2026 | Tips for Groups of 4–20",
  description: "Planning a group trip to LA? Covers group hotels, activities, transport logistics, and how to split costs without drama.",
  alternates: { canonical: 'https://www.travelsamericas.com/destination/la/group-travel' },
  openGraph: { title: 'Los Angeles Group Travel Guide 2026', description: 'How to plan a group trip to LA — transport, accommodation, activities and logistics.', url: 'https://www.travelsamericas.com/destination/la/group-travel', type: 'article' },
};
import LAGroupTravelClient from './lagrouptravelclient';

export default function LAGroupTravelPage() {
  return <LAGroupTravelClient />;
}
