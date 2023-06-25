import React from "react";
import CardImgS from "./styles";

interface header {
  text: string;
  height: string;
  width?: string;
  src: string;
  size?: string;
  paddingLeft: string;
}

const CardImg: React.FC<header> = ({ text, height, width, src, size, paddingLeft }) => {
  return (
    <>
      
        <CardImgS height={height} width={width} src={src} size={size} paddingLeft={paddingLeft}>
          <h1>{text}</h1>
        </CardImgS>
     
    </>
  );
};

export default CardImg;
