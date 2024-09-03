"use client";
import { Button } from "@/components/ui/button";

import { Separator } from "@/components/ui/separator";

import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { appointmentColumns } from "./appointment-columns";
import { Heading } from "./heading";
import { DataTable } from "./data-table";

export const Appointments: React.FC<any> = ({ data }) => {
  const router = useRouter();

  return (
    <>
      <div className="flex items-start justify-between">
        <Heading
          title={`Appointments (${data.length})`}
          description="Manage Appointments"
        />
        <Button
          className="text-xs md:text-sm"
          onClick={() => router.push(`/dashboard/user/new`)}
        >
          <Plus className="mr-2 h-4 w-4" /> Add New
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={appointmentColumns} data={data} />
    </>
  );
};
