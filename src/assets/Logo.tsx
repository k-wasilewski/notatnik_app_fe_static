import React from 'react';

const Logo = ({ width }: { width: number}) => {
  return <img src={require('../../public/favicon.png')} width={`${width}px`} alt="logo" />;
};

export default Logo;
