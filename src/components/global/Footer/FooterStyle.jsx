import styled from "styled-components";
import { Colores, Fuentes } from "../../utils/Constants";

export const FooterStyle = styled.footer`
  width: 100%;
  height: auto;
  background-color: ${Colores.colorUno};
  color: ${Colores.colorCinco};
  padding: 40px 0;

  h3 {
    font-size: 30px;
    color: ${Colores.colorCinco};
    margin-bottom: 40px;
    font-family: ${Fuentes.fuenteDos};
  }
  h4 {
    font-size: 15px;
    color: ${Colores.colorCuatro};
    margin-top: 40px;
  }
  a {
    font-size: 40px;
    color: ${Colores.colorTres};
    padding: 0 15px;
  }
  a:hover {
    color: ${Colores.colorCuatro};
  }
`;
