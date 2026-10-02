import type { ProjectCaseStudy } from '@/types/projects';
import { externalLinks } from '@/config/links';

export const CASE_STUDIES: Record<string, ProjectCaseStudy> = {
  sured: {
    slug: '/work/sured',
    id: 'sured',
    title: 'SureD',
    subtitle: 'Blockchain-Powered Rental Security Deposit Platform',
    context: 'Stellar Build Station Pune',
    timeline: 'Hackathon Prototype Sprint',
    summary:
      'A blockchain-powered rental security deposit platform designed around the tenant-landlord escrow workflow to make deposit holding transparent and reduce trust issues around deposit handling.',
    role: [
      'Frontend Development (React & TypeScript)',
      'UI / UX Workflow Implementation',
      'Freighter Wallet Integration',
      'Deposit Lifecycle Flow Design',
      'Showcase Presentation & Testing',
    ],
    technologies: {
      frontend: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      backend: ['Node.js', 'Express.js'],
      blockchain: ['Stellar / Soroban Escrow', 'Freighter Wallet API'],
      core: ['Rental Deposit Escrow', 'Tenant-Landlord Confirmation Flow', 'Escrow State Management'],
    },
    heroVisual: 'sured',
    accentColor: 'pink',
    problemStatement: {
      title: 'The Rental Security Deposit Dilemma',
      description:
        'In conventional rental agreements, security deposits are held unilaterally in landlord personal accounts. When leases end, tenants—particularly students and young professionals—frequently face arbitrary deductions, weeks of delays, and mutual friction. Landlords, conversely, worry about property damage or unpaid bills without a neutral holding structure.',
    },
    solutionStatement: {
      title: 'A Transparent Escrow Workflow',
      description:
        'SureD introduces a transparent escrow platform where deposits are held securely through a programmatic workflow rather than personal custody. The conceptual lifecycle—Create → Fund → Student/Tenant Confirmation → Landlord Confirmation → Release—ensures funds are only disbursed once both parties complete their mutual verification.',
    },
    contributions: {
      title: 'My Role: Frontend, UI/UX & Workflow Integration',
      points: [
        'Developed the responsive frontend web application using React, TypeScript, and Tailwind CSS.',
        'Designed and implemented the core workflow: Create → Fund → Student/Tenant Confirmation → Landlord Confirmation → Release.',
        'Integrated Freighter browser wallet connection and transaction signing prompts into the user interface.',
        'Built clear UI status indicators and state cards so non-technical tenants and landlords could track the deposit lifecycle without blockchain complexity.',
        'Collaborated with teammate Khushal (who wrote the Soroban smart contracts) to connect frontend user actions with the blockchain escrow flow.',
        'Conducted user flow testing and presented the product demonstration at the Stellar Build Station showcase.',
      ],
      note: 'Built collaboratively as a hackathon prototype at Stellar Build Station Pune. Khushal engineered the Soroban smart contract backend, while I focused on the frontend development, user experience, and wallet integration.',
    },
    sections: [
      {
        number: '01',
        title: 'Background & The Student Rental Reality',
        content: [
          'Urban student and young professional tenancy in cities like Pune is characterized by heavy security deposit requirements. Getting that deposit back at the end of a lease is notoriously fraught with tension, delayed communication, and unjustified deductions.',
          'During the Stellar Build Station sprint in Pune, our team explored how smart contract escrow could make security deposit holding impartial, transparent, and code-guaranteed.',
        ],
        callout:
          '“Can we replace unilateral deposit custody with a transparent escrow workflow that gives both tenants and landlords mutual protection?”',
      },
      {
        number: '02',
        title: 'The Conceptual Workflow: Create to Release',
        content: [
          'The platform was structured around a five-step tenant-landlord escrow lifecycle:',
          '1. Create: The rental terms, property identifier, and required deposit amount are defined on the platform.',
          '2. Fund: The tenant connects their Freighter wallet and deposits the agreed amount into the Soroban escrow contract.',
          '3. Student/Tenant Confirmation: At the end of the tenancy period or move-out, the tenant verifies their move-out status and submits a return request.',
          '4. Landlord Confirmation: The landlord conducts property inspection and confirms the release (or flags mutually agreed adjustments).',
          '5. Release: Once both confirmations are satisfied, the escrow contract executes the release, transferring the deposit directly back to the tenant.',
        ],
      },
      {
        number: '03',
        title: 'Frontend & UI/UX Implementation',
        content: [
          'Most tenants and landlords are unfamiliar with Web3 terminology. A core part of my role was designing an interface that abstracts away technical blockchain complexity.',
          'I focused on building straightforward status cards, real-time transaction indicators, clean wallet connection prompts, and explicit next-action notices so users always understood where their deposit was in the workflow.',
        ],
      },
      {
        number: '04',
        title: 'What I Learned',
        content: [
          'Building SureD under sprint deadlines was an intensive lesson in managing asynchronous Web3 states on the frontend and coordinating with a smart contract developer.',
          'It reinforced that the usability of decentralized products relies heavily on clear, predictable UI feedback during wallet connection and contract interactions.',
        ],
        points: [
          'Managing asynchronous blockchain transaction lifecycle states in React',
          'Designing intuitive Web3 onboarding and wallet signing experiences',
          'Cross-functional sprint collaboration dividing frontend and smart contract logic',
        ],
      },
      {
        number: '05',
        title: 'Future Direction // SureD 2.0 (In-Progress Exploration)',
        content: [
          'Next direction: extending the one-to-one tenant-landlord deposit flow toward shared deposits for multiple co-tenants within the same rental agreement.',
          'This in-progress concept aims to handle shared student flats where each roommate contributes an individual portion toward a unified deposit pool, with proportional confirmation and release rules.',
        ],
        callout:
          '“Note: Multi-tenant shared deposit pooling is an in-progress architectural exploration, not completed functionality in the current build.”',
      },
    ],
    learnings: [
      'Asynchronous state handling for blockchain transactions in React',
      'Translating multi-party escrow workflows into intuitive UI screens',
      'Cross-functional sprint coordination dividing frontend and smart contract logic',
    ],
    links: {
      liveDemo: externalLinks.projects.sured.liveDemo,
      repository: externalLinks.projects.sured.repository,
      repositoryName: externalLinks.projects.sured.name,
    },
    navigation: {
      previous: { slug: '/work/jalsanchaeenavachar', title: 'JalSanchaeeNavachar' },
      next: { slug: '/work/wall-e', title: 'WALL-E' },
    },
  },

  walle: {
    slug: '/work/wall-e',
    id: 'walle',
    title: 'WALL-E',
    subtitle: 'Autonomous Obstacle Avoiding Robot',
    context: 'First Year Engineering Project',
    timeline: 'Hardware & Microcontroller Project',
    summary:
      'An Arduino-based wheeled robot that uses an HC-SR04 ultrasonic distance sensor to detect obstacles and steer away in real time.',
    role: [
      'Circuit Wiring & Hardware Assembly',
      'Arduino Firmware (C++)',
      'Ultrasonic Sensor Calibration',
      'Motor Drive & Steering Testing',
    ],
    technologies: {
      hardware: ['Arduino Uno', 'HC-SR04 Ultrasonic Sensor', 'L298N Motor Driver', 'DC Gear Motors', 'Chassis'],
      core: ['Arduino C++', 'Distance Threshold Detection', 'Motor Control Logic'],
    },
    heroVisual: 'walle',
    accentColor: 'lavender',
    problemStatement: {
      title: 'Connecting Code to Physical Movement',
      description:
        'Moving from writing software on a screen to physical computing requires dealing with real hardware constraints: sensor noise, motor latency, and power fluctuations that cannot be abstracted away by a compiler.',
    },
    solutionStatement: {
      title: 'Continuous Obstacle Detection & Steering Loop',
      description:
        'A two-wheeled differential drive robot running an obstacle detection loop on an Arduino Uno. The microcontroller pulses the ultrasonic sensor, calculates distance, and triggers motor steering when an obstacle is within the threshold.',
    },
    contributions: {
      title: 'My Engineering Role',
      points: [
        'Wired and assembled the hardware circuit connecting the Arduino Uno, L298N dual motor driver, and HC-SR04 ultrasonic module.',
        'Wrote the Arduino C++ logic to pulse the ultrasonic sensor, measure echo timing, and compute distance.',
        'Programmed the motor control routines to execute forward motion, braking, and directional turns when obstacles are detected.',
        'Tested and calibrated distance thresholds on physical surfaces to ensure the robot reliably steers clear of barriers.',
      ],
      note: 'Built as a first-year engineering team project to learn microcontroller programming, circuit wiring, and physical computing.',
    },
    sections: [
      {
        number: '01',
        title: 'Project Concept',
        content: [
          'WALL-E was built during my first year of engineering as a hands-on introduction to microcontrollers and physical computing.',
          'The objective was to assemble a small, self-contained wheeled robot capable of driving autonomously across a room without bumping into walls or furniture.',
        ],
        callout:
          '“Building physical hardware changes how you think about code: you can no longer assume instant responses or zero-friction inputs.”',
      },
      {
        number: '02',
        title: 'How It Works: Sensing & Steering Loop',
        content: [
          'The robot operates on a straightforward sensing and reaction cycle:',
          '1. Distance Trigger: The Arduino sends a 10-microsecond trigger pulse to the HC-SR04 ultrasonic sensor.',
          '2. Echo Measurement: The sensor returns an echo pulse, and the duration is measured to calculate the distance to the nearest surface.',
          '3. Steering Decision: If an obstacle is detected within 20cm, the Arduino stops the forward drive, briefly reverses, and turns one motor to pivot away before resuming forward travel.',
        ],
      },
      {
        number: '03',
        title: 'Hardware Troubleshooting',
        content: [
          'Unlike pure software where bugs produce clear error messages, hardware issues require physical diagnosis.',
          'We worked through motor noise causing microcontroller resets, calibrated sensor angles to prevent false readings from low-lying objects, and balanced the chassis weight over the drive wheels.',
        ],
      },
      {
        number: '04',
        title: 'What the Project Taught Me',
        content: [
          'WALL-E was the project that turned abstract coding into tangible movement. It built my initial appreciation for low-level logic, microcontroller inputs/outputs, and hands-on debugging.',
        ],
        points: [
          'Microcontroller programming and input/output pin management in C++',
          'Basic circuit wiring, motor driver operation, and power considerations',
          'Physical calibration and testing in real-world environments',
        ],
      },
    ],
    learnings: [
      'Microcontroller programming in C++',
      'Hardware circuit assembly and multimeter testing',
      'Real-world sensor calibration and threshold tuning',
    ],
    links: {
      repository: externalLinks.projects.wallE.repository,
      repositoryName: externalLinks.projects.wallE.name,
    },
    navigation: {
      previous: { slug: '/work/sured', title: 'SureD' },
      next: { slug: '/work/jalsanchaeenavachar', title: 'JalSanchaeeNavachar' },
    },
  },

  jalsanchaee: {
    slug: '/work/jalsanchaeenavachar',
    id: 'jalsanchaee',
    title: 'JalSanchaeeNavachar',
    subtitle: 'Urban Water Management & Conservation Concept',
    context: 'AISSMS Techathon 3.0',
    timeline: '24-Hour Hackathon Sprint',
    summary:
      'A hackathon concept and UI prototype developed at AISSMS Techathon 3.0, exploring residential water level monitoring dashboards.',
    role: [
      'Problem Research & Scope Definition',
      'Monitoring Dashboard UI Wireframes',
      'Conceptual Data Flow Mapping',
      'Team Hackathon Sprint Collaboration',
    ],
    technologies: {
      core: ['UI Prototyping', 'System Ideation', 'Problem Research', 'Hackathon Sprint Collaboration'],
    },
    heroVisual: 'jalsanchaee',
    accentColor: 'purple',
    problemStatement: {
      title: 'Urban Water Scarcity & Unmonitored Wastage',
      description:
        'Urban housing societies frequently experience overhead tank overflows and unmonitored baseline leakage due to lack of automated water level visibility and consumption analytics.',
    },
    solutionStatement: {
      title: 'Proposed Sensor Concept & Monitoring Dashboard',
      description:
        'A proposed monitoring concept combining tank level sensors with a web monitoring dashboard to provide visibility into water storage levels and consumption patterns.',
    },
    contributions: {
      title: 'My Role & Participation',
      points: [
        'Analyzed the hackathon problem statement to identify practical urban water waste points.',
        'Created UI wireframe mockups for a water monitoring dashboard.',
        'Collaborated on conceptual data flow diagrams connecting tank sensors to client views.',
        'Participated in the team sprint, preparing presentation materials under tight competition deadlines.',
      ],
      note: 'Developed collaboratively as a competitive hackathon sprint project at AISSMS Techathon 3.0. The full hardware-software integration was not completed within the competition window, offering valuable lessons in scope discipline.',
    },
    sections: [
      {
        number: '01',
        title: 'The Hackathon Challenge',
        content: [
          'AISSMS Techathon 3.0 presented teams with complex real-world civic and environmental problem statements. Our team chose to tackle urban water conservation—an acute challenge across rapidly growing Indian metropolitan areas.',
          'Our ambition was to conceptualize an accessible IoT-driven monitoring system that could prevent overhead tank wastage and give residents actionable data on daily consumption.',
        ],
        callout:
          '“The project didn’t reach the intended finish line, but the experience taught me how real-time building transforms when time, scope, and coordination start pushing back.”',
      },
      {
        number: '02',
        title: 'The Proposed System Architecture',
        content: [
          'The concept was structured around two interconnected layers:',
          '1. Sensor Concept: Ultrasonic or pressure level sensors deployed in residential storage tanks to estimate water volume.',
          '2. Conservation Interface: A conceptual dashboard showing current water levels, estimated usage rates, and overflow alerts.',
        ],
      },
      {
        number: '03',
        title: 'Sprint Reality & Incomplete Execution',
        content: [
          'Under the compressed deadline of a 24-hour hackathon, our initial scope outpaced our implementation capacity. Integrating physical hardware sensors and client software within 24 hours proved overly ambitious.',
          'While the prototype was not completed, the sprint was a foundational lesson in scope discipline and rapid architectural triage.',
        ],
      },
      {
        number: '04',
        title: 'What the Experience Taught Me',
        content: [
          'In engineering, knowing how to calibrate scope under rigid constraints is just as critical as writing clean code. JalSanchaeeNavachar taught me how to break ambitious visions into minimal, shippable increments.',
        ],
        points: [
          'Ruthless prioritization and minimal viable scope definition in hackathons',
          'Managing team coordination under compounding deadline pressure',
          'Treating incomplete sprints as crucial stepping stones for future execution',
        ],
      },
    ],
    learnings: [
      'Scope control and agile prioritization under strict deadlines',
      'Balancing ambitious vision with practical time constraints',
      'Team communication and resilience in competitive hackathons',
    ],
    links: {
      repository: undefined,
      repositoryName: 'AISSMS Techathon 3.0 Sprint (Repository Pending)',
    },
    navigation: {
      previous: { slug: '/work/wall-e', title: 'WALL-E' },
      next: { slug: '/work/sured', title: 'SureD' },
    },
  },
};
