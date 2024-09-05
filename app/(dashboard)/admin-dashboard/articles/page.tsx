"use client";

import { Articles } from "@/components/global/articles";
import PageContainer from "@/components/global/page-container";
import { useAppContext } from "@/lib/context";
import React from "react";

const ArticlesPage = () => {
  const { articles } = useAppContext();
  return (
    <PageContainer>
      <div className="space-y-2">
        <Articles data={articles} />
      </div>
    </PageContainer>
  );
};

export default ArticlesPage;
