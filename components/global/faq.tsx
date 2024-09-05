/* eslint-disable react/no-unescaped-entities */
"use client";
import SectionTitle from "./sec-title";
import Title from "./title";
import { Button } from "../ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";
import FaqAccordion from "./faq-accordion";
import { MessageCircleQuestion } from "lucide-react";

const Faqs = () => {
  const email = "docalart@gmail.com";

  const handleEmail = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div id="faqs" className="px-4 xl:px-0 py-[60px] md:py-[100px]">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col gap-2 justify-center items-center text-center pb-12">
          <SectionTitle title="Faq’s" />
          <Title
            title="Common Questions & Answers"
            className="text-[32px] lg:text-[46px] leading-[1.3em]"
          />
          <p className="text-muted-foreground max-w-[405px] text-[17px]">
            Here, we've curated answers to your most pressing questions:
          </p>
        </div>

        <div className="flex lg:flex-row flex-col items-start gap-10 max-w-xl lg:max-w-none mx-auto">
          <div className="relative w-full lg:w-1/2 flex flex-col items-center sm:flex-none">
            <div className="relative about-img flex-1 w-full mx-auto md:max-w-[500px] h-[300px] overflow-hidden group rounded-md bg-blue-50">
              <Image
                src="/doc-9.jpg"
                width="0"
                height="0"
                quality={100}
                unoptimized
                priority
                alt="about"
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105 rounded-md"
              />
            </div>
            <div className="-mt-32 sm:mt-0 z-10 sm:absolute sm:top-52 sm:right-0 bg-primary flex flex-col justify-center items-center text-white rounded-lg p-6 max-w-[400px] sm:max-w-[270px]">
              <Button
                size="icon"
                className=" bg-white text-muted-foreground  border border-black hover:text-white w-[55px] h-[55px]"
              >
                <MessageCircleQuestion className="w-7 h-7" />
              </Button>
              <h2 className={cn("text-2xl text-center font-bold my-3")}>
                Can't Find Your Answer?
              </h2>
              <p className="mb-4 text-center">
                Send your questions to our team, they'll help you.
              </p>
              <Button
                onClick={handleEmail}
                className="text-black px-4 py-2 rounded-lg bg-secondary hover:bg-white"
              >
                Send Now
              </Button>
            </div>
          </div>

          <FaqAccordion />
        </div>
      </div>
    </div>
  );
};

export default Faqs;
