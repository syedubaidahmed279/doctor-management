"use client";

import { Button } from "@/components/ui/button";

import { Edit, MoreHorizontal, Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useAppContext } from "@/lib/context";
import api from "@/utils/axiosInstance";
import { toast } from "sonner";
import { EditAppointmentModal } from "./edit-appointment-modal";

export const AppointmentCellAction: React.FC<any> = ({ data }) => {
  const { setAppointmentRefetch, appointmentRefetch } = useAppContext();

  const handleDelete = async (id: any) => {
    try {
      const promise = await api.delete(`/appointment/delete/${id}`);
      if (promise.status === 200) {
        setAppointmentRefetch(!appointmentRefetch);

        toast.success(`Appointment deleted Successfully!`, {
          position: "top-center",
        });
      }
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  return (
    <div className="flex items-center gap-3">
      <EditAppointmentModal data={data} />

      <Button
        variant="destructive"
        size="sm"
        className="h-7 text-xs"
        onClick={() => handleDelete(data._id)}
      >
        <Trash className="mr-2 h-4 w-4" /> Delete
      </Button>
    </div>
  );
};
