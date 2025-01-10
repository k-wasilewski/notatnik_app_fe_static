import React from 'react';

const Edit = ({ width }: { width: number}) => {
  return <img src={require('../../public/edit.png')} width={`${width}px`} alt="edit" />;
};

export default Edit;
