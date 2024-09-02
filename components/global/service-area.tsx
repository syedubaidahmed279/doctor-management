import { cn } from '@/lib/utils';
import { Lora } from 'next/font/google';
import React from 'react';
import { Button } from '../ui/button';
import SectionTitle from './sec-title';
import Title from './title';
import { Code } from 'lucide-react';

const lora = Lora({ subsets: ['latin'] });

const ServiceArea = () => {
  return (
    <div
      id='services'
      className='px-4 xl:px-0 min-h-[50vh] h-auto'
      style={{
        position: 'relative',
        backgroundImage:
          'url("https://wp1.themevibrant.com/newwp/hiringhub/wp-content/uploads/2024/04/slide-v3-2.jpg")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: '0',
          zIndex: '1',
          background:
            'linear-gradient(to right, rgba(6, 42, 38, 6) 60%, transparent 100%)',
        }}
      />

      <div className='relative z-10 max-w-[1200px] mx-auto py-[60px] md:py-[120px]'>
        <div className='flex flex-col gap-3'>
          <SectionTitle title='Service areas' />
          <Title
            title='Our Specialized Industries'
            className='text-[32px] lg:text-[46px] text-white'
          />
          <p className='text-[#a5b1ad] text-[17px]'>
            Explore the range of solutions we offer to meet your needs and drive
            success.
          </p>
        </div>

        <div className='flex md:flex-row flex-col gap-24 md:gap-0'>
          <div className='flex flex-1 flex-col gap-7 mt-12 border-r border-[#ffffff1a]'>
            <InfoCard
              title='E-Commerce'
              description='Custom online store solutions with integrated shopping carts and secure payment systems.'
              IconComponent={Code}
            />
            <InfoCard
              title='Healthcare'
              description='Secure applications for patient management and telemedicine services.'
              IconComponent={Code}
            />
            <InfoCard
              title='Finance & Banking'
              description='Robust systems for secure transactions and real-time financial analysis.'
              IconComponent={Code}
            />
            <InfoCard
              title='Education & E-Learning'
              description='Interactive platforms for online courses and virtual classrooms.'
              IconComponent={Code}
              border={false}
            />
            <InfoCard
              title='Management Systems'
              description='Tailored solutions for streamlining business processes and enhancing operational efficiency.'
              IconComponent={Code}
              border={false}
            />
            <InfoCard
              title='AI Development'
              description='Advanced AI solutions including chatbots and machine learning models to drive innovation and automate tasks.'
              IconComponent={Code}
              border={false}
            />
            <InfoCard
              title='Real Estate'
              description='Innovative platforms for property management, listings, and client engagement to optimize real estate operations.'
              IconComponent={Code}
              border={false}
            />
          </div>

          <div className='flex-1 flex flex-col justify-center md:items-end gap-4'>
            <h2 className={cn(lora.className, 'text-2xl text-white')}>
              Highlight:
            </h2>

            <div
              className={cn(
                'bg-white h-[60px] pl-7 pr-1.5 flex items-center gap-5 w-max rounded-md'
              )}
            >
              <span className='text-base md:text-xl text-secondary font-medium leading-[30px]'>
                Total Project
              </span>
              <Button className='bg-secondary md:w-[80px] md:h-[50px]'>
                120
              </Button>
            </div>
            <div
              className={cn(
                'bg-white h-[60px] pl-7 pr-1.5 flex items-center gap-5 w-max rounded-md'
              )}
            >
              <span className='text-base md:text-xl text-secondary font-medium leading-[30px]'>
                Industry Projects
              </span>
              <Button className='bg-secondary md:w-[80px] md:h-[50px]'>
                30
              </Button>
            </div>
            <div
              className={cn(
                'bg-white h-[60px] pl-7 pr-1.5 flex items-center gap-5 w-max rounded-md'
              )}
            >
              <span className='text-base md:text-xl text-secondary font-medium leading-[30px]'>
                Personal Projects
              </span>
              <Button className='bg-secondary md:w-[80px] md:h-[50px]'>
                90
              </Button>
            </div>
            <Button
              className='w-max bg-transparent border border-primary hover:bg-primary text-white transition-all duration-300'
              size='lg'
              variant='outline'
            >
              SEE WHAT YOU NEED
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceArea;

const InfoCard = ({
  title,
  description,
  IconComponent,
  border = true,
}: {
  title: string;
  description: string;
  IconComponent: any;
  border?: boolean;
}) => {
  return (
    <div
      className={cn(
        'flex sm:flex-row flex-col sm:items-center gap-4',
        border && 'border-b border-[#ffffff1a] pb-7'
      )}
    >
      <Button
        size='icon'
        className='bg-transparent hover:bg-black w-[75px] h-[75px] border border-gray-700 hover:text-primary transition-all duration-500'
      >
        <IconComponent className='w-[40px] h-[40px]' />
      </Button>

      <div className='flex flex-col gap-2 max-w-lg'>
        <h2 className={cn(lora.className, 'text-2xl text-white')}>{title}</h2>
        <p className='text-[#a5b1ad] text-[17px]'>{description}</p>
      </div>
    </div>
  );
};
