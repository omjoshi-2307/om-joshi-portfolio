import React, { useState } from 'react';
import { EmailLink } from './EmailLink';
import { ContactCharacter } from './ContactCharacter';
import { cn } from '@/utils/cn';

export interface ContactCTAProps {
  email: string;
  className?: string;
}

export const ContactCTA: React.FC<ContactCTAProps> = ({ email, className }) => {
  const [isEmailHovered, setIsEmailHovered] = useState(false);

  return (
    <div className={cn('grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch', className)}>
      {/* Left / Email Action Card */}
      <div className="lg:col-span-8 flex flex-col justify-center">
        <EmailLink
          email={email}
          onHoverStateChange={setIsEmailHovered}
          className="h-full flex flex-col justify-center"
        />
      </div>

      {/* Right / Concluding Character Presentation */}
      <div className="lg:col-span-4 flex">
        <ContactCharacter
          isTargetHovered={isEmailHovered}
          className="w-full h-full"
        />
      </div>
    </div>
  );
};
