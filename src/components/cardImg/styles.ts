import styled from "styled-components";

interface divImg {
  height: string;
  width?: string;
  src: string;
  size?: string;
  paddingLeft:string; 
}

const CardImgS = styled.div`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  background-image: url(${(props) => props.src});
  background-size: ${(props) => props.size};
  display: flex;
  align-items: center;
  padding-left:  ${(props) => props.paddingLeft};
 `;

export default CardImgS;

