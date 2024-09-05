"use client";

import { Appointments } from "@/components/global/appointments";
import PageContainer from "@/components/global/page-container";
import { useAppContext } from "@/lib/context";
import { useSearchParams } from "next/navigation";
import React from "react";

const AdminAppointments = () => {
  const { appointments } = useAppContext();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  const data = email
    ? appointments.filter(
        (appointment: any) => appointment?.doctor?.email === email
      )
    : appointments;

  return (
    <PageContainer>
      <div className="space-y-2">
        <Appointments data={data} />
      </div>
    </PageContainer>
  );
};

export default AdminAppointments;
