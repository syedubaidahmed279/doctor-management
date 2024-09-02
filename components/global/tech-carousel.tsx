'use client';
import StackIcon from 'tech-stack-icons';
import { Card, CardContent } from '@/components/ui/card';
import AutoScroll from 'embla-carousel-auto-scroll';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { useEffect, useState } from 'react';
import { stacks } from '@/utils/constants';
import { useMediaQuery } from '@/lib/useMediaQuery';

export function TechCarousel() {
  const isMobile = useMediaQuery('(max-width: 900px)');

  return (
    <div className='flex-1 w-full flex flex-col nav:flex-row pointer-events-none tech-carousels relative'>
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        plugins={[AutoScroll({ speed: 1.5, direction: 'backward' })]}
        orientation={isMobile ? 'horizontal' : 'vertical'}
        className='w-full nav:max-w-xs'
      >
        <CarouselContent className='-mt-1 nav:h-[400px]'>
          {stacks.map((st, index) => (
            <CarouselItem key={index} className='pt-1 basis-1/3 nav:basis-1/4'>
              <div className='p-1'>
                <Card>
                  <CardContent className='flex items-center justify-center p-6'>
                    <StackIcon name={st} className='w-10 h-10' />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        plugins={[AutoScroll({ speed: 1.5, direction: 'forward' })]}
        orientation={isMobile ? 'horizontal' : 'vertical'}
        className='w-full nav:max-w-xs'
      >
        <CarouselContent className='-mt-1 nav:h-[400px]'>
          {stacks.map((st, index) => (
            <CarouselItem key={index} className='pt-1 basis-1/3 nav:basis-1/4'>
              <div className='p-1'>
                <Card>
                  <CardContent className='flex items-center justify-center p-6'>
                    <StackIcon name={st} className='w-10 h-10' />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {!isMobile && (
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          plugins={[AutoScroll({ speed: 1.5, direction: 'backward' })]}
          orientation={isMobile ? 'horizontal' : 'vertical'}
          className='w-full nav:max-w-xs'
        >
          <CarouselContent className='-mt-1 nav:h-[400px]'>
            {stacks.reverse().map((st, index) => (
              <CarouselItem
                key={index}
                className='pt-1 basis-1/3 nav:basis-1/4'
              >
                <div className='p-1'>
                  <Card>
                    <CardContent className='flex items-center justify-center p-6'>
                      <StackIcon name={st} className='w-10 h-10' />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      )}
    </div>
  );
}
