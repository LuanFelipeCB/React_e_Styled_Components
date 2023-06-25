import React from "react";
import ImgOceano from "./oceano.jpg";
import CardImg from "../../components/cardImg/index";
import ImgConteudoS from "../../components/conteudo/index";
import Img01 from "./img1card.jpg";
import Icon from "../../components/icons/index";
import styled from "styled-components";
import { Monitor } from "@styled-icons/foundation/Monitor";
import { ListOutline } from "@styled-icons/evaicons-outline/ListOutline";
import { CheckboxChecked } from "@styled-icons/fluentui-system-regular/CheckboxChecked";
import { Icons } from "../../components/icons/styled";
import {FacebookCircle} from "@styled-icons/boxicons-logos/FacebookCircle";
import {TwitterSquare} from "@styled-icons/fa-brands/TwitterSquare";
import {Instagram} from  "@styled-icons/boxicons-logos/Instagram";

const RodaPe = styled.div`
  margin-top: 5%;
  margin-left: 5%;
  margin-bottom: 5%;
`;

const SubRodaPe = styled.div`
margin-top:-2%;
margin-left:85%;
`;

const Home: React.FC = () => {
  return (
    <>
      <div>
        <div>
          <CardImg
            height="30vh"
            text="Minha primeira página com react"
            src={ImgOceano}
            size="100%"
            paddingLeft="35%"
          />
        </div>

        {/* <Div> */}
        <Icons>
          <Icon
            text01="Somente para desktop"
            text02="Vamos aprender, como utilizar um framework"
          >
            <Monitor height="10vh" />  
          </Icon>

          <Icon
            text01="Criado com componentes Utilizamos o Styled Components"
            text02=""
          >
            <ListOutline height="10vh" />
          </Icon>

          <Icon text01="Facil aproveitamento" text02="Estamos no caminho">
            <CheckboxChecked height="10vh" />
          </Icon>
        </Icons>
        {/* </Div>
        <Div> */}
        <ImgConteudoS
          height="10%"
          width01="100%"
          width02="50%"
          display="flex"
          flexDirection="row"
          src={Img01}
          text="Lorem ipsum  
              dolor sit amet, consectetur adipiscing elit. Duis
              placerat, risus ac porta gravida, lorem mi tempus leo, ac semper
              tortor leo ut risus. Aliquam non dictum ex. Mauris vehicula, libero
              quis efficitur semper, massa justo ultricies sem, et pellentesque
              tellus diam sit amet lectus. Donec lectus velit, placerat eu mauris
              at, varius vulputate nulla. Sed tincidunt leo metus, eget rutrum
              urna suscipit ut. Orci varius natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. Duis libero ante,
              ullamcorper vitae turpis non, porttitor lobortis nunc. Donec aliquam
              tortor nec faucibus vehicula. Proin hendrerit dictum neque. Proin
              euismod velit sit amet neque iaculis mattis in vitae elit. Cras nec
              erat ipsum. Vestibulum ac cursus lorem, et malesuada orci. Etiam ut
              sapien eget est cursus gravida. Donec elit dui, pulvinar a sem nec,
              semper convallis erat."
        />

        <ImgConteudoS
          height="10%"
          width01="100%"
          width02="50%"
          display="flex"
          flexDirection="row-reverse"
          src={Img01}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              placerat, risus ac porta gravida, lorem mi tempus leo, ac semper
              tortor leo ut risus. Aliquam non dictum ex. Mauris vehicula, libero
              quis efficitur semper, massa justo ultricies sem, et pellentesque
              tellus diam sit amet lectus. Donec lectus velit, placerat eu mauris
              at, varius vulputate nulla. Sed tincidunt leo metus, eget rutrum
              urna suscipit ut. Orci varius natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. Duis libero ante,
              ullamcorper vitae turpis non, porttitor lobortis nunc. Donec aliquam
              tortor nec faucibus vehicula. Proin hendrerit dictum neque. Proin
              euismod velit sit amet neque iaculis mattis in vitae elit. Cras nec
              erat ipsum. Vestibulum ac cursus lorem, et malesuada orci. Etiam ut
              sapien eget est cursus gravida. Donec elit dui, pulvinar a sem nec,
              semper convallis erat."
        />

        <ImgConteudoS
          height="10%"
          width01="100%"
          width02="50%"
          display="flex"
          flexDirection="row"
          src={Img01}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              placerat, risus ac porta gravida, lorem mi tempus leo, ac semper
              tortor leo ut risus. Aliquam non dictum ex. Mauris vehicula, libero
              quis efficitur semper, massa justo ultricies sem, et pellentesque
              tellus diam sit amet lectus. Donec lectus velit, placerat eu mauris
              at, varius vulputate nulla. Sed tincidunt leo metus, eget rutrum
              urna suscipit ut. Orci varius natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. Duis libero ante,
              ullamcorper vitae turpis non, porttitor lobortis nunc. Donec aliquam
              tortor nec faucibus vehicula. Proin hendrerit dictum neque. Proin
              euismod velit sit amet neque iaculis mattis in vitae elit. Cras nec
              erat ipsum. Vestibulum ac cursus lorem, et malesuada orci. Etiam ut
              sapien eget est cursus gravida. Donec elit dui, pulvinar a sem nec,
              semper convallis erat."
        />
        {/* </Div> */}
        <div>
          <CardImg
            height="30vh"
            text="Minha primeira página com react"
            src={ImgOceano}
            size="100%"
            paddingLeft="35%"
          />
        </div>
      </div>
      <RodaPe>
        <div>
          <p> About - Contact - Term of use - Privacy Policy</p>
          <p>C Your Website 2020.All Rights Reserved.</p>
          <SubRodaPe>
          <FacebookCircle
          height='30px'
          />
          <TwitterSquare
          height='30px'/>
          <Instagram
          height='30px'
          />
</SubRodaPe>
        </div>
      </RodaPe>
    </>
  );
};
// //url(${src}) -- https://stackoverflow.com/questions/45876313/pass-background-url-as-prop-to-styled-component
// //https://github.com/facebook/create-react-app/issues/3238
export default Home;

// // 1@styled-icons/foundation/Monitor
// // 2@styled-icons/evaicons-outline/ListOutline
// // 3@styled-icons/fluentui-system-regular/CheckboxChecked

// // face @styled-icons/boxicons-logos/FacebookCircle
// // twitter 
// // insta 

// // https://styled-icons.dev/?s=instagram

// // import styled from 'styled-components'
// // import {Zap} from '@styled-icons/octicons'

// // const RedZap = styled(Zap)`
// //   color: red;
// // `

// // const App = () => <RedZap />
