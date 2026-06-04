export const metadata = {
  title: 'Los Angeles Landmarks 2026 | Iconic Sights & Honest Tips',
  description: "The most iconic Los Angeles landmarks — Hollywood Sign, Griffith Observatory, Santa Monica Pier, Getty, and honest tips.",
  alternates: { canonical: 'https://www.travelsamericas.com/destination/la/landmark' },
  openGraph: { title: 'Los Angeles Landmarks 2026', description: 'LA\'s most iconic landmarks — what to expect and how to visit each one properly.', url: 'https://www.travelsamericas.com/destination/la/landmark', type: 'website' },
};
import LALandmarkClient from './lalandmarkclient';

export default function LALandmarkPage() {
  return <LALandmarkClient />;
}
