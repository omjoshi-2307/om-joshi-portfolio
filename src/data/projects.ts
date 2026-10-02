import type { ProjectItem } from '@/types/projects';
import { externalLinks } from '@/config/links';

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'sured',
    title: 'SureD',
    subtitle: 'Blockchain-Powered Rental Security Deposit Platform',
    context: 'Stellar Build Station Pune',
    slug: '/work/sured',
    featured: true,
    category: 'product',
    summary:
      'A rental security deposit platform designed around the tenant-landlord escrow workflow to make deposit holding transparent and dispute-free.',
    problem:
      'Tenants face arbitrary deductions and delayed deposit returns when leases end, while landlords lack an impartial system that holds agreed funds securely without custodial friction.',
    solution:
      'A structured escrow workflow (Create → Fund → Student/Tenant Confirmation → Landlord Confirmation → Release) utilizing Soroban smart contract escrow on the Stellar network.',
    mainTechnologies: ['React', 'TypeScript', 'Tailwind CSS', 'Freighter Wallet API'],
    supportingTechnologies: ['Node.js', 'Express.js', 'Vite', 'Stellar / Soroban'],
    myContributions: [
      'Frontend development and component architecture in React & TypeScript',
      'UI/UX design and workflow implementation for the tenant & landlord flows',
      'Integration of Freighter wallet connection and transaction signing prompts',
      'End-to-end user flow testing and product presentation for the showcase',
    ],
    teamContext:
      'Built collaboratively as a hackathon prototype at Stellar Build Station Pune. Khushal engineered the Soroban smart contract backend, while I focused on the frontend, user experience, and wallet integration.',
    repositoryUrl: externalLinks.projects.sured.repository,
    repositoryName: externalLinks.projects.sured.name,
    visualType: 'sured',
  },
  {
    id: 'walle',
    title: 'WALL-E',
    subtitle: 'Autonomous Obstacle Avoiding Robot',
    context: 'First Year Engineering Project',
    slug: '/work/wall-e',
    featured: false,
    category: 'hardware',
    summary:
      'Arduino-based wheeled robot using an ultrasonic distance sensor to detect obstacles and steer away in real time.',
    problem:
      'Translating distance thresholds into reliable motor movement without getting stuck against barriers.',
    solution:
      'An Arduino Uno running an obstacle-detection loop with an HC-SR04 ultrasonic sensor and L298N motor driver to steer the chassis away from detected objects.',
    mainTechnologies: ['Arduino Uno', 'C++', 'HC-SR04 Ultrasonic Sensor'],
    supportingTechnologies: ['L298N Motor Driver', 'DC Gear Motors', 'Chassis Prototyping'],
    myContributions: [
      'Assembled and wired microcontroller, motor driver, and ultrasonic sensor',
      'Programmed obstacle detection loop and directional steering code in C++',
      'Calibrated distance thresholds and physical chassis balance',
    ],
    teamContext:
      'First-year engineering team project exploring microcontrollers, circuit wiring, and physical computing.',
    repositoryUrl: externalLinks.projects.wallE.repository,
    repositoryName: externalLinks.projects.wallE.name,
    visualType: 'walle',
  },
  {
    id: 'jalsanchaee',
    title: 'JalSanchaeeNavachar',
    subtitle: 'Urban Water Management & Conservation Concept',
    context: 'AISSMS Techathon 3.0',
    slug: '/work/jalsanchaeenavachar',
    featured: false,
    category: 'hackathon',
    summary:
      'Hackathon concept and UI prototype for monitoring residential water levels, developed under 24-hour sprint constraints.',
    problem:
      'Urban housing societies frequently lose water to undetected tank overflows and unmonitored consumption patterns.',
    solution:
      'A proposed monitoring concept pairing tank level sensors with a web dashboard; served as a key exercise in rapid ideation and hackathon scope control.',
    mainTechnologies: ['UI Prototyping', 'System Ideation', 'Hackathon Sprint'],
    supportingTechnologies: ['Data Flow Mapping', 'Problem Research'],
    myContributions: [
      'Researched the problem statement and helped define the initial prototype scope',
      'Created wireframe concepts for the water monitoring dashboard',
      'Collaborated on system data flow diagrams and presentation materials',
    ],
    teamContext:
      'Team hackathon project at AISSMS Techathon 3.0. The full hardware-software integration was not completed within the competition window, offering valuable lessons in scope discipline.',
    repositoryUrl: externalLinks.projects.jalSanchaeeNavachar.repository,
    repositoryName: externalLinks.projects.jalSanchaeeNavachar.name,
    visualType: 'jalsanchaee',
  },
];
