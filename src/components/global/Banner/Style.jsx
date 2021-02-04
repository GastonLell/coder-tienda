import styled from "styled-components";
import { Colores, Fuentes } from "../../utils/Constants";
import bannerBateria from "../../../assets/imagenes/banner-bateria.jpg";
import bannerDisco from "../../../assets/imagenes/banner-disco.jpg";

export const BannerStyle = styled.div`
  text-align: left;
  height: auto;

  @keyframes slide {
    0% {
      margin-left: -100%;
    }
    100% {
      margin-left: 0;
    }
  }

  #slide-uno {
    padding: 20px;
    min-height: 300px;
    background-size: 110%;
    background-image: url(${bannerBateria});
    background-color: ${Colores.colorUno};
    background-blend-mode: multiply;
    animation: slide 5s;
  }

  #slide-dos {
    padding: 20px;
    min-height: 300px;
    background-blend-mode: multiply;
    background-image: url(${bannerDisco});
    background-size: 110%;
    background-position: 200px -350px;
    background-repeat: repeat;
    background-color: ${Colores.colorCinco};
    opacity: 0.8;
    animation: slide 5s;
  }

  h2 {
    font-family: ${Fuentes.fuenteDos};
    font-size: 50px;
    line-height: 70px;
  }

  @media only screen and (min-width: 750px) {
    .spanUno {
      margin-left: 40px;
      color: ${Colores.colorCinco};
      background-color: ${Colores.colorUno};
      border-radius: 8px;
      padding: 5px;
    }
    .spanDos {
      margin-left: 115px;
      color: ${Colores.colorTres};
    }
    .spanTres {
      margin-left: 300px;
      color: ${Colores.colorDos};
    }
  }
`;
