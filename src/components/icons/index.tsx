import React from "react";
import { Div } from "../conteudo/styles";
import StyledIcon from "styled-components";
import { Children, PText01 } from "./styled";

interface DivIcon {
  height?: string;
  width?: string;
  children?: any;
  text01: string;
  text02: string;
}

// const Icon = (props:any, text:string) => {

//  return(
//   <Children placeholder={text}>
//   <div> {props.children}</div>

// </Children>

//  )

// }

const Icon: React.FC<DivIcon> = ({
  height,
  width,
  children,
  text01,
  text02,
}) => {
  return (
    <Children>
      <div>
        <Children>
       
          {children}
          
          {text01}
          
          {text02}
          
        </Children>
      
      </div>
    </Children>
  );
};

export default Icon;
