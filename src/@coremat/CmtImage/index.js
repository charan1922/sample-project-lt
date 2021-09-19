import React from 'react';

const CmtImage = ({ src, alt, ...rest }) => {
  return <img src={src} alt={alt} {...rest} />;
};

export default CmtImage;
