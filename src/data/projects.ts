import type { ProjectItem } from '@/types/projects';
import { externalLinks } from '@/config/links';

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'sured',
    title: 'SureD',
    subtitle: 'Secure Rental Deposits on Stellar Blockchain',
    context: 'Stellar Build Station Pune',
    slug: '/work/sured',
    featured: true,
    category: 'product',
    summary:
      'A decentralized escrow application designed to address deposit disputes and trust friction between tenants and landlords through smart contracts.',
    problem:
      'Rental deposit management frequently creates disputes, unilateral deductions, and return delays between landlords and tenants without an impartial mechanism.',
    solution:
      'A blockchain-based escrow prototype where rental security deposits are held in smart contracts and released based on mutually agreed tenancy conditions.',
    mainTechnologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express.js'],
    supportingTechnologies: ['Stellar Blockchain', 'Soroban / Rust', 'MongoDB', 'Freighter Wallet'],
    myContributions: [
      'Engineered the responsive client frontend and user interface in React & TypeScript',
      'Designed the end-to-end UI/UX user flows, typography system, and styling tokens in Figma',
      'Developed product presentation materials, branding assets, and deck architecture',
      'Integrated frontend wallet connectors with Freighter for smart contract interaction',
      'Collaborated closely across the team to align interface requirements with contract logic',
    ],
    teamContext:
      'Collaborative team product build; smart-contract logic and backend APIs were co-developed with team members.',
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
      'An autonomous mobile robotic platform integrating ultrasonic sensors and motor drivers to navigate around physical obstacles.',
    problem:
      'Connecting software conditional logic to physical motor actuation and real-time obstacle sensing in a physical environment.',
    solution:
      'A wheeled robotic prototype running an obstacle detection loop on an Arduino microcontroller to steer away from detected barriers.',
    mainTechnologies: ['Arduino', 'Embedded C++', 'Sensor Integration'],
    supportingTechnologies: ['Ultrasonic Sensors', 'Motor Drivers', 'Chassis Prototyping'],
    myContributions: [
      'Assembled and wired the microcontroller, motor driver, and ultrasonic sensor hardware',
      'Programmed the obstacle detection loop and directional steering routines in Embedded C++',
      'Collaborated on physical chassis testing, weight balancing, and sensor calibration',
    ],
    repositoryUrl: externalLinks.projects.wallE.repository,
    repositoryName: externalLinks.projects.wallE.name,
    visualType: 'walle',
  },
  {
    id: 'jalsanchaee',
    title: 'JalSanchaeeNavachar',
    subtitle: 'Urban Water Management & Conservation',
    context: 'AISSMS Techathon 3.0',
    slug: '/work/jalsanchaeenavachar',
    featured: false,
    category: 'hackathon',
    summary:
      'A rapid hackathon prototype addressing urban water conservation challenges under tight time and scope constraints.',
    problem:
      'Developing an integrated monitoring concept for urban water conservation within the compressed time window of a competitive hackathon.',
    solution:
      'A collaborative prototype combining sensor concepts with client monitoring interfaces, serving as a formative lesson in scope control and rapid teamwork.',
    mainTechnologies: ['Rapid Prototyping', 'IoT Sensor Concepts', 'Team Collaboration'],
    supportingTechnologies: ['Interface Mockups', 'Time-Constrained Sprint'],
    myContributions: [
      'Collaborated on problem-statement analysis and prototype scope definition',
      'Contributed to interface mockups and sensor data flow concepts',
      'Participated in rapid team iteration under strict hackathon deadlines',
    ],
    repositoryUrl: externalLinks.projects.jalSanchaeeNavachar.repository,
    repositoryName: externalLinks.projects.jalSanchaeeNavachar.name,
    visualType: 'jalsanchaee',
  },
];
