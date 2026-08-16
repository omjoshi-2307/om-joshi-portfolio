import React from 'react';
import { Container } from '@/components/layout/Container';
import { ContactHeading } from './ContactHeading';
import { ContactCTA } from './ContactCTA';
import { SocialLinks } from './SocialLinks';
import { ContactMeta } from './ContactMeta';
import { CONTACT_DATA } from '@/data/contact';
import { Sparkles, Terminal } from 'lucide-react';
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
        'relative py-24 sm:py-32 md:py-36 bg-surface/25 dark:bg-surface/10 border-t border-border/60 transition-colors',
        className
      )}
    >
      <Container className="flex flex-col gap-14 sm:gap-18">
        {/* 1. Section Heading */}
        <ContactHeading
          eyebrow={CONTACT_DATA.eyebrow}
          heading={CONTACT_DATA.heading}
          subheading={CONTACT_DATA.subheading}
        />

        {/* 2. Primary Email Showcase & Concluding Character Duo */}
        <ContactCTA email={CONTACT_DATA.email} />

        {/* 3. Editorial Social Profile Links */}
        <SocialLinks socials={CONTACT_DATA.socials} />

        {/* 4. Closing Personal Narrative Callout */}
        <div className="p-6 sm:p-8 rounded-2xl border border-accent/20 bg-accent/[0.03] dark:bg-accent/[0.05] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-lg bg-accent/10 text-accent shrink-0">
              <Terminal className="w-4 h-4" />
            </span>
            <p className="text-sm sm:text-base font-medium text-foreground italic leading-relaxed">
              "{CONTACT_DATA.closingStatement}"
            </p>
          </div>

          <div className="flex items-center gap-1.5 text-[10px] font-mono text-accent uppercase tracking-wider shrink-0 self-end sm:self-center">
            <Sparkles className="w-3 h-3" />
            <span>PORTFOLIO CHAPTER 06</span>
          </div>
        </div>

        {/* 5. Minimal Identity & Location Metadata */}
        <ContactMeta
          location={CONTACT_DATA.location}
          education={CONTACT_DATA.education}
          availability={CONTACT_DATA.availability}
        />
      </Container>
    </section>
  );
};
