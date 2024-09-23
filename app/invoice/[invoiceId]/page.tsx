"use client";
import { useAppContext } from "@/lib/context";
import React, { use, useEffect } from "react";

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

  console.log(isLoading);

  return <div>Invoice</div>;
};

export default Invoice;
