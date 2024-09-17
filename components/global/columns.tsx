"use client";

import { ColumnDef } from "@tanstack/react-table";
import { AppointmentCellAction } from "./appointment-cell-action";
import { format } from "date-fns";
import { DoctorsCellAction } from "./doctors-cell-action";
import { ArticleCell } from "./article-cell";
import { Avatar, AvatarImage } from "../ui/avatar";
import { BillingCell } from "./billing-cell";

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
      // cell: ({ row }) => {
      //   const nextAppointmentDate = row.original.nextAppointmentDate;
      //   return <p>{format(nextAppointmentDate, "PPP")}</p>;
      // },
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
      accessorKey: "image",
      header: "IMAGE",
      cell: ({ row }) => {
        const image = row.original.image;
        return (
          <Avatar className="h-8 w-8">
            <AvatarImage src={image ?? ""} alt={"image"} />
          </Avatar>
        );
      },
    },
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
export const getArticleColumns = (): ColumnDef<any>[] => {
  const columns: ColumnDef<any>[] = [
    {
      accessorKey: "image",
      header: "IMAGE",
      cell: ({ row }) => {
        const image = row.original.image;
        return (
          <img src={image} alt="image" className="w-16 h-1w-16 rounded-sm" />
        );
      },
    },
    {
      accessorKey: "title",
      header: "TITLE",
      cell: ({ row }) => {
        const title = row.original.title;
        return <p>{title?.slice(0, 50)}</p>;
      },
    },
    {
      accessorKey: "description",
      header: "DESCRIPTION",
      cell: ({ row }) => {
        const description = row.original.description;
        return <p>{description?.slice(0, 50)}</p>;
      },
    },
    {
      header: "ACTION",
      id: "actions",
      cell: ({ row }: any) => <ArticleCell data={row.original} />,
    },
  ];

  return columns;
};

export const getBillingColumns = (): ColumnDef<any>[] => {
  const columns: ColumnDef<any>[] = [
    {
      id: "slNo",
      header: "SL No",
      cell: ({ row }) => row.index + 1,
    },
    {
      accessorKey: "patientName",
      header: "Patient Name",
    },
    {
      accessorKey: "phoneNumber",
      header: "Phone Number",
    },
    {
      accessorKey: "items",
      header: "Items",
      cell: ({ row }) => {
        const totalCost = row.original.items.reduce(
          (acc: number, item: any) => {
            return acc + item.amount;
          },
          0
        );
        return (
          <div className="flex flex-col gap-1">
            {row.original.items?.map((item: any, index: number) => (
              <div
                key={index}
                className="flex items-center justify-between w-full gap-5 border-b border-gray-200 py-2 px-4"
              >
                <span className="text-gray-700">{item.name}</span>
                <span className="text-gray-500">₹{item.amount}</span>
              </div>
            ))}
            <div className="flex items-center justify-between w-full gap-5 px-4 py-2">
              <span className="text-gray-700">total</span>
              <span className="text-gray-500">₹{totalCost}</span>
            </div>
          </div>
        );
      },
    },
    {
      header: "ACTION",
      id: "actions",
      cell: ({ row }: any) => <BillingCell data={row.original} />,
    },
  ];

  return columns;
};
