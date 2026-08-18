export interface ChapterRailItem {
  id: string;
  chapterNumber: string;
  title: string;
  shortLabel: string;
  targetId: string;
  sectionAnchor: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export interface ChapterImageSource {
  id: string;
  chapter: string;
  localPath: string;
  sourceUrl: string;
  sourceName: string;
  license: string;
  usage: 'contextual' | 'illustrative';
  notes: string;
}

/**
 * Internal source and licensing registry for all visual chapter assets.
 * Adheres strictly to Image Honesty Mandate: all illustrative graphics are authentic vector compositions.
 */
export const CHAPTER_IMAGE_SOURCES: ChapterImageSource[] = [
  {
    id: 'src-om',
    chapter: '01 // OM (HERO)',
    localPath: '/media/chapter-rail/01-om-hero.svg',
    sourceUrl: 'https://github.com/omjoshi-2307/om-joshi-portfolio',
    sourceName: 'Om Joshi Custom Character Engine',
    license: 'Proprietary / Author Original',
    usage: 'contextual',
    notes: 'High-detail 2D character avatar on Obsidian studio tile with electric pink frame and focused gaze.',
  },
  {
    id: 'src-discovery',
    chapter: '02 // DISCOVERY',
    localPath: '/media/chapter-rail/02-discovery-code.svg',
    sourceUrl: 'https://github.com/omjoshi-2307/om-joshi-portfolio',
    sourceName: 'Portfolio Vector Design System',
    license: 'MIT / Author Original',
    usage: 'illustrative',
    notes: 'Retro logic IDE terminal with C++ syntax lines, compiler cursor, and logic gates.',
  },
  {
    id: 'src-walle',
    chapter: '03 // WALL-E',
    localPath: '/media/chapter-rail/03-walle-robot.svg',
    sourceUrl: 'https://github.com/omjoshi-2307/WALL-E-Autonomous-Obstacle-Avoiding-Robot',
    sourceName: 'WALL-E Repository & Telemetry Design',
    license: 'MIT / Author Original',
    usage: 'contextual',
    notes: 'Ultrasonic HC-SR04 distance radar sweep, target lock (18.4cm), and differential chassis kinematics.',
  },
  {
    id: 'src-hackathon',
    chapter: '04 // HACKATHON',
    localPath: '/media/chapter-rail/04-hackathon-water.svg',
    sourceUrl: 'https://github.com/omjoshi-2307/om-joshi-portfolio',
    sourceName: 'AISSMS Techathon 3.0 Sprint System',
    license: 'Author Original',
    usage: 'illustrative',
    notes: 'Urban water conservation reservoir depth gauge (84%) and flow telemetry sensor waves.',
  },
  {
    id: 'src-sured',
    chapter: '05 // SURED',
    localPath: '/media/chapter-rail/05-sured-escrow.svg',
    sourceUrl: 'https://github.com/Khushal-93/SureD',
    sourceName: 'SureD Stellar Escrow Architecture',
    license: 'MIT / Author Original',
    usage: 'contextual',
    notes: 'Soroban smart contract multi-party deposit vault (2,500 XLM) and claim release pipeline.',
  },
  {
    id: 'src-exploring',
    chapter: '06 // EXPLORING',
    localPath: '/media/chapter-rail/06-exploring-ai.svg',
    sourceUrl: 'https://github.com/omjoshi-2307/om-joshi-portfolio',
    sourceName: 'Emerging Frontiers Vector System',
    license: 'MIT / Author Original',
    usage: 'illustrative',
    notes: 'Multi-layer neural network tensor graph, inference node, and systems programming matrix.',
  },
  {
    id: 'src-about',
    chapter: '07 // ABOUT',
    localPath: '/media/chapter-rail/07-about-mindset.svg',
    sourceUrl: 'https://github.com/omjoshi-2307/om-joshi-portfolio',
    sourceName: 'Om Joshi Personal Profile',
    license: 'Proprietary / Author Original',
    usage: 'contextual',
    notes: 'Personal identity, engineering mindset, and Pune coordinate matrix (18.5204° N, 73.8567° E).',
  },
  {
    id: 'src-contact',
    chapter: '08 // CONTACT',
    localPath: '/media/chapter-rail/08-contact-broadcast.svg',
    sourceUrl: 'https://github.com/omjoshi-2307/om-joshi-portfolio',
    sourceName: 'Om Joshi Communication Protocol',
    license: 'Proprietary / Author Original',
    usage: 'contextual',
    notes: 'Signal broadcast radar antenna, direct email protocol packet (onjoshi2307@gmail.com), and handshake link.',
  },
];

export const CHAPTER_RAIL_ITEMS: ChapterRailItem[] = [
  {
    id: 'chapter-hero',
    chapterNumber: '01',
    title: 'OM // OVERVIEW',
    shortLabel: '01 / HERO',
    targetId: 'hero',
    sectionAnchor: '#hero',
    description: 'B.Tech IT builder, robotics roots, blockchain & systems focus',
    imageSrc: '/media/chapter-rail/01-om-hero.svg',
    imageAlt: 'Om Joshi illustrated character portrait thumbnail',
  },
  {
    id: 'chapter-discovery',
    chapterNumber: '02',
    title: 'DISCOVERY // LOGIC',
    shortLabel: '02 / DISCOVERY',
    targetId: 'intro',
    sectionAnchor: '#intro',
    description: 'Foundations in C++, Assembly, hardware logic, and curiosity',
    imageSrc: '/media/chapter-rail/02-discovery-code.svg',
    imageAlt: 'Early C++ and Assembly programming logic terminal thumbnail',
  },
  {
    id: 'chapter-walle',
    chapterNumber: '03',
    title: 'WALL-E // ROBOTICS',
    shortLabel: '03 / WALL-E',
    targetId: 'stage-walle',
    sectionAnchor: '#stage-walle',
    description: 'Autonomous obstacle avoiding robot with ultrasonic radar',
    imageSrc: '/media/chapter-rail/03-walle-robot.svg',
    imageAlt: 'WALL-E Arduino obstacle avoiding robot chassis schematic thumbnail',
  },
  {
    id: 'chapter-hackathon',
    chapterNumber: '04',
    title: 'HACKATHON // SPRINT',
    shortLabel: '04 / HACKATHON',
    targetId: 'stage-techathon',
    sectionAnchor: '#stage-techathon',
    description: 'AISSMS Techathon 3.0 water conservation rapid IoT telemetry',
    imageSrc: '/media/chapter-rail/04-hackathon-water.svg',
    imageAlt: 'JalSanchaee water reservoir telemetry gauge and flow sensor thumbnail',
  },
  {
    id: 'chapter-sured',
    chapterNumber: '05',
    title: 'SURED // ESCROW',
    shortLabel: '05 / SURED',
    targetId: 'projects',
    sectionAnchor: '#projects',
    description: 'Decentralized rental deposit escrow protocol on Stellar Soroban',
    imageSrc: '/media/chapter-rail/05-sured-escrow.svg',
    imageAlt: 'SureD Soroban smart contract escrow deposit vault thumbnail',
  },
  {
    id: 'chapter-exploring',
    chapterNumber: '06',
    title: 'EXPLORING // FRONTIERS',
    shortLabel: '06 / EXPLORING',
    targetId: 'exploration',
    sectionAnchor: '#exploration',
    description: 'AI tooling, systems programming, cybersecurity, and Web3',
    imageSrc: '/media/chapter-rail/06-exploring-ai.svg',
    imageAlt: 'AI neural network inference and systems architecture thumbnail',
  },
  {
    id: 'chapter-about',
    chapterNumber: '07',
    title: 'ABOUT // MINDSET',
    shortLabel: '07 / ABOUT',
    targetId: 'about',
    sectionAnchor: '#about',
    description: 'Curiosity-driven builder, Pune coordinates, personal ethos',
    imageSrc: '/media/chapter-rail/07-about-mindset.svg',
    imageAlt: 'Om Joshi engineering profile and Pune coordinates geo pin thumbnail',
  },
  {
    id: 'chapter-contact',
    chapterNumber: '08',
    title: 'CONTACT // BUILD',
    shortLabel: '08 / CONTACT',
    targetId: 'contact',
    sectionAnchor: '#contact',
    description: "Let's build reliable software together. Open for collaboration",
    imageSrc: '/media/chapter-rail/08-contact-broadcast.svg',
    imageAlt: 'Direct signal broadcast and email communication node thumbnail',
  },
];

