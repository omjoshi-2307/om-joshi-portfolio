import type { ExplorationArea } from '@/types/exploration';

export const EXPLORATION_AREAS: ExplorationArea[] = [
  {
    id: 'area-ai',
    number: '01',
    title: 'Artificial Intelligence & Local Models',
    subtitle: 'Autonomous coding agents & local neural inference',
    tagline: 'Embedding intelligence directly into the build loop.',
    conceptQuote:
      'Experimenting with what happens when the tools themselves become active collaborators in the build process.',
    narrative:
      'Investigating how local model runtimes, agentic tool dispatch, and generative UI synthesis can dramatically accelerate engineering velocity and create self-correcting workflows.',
    topics: [
      'Local LLMs',
      'llama.cpp Runtime',
      'AI Coding Agents',
      'AI-Powered Debugging',
      'Agentic Dispatch',
      'Generative UI Synthesis',
    ],
    visualCategory: 'ai',
  },
  {
    id: 'area-security',
    number: '02',
    title: 'Cybersecurity & Threat Vectors',
    subtitle: 'Foundational defense & security mindset',
    tagline: 'Building systems with defensive architectural rigor.',
    conceptQuote:
      'A direction I am actively building my fundamentals in from the ground up.',
    narrative:
      'Learning practical application security, secure communication protocols, and attack surface analysis to design resilient software that withstands adversarial conditions.',
    topics: [
      'Application Security',
      'Threat Modeling',
      'Network Protocols',
      'Defensive Architecture',
      'Secure Coding Practices',
    ],
    visualCategory: 'security',
  },
  {
    id: 'area-systems',
    number: '03',
    title: 'Systems Programming & Deep Computing',
    subtitle: 'Memory, networking & algorithm complexity',
    tagline: 'Understanding the silicon and protocol layers below the framework.',
    conceptQuote:
      'Understanding the lower layers makes the higher layers far more resilient.',
    narrative:
      'Diving deeper into data structures, algorithm efficiency, low-level memory allocation, operating system abstractions, and digital circuit logic.',
    topics: [
      'Data Structures & Algorithms (DSA)',
      'Object-Oriented Programming (OOP)',
      'Computer Networks',
      'Computer Architecture',
      'Digital Electronics',
      'Low-Level I/O',
    ],
    visualCategory: 'systems',
  },
  {
    id: 'area-web3',
    number: '04',
    title: 'Web3 & Trustless State Machines',
    subtitle: 'Smart contract guarantees & decentralized coordination',
    tagline: 'Eliminating trust friction in multi-party agreements.',
    conceptQuote:
      'Exploring trustless state coordination and smart contract safety.',
    narrative:
      'Building on the Stellar and Soroban experience with SureD to explore decentralized state machines, Rust contract safety, and verifiable multi-party escrow mechanisms.',
    topics: [
      'Stellar Ecosystem',
      'Soroban Smart Contracts',
      'Rust Contract Safety',
      'Decentralized Escrow',
      'Cryptographic State',
    ],
    visualCategory: 'web3',
  },
  {
    id: 'area-tooling',
    number: '05',
    title: 'Modern Developer Tooling & Ergonomics',
    subtitle: 'CLI workflows & high-velocity development pipelines',
    tagline: 'Refining the daily craft of building software.',
    conceptQuote:
      'Refining the craft of building software with higher velocity and precision.',
    narrative:
      'Crafting frictionless terminal setups, composable build systems, and autonomous assistant pipelines to maximize flow state and code quality.',
    topics: [
      'CLI Workflows',
      'AI-Assisted Debugging',
      'Automated Pipelines',
      'Design Token Systems',
      'Developer Ergonomics',
    ],
    visualCategory: 'tooling',
  },
];
