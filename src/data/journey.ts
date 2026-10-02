import { externalLinks } from '@/config/links';
import type { JourneyStage } from '@/types/journey';

export interface TechnicalMilestone {
  number: '01' | '02' | '03' | '04' | '05' | '06';
  phaseBadge: string;
  title: string;
  subtitle: string;
  timeframe: string;
  shortExplanation: string;
  narrative: string[];
  keyHighlights: string[];
  technologies: string[];
  projectLink?: {
    label: string;
    url: string;
    isCaseStudy?: boolean;
    isExternal?: boolean;
  };
  closingRemark?: string;
}

export const TECHNICAL_PROGRESSION: string[] = [
  'HARDWARE',
  'SOFTWARE',
  'WEB',
  'WEB3',
  'CYBERSECURITY',
];

export const JOURNEY_MILESTONES: TechnicalMilestone[] = [
  {
    number: '01',
    phaseBadge: 'HARDWARE & FIRST EXPERIMENTS',
    title: 'Hardware & First Experiments',
    subtitle: 'Arduino / sensors / robotics',
    timeframe: 'Early Exploration',
    shortExplanation: 'Started by building physical systems and learning how software interacts with hardware.',
    narrative: [
      'Started by exploring physical computing, microcontrollers, and embedded logic. Built automated prototypes and programmed WALL-E—an autonomous obstacle-avoiding rover powered by an Arduino Uno, ultrasonic distance sensor (HC-SR04), and motor drivers.',
      'Working with physical circuits and microcontrollers taught me early on about execution loops, signal timing, and how code connects to real-world sensors.',
    ],
    keyHighlights: [
      'WALL-E autonomous obstacle-avoiding mobile robot',
      'Arduino Uno & embedded C++ control routines',
      'HC-SR04 ultrasonic distance sensing & latency loops',
      'L298N dual H-bridge motor driver actuation',
    ],
    technologies: ['Arduino Uno', 'Embedded C++', 'HC-SR04 Sensor', 'L298N Driver', 'Robotics'],
    projectLink: {
      label: 'View WALL-E on GitHub',
      url: externalLinks.projects.wallE.repository,
      isExternal: true,
    },
  },
  {
    number: '02',
    phaseBadge: 'SOFTWARE & WEB DEVELOPMENT',
    title: 'Software & Web Development',
    subtitle: 'React / TypeScript / frontend development / GitHub',
    timeframe: 'Foundations & Transition',
    shortExplanation: 'Moved from physical circuits to software systems, learning modern frontend development, state management, and developer workflows.',
    narrative: [
      'Transitioned from microcontroller code toward scalable web applications. Immersed myself in the modern JavaScript ecosystem—learning React, TypeScript, responsive layouts, and version-controlled developer workflows.',
      'Focused on component design, typed interfaces, state management, and building clean interfaces with high attention to user experience.',
    ],
    keyHighlights: [
      'Component architecture with React & TypeScript',
      'Tailwind CSS and design token systems',
      'Git branching, pull requests, and GitHub workflows',
      'State management, API integration, and performance',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Git & GitHub', 'REST APIs'],
  },
  {
    number: '03',
    phaseBadge: 'WEB3 & SURED',
    title: 'Web3 & SureD',
    subtitle: 'Stellar / escrow / rental deposits',
    timeframe: 'Stellar Build Station Pune',
    shortExplanation: 'Explored decentralized protocols by building user-facing interfaces and wallet workflows for blockchain escrow.',
    narrative: [
      'Collaborated on SureD at Stellar Build Station Pune—a blockchain-powered rental security deposit platform designed around the tenant-landlord escrow workflow. The platform uses Soroban smart contracts on the Stellar network to make rental security deposits transparent and verifiable.',
      'My contribution focused on frontend development, UI/UX implementation, wallet integration, and testing: building the responsive dashboard and integrating the Freighter browser wallet API for signing transactions.',
    ],
    keyHighlights: [
      'Rental deposit escrow flow: Create → Fund → Tenant Confirmation → Landlord Confirmation → Release',
      'Frontend application built with React, TypeScript & Tailwind CSS',
      'Freighter browser wallet connection & transaction signing',
      'Future direction: extending toward shared multi-tenant co-deposits (SureD 2.0)',
    ],
    technologies: ['React', 'TypeScript', 'Freighter Wallet API', 'Stellar / Soroban', 'Tailwind CSS'],
    projectLink: {
      label: 'View SureD Case Study',
      url: '/work/sured',
      isCaseStudy: true,
    },
  },
  {
    number: '04',
    phaseBadge: 'HACKATHONS & CONSTRAINTS',
    title: 'Hackathons & Building Under Constraints',
    subtitle: 'AISSMS Techathon 3.0 / fast prototyping',
    timeframe: 'AISSMS Techathon 3.0',
    shortExplanation: 'Learned how to design, build, and pitch functional prototypes rapidly in competitive hackathon environments.',
    narrative: [
      'Participated in AISSMS Techathon 3.0, collaborating with a team to conceptualize, design, and prototype JalSanchaeeNavachar—an urban rainwater harvesting and storage monitoring concept—under tight 24-hour constraints.',
      'This sprint was a formative milestone in learning how to prioritize core features under pressure, divide team responsibilities, turn concepts into working software quickly, and pitch technical ideas with clarity to judges.',
    ],
    keyHighlights: [
      'JalSanchaeeNavachar rainwater monitoring prototype',
      'Fast-paced prototyping and 24-hour scope discipline',
      'Team collaboration and sprint task division',
      'Live technical presentation and project pitching under evaluation',
    ],
    technologies: ['Rapid Prototyping', 'Team Collaboration', 'UI Wireframing', 'Scope Control', 'Technical Pitching'],
    projectLink: externalLinks.projects.jalSanchaeeNavachar.repository
      ? {
          label: 'View JalSanchaee on GitHub',
          url: externalLinks.projects.jalSanchaeeNavachar.repository,
          isExternal: true,
        }
      : undefined,
  },
  {
    number: '05',
    phaseBadge: 'CYBERSECURITY',
    title: 'Cybersecurity',
    subtitle: 'Application security & systems defense',
    timeframe: 'Active Study & Core Focus',
    shortExplanation: 'Deepening knowledge of security fundamentals, system vulnerabilities, and building software with security in mind.',
    narrative: [
      'Actively studying application security, vulnerability mechanisms, and defensive principles. Good engineering requires understanding how systems fail, how attacks occur, and how data must be protected.',
      'Deepening practical knowledge in web security (OWASP Top 10), authentication and authorization, Linux system administration, network fundamentals (TCP/IP), and cryptography basics.',
    ],
    keyHighlights: [
      'Web application security & OWASP Top 10 vulnerabilities',
      'Authentication flaws, token security, and CORS/CSRF protections',
      'Linux system fundamentals and command-line environments',
      'Network protocols, traffic inspection, and socket fundamentals',
      'Foundational cryptography: public-key systems, hashing, and signatures',
    ],
    technologies: ['Application Security', 'OWASP Top 10', 'Linux CLI', 'Network Protocols (TCP/IP)', 'Web Security', 'Cryptography Basics'],
  },
  {
    number: '06',
    phaseBadge: 'WHAT\'S NEXT',
    title: 'What\'s Next',
    subtitle: 'Future direction & emerging horizons',
    timeframe: 'Present & Beyond',
    shortExplanation: 'Exploring the intersection of local intelligent systems, performance-oriented programming, and real-world engineering.',
    narrative: [
      'Continuing to broaden my engineering foundations through hands-on experiments: exploring local LLM inference tooling (Ollama), agentic workflows, data structures and systems-level programming, and computer vision experimentation.',
      'The objective remains grounded: stay curious, master engineering foundations, and build practical tools that solve real problems.',
    ],
    keyHighlights: [
      'Local LLMs and AI-assisted developer tooling',
      'Systems programming, data structures & algorithms',
      'Computer vision exploration with OpenCV & YOLO',
      'Focusing on durability, privacy, and performance in software',
    ],
    closingRemark: 'Still learning. Still building.',
    technologies: ['Local LLMs', 'Systems / DSA', 'Computer Vision (OpenCV)', 'Developer Tooling', 'TypeScript', 'Python'],
  },
];

// Preserved for backwards compatibility with any legacy imports
export const JOURNEY_STAGES: JourneyStage[] = JOURNEY_MILESTONES.map((m) => ({
  id: `stage-${m.number}`,
  number: m.number,
  stageLabel: `MILESTONE ${m.number} // ${m.phaseBadge}`,
  timeframe: m.timeframe,
  title: m.title,
  tagline: m.shortExplanation,
  narrative: m.narrative,
  technologies: m.technologies,
  visualType: m.number === '01' ? 'hardware' : m.number === '03' ? 'product' : m.number === '04' ? 'hackathon' : 'exploration',
  imageSrc: `/media/journey/0${m.number}-stage.svg`,
  imageAlt: `${m.title} milestone thumbnail`,
  repositoryUrl: m.projectLink?.url,
  repositoryName: m.projectLink?.label,
}));
