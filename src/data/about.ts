import type { AboutSectionData } from '@/types/about';

export const ABOUT_DATA: AboutSectionData = {
  eyebrow: '01 // INTRODUCTION',
  chapterNumber: '01',
  title: 'Who is Om?',
  subtitle: 'B.Tech IT student & builder based in Pune.',
  
  statement: {
    lead: 'I am an IT student who learns by',
    highlight: 'building real things.',
    sub: 'From wiring microcontrollers to full-stack web applications and decentralized escrow flows, building is the fastest way to understand how systems work.',
  },

  reflectionQuote: {
    quote: 'The tools and frameworks will keep changing, but the core habit stays constant: understand the foundational concepts, build a working prototype, test the edges, and understand why it works.',
    context: 'Core engineering philosophy',
  },

  narrative: [
    {
      id: 'narrative-roots',
      stageLabel: '01 / ROOTS & HARDWARE',
      headline: 'From Hardware to Software Logic',
      content:
        'Started by wiring microcontrollers and writing embedded logic in C++—moving code off the screen into physical actuators, distance sensors, and autonomous robotics.',
    },
    {
      id: 'narrative-pressure',
      stageLabel: '02 / SPRINTS & COLLABORATION',
      headline: 'Hackathons & Velocity',
      content:
        'Building under tight constraints at AISSMS Techathon 3.0 and Stellar Build Station taught me rapid scoping, component discipline, and cross-functional team coordination.',
    },
    {
      id: 'narrative-focus',
      stageLabel: '03 / CONTINUOUS EXPANSION',
      headline: 'Frontiers, Systems & Craft',
      content:
        'Currently pursuing my B.Tech in Information Technology in Pune, continuously experimenting across modern web stacks, Web3 protocols, AI developer tooling, and cybersecurity fundamentals.',
    },
  ],

  metadata: {
    location: {
      label: 'LOCATION',
      value: 'Pune, Maharashtra, India',
      detail: '18.5204° N, 73.8567° E // IST (UTC+5:30)',
      icon: 'MapPin',
    },
    education: {
      label: 'EDUCATION',
      value: 'B.Tech — Information Technology',
      detail: 'Undergraduate Program (Pune)',
      icon: 'GraduationCap',
    },
    orientation: {
      label: 'ORIENTATION',
      value: 'Curious · Experimental · Builder',
      detail: 'Hands-on problem solving from first principles',
      icon: 'Compass',
    },
  },

  interestsSectionTitle: "When I'm Not Building",
  interestsSectionEyebrow: 'PERSONAL INTERESTS',

  interests: [
    {
      id: 'interest-football',
      name: 'Football',
      category: 'Sport & Tactics',
      tagline: 'Team Dynamics & Strategy',
      description:
        'Appreciating tactical structures, positional play, spatial awareness, and weekend matchday momentum.',
      iconName: 'football',
    },
    {
      id: 'interest-anime',
      name: 'Anime',
      category: 'Narrative & Art',
      tagline: 'Worldbuilding & Complex Systems',
      description:
        'Drawn to deep storytelling, intricate fictional systems, visual direction, and creative problem solving in animation.',
      iconName: 'anime',
    },
    {
      id: 'interest-music',
      name: 'Music',
      category: 'Focus & Soundscapes',
      tagline: 'Rhythms & Deep Focus',
      description:
        'A constant backdrop while thinking and coding—spanning ambient textures, electronic beats, and immersive soundtracks.',
      iconName: 'music',
    },
  ],

  closing: {
    preamble: '02 // NEXT CHAPTER',
    headline: 'Disciplines, systems & technical craft.',
    actionText: 'Explore what I build',
    targetId: 'skills',
  },
};
