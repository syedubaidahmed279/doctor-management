"use client";

import { Appointments } from "@/components/global/appointments";
import PageContainer from "@/components/global/page-container";
import { useAppContext } from "@/lib/context";
import { redirect } from "next/navigation";
import React from "react";

const DoctorAppointments = () => {
  const { user, appointments } = useAppContext();

  // if (user?.role === "admin") {
  //   return redirect("/admin-dashboard");
  // }

  const appointmentsData = appointments?.filter(
    (appointment: any) => appointment?.doctor?.email === user?.email
  );
  return (
    <PageContainer>
      <div className="space-y-2">
        <Appointments data={appointmentsData} />
      </div>
    </PageContainer>
  );
};

export default DoctorAppointments;
