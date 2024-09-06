"use client";

import { Button } from "@/components/ui/button";

import { Printer, Trash } from "lucide-react";
import { jsPDF } from "jspdf";
import { useAppContext } from "@/lib/context";
import api from "@/utils/axiosInstance";
import { toast } from "sonner";
import { EditAppointmentModal } from "./edit-appointment-modal";
import { format } from "date-fns";
import "jspdf-autotable";
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

  const handlePrint = () => {
    const doc: any = new jsPDF();

    doc.setFontSize(18);
    doc.setFont("helvetica", "bold");
    doc.text("Appointment Details", 105, 20, { align: "center" });

    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text(`${data?.doctor?.name}`, 20, 40);
    doc.text(`${data?.doctor?.speciality}`, 20, 48);
    doc.text(`${data?.doctor?.hospitalName}`, 20, 56);

    doc.autoTable({
      startY: 60,
      head: [["Field", "Value"]],
      body: [
        ["Patient Name", data.patientName],
        ["Phone Number", data.phone],
        ["Next Appointment Date", data.nextAppointmentDate],
        ["Fee", data.fee],
      ],
      styles: {
        fontSize: 10,
        halign: "center",
      },
      headStyles: { fillColor: [22, 160, 133] },
      margin: { top: 80 },
    });

    doc.setFontSize(10);
    doc.text(
      "Thank you for choosing our services!",
      105,
      doc.internal.pageSize.getHeight() - 20,
      { align: "center" }
    );

    doc.autoPrint();
    doc.output("dataurlnewwindow");
  };

  return (
    <div className="flex items-center gap-3">
      <Button
        size="sm"
        className="h-7 text-xs bg-green-600"
        onClick={handlePrint}
      >
        <Printer className="mr-2 h-4 w-4" /> Print
      </Button>

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
