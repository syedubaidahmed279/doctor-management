'use client';
import { scrollToSection } from '@/lib/utils';
import { menuItems } from '@/utils/constants';
import { Button } from '../ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-secondary'>
      <div className='w-full mx-auto max-w-[1850px] p-4 md:flex items-center md:justify-between'>
        <span className='text-sm text-[#a5b1ad] flex justify-center'>
          © {currentYear}{' '}
          <a href='#' className='hover:underline'>
            Artif Software
          </a>
          . All Rights Reserved.
        </span>
        <ul className='flex justify-center flex-wrap gap-4 md:gap-6 items-center mt-3 text-sm font-medium text-[#a5b1ad] sm:mt-0'>
          {menuItems.map((item, i) => (
            <Button
              key={i}
              variant='special'
              size='special'
              onClick={() => scrollToSection(item.href)}
              className='hover:underline'
            >
              {item.label}
            </Button>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
