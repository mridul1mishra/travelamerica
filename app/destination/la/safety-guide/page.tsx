export const metadata = {
  title: 'Is Los Angeles Safe? Honest 2026 Safety Guide for Tourists',
  description: 'Is LA safe to visit? Honest guide covering safe and unsafe neighborhoods, common scams, driving tips, and what tourists actually need to know in 2026.',
  alternates: { canonical: 'https://www.travelsamericas.com/destination/la/safety-guide' },
  openGraph: { title: 'Los Angeles Safety Guide 2026', description: 'Honest tourist safety guide for LA — which neighborhoods to avoid, common scams, and practical tips.', url: 'https://www.travelsamericas.com/destination/la/safety-guide', type: 'website' },
};
import LASafetyClient from './lasafetyclient';
export default function LASafetyPage() { return <LASafetyClient />; }
