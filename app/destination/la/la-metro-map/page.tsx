export const metadata = {
  title: 'LA Metro Map & Guide 2026 | How to Use the Los Angeles Metro',
  description: "How to use the LA Metro — line guide, key stops, fares, and what it can and cannot do for tourists in Los Angeles.",
  alternates: { canonical: 'https://www.travelsamericas.com/destination/la/la-metro-map' },
  openGraph: { title: 'LA Metro Map & Guide 2026', description: 'Complete guide to the LA Metro — lines, fares, key stops, and when to use it vs. Uber.', url: 'https://www.travelsamericas.com/destination/la/la-metro-map', type: 'website' },
};
import LAMetroMapClient from './lametromapclient';
export default function LAMetroMapPage() { return <LAMetroMapClient />; }
