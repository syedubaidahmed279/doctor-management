"use client";

import { Appointments } from "@/components/global/appointments";
import PageContainer from "@/components/global/page-container";
import { users } from "@/utils/constants";
import React from "react";

const Dashboard = () => {
  return (
    <PageContainer>
      <div className="space-y-2">
        <Appointments data={users} />
      </div>
    </PageContainer>
  );
};

export default Dashboard;
