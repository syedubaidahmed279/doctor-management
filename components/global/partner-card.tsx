/* eslint-disable @next/next/no-img-element */
import { Card } from '../ui/card';

interface PartnerProps {
  name: string;
  img: string;
}
const PartnerCard = ({ data }: { data: PartnerProps }) => {
  return (
    <Card className='max-w-xs w-full mx-auto h-[100px] flex items-center justify-center p-4 transition-all duration-500 hover:shadow-md group cursor-pointer opacity-75 hover:opacity-100'>
      <img
        src={data.img}
        alt={data.name}
        className='w-24 sm:w-32 h-full object-contain filter sepia-[0.1] grayscale transition duration-500 group-hover:filter-none'
      />
    </Card>
  );
};

export default PartnerCard;
