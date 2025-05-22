import { Advertisement } from "@/components/global/advertisement";
import Faqs from "@/components/global/faq";
import React, { Suspense } from "react";

const FaqPage = () => {
  return (
    <div className="relative">
      <Faqs />
      <Suspense
        fallback={<div className="h-[250px] animate-pulse bg-gray-200"></div>}
      >
        <Advertisement position="before-footer" className="" />
      </Suspense>
    </div>
  );
};

export default FaqPage;
