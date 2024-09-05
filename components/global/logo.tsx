/* eslint-disable @next/next/no-img-element */
import React from "react";

const Logo = ({ url }: { url: string }) => {
  return <img src={url} className="w-[70px] h-[70px] rounded-sm" alt="logo" />;
};

export default Logo;
