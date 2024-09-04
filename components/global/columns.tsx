"use client";

import { ColumnDef } from "@tanstack/react-table";
import { AppointmentCellAction } from "./appointment-cell-action";
import { format } from "date-fns";
import { DoctorsCellAction } from "./doctors-cell-action";

export const getAppointmentColumns = (userRole: string): ColumnDef<any>[] => {
  const columns: ColumnDef<any>[] = [
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
      header: "ACTIONS",
      id: "actions",
      cell: ({ row }: any) => <AppointmentCellAction data={row.original} />,
    },
  ];

  if (userRole === "admin") {
    columns.splice(columns.length - 1, 0, {
      accessorKey: "doctor.name",
      header: "DOCTOR'S NAME",
    });
  }

  return columns;
};

export const getDoctorsColumns = (): ColumnDef<any>[] => {
  const columns: ColumnDef<any>[] = [
    {
      accessorKey: "name",
      header: "DOCTORS NAME",
    },
    {
      accessorKey: "email",
      header: "EMAIL",
    },
    {
      accessorKey: "speciality",
      header: "SPECIALITY",
    },
    {
      accessorKey: "hospitalName",
      header: "HOSPITAL",
    },
    {
      accessorKey: "phone",
      header: "PHONE",
    },

    {
      header: "ACTION",
      id: "actions",
      cell: ({ row }: any) => <DoctorsCellAction data={row.original} />,
    },
  ];

  return columns;
};
