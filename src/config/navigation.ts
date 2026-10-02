import type { NavItem, SectionId } from '@/types';

export const DEFAULT_NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#top', sectionId: 'hero' },
  { label: 'Work', href: '#projects', sectionId: 'projects' },
  { label: 'About', href: '#about', sectionId: 'about' },
  { label: 'Journey', href: '#journey', sectionId: 'journey' },
  { label: 'Contact', href: '#contact', sectionId: 'contact' },
];

export const TRACKED_SECTIONS: SectionId[] = [
  'hero',
  'about',
  'skills',
  'projects',
  'journey',
  'exploration',
  'contact',
];
