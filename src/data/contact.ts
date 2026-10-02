import { siteIdentity } from '@/config/identity';
import type { ContactSectionData } from '@/types/contact';

export const CONTACT_DATA: ContactSectionData = {
  eyebrow: '06 // CONTACT',
  chapterNumber: '06',
  heading: "Let's Build Something.",
  subheading:
    'Whether you are looking for an engineering intern, exploring a builder collaboration, or want to talk software, systems, and security—my inbox is always open.',
  closingStatement:
    "I'm still learning, still experimenting, and always looking for thoughtful ideas and interesting engineering challenges to build.",
  email: siteIdentity.email,
  location: siteIdentity.location,
  education: 'B.Tech — Information Technology',
  availability: 'Open to software engineering internships & collaborative builds',
  socials: [
    {
      id: 'social-linkedin',
      label: 'LinkedIn',
      href: siteIdentity.socials.linkedin,
      handle: '0m-joshi2307',
      isPublic: true,
      platform: 'linkedin',
      ariaLabel: 'Connect with Om Joshi on LinkedIn (opens in new tab)',
    },
    {
      id: 'social-github',
      label: 'GitHub',
      href: siteIdentity.socials.github,
      handle: 'omjoshi-2307',
      isPublic: true,
      platform: 'github',
      ariaLabel: 'View Om Joshi repositories on GitHub (opens in new tab)',
    },
    {
      id: 'social-x',
      label: 'X (Twitter)',
      href: siteIdentity.socials.x,
      handle: '@omjoshi_2307',
      isPublic: true,
      platform: 'x',
      ariaLabel: 'Follow Om Joshi on X / Twitter (opens in new tab)',
    },
    {
      id: 'social-credly',
      label: 'Credly',
      href: siteIdentity.socials.credly.rawUrl,
      handle: 'om-joshi2623',
      isPublic: siteIdentity.socials.credly.isPublic,
      platform: 'credly',
      ariaLabel: 'View Om Joshi credentials on Credly (opens in new tab)',
    },
  ],
};
