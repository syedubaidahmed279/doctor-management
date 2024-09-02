import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import { Quote } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Lora } from 'next/font/google';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
const lora = Lora({ subsets: ['latin'] });
interface Testimonial {
  title: string;
  description: string;
  img: string;
  name: string;
  position: string;
  rating: number;
}

const TestimonialCard = ({ data }: { data: Testimonial }) => {
  const getInitials = (name: string) => {
    const nameParts = name.split(' ');
    const firstInitial = nameParts[0]?.charAt(0).toUpperCase() || '';
    const lastInitial =
      nameParts[nameParts.length - 1]?.charAt(0).toUpperCase() || '';
    return `${firstInitial}${lastInitial}`;
  };

  return (
    <Card
      className='w-full min-h-[300px] cursor-grab'
      style={{
        userSelect: 'none',
      }}
    >
      <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-5'>
        <Avatar className='h-20 w-20'>
          <AvatarImage src={data.img} alt={data.name} />
          <AvatarFallback>{getInitials(data.name)}</AvatarFallback>
        </Avatar>
        <Quote className='h-8 w-8 text-emerald-500' />
      </CardHeader>
      <CardContent>
        <h2 className={cn('text-2xl font-medium mb-2', lora.className)}>
          {data.title}
        </h2>
        <p className='text-muted-foreground overflow-hidden '>
          <span className='line-clamp-2'>{data.description}</span>
        </p>
      </CardContent>
      <CardFooter className='flex sm:flex-row flex-col gap-4 items-start sm:justify-between sm:items-center pb-6'>
        <Button className='bg-accent flex text-primary'>
          {[...Array(data.rating)].map((_, i) => (
            <svg key={i} className='w-5 h-5 fill-current' viewBox='0 0 24 24'>
              <path d='M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z' />
            </svg>
          ))}
        </Button>
        <div className='sm:text-right'>
          <p className={cn(lora.className, 'font-medium text-xl')}>
            {data.name}
          </p>
          <p className='text-sm text-muted-foreground font-medium pt-1'>
            {data.position}
          </p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default TestimonialCard;
