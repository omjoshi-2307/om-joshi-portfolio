import React from 'react';
import { EmailLink } from './EmailLink';
import { ContactAvailabilityCard } from './ContactAvailabilityCard';
import { cn } from '@/utils/cn';

export interface ContactCTAProps {
  email: string;
  className?: string;
}

export const ContactCTA: React.FC<ContactCTAProps> = ({ email, className }) => {
  return (
    <div className={cn('grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch', className)}>
      {/* Left / Email Action Card */}
      <div className="lg:col-span-8 flex flex-col justify-center">
        <EmailLink
          email={email}
          className="h-full flex flex-col justify-center"
        />
      </div>

      {/* Right / Availability & Coordinates Card */}
      <div className="lg:col-span-4 flex">
        <ContactAvailabilityCard className="w-full h-full" />
      </div>
    </div>
  );
};
