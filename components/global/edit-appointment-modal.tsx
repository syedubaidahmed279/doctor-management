/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Edit } from "lucide-react";

import { useEffect, useState } from "react";
import api from "@/utils/axiosInstance";
import { useAppContext } from "@/lib/context";
import { toast } from "sonner";
import AppointmentForm from "./appointment-form";
import { format } from "date-fns";

export function EditAppointmentModal({ data }: any) {
  const [open, setOpen] = useState(false);
  const { appointmentRefetch, setAppointmentRefetch } = useAppContext();
  const [loading, setLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const handleSubmit = async (payload: any) => {
    try {
      setLoading(true);

      payload.nextAppointmentDate = format(payload.nextAppointmentDate, "PPP");

      const promise = await api.patch(
        `/appointment/update/${data?._id}`,
        payload
      );
      if (promise.status === 200) {
        setAppointmentRefetch(!appointmentRefetch);
        setOpen(false);
        toast.success(`Appointment updated.`, {
          position: "top-center",
        });
      }
    } catch (error: any) {
      return toast.error(
        error.response.data.message || `Failed to add new appointment!`,
        {
          position: "top-center",
        }
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild className="inline-flex items-center">
        <Button size="sm" className="h-7 text-xs">
          <Edit className="mr-2 h-4 w-4" /> Update
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit appointment</DialogTitle>
          <DialogDescription>
            Make changes to your appointment here. Click update when you're
            done.
          </DialogDescription>
        </DialogHeader>

        <AppointmentForm
          onSubmit={handleSubmit}
          loading={loading}
          data={data}
        />
      </DialogContent>
    </Dialog>
  );
}
