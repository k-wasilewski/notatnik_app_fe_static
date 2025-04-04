import React from 'react';

const Delete = ({ width }: { width: number}) => {
  return <img src={require('../../public/delete.png')} width={`${width}px`} alt="delete" />;
};

export default Delete;
