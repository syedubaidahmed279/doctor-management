"use client";

import { Button } from "@/components/ui/button";

import { Trash } from "lucide-react";

import { useAppContext } from "@/lib/context";
import api from "@/utils/axiosInstance";
import { toast } from "sonner";

export const DoctorsCellAction: React.FC<any> = ({ data }) => {
  const { setUsersRefetch, usersRefetch } = useAppContext();

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

  return (
    <Button
      variant="destructive"
      size="sm"
      className="h-7 text-xs"
      onClick={() => handleDelete(data._id)}
    >
      <Trash className="mr-2 h-4 w-4" /> Delete
    </Button>
  );
};
