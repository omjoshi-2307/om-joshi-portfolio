import type { ExplorationArea } from '@/types/exploration';

export const EXPLORATION_AREAS: ExplorationArea[] = [
  {
    id: 'area-ai',
    number: '01',
    title: 'Artificial Intelligence & Local Models',
    subtitle: 'Developer workflows & local model runtimes',
    tagline: 'Exploring intelligent tools in the development workflow.',
    conceptQuote:
      'Experimenting with how modern AI tools can assist in debugging, prototyping, and everyday building.',
    narrative:
      'Investigating local model runtimes like llama.cpp, assistant tooling workflows, and generative UI experiments to understand how AI can streamline everyday software building.',
    topics: [
      'Local LLMs',
      'llama.cpp Runtime',
      'AI Tooling Workflows',
      'AI-Assisted Debugging',
      'Generative UI Experiments',
      'Prompt Engineering',
    ],
    visualCategory: 'ai',
  },
  {
    id: 'area-security',
    number: '02',
    title: 'Cybersecurity & Threat Vectors',
    subtitle: 'Foundational concepts & security mindset',
    tagline: 'Learning how systems defend against common vulnerabilities.',
    conceptQuote:
      'A domain I am actively building my core fundamentals in from the ground up.',
    narrative:
      'Learning practical application security fundamentals, secure communication concepts, and attack vectors (OWASP) to design safer, more reliable web software.',
    topics: [
      'Application Security Basics',
      'Web Vulnerabilities (OWASP)',
      'Network Protocols',
      'Defensive Practices',
      'Authentication Principles',
    ],
    visualCategory: 'security',
  },
  {
    id: 'area-systems',
    number: '03',
    title: 'Systems Programming & Deep Computing',
    subtitle: 'Data structures, memory & computing foundations',
    tagline: 'Understanding the foundations beneath modern frameworks.',
    conceptQuote:
      'Understanding the lower layers makes the higher layers far more intuitive.',
    narrative:
      'Diving deeper into data structures, algorithm complexity, memory management basics, operating system concepts, and digital logic circuits.',
    topics: [
      'Data Structures & Algorithms (DSA)',
      'Object-Oriented Programming (OOP)',
      'Computer Networks',
      'Computer Architecture',
      'Digital Logic',
      'Memory & I/O',
    ],
    visualCategory: 'systems',
  },
  {
    id: 'area-web3',
    number: '04',
    title: 'Web3 & Decentralized Protocols',
    subtitle: 'Smart contract logic & decentralized applications',
    tagline: 'Exploring transparent protocols and smart contract agreements.',
    conceptQuote:
      'Exploring smart contract logic, state coordination, and decentralized escrow.',
    narrative:
      'Building on the Stellar and Soroban experience from SureD to explore decentralized state logic, Rust-based smart contracts, and escrow mechanisms.',
    topics: [
      'Stellar Ecosystem',
      'Soroban Smart Contracts',
      'Rust Contract Logic',
      'Decentralized Escrow Concepts',
      'Web3 Interfaces',
    ],
    visualCategory: 'web3',
  },
  {
    id: 'area-tooling',
    number: '05',
    title: 'Modern Developer Tooling & Ergonomics',
    subtitle: 'CLI workflows & developer setups',
    tagline: 'Refining the daily workflow of building software.',
    conceptQuote:
      'Refining the daily craft of building software with clean tools and setups.',
    narrative:
      'Building clean terminal setups, custom scripts, and streamlined developer environments for efficient everyday building and iteration.',
    topics: [
      'CLI Workflows',
      'Shell & Scripting',
      'Git Workflows',
      'Design Token Systems',
      'Developer Ergonomics',
    ],
    visualCategory: 'tooling',
  },
];
