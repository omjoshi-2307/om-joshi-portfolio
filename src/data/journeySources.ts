export interface JourneyImageSource {
  stageId: string;
  stageNumber: string;
  stageTitle: string;
  localPath: string;
  sourceUrl: string;
  sourceName: string;
  license: string;
  usage: 'contextual' | 'illustrative';
  notes: string;
}

/**
 * Internal source and licensing registry for all visual Journey assets.
 * Adheres strictly to Image Honesty Mandate: all illustrative graphics are code-generated vector compositions.
 */
export const JOURNEY_IMAGE_SOURCES: JourneyImageSource[] = [
  {
    stageId: 'stage-discovery',
    stageNumber: '01',
    stageTitle: 'STAGE 01 // DISCOVERY',
    localPath: '/media/journey/01-discovery.svg',
    sourceUrl: 'https://github.com/omjoshi-2307/om-joshi-portfolio',
    sourceName: 'Portfolio Vector Design System',
    license: 'MIT / Author Original',
    usage: 'illustrative',
    notes: 'Early code & logic terminal schematic with C++ syntax lines, compiler cursor, and logic gates.',
  },
  {
    stageId: 'stage-first-build',
    stageNumber: '02',
    stageTitle: 'STAGE 02 // FIRST BUILD',
    localPath: '/media/journey/02-first-build.svg',
    sourceUrl: 'https://github.com/omjoshi-2307/om-joshi-portfolio',
    sourceName: 'Portfolio Vector Design System',
    license: 'MIT / Author Original',
    usage: 'illustrative',
    notes: 'Sanitary pad disposal machine automated enclosure, Arduino UNO microcontroller, and relay actuation schematic.',
  },
  {
    stageId: 'stage-walle',
    stageNumber: '03',
    stageTitle: 'STAGE 03 // BUILDING SOMETHING REAL',
    localPath: '/media/journey/03-walle.svg',
    sourceUrl: 'https://github.com/omjoshi-2307/WALL-E-Autonomous-Obstacle-Avoiding-Robot',
    sourceName: 'WALL-E Repository & Telemetry Design',
    license: 'MIT / Author Original',
    usage: 'contextual',
    notes: 'Ultrasonic HC-SR04 distance radar sweep, target lock (18.4cm), and differential chassis kinematics.',
  },
  {
    stageId: 'stage-techathon',
    stageNumber: '04',
    stageTitle: 'STAGE 04 // THE FIRST HACKATHON',
    localPath: '/media/journey/04-hackathon.svg',
    sourceUrl: 'https://github.com/omjoshi-2307/om-joshi-portfolio',
    sourceName: 'AISSMS Techathon 3.0 Sprint System',
    license: 'Author Original',
    usage: 'illustrative',
    notes: 'Urban water conservation reservoir depth gauge (84%) and flow telemetry sensor waves.',
  },
  {
    stageId: 'stage-sured',
    stageNumber: '05',
    stageTitle: 'STAGE 05 // PRODUCT DEVELOPMENT',
    localPath: '/media/journey/05-sured.svg',
    sourceUrl: 'https://github.com/Khushal-93/SureD',
    sourceName: 'SureD Stellar Escrow Architecture',
    license: 'MIT / Author Original',
    usage: 'contextual',
    notes: 'Soroban smart contract multi-party deposit vault (2,500 XLM) and claim release pipeline on Stellar.',
  },
  {
    stageId: 'stage-now',
    stageNumber: '06',
    stageTitle: 'STAGE 06 // NOW',
    localPath: '/media/journey/06-now.svg',
    sourceUrl: 'https://github.com/omjoshi-2307/om-joshi-portfolio',
    sourceName: 'Emerging Frontiers Vector System',
    license: 'MIT / Author Original',
    usage: 'illustrative',
    notes: 'Multi-layer neural network tensor graph, inference node, and systems programming matrix.',
  },
];
