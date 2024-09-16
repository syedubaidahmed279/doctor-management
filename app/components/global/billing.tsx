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
import { Cash, Plus } from "lucide-react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useState } from "react";
import api from "@/utils/axiosInstance";
import { useAppContext } from "@/lib/context";
import { toast } from "sonner";

export function AddBillingModal() {
  const [inputs, setInputs] = useState<any>({});
  const [open, setOpen] = useState(false);
  const { user, billingRefetch, setBillingRefetch } = useAppContext();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    inputs.doctor = user?._id;

    try {
      const promise = await api.post(`/billing/create`, inputs);
      if (promise.status === 200) {
        setBillingRefetch(!billingRefetch);
        setInputs({});
        setOpen(false);
        toast.success(`New billing added.`, {
          position: "top-center",
        });
      }
    } catch (error: any) {
      console.log(error);

      return toast.error(
        error.response.data.message || `Failed to add new billing!`,
        {
          position: "top-center",
        }
      );
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="text-xs md:text-sm">
          <Plus className="mr-2 h-4 w-4" /> Add New Billing
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add new billing</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
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
            <Input
              type="number"
              className=""
              required
              onChange={(e) => setInputs({ ...inputs, phone: e.target.value })}
            />
          </div>
          <div className="flex flex-col justify-start items-start gap-2">
            <Label htmlFor="username" className="">
              Amount
            </Label>
            <Input
              type="number"
              className=""
              required
              onChange={(e) => setInputs({ ...inputs, amount: e.target.value })}
            />
          </div>
          <div className="flex flex-col justify-start items-start gap-2">
            <Label htmlFor="username" className="">
              Payment Method
            </Label>
            <Input
              className=""
              required
              onChange={(e) =>
                setInputs({ ...inputs, paymentMethod: e.target.value })
              }
            />
          </div>
          <DialogFooter>
            <Button type="submit">Add</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
