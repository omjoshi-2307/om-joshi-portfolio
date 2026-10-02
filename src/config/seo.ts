import { siteIdentity } from './identity';

/**
 * Production SEO & Social Sharing Metadata Configuration
 * Single source of truth for document headers, Open Graph tags, Twitter/X cards, and JSON-LD schema.
 */

// Centralized production origin (falls back to actual Vercel deployment URL)
export const SITE_URL =
  (typeof import.meta !== 'undefined' && import.meta.env?.VITE_SITE_URL) ||
  'https://om-joshi-portfolio.vercel.app';

export interface PageMeta {
  title: string;
  description: string;
  url: string;
  image: string;
  type?: 'website' | 'article';
  keywords?: string[];
}

export const siteSeo = {
  name: siteIdentity.name,
  url: SITE_URL,
  title: 'Om Joshi — B.Tech IT Student & Builder',
  description:
    'Om Joshi is a B.Tech Information Technology student and builder from Pune, exploring software development, modern web technologies, Web3, AI, cybersecurity, and developer tooling through projects and experimentation.',
  author: 'Om Joshi',
  themeColor: '#08090C',
  locale: 'en_US',
  image: `${SITE_URL}/portfolio-preview.svg`,
  twitterHandle: '@omjoshi_2307',
  keywords: [
    'Om Joshi',
    'Information Technology',
    'React',
    'TypeScript',
    'Web Development',
    'Cybersecurity',
    'AI',
    'Web3',
    'Stellar',
    'Portfolio',
  ],

  // Case-Study Specific Overrides
  projects: {
    sured: {
      title: 'SureD — Blockchain-Powered Rental Security Deposit Platform | Om Joshi',
      description:
        'A blockchain-powered rental security deposit platform designed around the tenant-landlord escrow workflow to make deposit holding transparent and dispute-free.',
      url: `${SITE_URL}/work/sured`,
      image: `${SITE_URL}/sured-preview.svg`,
      type: 'article' as const,
      keywords: ['SureD', 'Rental Deposit Escrow', 'Stellar', 'Soroban', 'Freighter Wallet', 'Om Joshi'],
    },
    walle: {
      title: 'WALL-E — Autonomous Obstacle Avoiding Robot | Om Joshi',
      description:
        'An Arduino-based wheeled robot using an HC-SR04 ultrasonic distance sensor to detect obstacles and steer away in real time.',
      url: `${SITE_URL}/work/wall-e`,
      image: `${SITE_URL}/walle-preview.svg`,
      type: 'article' as const,
      keywords: ['WALL-E', 'Arduino Uno', 'C++', 'Robotics', 'Obstacle Avoidance', 'Om Joshi'],
    },
    jalsanchaee: {
      title: 'JalSanchaeeNavachar — Water Conservation Concept | Om Joshi',
      description:
        'A hackathon concept and UI prototype developed at AISSMS Techathon 3.0, exploring residential water level monitoring dashboards.',
      url: `${SITE_URL}/work/jalsanchaeenavachar`,
      image: `${SITE_URL}/jalsanchaee-preview.svg`,
      type: 'article' as const,
      keywords: ['JalSanchaeeNavachar', 'AISSMS Techathon', 'Hackathon Concept', 'Water Conservation', 'Om Joshi'],
    },
  },
} as const;

/**
 * Generate Structured Data (JSON-LD) for Schema.org/Person
 */
export function getPersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteIdentity.name,
    jobTitle: 'B.Tech Information Technology Student & Builder',
    url: SITE_URL,
    sameAs: [
      siteIdentity.socials.linkedin,
      siteIdentity.socials.github,
      siteIdentity.socials.x,
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Pune',
      addressRegion: 'Maharashtra',
      addressCountry: 'India',
    },
    knowsAbout: [
      'Web Development',
      'React',
      'TypeScript',
      'Embedded Systems',
      'Blockchain',
      'Stellar Soroban',
      'Artificial Intelligence',
    ],
  };
}

/**
 * Generate Structured Data (JSON-LD) for a Project Case Study
 */
export function getProjectSchema(slug: 'sured' | 'walle' | 'jalsanchaee') {
  const meta = siteSeo.projects[slug];
  if (!meta) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    headline: meta.title,
    description: meta.description,
    author: {
      '@type': 'Person',
      name: siteIdentity.name,
      url: SITE_URL,
    },
    url: meta.url,
    image: meta.image,
  };
}
