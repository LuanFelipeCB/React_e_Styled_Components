import styled from "styled-components";

interface imgConteudo {
  height?: string;
  width?: string;
  src?: string;
  size?: string;
  display?:string;
  flexDirection?: string;
}

const ImgConteudoS = styled.div<imgConteudo>`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  background-image: url(${(props) => props.src});
  background-size: ${(props) => props.size};
  display: ${(props) => props.display};
  flex-direction: ${(props) => props.flexDirection};
`;

const Imgn = styled.img<imgConteudo>`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  src: ${(props) => props.width};
`;

const Div = styled.div<imgConteudo>`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
`;

export { ImgConteudoS, Imgn, Div };
