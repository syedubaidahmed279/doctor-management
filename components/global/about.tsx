import React from 'react';
import SectionTitle from './sec-title';
import Image from 'next/image';
import Title from './title';
import { Lora } from 'next/font/google';
import { cn } from '@/lib/utils';
import MoreBtn from './more-btn';
const lora = Lora({ subsets: ['latin'] });

const About = () => {
  return (
    <div id='about' className=' max-w-[1200px] mx-auto my-24 px-4 xl:px-0'>
      <div className='flex lg:flex-row flex-col items-start gap-16'>
        <div className='relative about-img flex-1 w-full mx-auto md:max-w-[500px] h-[700px] overflow-hidden group rounded-md '>
          <Image
            src='/about-us.jpg'
            width='0'
            height='0'
            quality={100}
            unoptimized
            priority
            alt='about'
            className='w-full h-full object-contain transition-transform duration-500 ease-in-out transform group-hover:scale-105 rounded-md'
          />
        </div>
        <div className='flex-1'>
          <SectionTitle title='About Us' />

          <Title
            title='Our awards and success are well-recognized'
            className='text-[32px] lg:text-[46px] leading-[50px]'
          />

          <div className='flex items-center mt-10 gap-2'>
            <SectionTitle title='Since' isIcon={false} />
            <div className='w-full md:w-[350px] h-[1px] bg-gray-200' />
          </div>
          <p
            className={cn(
              lora.className,
              'text-2xl leading-[34px] mt-4 font-medium'
            )}
          >
            <span className='text-primary text-[36px] lg:text-[48px]'>
              2020,
            </span>{' '}
            Provide staffing services.
          </p>

          <div className='flex items-start md:flex-row flex-col gap-7 md:items-center py-6'>
            <Image
              src='https://wp1.themevibrant.com/newwp/hiringhub/wp-content/uploads/2024/04/about-style1_2.jpg'
              width='0'
              height='0'
              quality={100}
              unoptimized
              priority
              alt='award'
              className='w-[150px] h-[150px] rounded-sm'
            />

            <div>
              <SectionTitle title='Our Awards' isIcon={false} />
              <h4 className={cn(lora.className, 'text-xl font-medium')}>
                Clutch Top Web Development Agency
              </h4>
              <p className='uppercase text-[#a8a4a5] text-sm mt-2 font-semibold'>
                Awarded for top-tier web development and client satisfaction.
              </p>
            </div>
          </div>
          <div className='flex items-start md:flex-row flex-col-reverse gap-7 md:items-center py-3'>
            <div>
              <h4 className={cn(lora.className, 'text-xl font-medium')}>
                Fiverr Top Rated Seller & Pro Badge
              </h4>
              <p className='text-muted-foreground text-[17px]'>
                Recognized for consistently high-quality work and professional
                service.
              </p>
            </div>

            <Image
              src='/award.jpg'
              width='0'
              height='0'
              quality={100}
              unoptimized
              priority
              alt='award'
              className='w-[150px] h-full rounded-sm object-contain'
            />
          </div>
          <div className='py-3'>
            <h4 className={cn(lora.className, 'text-xl font-medium')}>
              Upwork Level Seller
            </h4>
            <p className='text-muted-foreground text-[17px] '>
              Noted for exceptional results and a strong reputation. Clutch Top
              Web Development Agency: Awarded for top-tier web development and
              client satisfaction.
            </p>
          </div>

          <MoreBtn to='why-us' label='MORE ABOUT US' />
        </div>
      </div>
    </div>
  );
};

export default About;
