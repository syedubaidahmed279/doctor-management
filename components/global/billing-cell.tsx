"use client";

import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import api from "@/utils/axiosInstance";
import { useAppContext } from "@/lib/context";

export const BillingCell: React.FC<any> = ({ data }) => {
  const router = useRouter();
  const { billingRefetch, setBillingRefetch } = useAppContext();

  const handleGenerateInvoice = async (id: any) => {
    try {
      const promise = await api.post(`/billing/generate-invoice/${id}`);
      if (promise.status === 200) {
        toast.success(`Invoice generated Successfully!`, {
          position: "top-center",
        });
      }
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  const handleViewInvoice = (id: any) => {
    router.push(`/billing/view-invoice/${id}`);
  };

  const handleDelete = async (id: any) => {
    try {
      const promise = await api.delete(`/billing/delete/${id}`);
      if (promise.status === 200) {
        setBillingRefetch(!billingRefetch);
        toast.success(`Billing deleted Successfully!`, {
          position: "top-center",
        });
      }
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  return (
    <div className="flex gap-2">
      <Button
        variant="outline"
        size="sm"
        className="h-7 text-xs"
        onClick={() => handleGenerateInvoice(data._id)}
      >
        Generate Invoice
      </Button>
      <Button
        variant="outline"
        size="sm"
        className="h-7 text-xs"
        onClick={() => handleViewInvoice(data._id)}
      >
        View Invoice
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
