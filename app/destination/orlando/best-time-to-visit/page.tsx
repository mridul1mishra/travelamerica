import type { Metadata } from 'next';
import BestTimeToVisitClient from './besttimetovisitclient';

export const metadata: Metadata = {
  title: 'Best Time to Visit Orlando 2026: Crowds, Weather & Theme Park Tips',
  description: 'Best months: late September–October and January–February. Month-by-month Orlando crowd levels, weather, and park wait times so you plan the right trip in 2026.',
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://www.travelsamericas.com/destination/orlando/best-time-to-visit',
  },
  openGraph: {
    title: 'Best Time to Visit Orlando 2026: Crowds, Weather & Theme Park Tips',
    description: 'Month-by-month guide to Orlando — when to go for short wait times, when to avoid the school-break rushes, and what each season costs.',
    url: 'https://www.travelsamericas.com/destination/orlando/best-time-to-visit',
    siteName: 'Travels Americas',
    images: [{ url: 'https://www.travelsamericas.com/social/orlando-best-time-to-visit.png' }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Time to Visit Orlando 2026: Month-by-Month Crowds, Weather & Costs',
    description: 'Late September–October and January–February are Orlando\'s sweet spots. Full month-by-month breakdown inside.',
    images: ['https://www.travelsamericas.com/social/orlando-best-time-to-visit.png'],
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Best Time to Visit Orlando 2026: Crowds, Weather & Theme Park Tips',
  description: 'A month-by-month guide to visiting Orlando, Florida, covering theme-park crowd levels, weather, hotel prices, and the major events to plan around.',
  author: { '@type': 'Person', name: 'Mridul' },
  publisher: { '@type': 'Organization', name: 'Travels Americas', url: 'https://www.travelsamericas.com' },
  datePublished: '2026-06-15',
  dateModified: '2026-06-15',
  mainEntityOfPage: 'https://www.travelsamericas.com/destination/orlando/best-time-to-visit',
  image: 'https://www.travelsamericas.com/social/orlando-best-time-to-visit.png',
  keywords: 'best time to visit Orlando, best month to visit Orlando Florida, Orlando theme park crowds by month, when to visit Walt Disney World, cheapest time to visit Orlando',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best month to visit Orlando?',
      acceptedAnswer: { '@type': 'Answer', text: 'Late September through October and late January through February are the best months. Crowds at theme parks are significantly lower, hotel rates are reduced, and the weather is pleasant — warm but not oppressively hot. October in particular is a sweet spot combining short park wait times with Halloween events like Mickey\'s Not-So-Scary Halloween Party and EPCOT Food & Wine Festival.' },
    },
    {
      '@type': 'Question',
      name: 'What is the cheapest time to visit Orlando?',
      acceptedAnswer: { '@type': 'Answer', text: 'January and February (after the first week of January when the holiday rush ends) offer the lowest hotel rates and smallest theme-park crowds of the year. Many off-site hotels drop to their lowest prices of the year, and park wait times for popular attractions can fall to under 20 minutes.' },
    },
    {
      '@type': 'Question',
      name: 'When should you avoid visiting Orlando?',
      acceptedAnswer: { '@type': 'Answer', text: 'Spring break (mid-March through April) and summer (mid-June through mid-August) bring the heaviest crowds and highest prices. The week between Christmas and New Year is the single busiest period of the year, with parks operating at or near capacity every day.' },
    },
    {
      '@type': 'Question',
      name: 'Is Orlando worth visiting in winter?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes — January and February are among the best times to visit. Daytime temperatures are mild (18–24°C / 65–75°F), crowds are thin, prices are low, and EPCOT\'s Festival of the Arts runs in February. December has spectacular holiday overlays at every park but comes with peak crowds and prices.' },
    },
    {
      '@type': 'Question',
      name: 'What is Orlando like in fall?',
      acceptedAnswer: { '@type': 'Answer', text: 'September and October are ideal for most visitors. School is back in session, so weekday crowds drop sharply. Temperatures ease from summer heat, and the Halloween event calendar is extensive — Mickey\'s Not-So-Scary Halloween Party and Universal\'s Halloween Horror Nights are both popular. EPCOT\'s Food & Wine Festival also runs through fall.' },
    },
    {
      '@type': 'Question',
      name: 'Does Orlando have a hurricane season?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes — Atlantic hurricane season officially runs June through November, with peak risk in August and September. Orlando sits inland and direct landfalls are rare, but tropical storms can bring heavy rain, flooding, and park closures. Check forecasts if travelling between August and October.' },
    },
  ],
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Choose the Best Time to Visit Orlando',
  description: 'A step-by-step approach to picking the right season and month for your Orlando trip based on budget, theme-park crowd levels, and weather.',
  step: [
    { '@type': 'HowToStep', name: 'Decide your top priority', text: 'Budget travelers should target January–February. Crowd-averse visitors should avoid spring break (March–April) and summer (June–August). Families tied to school calendars should focus on fall break (October) or early June before summer crowds peak.' },
    { '@type': 'HowToStep', name: 'Check the park calendar for your target dates', text: 'Special ticketed events like Mickey\'s Not-So-Scary Halloween Party and Mickey\'s Very Merry Christmas Party require separate tickets and run on select nights — book months in advance. EPCOT festivals (Flower & Garden, Food & Wine, Festival of the Arts) don\'t require extra tickets.' },
    { '@type': 'HowToStep', name: 'Compare hotel rates 2–3 months out', text: 'Orlando has a huge range of off-site hotels. If rates near a park are more than 30% above average for your target month, consider shifting by 1–2 weeks or staying off-site on I-Drive with free park shuttle access.' },
    { '@type': 'HowToStep', name: 'Plan for weather', text: 'Orlando summers are hot (30–34°C) with near-daily afternoon thunderstorms from June–September. Pack light clothing, a rain poncho, and stay hydrated. Winter is mild and dry — the most comfortable season for long days in the parks.' },
    { '@type': 'HowToStep', name: 'Book in advance for peak periods', text: 'Spring break, summer, Thanksgiving week, and the holiday period (Dec 26–Jan 2) require hotel and dining reservations 3–6 months ahead. Disney park reservations may also be required — check the current policy before booking.' },
  ],
};

export default function BestTimeToVisitPage() {
  return (
    <>
      <script id="schema-article" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script id="schema-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script id="schema-howto" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <BestTimeToVisitClient />
    </>
  );
}
