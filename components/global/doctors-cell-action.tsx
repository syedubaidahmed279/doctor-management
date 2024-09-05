"use client";

import { Button } from "@/components/ui/button";

import { Eye, Trash } from "lucide-react";

import { useAppContext } from "@/lib/context";
import api from "@/utils/axiosInstance";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export const DoctorsCellAction: React.FC<any> = ({ data }) => {
  const { setUsersRefetch, usersRefetch } = useAppContext();
  const router = useRouter();

  const handleDelete = async (id: any) => {
    try {
      const promise = await api.delete(`/users/delete/${id}`);
      if (promise.status === 200) {
        setUsersRefetch(!usersRefetch);

        toast.success(`Doctor deleted Successfully!`, {
          position: "top-center",
        });
      }
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  const handleRedirect = (email: string) => {
    router.push(`/admin-dashboard/appointments?email=${email}`);
  };

  return (
    <div className="flex items-center gap-3">
      <Button
        size="sm"
        className="h-7 text-xs"
        onClick={() => handleRedirect(data.email)}
      >
        <Eye className="mr-2 h-4 w-4" /> View Appointments
      </Button>
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
