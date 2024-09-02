/* eslint-disable react/no-unescaped-entities */
'use client';
import SectionTitle from './sec-title';
import Title from './title';
import { TechCarousel } from './tech-carousel';

const Technologies = () => {
  return (
    <div id='technology' className='px-4 xl:px-0 py-[60px] md:py-[120px]'>
      <div className='max-w-[1200px] mx-auto'>
        <div className='flex nav:flex-row flex-col items-center nav:gap-16'>
          <div className='flex flex-1 flex-col gap-2 items-start pb-12'>
            <SectionTitle title='Technology' />
            <Title
              title='Artif Software Uses the Latest Tech to Deliver Top-Notch Solutions'
              className='text-[32px] nav:text-[36px] leading-[1.3em]'
            />
            <p className='text-muted-foreground text-[17px]'>
              At Artif Software, we're passionate about using the newest
              technologies to create the best solutions for our clients. Our
              team is always learning and adapting to make sure you get the most
              effective and up-to-date services possible. We’re here to help you
              succeed with innovative and efficient solutions tailored to your
              needs.
            </p>
          </div>

          <TechCarousel />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
