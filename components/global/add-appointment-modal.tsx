/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { CalendarIcon, Plus } from "lucide-react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { cn } from "@/lib/utils";
import { format, parse } from "date-fns";
import { Calendar } from "../ui/calendar";
import { useState } from "react";
import api from "@/utils/axiosInstance";
import { useAppContext } from "@/lib/context";
import { toast } from "sonner";
import { PhoneInput } from "../ui/phone-input";
import { sendMessage } from "@/app/actions";

export function AddAppointmentModal() {
  const [inputs, setInputs] = useState<any>({});
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState<any>();
  const { user, appointmentRefetch, setAppointmentRefetch } = useAppContext();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    inputs.nextAppointmentDate = format(date, "PPP");
    inputs.doctor = user?._id;
    inputs.doctorName = user?.name;

    try {
      const promise = await api.post(`/appointment/create`, inputs);
      if (promise.status === 200) {
        await sendMessage(inputs?.patientName, inputs.phone, user?.mapUrl);
        setAppointmentRefetch(!appointmentRefetch);
        setInputs({});
        setOpen(false);
        setLoading(false);
        toast.success(`New appointment added.`, {
          position: "top-center",
        });
      }
    } catch (error: any) {
      console.log(error);
      setLoading(false);
      return toast.error(
        error.response.data.message || `Failed to add new appointment!`,
        {
          position: "top-center",
        }
      );
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen} modal={false}>
      <DialogTrigger asChild>
        <Button className="text-xs md:text-sm">
          <Plus className="mr-2 h-4 w-4" /> Add New Appointment
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] ">
        <DialogHeader>
          <DialogTitle>Add new appointment</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          {/* <div className="flex flex-col justify-start items-start gap-2">
            <Label htmlFor="doctorName" className="">
              Doctor Name
            </Label>
            <Input
              id="doctorName"
              className=""
              onChange={(e) =>
                setInputs({ ...inputs, doctorName: e.target.value })
              }
              required
            />
          </div> */}
          <div className="flex flex-col justify-start items-start gap-2">
            <Label htmlFor="name" className="">
              Patient Name
            </Label>
            <Input
              id="name"
              className=""
              onChange={(e) =>
                setInputs({ ...inputs, patientName: e.target.value })
              }
              required
            />
          </div>

          <div className="flex flex-col justify-start items-start gap-2">
            <Label htmlFor="username" className="">
              Phone Number
            </Label>
            {/* <Input
              type="number"
              className=""
              required
              onChange={(e) => setInputs({ ...inputs, phone: e.target.value })}
            /> */}

            <PhoneInput
              value={inputs.phone}
              onChange={(value) => {
                setInputs({ ...inputs, phone: value });
              }}
              className="w-full"
            />
          </div>
          <div className="flex flex-col justify-start items-start gap-2">
            <Label htmlFor="username" className="">
              Next Appointment Date
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  // initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="flex flex-col justify-start items-start gap-2">
            <Label htmlFor="username" className="">
              Fee
            </Label>
            <Input
              type="number"
              className=""
              required
              onChange={(e) => setInputs({ ...inputs, fee: e.target.value })}
            />
          </div>
          <DialogFooter>
            <Button type="submit" disabled={loading}>
              {loading ? "Adding..." : "Add"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
