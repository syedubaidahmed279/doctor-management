"use client";
import { Separator } from "@/components/ui/separator";
import { getBillingColumns } from "./columns";
import { Heading } from "./heading";
import { DataTable } from "./data-table";
import { useAppContext } from "@/lib/context";

export const Billing: React.FC<any> = ({ data }) => {
  const { user } = useAppContext();
  return (
    <>
      <div className="flex sm:flex-row flex-col gap-4 items-start justify-between">
        <Heading
          title={`Billing (${data?.length > 0 ? data.length : "0"})`}
          description="Manage Billing"
        />
      </div>
      <Separator />
      {user?.role === "doctor" && <AddBillingModal />}
      {data?.length > 0 ? (
        <DataTable
          viewSearchKey="Amount"
          searchKey="amount"
          columns={getBillingColumns()}
          data={data}
        />
      ) : (
        <div className="flex items-center justify-center h-full">
          <p className="text-center text-lg text-muted-foreground">
            No Billing Data
          </p>
        </div>
      )}
    </>
  );
};
