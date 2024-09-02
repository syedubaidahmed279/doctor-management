'use client';

import { ChevronRight } from 'lucide-react';
import React from 'react';
import { Button } from '../ui/button';
import { scrollToSection } from '@/lib/utils';

const Marquee = () => {
  return (
    <div className='marquee overflow-hidden whitespace-nowrap bg-secondary py-4 relative'>
      <div className='marquee-content flex space-x-8'>
        <div className='relative text-gray-200 text-sm flex items-center'>
          Custom Web Solutions{' '}
          <Button
            variant='special'
            size='special'
            onClick={() => scrollToSection('services')}
            className='text-white font-semibold ml-1 inline-flex gap-1 items-center'
          >
            EXPLORE MORE <ChevronRight className='w-5 h-5' />
          </Button>
        </div>
        <div className='relative text-gray-200 text-sm flex items-center'>
          <div className='w-[50px] h-[1px] bg-primary mr-8' />
          Innovative UI/UX Design.{' '}
          <Button
            onClick={() => scrollToSection('services')}
            variant='special'
            size='special'
            className='text-white font-semibold ml-1 inline-flex gap-1 items-center'
          >
            EXPLORE MORE <ChevronRight className='w-5 h-5' />
          </Button>
        </div>
        <div className='relative text-gray-200 text-sm flex items-center'>
          <div className='w-[50px] h-[1px] bg-primary mr-8' />
          Responsive website.{' '}
          <Button
            onClick={() => scrollToSection('services')}
            variant='special'
            size='special'
            className='text-white font-semibold ml-1 inline-flex gap-1 items-center'
          >
            EXPLORE MORE <ChevronRight className='w-5 h-5' />
          </Button>
        </div>
        <div className='relative text-gray-200 text-sm flex items-center'>
          <div className='w-[50px] h-[1px] bg-primary mr-8' />
          AI & Chatbot Integration.{' '}
          <Button
            onClick={() => scrollToSection('services')}
            variant='special'
            size='special'
            className='text-white font-semibold ml-1 inline-flex gap-1 items-center'
          >
            EXPLORE MORE <ChevronRight className='w-5 h-5' />
          </Button>
        </div>
        <div className='relative text-gray-200 text-sm flex items-center'>
          <div className='w-[50px] h-[1px] bg-primary mr-8' />
          E-Commerce Development.{' '}
          <Button
            onClick={() => scrollToSection('services')}
            variant='special'
            size='special'
            className='text-white font-semibold ml-1 inline-flex gap-1 items-center'
          >
            EXPLORE MORE <ChevronRight className='w-5 h-5' />
          </Button>
        </div>
        <div className='relative text-gray-200 text-sm flex items-center'>
          <div className='w-[50px] h-[1px] bg-primary mr-8' />
          Performance Optimization.{' '}
          <Button
            onClick={() => scrollToSection('services')}
            variant='special'
            size='special'
            className='text-white font-semibold'
          >
            {' '}
            EXPLORE MORE <ChevronRight className='w-5 h-5' />
          </Button>
        </div>
        <div className='relative text-gray-200 text-sm flex items-center'>
          <div className='w-[50px] h-[1px] bg-primary mr-8' />
          Secure Hosting & Support.{' '}
          <Button
            onClick={() => scrollToSection('services')}
            variant='special'
            size='special'
            className='text-white font-semibold'
          >
            EXPLORE MORE <ChevronRight className='w-5 h-5' />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
