import type { AboutSectionData } from '@/types/about';

export const ABOUT_DATA: AboutSectionData = {
  eyebrow: '05 // PERSONAL IDENTITY',
  chapterNumber: '05',
  title: 'Beyond the Stack',
  subtitle: 'The mindset, background, and habits behind the work.',
  
  statement: {
    lead: 'I tend to understand things much better after trying to',
    highlight: 'build them myself.',
    sub: 'From physical microcontrollers to decentralized smart contracts, building is the fastest path to genuine understanding.',
  },

  reflectionQuote: {
    quote: 'The tools and frameworks will keep changing, but the core habit stays the same: learn the concepts, build a working prototype, test the limits, and understand why it works.',
    context: 'Core engineering philosophy',
  },

  narrative: [
    {
      id: 'narrative-roots',
      stageLabel: '01 / ROOTS & HARDWARE',
      headline: 'From Hardware to Software Logic',
      content:
        'Started by wiring microcontrollers and writing embedded logic—moving software from the screen into physical actuators, sensors, and robotics.',
    },
    {
      id: 'narrative-pressure',
      stageLabel: '02 / SPRINTS & COLLABORATION',
      headline: 'Hackathons & Product Velocity',
      content:
        'Building under tight constraints at AISSMS Techathon and Stellar Build Station taught me rapid scoping, design token discipline, and cross-functional teamwork.',
    },
    {
      id: 'narrative-focus',
      stageLabel: '03 / CONTINUOUS EXPANSION',
      headline: 'Frontiers, Systems & Craft',
      content:
        'Currently pursuing B.Tech in IT in Pune, continuously experimenting across modern web stacks, Web3 protocols, AI developer tooling, and cybersecurity.',
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
      detail: 'Undergraduate Engineering Program',
      icon: 'GraduationCap',
    },
    orientation: {
      label: 'ORIENTATION',
      value: 'Curious • Experimental • Builder',
      detail: 'Hands-on problem solving across layers',
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
        'Appreciating tactical structure, positional play, high-speed decision making, and weekend matchday momentum.',
      iconName: 'football',
    },
    {
      id: 'interest-anime',
      name: 'Anime',
      category: 'Narrative & Art',
      tagline: 'Worldbuilding & Character Arcs',
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
    preamble: 'NEXT STEP',
    headline: "Now you know the person behind the projects.",
    actionText: "Let's connect & build something together",
    targetId: 'contact',
  },
};
