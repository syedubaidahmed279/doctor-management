import { cn } from '@/lib/utils';
import { ArrowRightIcon, ChevronRight } from 'lucide-react';
import { Lora } from 'next/font/google';
import Image from 'next/image';
import React from 'react';
const lora = Lora({ subsets: ['latin'] });
interface ProjectCard {
  title: string;
  description: string;
  href: string;
  img: string;
}

const ProjectCard = ({ project }: { project: ProjectCard }) => {
  return (
    <div>
      <div className='max-w-[370px] mx-auto w-auto bg-white rounded-lg shadow-sm overflow-hidden '>
        <div
          className='cursor-grab'
          style={{
            userSelect: 'none',
          }}
        >
          <h2
            className={cn(
              'ml-6 text-2xl font-medium text-[#062a26] py-4',
              lora.className
            )}
          >
            {project.title}
          </h2>

          <div className='relative overflow-hidden transition-transform duration-500 ease-in-out transform hover:scale-x-[1.02]'>
            <Image
              src={project.img}
              alt='Hourglass'
              width='0'
              height='0'
              unoptimized
              className='w-full h-[360px] object-cover ml-6'
            />
            <div className='ml-6 absolute inset-0 bg-secondary opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-40'></div>
          </div>

          <p className='relative text-[17px] text-muted-foreground bg-[#eef4f2] rounded-tr-lg pt-4 pr-6 pb-4 pl-6 max-w-[335px] mt-[-83px] h-[83px] overflow-hidden'>
            <span className='line-clamp-2'>{project.description}</span>
          </p>
        </div>
        <div className='bg-white px-6 py-4'>
          <a
            href={project.href}
            target='_blank'
            className='text-[#062a26] hover:text-primary font-medium text-sm flex items-center group'
          >
            EXPLORE MORE
            <ChevronRight className='w-5 h-5 transition-all duration-500 ease-in-out group-hover:opacity-0' />
            <ArrowRightIcon className='w-5 h-5 opacity-0 transition-all duration-500 ease-in-out transform translate-x-[-10px] group-hover:translate-x-0 group-hover:opacity-100' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
