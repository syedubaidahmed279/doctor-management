"use client";
import { Separator } from "@/components/ui/separator";
import { getBillingColumns } from "./columns";
import { Heading } from "./heading";
import { DataTable } from "./data-table";

export const Billing: React.FC<any> = ({ data }) => {
  return (
    <>
      <div className="flex sm:flex-row flex-col gap-4 items-start justify-between">
        <Heading title={`Billing (${data.length})`} description="Manage Billing" />
      </div>
      <Separator />
      <DataTable
        viewSearchKey="Amount"
        searchKey="amount"
        columns={getBillingColumns()}
        data={data}
      />
    </>
  );
};
