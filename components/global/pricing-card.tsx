"use client";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

type Package = {
  price: string;
  type: string;
  features: string[];
  icon: JSX.Element;
};

const PricingCard = ({ data }: { data: Package }) => {
  return (
    <div className="group bg-white hover:bg-primary transition-all duration-500 shadow-sm rounded-lg max-w-md w-full mx-auto h-full border border-gray-100">
      <h2
        className={cn(
          "text-[50px] font-semibold mb-2 flex items-center px-7 py-3 group-hover:text-white"
        )}
      >
        <sup className="text-[28px]">$</sup>
        {data?.price}
        <sup className="text-[28px]">k</sup>
        <sub
          className={cn(
            "text-sm font-bold text-black group-hover:text-white -mb-5 -ml-3"
          )}
        >
          / MONTHLY
        </sub>
      </h2>

      <div className="bg-accent flex items-center justify-between h-[58px] pl-6 mr-8 py-4">
        <span
          className={cn(
            "text-black group-hover:text-white text-2xl font-medium "
          )}
        >
          {data.type}
        </span>
        <Button
          className="w-[70px] h-[80px] flex items-center justify-center relative rounded-t-none -mt-[20px] -mr-2 rounded-bl-none group-hover:text-white group-hover:bg-secondary"
          style={{
            clipPath: "polygon(0 0, 50% 26%, 100% 0, 100% 100%, 0 100%, 0 48%)",
          }}
        >
          {data.icon}
        </Button>
      </div>

      <div className="px-7 py-8 relative">
        <ul className="mb-6 text-muted-foreground group-hover:text-white">
          {data.features.map((feature, index) => (
            <li key={index} className="flex justify-between items-center mb-4 ">
              {feature}
              <span className="text-blue-500 group-hover:text-white">✔</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PricingCard;
