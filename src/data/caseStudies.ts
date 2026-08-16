import type { ProjectCaseStudy } from '@/types/projects';
import { externalLinks } from '@/config/links';

export const CASE_STUDIES: Record<string, ProjectCaseStudy> = {
  sured: {
    slug: '/work/sured',
    id: 'sured',
    title: 'SureD',
    subtitle: 'Secure Rental Deposits on Stellar Blockchain',
    context: 'Stellar Build Station Pune',
    timeline: 'Hackathon / Collaborative Build Sprint',
    summary:
      'A decentralized escrow protocol prototype designed to eliminate rental security deposit disputes and trust friction between tenants and landlords through smart contracts on Stellar and Soroban.',
    role: [
      'Frontend Development (React & TypeScript)',
      'UI / UX Flow & Design Architecture',
      'Branding & Visual Presentation',
      'Wallet Integration (Freighter)',
    ],
    technologies: {
      frontend: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      backend: ['Node.js', 'Express.js', 'MongoDB'],
      blockchain: ['Stellar Testnet', 'Soroban Smart Contracts', 'Rust', 'Freighter Wallet API'],
      core: ['Smart Contract Escrow', 'Multi-Party Signature Flow', 'Decentralized State'],
    },
    heroVisual: 'sured',
    accentColor: 'pink',
    problemStatement: {
      title: 'The Rental Deposit Friction',
      description:
        'In conventional rental agreements, security deposits are held entirely under landlord custody. When a lease concludes, tenants often face unjustified deductions, prolonged refund delays, and lack of neutral arbitration. This creates pervasive mutual distrust and administrative friction across urban tenancy ecosystems.',
    },
    solutionStatement: {
      title: 'Decentralized Soroban Escrow Protocol',
      description:
        'SureD replaces unilateral custody with an impartial cryptographic escrow vault. Rental deposits are locked into a Soroban smart contract upon lease signing and can only be released upon mutual digital verification or transparent programmatic milestone fulfillment through Freighter wallet signatures.',
    },
    contributions: {
      title: 'My Engineering & Design Role',
      points: [
        'Built the responsive, high-performance client interface using React, TypeScript, and Tailwind CSS.',
        'Architected the end-to-end user experience, from property onboarding and deposit lockup to mutual claim settlement.',
        'Integrated Freighter browser wallet connectors to facilitate user authentication and on-chain contract transactions.',
        'Crafted the visual brand identity, presentation pitch deck, and interactive product demonstration assets for the hackathon showcase.',
        'Collaborated closely with teammates co-developing the Soroban Rust contracts and Express API layer to align UI states with blockchain execution.',
      ],
      note: 'SureD was built as a collaborative team prototype during Stellar Build Station Pune. Smart contract logic and backend APIs were co-engineered with team members.',
    },
    sections: [
      {
        number: '01',
        title: 'Background & Motivation',
        content: [
          'Urban rental markets across India and global hubs suffer from a persistent trust deficit around tenancy security deposits. Because traditional deposits sit in personal bank accounts, neither party possesses an impartial, automated mechanism to ensure fair and timely settlement.',
          'During the Stellar Build Station sprint in Pune, our team set out to explore how smart contract escrow could transform tenancy agreements from an adversarial negotiation into a predictable, code-guaranteed protocol.',
        ],
        callout:
          '“Can we replace unilateral custodial control with a transparent escrow contract that holds both parties to agreed rules?”',
      },
      {
        number: '02',
        title: 'The Escrow Mechanism & User Flow',
        content: [
          'The core architecture centers on a multi-party escrow model on Stellar Testnet:',
          '1. Deposit Lock: The prospective tenant reviews tenancy terms and signs a deposit lockup transaction via Freighter wallet. Funds move into the Soroban escrow contract.',
          '2. Active Tenancy: The contract state remains in LOCKED mode for the duration of the lease. Neither party can unilaterally withdraw funds.',
          '3. Settlement & Release: At lease expiration, both landlord and tenant initiate mutual verification. Upon double signature, the smart contract automatically returns the deposit to the tenant (or disperses agreed deductions) without intermediaries.',
        ],
      },
      {
        number: '03',
        title: 'Interface & Frontend Engineering',
        content: [
          'Designing an interface for blockchain interactions requires hiding technical complexity behind familiar product patterns. Most tenants and landlords are not Web3 experts.',
          'I focused on building clean status indicators, real-time transaction feedback, clear deposit state badges, and seamless wallet connection states so the escrow process feels as effortless as standard online banking.',
        ],
      },
      {
        number: '04',
        title: 'What I Learned',
        content: [
          'Working in a high-intensity hackathon sprint taught me how to rapidly bridge interface concepts with nascent blockchain tooling like Soroban and Rust.',
          'It reinforced that the hardest part of decentralized applications is not just contract logic, but designing human-centered UI states for asynchronous blockchain confirmations and wallet signing flows.',
        ],
        points: [
          'Managing asynchronous blockchain transaction lifecycle states in React',
          'Designing intuitive Web3 onboarding and signing experiences',
          'High-speed interdisciplinary collaboration under intense hackathon deadlines',
        ],
      },
    ],
    learnings: [
      'Asynchronous state handling for blockchain transactions',
      'Translating multi-party cryptographic logic into intuitive UI flows',
      'Cross-functional sprint coordination with smart contract engineers',
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
    timeline: 'Physical Hardware & Firmware Build',
    summary:
      'An autonomous mobile robotic platform integrating ultrasonic distance sensors, H-bridge motor drivers, and an Arduino microcontroller to execute real-time physical barrier detection and collision avoidance.',
    role: [
      'Hardware Assembly & Circuit Wiring',
      'Firmware Development (Embedded C++)',
      'Sensor Calibration & Kinematic Testing',
      'Team Hardware Prototyping',
    ],
    technologies: {
      hardware: ['Arduino Uno (ATmega328P)', 'HC-SR04 Ultrasonic Sensor', 'L298N Dual H-Bridge Motor Driver', 'DC Gear Motors', 'Chassis & Power System'],
      core: ['Embedded C++', 'Interrupt-Driven Distance Sensing', 'PWM Kinematics', 'Real-Time Collision Avoidance'],
    },
    heroVisual: 'walle',
    accentColor: 'lavender',
    problemStatement: {
      title: 'Connecting Code to the Physical World',
      description:
        'Transitioning from pure software programming to physical computing introduces real-world mechanical and electrical constraints: sensor noise, inertia, motor response latency, and power fluctuations that cannot be abstracted away by a compiler.',
    },
    solutionStatement: {
      title: 'Embedded Reactive Navigation Loop',
      description:
        'A two-wheeled differential drive chassis controlled by an Arduino microcontroller running a continuous sensor-sweep and kinematic evasion loop, dynamically calculating clearance distances and steering away before collisions occur.',
    },
    contributions: {
      title: 'My Engineering Role',
      points: [
        'Wired and assembled the complete electronics schematic connecting the Arduino, L298N motor driver, and HC-SR04 ultrasonic sensor module.',
        'Authored the embedded C++ control firmware, implementing distance calculation algorithms from ultrasonic echo timing.',
        'Engineered directional logic routines (forward drive, obstacle detection threshold, reverse pivot, and turn angle selection).',
        'Conducted empirical hardware bench testing to balance weight distribution, calibrate sensor detection thresholds, and tune motor PWM values.',
      ],
      note: 'Built as a first-year engineering team project to explore physical robotics, embedded microcontrollers, and electrical hardware debugging.',
    },
    sections: [
      {
        number: '01',
        title: 'Concept & Hardware Architecture',
        content: [
          'WALL-E was conceived during my first year of engineering as a hands-on exploration of robotics and embedded computing.',
          'The goal was simple yet rigorous: build an autonomous, wheeled robot that could navigate unfamiliar physical environments without external remote control or human guidance.',
        ],
        callout:
          '“Building physical hardware changes how you write software: you can no longer assume instant execution or zero-friction inputs.”',
      },
      {
        number: '02',
        title: 'The Sensing & Control Loop',
        content: [
          'The robot relies on an HC-SR04 ultrasonic transducer mounted on the front chassis:',
          '1. Pulse Trigger: The microcontroller emits a 10µs ultrasonic trigger pulse at 40kHz.',
          '2. Echo Measurement: The return pulse duration is measured to calculate distance (Distance = Time × 0.034 / 2).',
          '3. Threshold Check: If the detected barrier is within 20cm, the drive routine immediately brakes both DC motors, reverses for 300ms, and steers toward the direction with maximum clearance.',
        ],
      },
      {
        number: '03',
        title: 'Physical Debugging & Real-World Constraints',
        content: [
          'Software bugs give clean compiler errors; hardware bugs appear as sudden voltage drops, motor stalls, or ultrasonic reflections from angled surfaces.',
          'We learned how to manage motor back-EMF, isolate microcontroller logic power from inductive motor supply rails, and smooth sensor jitter with rolling average filtering.',
        ],
      },
      {
        number: '04',
        title: 'What Changed in My Thinking',
        content: [
          'WALL-E was the pivotal project that turned abstract code into tangible physical motion. It cemented my appreciation for low-level systems, hardware-software interfaces, and the importance of resilience in engineering.',
        ],
        points: [
          'Understanding physical electronics, PWM modulation, and circuit isolation',
          'Debugging edge-case sensor reflection anomalies and mechanical inertia',
          'Appreciating the synergy between hardware constraints and software control',
        ],
      },
    ],
    learnings: [
      'Embedded microcontroller programming in C++',
      'Hardware troubleshooting with multimeters and logic testing',
      'Real-world kinematic feedback and mechanical balance',
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
    subtitle: 'Urban Water Management & Conservation',
    context: 'AISSMS Techathon 3.0',
    timeline: 'Rapid Hackathon Prototype Sprint',
    summary:
      'A rapid hackathon prototype developed during AISSMS Techathon 3.0, exploring IoT water level telemetry and monitoring dashboards for residential water conservation.',
    role: [
      'Problem Statement & Scope Definition',
      'UI/UX Monitoring Dashboard Mockups',
      'IoT Sensor Data Flow Conception',
      'Team Hackathon Sprint Collaboration',
    ],
    technologies: {
      core: ['Rapid Prototyping', 'IoT Telemetry Concepts', 'UI/UX Wireframing', 'Water Conservation Analytics', 'Team Sprint Coordination'],
    },
    heroVisual: 'jalsanchaee',
    accentColor: 'purple',
    problemStatement: {
      title: 'Urban Water Scarcity & Unmonitored Wastage',
      description:
        'Urban residential housing societies frequently experience overhead tank overflows and unmonitored baseline leakage due to lack of automated water level visibility and consumption analytics.',
    },
    solutionStatement: {
      title: 'Integrated Sensor Telemetry & Client Dashboard',
      description:
        'A proposed telemetry framework combining tank level sensors with a web monitoring interface to provide real-time water availability metrics and consumption anomaly alerts to housing society administrators.',
    },
    contributions: {
      title: 'My Role & Participation',
      points: [
        'Analyzed the hackathon problem statement to identify high-impact conservation touchpoints in urban housing societies.',
        'Contributed to interface wireframes and client monitoring dashboard layouts for tracking water inflow and outflow.',
        'Collaborated on system data flow diagrams mapping sensor telemetry to user-facing dashboards.',
        'Participated actively in the high-pressure team sprint, iterating on presentation pitch points under strict competition deadlines.',
      ],
      note: 'Developed collaboratively as a competitive hackathon sprint project at AISSMS Techathon 3.0.',
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
          '1. Telemetry Node: Ultrasonic/pressure level sensors deployed in residential storage tanks, broadcasting periodic level readings.',
          '2. Conservation Interface: A responsive client dashboard displaying real-time water depth, estimated reserve hours, and alerts for abnormal drain rates.',
        ],
      },
      {
        number: '03',
        title: 'Time Constraints & Realities of Incomplete Execution',
        content: [
          'Under the compressed deadline of a 24-hour hackathon, our initial scope outpaced our implementation capacity. Integrating both physical sensor hardware and client dashboard connectivity within the timeframe proved overly ambitious.',
          'While the full end-to-end prototype remained incomplete at the closing buzzer, the sprint was an invaluable lesson in scope management, ruthless prioritization, and rapid architectural triage.',
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
