/* eslint-disable @next/next/no-img-element */
import React from "react";

const Logo = ({ url }: { url: string }) => {
  return <img src={url} className="w-[120px] h-[100px]" alt="logo" />;
};

export default Logo;
