import React from 'react';

const Close = ({ width }: { width: number}) => {
  return <img src={require('../../public/close.png')} width={`${width}px`} alt="close" />;
};

export default Close;
