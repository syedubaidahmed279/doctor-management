"use client";

import { Advertisements } from "@/components/global/advertisements";
import PageContainer from "@/components/global/page-container";
import React from "react";

const AdminAdvertisementPage = () => {
  return (
    <PageContainer>
      <div className="space-y-2">
        <Advertisements />
      </div>
    </PageContainer>
  );
};

export default AdminAdvertisementPage;
