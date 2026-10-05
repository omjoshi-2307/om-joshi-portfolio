import { siteIdentity } from './identity';

export { siteIdentity };

/**
 * Backwards-compatible externalLinks reference proxying siteIdentity
 */
export const externalLinks = {
  email: siteIdentity.email,
  linkedin: siteIdentity.socials.linkedin,
  github: siteIdentity.socials.github,
  x: siteIdentity.socials.x,
  instagram: siteIdentity.socials.instagram,
  credly: siteIdentity.socials.credly,
  projects: siteIdentity.projects,
} as const;

export type ExternalLinks = typeof externalLinks;
