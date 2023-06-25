import React from "react";
import styled from "styled-components";
//import { icomoon } from "styled-icons";

interface DivIcon {
  height?: string;
  width?: string;
}

const Children = styled.div<DivIcon>`
 
  display: flex;
  flex-direction: column;
  margin-top:50px;
  margin-bottom:50px;
 
  

 // justify-content: center; 

`;

const Icons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center; 

`;

const PText01 = styled.p`
  /* flex-direction: row;
  justify-content: start;  */
 // margin-right: 400px;
`

export { Children, Icons, PText01 };
