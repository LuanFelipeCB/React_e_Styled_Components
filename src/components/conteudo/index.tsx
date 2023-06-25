import React from "react";
import { ImgConteudoS, Imgn, Div } from "./styles";

interface Conteudo {
  height?: string;
  width01?: string;
  width02?: string;
  src?: string;
  text?: string;
  size?: string;
  display?: string;
  flexDirection?: string;
}

const Conteudo: React.FC<Conteudo> = ({
  height,
  width01,
  width02,
  src,
  text,
  size,
  display,
  flexDirection,
}) => {
  return (
    <>
      <ImgConteudoS
        height={height}
        width={width01}
        size={size}
        display={display}
        flexDirection={flexDirection}
      >
        <Div width={width02}>{text}</Div>

        <Imgn src={src} width={width02} />
      </ImgConteudoS>
    </>
  );
};

export default Conteudo;
