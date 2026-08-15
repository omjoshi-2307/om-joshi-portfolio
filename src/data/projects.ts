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
      'A decentralized escrow application designed to eliminate deposit disputes and trust friction between tenants and landlords through transparent smart contracts.',
    problem:
      'Rental deposit management frequently creates disputes, unilateral deductions, and return delays between landlords and tenants without an impartial trust mechanism.',
    solution:
      'A blockchain-based escrow protocol where rental security deposits are locked in smart contracts and released based on mutually verified tenancy conditions.',
    mainTechnologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express.js'],
    supportingTechnologies: ['Stellar Blockchain', 'Soroban / Rust', 'MongoDB', 'Freighter Wallet'],
    myContributions: [
      'Engineered the responsive client frontend and state management in React & TypeScript',
      'Designed the end-to-end UI/UX user flows, typography system, and product design tokens',
      'Developed product presentation materials, branding assets, and pitch architecture',
      'Integrated frontend wallet connectors with Freighter for transaction signing',
      'Collaborated closely across the team to align interface requirements with contract logic',
    ],
    teamContext:
      'Collaborative team product build; smart-contract architecture and backend APIs were co-developed with team members.',
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
      'An autonomous mobile robotic platform integrating ultrasonic rangefinders and motor drivers to navigate physical obstacles in real time.',
    problem:
      'Translating software conditional logic into immediate physical actuation and spatial awareness in an unpredictable physical environment.',
    solution:
      'A wheeled robotic system running custom obstacle detection routines on an Arduino microcontroller to steer away from detected barriers.',
    mainTechnologies: ['Arduino', 'Embedded C++', 'Robotics Kinematics'],
    supportingTechnologies: ['Ultrasonic Sensors', 'Motor Drivers', 'Physical Chassis Assembly'],
    myContributions: [
      'Assembled and wired the microcontroller, motor driver, and sensor hardware layers',
      'Programmed the obstacle detection loop and directional motor evasion routines',
      'Collaborated on physical chassis testing, weight balancing, and obstacle calibration',
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
      'A collaborative prototype combining IoT sensor logic with client monitoring interfaces, serving as a pivotal lesson in architecture and rapid execution.',
    mainTechnologies: ['Rapid Prototyping', 'IoT Sensor Logic', 'Team Collaboration'],
    supportingTechnologies: ['System Architecture', 'Time-Constrained Execution'],
    myContributions: [
      'Collaborated on the problem-statement breakdown and technical workflow architecture',
      'Contributed to the interface mockups and sensor data flow specifications',
      'Participated in rapid feature prioritization under strict hackathon deadlines',
    ],
    repositoryUrl: externalLinks.projects.jalSanchaeeNavachar.repository,
    repositoryName: externalLinks.projects.jalSanchaeeNavachar.name,
    visualType: 'jalsanchaee',
  },
];
