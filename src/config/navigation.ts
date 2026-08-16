import type { NavItem, SectionId } from '@/types';

export const DEFAULT_NAV_ITEMS: NavItem[] = [
  { label: 'Work', href: '#projects', sectionId: 'projects' },
  { label: 'Journey', href: '#journey', sectionId: 'journey' },
  { label: 'About', href: '#about', sectionId: 'about' },
  { label: 'Contact', href: '#contact', sectionId: 'contact' },
];

export const TRACKED_SECTIONS: SectionId[] = [
  'hero',
  'projects',
  'journey',
  'about',
  'contact',
];
