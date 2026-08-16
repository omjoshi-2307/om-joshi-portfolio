import type { AboutSectionData } from '@/types/about';

export const ABOUT_DATA: AboutSectionData = {
  eyebrow: '05 // PERSONAL IDENTITY',
  chapterNumber: '05',
  title: 'Beyond the Stack',
  subtitle: 'The mindset, background, and habits behind the work.',
  
  statement: {
    lead: 'I tend to understand things much better after trying to',
    highlight: 'build them myself.',
    sub: 'For me, engineering is not an abstract theory—it is a continuous cycle of curiosity, experimentation, and finding out what actually works.',
  },

  reflectionQuote: {
    quote: 'The tools and frameworks will keep changing, but the core habit stays the same: learn the concepts, build a working prototype, test the limits, and understand why it works.',
    context: 'Core engineering philosophy',
  },

  narrative: [
    {
      id: 'narrative-roots',
      stageLabel: '01 / ROOTS & CURIOSITY',
      headline: 'From Hardware to Software Logic',
      content:
        'My curiosity started with wanting to know what happens beneath the surface. Early on, that meant wiring Arduino microcontrollers, working with hardware components, and seeing code actuate physical electronics—from an automated sanitary pad disposal machine prototype to an autonomous obstacle-avoiding robot. Experiencing software control physical hardware made one thing clear: building is the fastest way to truly learn.',
    },
    {
      id: 'narrative-pressure',
      stageLabel: '02 / PRESSURE & COLLABORATION',
      headline: 'Hackathons & Product Velocity',
      content:
        'Taking that curiosity into hackathons like AISSMS Techathon and product sprints like Stellar Build Station introduced the reality of engineering under constraints. Racing the clock taught me velocity, scope discipline, and trade-offs. Collaborating on SureD—building responsive frontend interfaces, design styling, and connecting wallet and escrow flows—showed me the value of clean UX and cross-functional teamwork.',
    },
    {
      id: 'narrative-focus',
      stageLabel: '03 / CONTINUOUS EXPANSION',
      headline: 'Systems, Frontiers & Craft',
      content:
        'Currently pursuing my B.Tech in Information Technology in Pune, I spend my days building and exploring across modern full-stack web applications, Web3 protocols, AI-assisted developer workflows, and cybersecurity foundations. I don’t claim to have everything figured out; rather, I enjoy being in the middle of complex, evolving technologies and steadily sharpening my skills.',
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
