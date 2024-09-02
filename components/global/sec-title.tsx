import { FastForward } from 'lucide-react';
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  isIcon?: boolean;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  isIcon = true,
  className,
}) => {
  return (
    <h1
      className={cn(
        'text-sm text-primary inline-flex gap-2 items-center uppercase font-semibold',
        className
      )}
    >
      {isIcon && <FastForward fill='#00c486' className='w-4 h-4' />}
      {title}
    </h1>
  );
};

export default SectionTitle;
