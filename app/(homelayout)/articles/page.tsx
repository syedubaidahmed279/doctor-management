"use client";
import { Advertisement } from "@/components/global/advertisement";
import Title from "@/components/global/title";
import { useAppContext } from "@/lib/context";
import { Suspense } from "react";

const HomeArticlePage = () => {
  const { articles } = useAppContext();

  return (
    <div
      id="faqs"
      className="px-4 xl:px-0 py-[60px] md:py-[120px] min-h-screen relative"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col gap-8 justify-center items-center text-start pb-12">
          <Title
            title="Articles"
            className="text-[32px] lg:text-[46px] font-bold text-center leading-[1.3em]"
          />
          <div className="space-y-8 w-full">
            {articles?.map((article: any, i: number) => (
              <div
                key={i}
                className="flex flex-col md:flex-row items-center md:items-start gap-6 bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex-shrink-0 w-full md:w-1/2 rounded-lg overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <h2 className="text-2xl font-semibold mb-4">
                    {article.title}
                  </h2>
                  <div
                    className="text-gray-600 mb-4"
                    dangerouslySetInnerHTML={{
                      __html: article?.description,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <Suspense
          fallback={<div className="h-[250px] animate-pulse bg-muted"></div>}
        >
          <Advertisement position="before-footer" />
        </Suspense>
      </div>
    </div>
  );
};

export default HomeArticlePage;
