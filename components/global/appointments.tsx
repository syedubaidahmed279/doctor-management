"use client";
import { Separator } from "@/components/ui/separator";
import { appointmentColumns } from "./appointment-columns";
import { Heading } from "./heading";
import { DataTable } from "./data-table";
import { AddAppointmentModal } from "./add-appointment-modal";

export const Appointments: React.FC<any> = ({ data }) => {
  return (
    <>
      <div className="flex sm:flex-row flex-col gap-4 items-start justify-between">
        <Heading
          title={`Appointments (${data.length})`}
          description="Manage Appointments"
        />
        <AddAppointmentModal />
      </div>
      <Separator />
      <DataTable searchKey="name" columns={appointmentColumns} data={data} />
    </>
  );
};
