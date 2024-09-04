"use client";

import { Lora } from "next/font/google";
import Title from "./title";
import { cn, scrollToSection } from "@/lib/utils";
import {
  BriefcaseMedical,
  ChevronRight,
  HeartHandshake,
  MailCheck,
  MessageCircleQuestion,
  RefreshCcw,
  Stethoscope,
  Zap,
} from "lucide-react";
import SectionTitle from "./sec-title";
import { Button } from "../ui/button";

const Onboard = () => {
  const email = "docalart@gmail.com";

  const handleEmail = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className="bg-primary px-4 xl:px-0 py-[60px] md:py-[120px] 2xl:max-w-[1800px]  md:mx-12 4xl:mx-auto md:rounded-md relative z-10">
      <div className="flex flex-col gap-6 justify-center items-center text-center pb-12 ">
        <Title
          title="Get Started Today!"
          className="text-[32px] lg:text-[46px] leading-[1.3em] text-white"
        />
        <p className="text-white text-[17px] inline-flex gap-2">
          <MailCheck />
          Subscribe now and transform your patient management experience
        </p>
        <p className="text-white text-[17px] inline-flex gap-2">
          <BriefcaseMedical /> Join our community of over 6787+ live doctors and
          3 crore+ patients
        </p>
        <p className="text-white text-[17px] inline-flex gap-2">
          <Stethoscope /> Take the first step towards exceptional patient care
          and practice growth
        </p>

        <div className="flex md:flex-row flex-col items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <SectionTitle title="Have question?" isIcon={false} />

            <Button
              onClick={() => scrollToSection("faqs")}
              variant="special"
              size="special"
              className=" text-white font-medium text-[17px] inline-flex items-center"
            >
              Explore our FAQ section
              <ChevronRight className="w-5 h-5 mt-1 transition-all duration-500 ease-in-out group-hover:opacity-0" />
            </Button>
          </div>

          <div className="flex items-center">
            <Button
              onClick={handleEmail}
              size="icon"
              className="rounded-full bg-white text-muted-foreground border border-black hover:text-white w-[70px] h-[70px]"
            >
              <MessageCircleQuestion className="w-7 h-7" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboard;
