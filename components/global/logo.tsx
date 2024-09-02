/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Logo = ({ url }: { url: string }) => {
  return (
    <img
      src={url}
      className='w-[140px] h-[60px] nav:w-[130px] nav:h-[47px] lg:w-[140px] lg:h-[60px]'
      alt='logo'
    />
  );
};

export default Logo;
