"use client";

import Header from "@/components/global/header";
import Loading from "@/components/global/loading";
import Sidebar from "@/components/global/sidebar";
import { Checkbox } from "@/components/ui/checkbox";
import { useAppContext } from "@/lib/context";
import { redirect } from "next/navigation";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const { isLoading, user } = useAppContext();
  // console.log({ user });

  if (isLoading) {
    return <Loading size="lg" />;
  }

  if (!user?.email) {
    redirect("/");
  }
  return (
    <div className="flex">
      <Sidebar />
      <main className="w-full flex-1 overflow-hidden">
        <Header />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
