"use client";

import { Billing } from "@/components/global/billing";
import PageContainer from "@/components/global/page-container";
import { useAppContext } from "@/lib/context";

const DoctorBilling = () => {
  const { billings } = useAppContext();

  return (
    <PageContainer>
      <div className="space-y-2">
        <Billing data={billings} />
      </div>
    </PageContainer>
  );
};

export default DoctorBilling;
