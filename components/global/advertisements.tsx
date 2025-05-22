"use client";
import { Separator } from "@/components/ui/separator";
import { getAdvertisementColumns } from "./columns";
import { Heading } from "./heading";
import { DataTable } from "./data-table";
import { Plus } from "lucide-react";
import { Button } from "../ui/button";
import { useAppContext } from "@/lib/context";

export const Advertisements: React.FC<any> = () => {
  const { setOpenAdvertisement, advertisements } = useAppContext();
  return (
    <>
      <div className="flex sm:flex-row flex-col gap-4 items-start justify-between">
        <Heading
          title={`Advertisements (${advertisements.length})`}
          description="Manage Advertisements"
        />

        <Button
          className="text-xs md:text-sm"
          onClick={() => setOpenAdvertisement(true)}
        >
          <Plus className="mr-2 h-4 w-4" /> Add New Advertisement
        </Button>
      </div>
      <Separator />
      <DataTable
        viewSearchKey="by Title"
        searchKey="title"
        columns={getAdvertisementColumns()}
        data={advertisements}
      />
    </>
  );
};
