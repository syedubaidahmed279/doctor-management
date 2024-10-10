'use client';

import PageContainer from '@/components/global/page-container';
import { Reviews } from '@/components/global/reviews';
import { useAppContext } from '@/lib/context';
import React from 'react';

const AdminReviewsPage = () => {
  const { reviews } = useAppContext();
  return (
    <PageContainer>
      <div className='space-y-2'>
        <Reviews data={reviews} />
      </div>
    </PageContainer>
  );
};

export default AdminReviewsPage;
