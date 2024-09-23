"use client";
import { useAppContext } from "@/lib/context";
import React, { useEffect, useState } from "react";
import { PDFViewer } from "@react-pdf/renderer";
import InvoicePDF from "./InvoicePDF";
import axios from "axios";

type Props = {
  params: {
    invoiceId: string;
  };
};

const Invoice = ({ params }: Props) => {
  const [isLoading, setIsLoading] = useState(true);

  const { billings } = useAppContext();

  const invoice = billings.find(
    (billing: any) => billing._id === params.invoiceId
  );

  console.log(invoice);

  const getImageUrlAsBase64 = async (imageUrl: string): Promise<string> => {
    if (!imageUrl) return Promise.resolve("");
    try {
      const response = await axios.get(imageUrl, {
        responseType: "arraybuffer",
      });
      const base64Image = Buffer.from(response.data, "binary").toString(
        "base64"
      );
      return `data:image/jpeg;base64,${base64Image}`;
    } catch (error) {
      console.error(error);
      return "";
    }
  };

  useEffect(() => {
    if (invoice) {
      setIsLoading(false);
    }
  }, [invoice]);

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <PDFViewer style={{ width: "100%", height: "100vh" }}>
            <InvoicePDF invoice={invoice} />
          </PDFViewer>
        </>
      )}
    </div>
  );
};

export default Invoice;
