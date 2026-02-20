import React from 'react';

const ImageWithFallback = ({ 
  src, 
  alt = "image", 
  style = {}, 
  className = "",
  fallbackSrc = require("../../images/noProductBG.jpg"),
  ...props 
}) => {
  return (
    <img
      src={src || fallbackSrc}
      alt={alt}
      style={style}
      className={className}
      {...props}
    />
  );
};

export default ImageWithFallback;
