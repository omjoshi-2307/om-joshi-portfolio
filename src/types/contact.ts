export interface SocialLinkItem {
  id: string;
  label: string;
  href: string;
  handle: string;
  isPublic?: boolean;
  platform: 'linkedin' | 'github' | 'x' | 'credly';
  ariaLabel: string;
}

export interface ContactSectionData {
  eyebrow: string;
  chapterNumber: string;
  heading: string;
  subheading: string;
  closingStatement: string;
  email: string;
  location: string;
  education: string;
  availability: string;
  socials: SocialLinkItem[];
}
