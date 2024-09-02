import React from 'react';
import {
  Carousel,
  CarouselButton,
  CarouselContent,
  CarouselItem,
} from '../ui/carousel';
import { employeeData } from '@/utils/constants';
import SectionTitle from './sec-title';
import Title from './title';
import EmployeeCard from './employee-card';

const Employees = () => {
  return (
    <div id='team' className='px-4 xl:px-0 py-[60px] md:py-[120px]'>
      <div className='md:max-w-[1200px] mx-auto'>
        <Carousel>
          <div className='flex md:flex-row flex-col gap-8 md:gap-0 items-center md:items-end md:justify-between pb-12'>
            <div className='flex flex-col gap-2 items-center md:justify-start md:items-start text-center '>
              <SectionTitle title='Meet Our Team' />
              <Title
                title='The Experts Behind Our Success'
                className='text-[32px] lg:text-[46px] leading-[1.3em]'
              />
            </div>
            <div className='flex gap-2'>
              <CarouselButton direction='prev' />
              <CarouselButton direction='next' />
            </div>
          </div>
          <CarouselContent>
            {employeeData.map((data, i) => (
              <CarouselItem
                key={i}
                className='sm:basis-1/2 lg:basis-[33.333333%] mb-14 2lg:pl-0'
              >
                <EmployeeCard key={i} data={data} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* <a
          href='#'
          target='_blank'
          className='text-[#062a26] hover:text-primary font-medium text-sm flex justify-center items-center group uppercase text-center'
        >
          See all Members
          <ChevronRight className='w-5 h-5 transition-all duration-500 ease-in-out group-hover:opacity-0' />
          <ArrowRightIcon className='w-5 h-5 opacity-0 transition-all duration-500 ease-in-out transform translate-x-[-10px] group-hover:translate-x-0 group-hover:opacity-100' />
        </a> */}
      </div>
    </div>
  );
};

export default Employees;
