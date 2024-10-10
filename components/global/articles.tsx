'use client';
import { Separator } from '@/components/ui/separator';
import { getArticleColumns } from './columns';
import { Heading } from './heading';
import { DataTable } from './data-table';
import { AddArticleModal } from './add-article-modal';

export const Articles: React.FC<any> = ({ data }) => {
  return (
    <>
      <div className='flex sm:flex-row flex-col gap-4 items-start justify-between'>
        <Heading
          title={`Articles (${data.length})`}
          description='Manage Articles'
        />

        <AddArticleModal />
      </div>
      <Separator />
      <DataTable
        viewSearchKey='by Title'
        searchKey='title'
        columns={getArticleColumns()}
        data={data}
      />
    </>
  );
};
