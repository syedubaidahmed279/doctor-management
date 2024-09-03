"use client";

import { ColumnDef } from "@tanstack/react-table";
import { AppointmentCellAction } from "./appointment-cell-action";
import { format } from "date-fns";

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
    cell: ({ row }) => {
      const nextAppointmentDate = row.original.nextAppointmentDate;
      return <p>{format(nextAppointmentDate, "PPP")}</p>;
    },
  },
  {
    accessorKey: "fee",
    header: "FEE",
  },
  {
    id: "actions",
    cell: ({ row }: any) => <AppointmentCellAction data={row.original} />,
  },
];
