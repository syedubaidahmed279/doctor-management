"use client";
import { useAppContext } from "@/lib/context";
import React, { use, useEffect, useState } from "react";
import { PDFDownloadLink } from '@react-pdf/renderer';
import InvoicePDF from './InvoicePDF';

type Props = {
  params: {
    invoiceId: string;
  };
};

const Invoice = ({ params }: Props) => {
  const [isLoading, setIsLoading] = React.useState(true);
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
          <PDFDownloadLink
            document={<InvoicePDF invoice={invoice} />}
            fileName="invoice.pdf"
          >
            {({ blob, url, loading, error }) =>
              loading ? 'Loading document...' : 'Download now!'
            }
          </PDFDownloadLink>
          <div>Invoice</div>
        </>
      )}
    </div>
  );
};

export default Invoice;
