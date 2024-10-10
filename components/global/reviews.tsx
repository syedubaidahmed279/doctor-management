'use client';
import { Separator } from '@/components/ui/separator';
import { getReviewColumns } from './columns';
import { Heading } from './heading';
import { DataTable } from './data-table';
import { Plus } from 'lucide-react';
import { Button } from '../ui/button';
import { useAppContext } from '@/lib/context';

export const Reviews: React.FC<any> = ({ data }) => {
  const { setOpenReview } = useAppContext();
  return (
    <>
      <div className='flex sm:flex-row flex-col gap-4 items-start justify-between'>
        <Heading
          title={`Reviews (${data.length})`}
          description='Manage Reviews'
        />

        <Button
          className='text-xs md:text-sm'
          onClick={() => setOpenReview(true)}
        >
          <Plus className='mr-2 h-4 w-4' /> Add New Review
        </Button>
      </div>
      <Separator />
      <DataTable
        viewSearchKey='by Title'
        searchKey='title'
        columns={getReviewColumns()}
        data={data}
      />
    </>
  );
};
