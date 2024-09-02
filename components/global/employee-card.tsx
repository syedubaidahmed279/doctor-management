import { cn } from '@/lib/utils';
import { Lora } from 'next/font/google';
import Image from 'next/image';
const lora = Lora({ subsets: ['latin'] });

interface EmployeeCard {
  name: string;
  position: string;
  img: string;
}

const EmployeeCard = ({ data }: { data: EmployeeCard }) => {
  return (
    <div className='max-w-[370px] mx-auto w-auto rounded-lg overflow-hidden shadow-lg'>
      <div className='relative'>
        <Image
          src={data.img}
          width='0'
          height='0'
          unoptimized
          alt='Profile'
          className='w-full h-[420px] object-cover transition-transform duration-700 ease-in-out transform hover:scale-105'
        />

        <div className='absolute bottom-0 left-0 right-0 bg-white  m-4 rounded-sm'>
          <h2
            className={cn(
              'text-2xl font-semibold text-gray-800 border-b border-gray-200 px-4 py-3',
              lora.className
            )}
          >
            {data.name}
          </h2>
          <div className='flex justify-between'>
            <p className='text-[17px] text-muted-foreground px-4 py-2'>
              {data.position}
            </p>
            {/* <button className=' text-primary border-l border-gray-200 p-2 hover:bg-primary hover:text-white transition-all duration-500'>
              <Share2Icon className='w-5 h-5 ' />
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;
