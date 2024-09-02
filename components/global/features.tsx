import { cn } from '@/lib/utils';
import { Lora } from 'next/font/google';
import { Button } from '../ui/button';
import React from 'react';

interface FeaturesProps {
  className?: string;
  order: string;
  label: string;
  icon: React.ReactNode;
}

const lora = Lora({ subsets: ['latin'] });
const Features = ({ className, order, label, icon }: FeaturesProps) => {
  return (
    <div className={cn('flex items-center gap-4', className)}>
      <span
        className={cn(
          'text-[30px] md:text-[48px] text-[#edf4f2] leading-[70px] font-semibold ',
          lora.className
        )}
      >
        {order}
      </span>
      <div
        className={cn(
          'bg-accent h-[70px] p-5 flex items-center gap-3 w-max rounded-md',
          lora.className
        )}
      >
        <span className='text-base md:text-xl text-secondary font-medium leading-[30px]'>
          {label}
        </span>
        <Button size='icon' className='bg-secondary md:w-[50px] md:h-[50px]'>
          {icon}
        </Button>
      </div>
    </div>
  );
};

export default Features;
