import React from 'react';
import ProjectCard from './project-card';
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
} from '../ui/carousel';
import { projectData } from '@/utils/constants';
import SectionTitle from './sec-title';
import Title from './title';

const Projects = () => {
  return (
    <div id='works' className='bg-accent px-4 xl:px-0 py-[60px] md:py-[120px]'>
      <div className='max-w-[1200px] mx-auto'>
        <div className='flex flex-col gap-2 justify-center items-center text-center pb-12'>
          <SectionTitle title='Projects we have done' />
          <Title
            title='Showcasing Innovative Solutions'
            className='text-[32px] lg:text-[46px] leading-[1.3em]'
          />
          <p className='text-muted-foreground max-w-[405px] text-[17px]'>
            Check out our work to see how we turn ideas into successful
            outcomes.
          </p>
        </div>
        <Carousel>
          <CarouselContent>
            {projectData.map((data, i) => (
              <CarouselItem
                key={i}
                className='sm:basis-1/2 lg:basis-1/3 mb-14 sm:mb-20'
              >
                <ProjectCard key={i} project={data} />
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselDots />
        </Carousel>
      </div>
    </div>
  );
};

export default Projects;
