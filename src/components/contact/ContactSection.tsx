import React from 'react';
import { Container } from '@/components/layout/Container';
import { ContactHeading } from './ContactHeading';
import { ContactCTA } from './ContactCTA';
import { SocialLinks } from './SocialLinks';
import { ContactMeta } from './ContactMeta';
import { CONTACT_DATA } from '@/data/contact';
import { cn } from '@/utils/cn';

export interface ContactSectionProps {
  className?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ className }) => {
  return (
    <section
      id="contact"
      aria-label="Contact Om Joshi and Communication Channels"
      className={cn(
        'relative py-24 sm:py-32 md:py-36 bg-surface-warm border-t border-border transition-colors',
        className
      )}
    >
      <Container className="flex flex-col gap-12 sm:gap-16">
        {/* 1. Section Heading with Monumental Typography */}
        <ContactHeading
          eyebrow={CONTACT_DATA.eyebrow}
          heading={CONTACT_DATA.heading}
          subheading={CONTACT_DATA.subheading}
        />

        {/* 2. Primary Email Showcase & Concluding Character Duo (Visual Hero) */}
        <ContactCTA email={CONTACT_DATA.email} />

        {/* 3. Editorial Social Profile Links */}
        <SocialLinks socials={CONTACT_DATA.socials} />

        {/* 4. Minimal Identity & Location Metadata */}
        <ContactMeta
          location={CONTACT_DATA.location}
          education={CONTACT_DATA.education}
          availability={CONTACT_DATA.availability}
        />
      </Container>
    </section>
  );
};
