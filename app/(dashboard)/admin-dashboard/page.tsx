"use client";

import PageContainer from "@/components/global/page-container";
import Doctors from "@/components/global/doctors";
import { redirect } from "next/navigation";
import { useAppContext } from "@/lib/context";

const AdminDoctors: React.FC<any> = () => {
  const { user } = useAppContext();

  // if (user?.role === "doctor") {
  //   return redirect("/doctors-dashboard");
  // }

  return (
    <PageContainer>
      <div className="space-y-2">
        <Doctors />
      </div>
    </PageContainer>
  );
};

export default AdminDoctors;
