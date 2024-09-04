"use client";

import { Appointments } from "@/components/global/appointments";
import PageContainer from "@/components/global/page-container";
import { useAppContext } from "@/lib/context";
import React from "react";

const AdminAppointments = () => {
  const { appointments } = useAppContext();
  return (
    <PageContainer>
      <div className="space-y-2">
        <Appointments data={appointments} />
      </div>
    </PageContainer>
  );
};

export default AdminAppointments;
