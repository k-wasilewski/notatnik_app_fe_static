import React from 'react';

const Save = ({ width }: { width: number}) => {
  return <img src={require('../../public/save.png')} width={`${width}px`} alt="save" />;
};

export default Save;
