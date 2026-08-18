/**
 * Centralized Site Identity & Contact Registry for Om Joshi Portfolio
 * Single source of truth for identity metadata, contact coordinates, social profiles, and project links.
 */

export const siteIdentity = {
  name: 'Om Joshi',
  role: 'B.Tech Information Technology Student & Builder',
  email: 'onjoshi2307@gmail.com',
  location: 'Pune, Maharashtra, India',
  availability: 'Open to software engineering and collaborative builder opportunities',

  // Social & Professional Profiles
  socials: {
    linkedin: 'https://www.linkedin.com/in/0m-joshi2307/',
    github: 'https://github.com/omjoshi-2307',
    x: 'https://x.com/omjoshi_2307',
    credly: {
      rawUrl: 'https://www.credly.com/users/om-joshi2623',
      isPublic: true,
    },
  },

  // Project Repositories & Live Demos
  projects: {
    wallE: {
      repository: 'https://github.com/omjoshi-2307/WALL-E-Autonomous-Obstacle-Avoiding-Robot',
      name: 'omjoshi-2307/WALL-E-Autonomous-Obstacle-Avoiding-Robot',
    },
    sured: {
      repository: 'https://github.com/Khushal-93/SureD',
      name: 'Khushal-93/SureD',
      liveDemo: 'https://sure-d.vercel.app/',
    },
    // JalSanchaeeNavachar: exact public repo URL pending verification
    jalSanchaeeNavachar: {
      repository: undefined,
      name: 'omjoshi-2307/JalSanchaeeNavachar (Pending URL)',
    },
  },
} as const;

export type SiteIdentity = typeof siteIdentity;
