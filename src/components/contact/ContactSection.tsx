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
        'relative py-24 sm:py-32 md:py-36 bg-surface-warm border-t border-border transition-colors',
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
        <div className="p-6 sm:p-7 rounded-xl border border-border bg-card flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-subtle">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-sm bg-elevated border border-border text-accent shrink-0 flex items-center justify-center">
              <Terminal className="w-4 h-4" />
            </span>
            <p className="text-sm sm:text-base font-medium text-foreground italic leading-relaxed font-sans">
              "{CONTACT_DATA.closingStatement}"
            </p>
          </div>

          <div className="flex items-center gap-1.5 text-[10px] font-mono text-accent uppercase tracking-wider shrink-0 self-end sm:self-center">
            <Sparkles className="w-3 h-3" />
            <span>PORTFOLIO CHAPTER 07</span>
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
