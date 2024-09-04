"use client";

import { Separator } from "@/components/ui/separator";
import { getDoctorsColumns } from "@/components/global/columns";
import { Heading } from "@/components/global/heading";
import { DataTable } from "@/components/global/data-table";
import { useAppContext } from "@/lib/context";

const Doctors: React.FC<any> = () => {
  const { users } = useAppContext();

  const doctors = users.filter((user: any) => user?.role === "doctor");

  return (
    <>
      <div className="flex sm:flex-row flex-col gap-4 items-start justify-between">
        <Heading
          title={`Doctors (${doctors.length})`}
          description="Manage Doctors"
        />
      </div>
      <Separator />
      <DataTable
        searchKey="name"
        columns={getDoctorsColumns()}
        data={doctors}
      />
    </>
  );
};

export default Doctors;
