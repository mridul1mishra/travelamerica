export const metadata = {
  title: "Is the LA Metro Safe? 2026 Guide for Tourists",
  description: "Is the LA Metro safe? Honest 2026 guide covering which lines and times are safe, what to watch for, and practical tips.",
  alternates: { canonical: 'https://www.travelsamericas.com/destination/la/metro-safety-guide' },
  openGraph: { title: 'LA Metro Safety Guide 2026', description: 'Is the LA Metro safe? Honest guide for tourists — which lines, which times, and what to watch for.', url: 'https://www.travelsamericas.com/destination/la/metro-safety-guide', type: 'website' },
};
import LAMetroSafetyClient from './lametrosafetyclient';
export default function LAMetroSafetyPage() { return <LAMetroSafetyClient />; }
