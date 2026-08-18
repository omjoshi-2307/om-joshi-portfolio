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
      'Decentralized rental deposit escrow eliminating landlord-tenant disputes through Soroban smart contracts on the Stellar network.',
    problem:
      'Rental deposit disputes, deductions, and delays create significant financial friction and lack an impartial trust mechanism.',
    solution:
      'Smart contract escrow on Stellar holding rental deposits until mutual tenancy verification triggers cryptographic release.',
    mainTechnologies: ['React', 'TypeScript', 'Tailwind CSS', 'Stellar Blockchain', 'Soroban / Rust', 'Freighter'],
    supportingTechnologies: ['Node.js', 'Express.js', 'MongoDB', 'Vite'],
    myContributions: [
      'Engineered responsive React & TypeScript web application',
      'Designed end-to-end UI/UX user flows & design tokens',
      'Integrated Freighter wallet connector with Soroban contracts',
      'Created product presentation & branding architecture',
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
      'Autonomous mobile robot using ultrasonic distance sensing and motor driver logic to navigate physical obstacles in real time.',
    problem:
      'Connecting software conditional logic to physical motor actuation and real-time obstacle sensing in a physical environment.',
    solution:
      'A wheeled robotic prototype running an obstacle detection loop on an Arduino microcontroller to steer away from detected barriers.',
    mainTechnologies: ['Arduino', 'Embedded C++', 'Ultrasonic Sensors'],
    supportingTechnologies: ['L298N Motor Driver', 'Chassis Prototyping', 'PWM Control'],
    myContributions: [
      'Assembled and wired microcontroller, motor driver, and sensors',
      'Programmed obstacle detection loop and directional steering routines in C++',
      'Calibrated sensor thresholds and physical chassis balance',
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
      'Rapid hackathon IoT water telemetry and conservation concept developed under strict time and scope constraints.',
    problem:
      'Developing an integrated monitoring concept for urban water conservation within the compressed time window of a competitive hackathon.',
    solution:
      'A collaborative prototype combining sensor concepts with client monitoring interfaces, serving as a formative lesson in scope control and rapid teamwork.',
    mainTechnologies: ['Rapid Prototyping', 'IoT Sensor Concepts', 'Sprint Collaboration'],
    supportingTechnologies: ['UI Wireframing', 'Telemetry Architecture'],
    myContributions: [
      'Analyzed problem statement and scoped prototype architecture',
      'Created interface wireframes and telemetry data flow diagrams',
      'Iterated rapidly under competitive hackathon sprint deadlines',
    ],
    repositoryUrl: externalLinks.projects.jalSanchaeeNavachar.repository,
    repositoryName: externalLinks.projects.jalSanchaeeNavachar.name,
    visualType: 'jalsanchaee',
  },
];
