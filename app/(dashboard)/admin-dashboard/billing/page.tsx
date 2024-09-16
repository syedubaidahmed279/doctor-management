"use client";

import { Billing } from "@/components/global/billing";
import PageContainer from "@/components/global/page-container";
import { useAppContext } from "@/lib/context";
import { useSearchParams } from "next/navigation";
import React from "react";

const AdminBilling = () => {
  const { billing } = useAppContext();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  const data = email
    ? billing.filter((bill: any) => bill?.doctor?.email === email)
    : billing;

  return (
    <PageContainer>
      <div className="space-y-2">
        <Billing data={data} />
      </div>
    </PageContainer>
  );
};

export default AdminBilling;
