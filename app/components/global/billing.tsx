"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { format } from "date-fns";
import React from "react";

interface BillingProps {
   any;
}

const Billing: React.FC<BillingProps> = ({ data }) => {
  const formattedData = data?.map((item: any) => ({
    ...item,
    createdAt: format(new Date(item.createdAt), "MM/dd/yyyy"),
  }));

  return (
    <Table className="w-full">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Patient Email</TableHead>
          <TableHead className="text-right">Doctor Email</TableHead>
          <TableHead className="text-right">Appointment Date</TableHead>
          <TableHead className="text-right">Amount</TableHead>
          <TableHead className="text-right">Status</TableHead>
          <TableHead className="text-right">Created At</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {formattedData?.map((item: any) => (
          <TableRow key={item._id}>
            <TableCell className="font-medium">{item?.user?.email}</TableCell>
            <TableCell className="text-right">
              {item?.doctor?.email}
            </TableCell>
            <TableCell className="text-right">
              {item?.appointmentDate}
            </TableCell>
            <TableCell className="text-right">{item?.amount}</TableCell>
            <TableCell className="text-right">{item?.status}</TableCell>
            <TableCell className="text-right">{item?.createdAt}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export { Billing };
