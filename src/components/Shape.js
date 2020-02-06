import React from 'react';
import { useParams } from 'react-router-dom';

const Shape = () => {
  const { color } = useParams();
  return (
    <div style={{ width: '50vw', height: '50vh', backgroundColor: decodeURIComponent(color) }}></div>
  );
};

export default Shape;
