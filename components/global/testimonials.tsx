import React from 'react';

import {
  Carousel,
  CarouselButton,
  CarouselContent,
  CarouselItem,
} from '../ui/carousel';
import { testimonialData } from '@/utils/constants';
import SectionTitle from './sec-title';
import Title from './title';

import TestimonialCard from './testimonial-card';

const Testimonials = () => {
  return (
    <div className='bg-accent px-4 xl:px-0 py-[60px] md:py-[120px]'>
      <div className='md:max-w-[1200px] mx-auto'>
        <Carousel>
          <div className='flex md:flex-row flex-col gap-8 md:gap-0 items-center md:items-end md:justify-between pb-12'>
            <div className='flex flex-col gap-2 items-center md:justify-start md:items-start text-center '>
              <SectionTitle title='Testimonials' />
              <Title
                title='What Our Satisfied Clients Say About Us'
                className='text-[32px] lg:text-[46px] leading-[1.3em]'
              />
            </div>
            <div className='flex gap-2'>
              <CarouselButton direction='prev' />
              <CarouselButton direction='next' />
            </div>
          </div>
          <CarouselContent>
            {testimonialData.map((data, i) => (
              <CarouselItem key={i} className='lg:basis-1/2 mb-14'>
                <TestimonialCard key={i} data={data} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
