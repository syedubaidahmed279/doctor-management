"use client";

import { ColumnDef } from "@tanstack/react-table";
import { AppointmentCellAction } from "./appointment-cell-action";

export const appointmentColumns: ColumnDef<any>[] = [
  {
    id: "slNo",
    header: "SL No",
    cell: ({ row }) => row.index + 1,
  },
  {
    accessorKey: "patientName",
    header: "PATIENT NAME",
  },
  {
    accessorKey: "phone",
    header: "PHONE",
  },
  {
    accessorKey: "nextAppointmentDate",
    header: "NEXT APPOINTMENT DATE",
  },
  {
    id: "actions",
    cell: ({ row }: any) => <AppointmentCellAction data={row.original} />,
  },
];
