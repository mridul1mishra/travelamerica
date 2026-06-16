import type { Metadata } from 'next';
import GettingToOrlandoClient from './gettingtoorlandoclient';

export const metadata: Metadata = {
  title: 'Getting to Orlando 2026: MCO, Sanford & Brightline Guide',
  description: 'How to get to Orlando and reach the theme parks from MCO, Sanford Airport (SFB), or Brightline train. Rental cars, Mears Connect, rideshare, and hotel shuttles explained.',
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://www.travelsamericas.com/destination/orlando/getting-to-orlando',
  },
  openGraph: {
    title: 'Getting to Orlando 2026: MCO, Sanford & Brightline Guide',
    description: 'A complete guide to arriving in Orlando — airports, Brightline train, and getting from MCO or SFB to Walt Disney World, Universal, and I-Drive.',
    url: 'https://www.travelsamericas.com/destination/orlando/getting-to-orlando',
    siteName: 'Travels Americas',
    images: [{ url: 'https://www.travelsamericas.com/social/getting-to-orlando.png' }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Getting to Orlando 2026 — Complete Arrival Guide',
    description: 'MCO vs SFB vs Brightline — rental cars, Mears Connect, rideshare, and how to reach Disney World and Universal from each.',
    images: ['https://www.travelsamericas.com/social/getting-to-orlando.png'],
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Getting to Orlando 2026: MCO, Sanford Airport & Brightline Complete Guide',
  description: 'A complete guide to getting to Orlando, covering Orlando International Airport (MCO), Orlando Sanford Airport (SFB), Brightline train from South Florida, and how to reach the theme park areas.',
  author: { '@type': 'Person', name: 'Mridul' },
  publisher: { '@type': 'Organization', name: 'Travels Americas', url: 'https://www.travelsamericas.com' },
  datePublished: '2026-06-15',
  dateModified: '2026-06-15',
  mainEntityOfPage: 'https://www.travelsamericas.com/destination/orlando/getting-to-orlando',
  image: 'https://www.travelsamericas.com/social/getting-to-orlando.png',
  keywords: 'getting to Orlando, Orlando airport MCO, Sanford airport SFB, Brightline Orlando, Mears Connect shuttle, MCO to Disney World, Orlando airport transfer',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best way to get from MCO to Walt Disney World?',
      acceptedAnswer: { '@type': 'Answer', text: 'For most visitors, a rental car is the most convenient option for an Orlando trip — it gives you flexibility for grocery runs, dinner reservations, and day trips. If you prefer not to drive, Mears Connect offers official shared and private shuttles directly to Disney resorts. Rideshare (Uber/Lyft) from MCO to Disney typically costs $30–60 depending on traffic and destination. Note: Disney\'s Magical Express service has been discontinued.' },
    },
    {
      '@type': 'Question',
      name: 'How far is MCO from Walt Disney World and Universal Studios?',
      acceptedAnswer: { '@type': 'Answer', text: 'MCO (Orlando International Airport) is approximately 20–25 minutes from Walt Disney World and 15–20 minutes from Universal Orlando Resort and I-Drive, depending on traffic. Drive times can be longer during peak hours and school holidays.' },
    },
    {
      '@type': 'Question',
      name: 'Is Sanford Airport (SFB) a good option for Orlando?',
      acceptedAnswer: { '@type': 'Answer', text: 'SFB is worth considering if you find a significantly cheaper fare, especially on Allegiant Air. However, SFB is roughly 45 miles north of Walt Disney World — about a 50-minute drive without traffic. You will need to rent a car or pre-book a private shuttle; rideshare from SFB to Disney is $80–120+, and no hotel or Disney shuttles serve SFB.' },
    },
    {
      '@type': 'Question',
      name: 'Can I take Brightline to Orlando?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes — Brightline runs higher-speed train service from Miami, Fort Lauderdale, Boca Raton, and West Palm Beach to a station inside MCO\'s Terminal C. However, Brightline doesn\'t go directly to Disney or Universal — you still need onward transport (rental car, rideshare, or Mears Connect) from MCO. Check brightline.com for current schedules and pricing, as these are subject to change.' },
    },
    {
      '@type': 'Question',
      name: 'Is Disney\'s Magical Express still available?',
      acceptedAnswer: { '@type': 'Answer', text: 'No — Disney\'s Magical Express airport shuttle service was permanently discontinued in January 2022. The current official Disney resort shuttle replacement is Mears Connect, which offers shared and private options between MCO and Disney properties. Book in advance at mearstransportation.com.' },
    },
    {
      '@type': 'Question',
      name: 'Do I need a car in Orlando?',
      acceptedAnswer: { '@type': 'Answer', text: 'For most visitors, yes. Public transit in Orlando is limited and not practical for reaching the theme parks. The exceptions: if you are staying on Disney property for your entire trip (Disney\'s free bus network covers all parks and resorts), or if you are staying at a Universal on-site hotel with walking access to Universal parks. For any off-property activities, grocery trips, or visiting multiple resort areas, a rental car is strongly recommended.' },
    },
  ],
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Get from MCO Airport to Walt Disney World',
  description: 'Step-by-step guide for getting from Orlando International Airport (MCO) to the Walt Disney World Resort area.',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Land at MCO Terminal B or C', text: 'Most major airlines arrive at Terminal B. Brightline train and some newer facilities are in Terminal C. Follow signs for Ground Transportation or Baggage Claim.' },
    { '@type': 'HowToStep', position: 2, name: 'Decide: Rental Car, Rideshare, or Shuttle?', text: 'Rental cars are ideal for the whole trip. Rideshare is quick for individuals. Mears Connect shuttle is the official Disney-area service (book in advance at mearstransportation.com).' },
    { '@type': 'HowToStep', position: 3, name: 'Head to Ground Transportation', text: 'For rideshare: follow the Ride App Pickup signs to the designated zones on Level 1. For rental cars: take the free rental car shuttle from the terminal. For Mears Connect: go to the Mears desk inside the baggage claim area.' },
    { '@type': 'HowToStep', position: 4, name: 'Drive or ride to the resort area', text: 'Walt Disney World is approximately 20–25 minutes south on FL-528 W (Beachline Expressway) — a toll road. Universal is 15–20 minutes on FL-528 W then I-4. Budget for tolls if renting.' },
    { '@type': 'HowToStep', position: 5, name: 'Stop for groceries before checking in', text: 'A Publix or Walmart between MCO and Disney (along 192 or I-Drive) can save significant money on breakfasts and snacks. This is worth the 10-minute detour before reaching the resort.' },
  ],
};

export default function GettingToOrlandoPage() {
  return (
    <>
      <script id="schema-article" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script id="schema-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script id="schema-howto" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <GettingToOrlandoClient />
    </>
  );
}
