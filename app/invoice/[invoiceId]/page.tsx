"use client";
import { useAppContext } from "@/lib/context";
import React, { useEffect, useState } from "react";
import { PDFViewer } from "@react-pdf/renderer";
import InvoicePDF from "./InvoicePDF";

type Props = {
  params: {
    invoiceId: string;
  };
};

const Invoice = ({ params }: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  console.log(params.invoiceId);

  const { billings } = useAppContext();

  const invoice = billings.find(
    (billing: any) => billing._id === params.invoiceId
  );

  console.log(invoice);

  useEffect(() => {
    if (invoice !== undefined) {
      setIsLoading(false);
    }
  }, [invoice]);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div>Loading...</div>;
  }

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
