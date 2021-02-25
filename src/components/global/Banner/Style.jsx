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
    background-repeat: no-repeat;
    padding: 20px;
    min-height: 50px;
    background-size: 110%;
    background-image: url(${bannerBateria});
    background-color: ${Colores.colorUno};
    background-blend-mode: multiply;
    animation: slide 5s;
  }

  #slide-dos {
    font-size: 20px;
    background-repeat: no-repeat;
    padding: 20px;
    min-height: 250px;
    background-blend-mode: multiply;
    background-image: url(${bannerDisco});
    background-size: 250%;
    background-position: 90px -300px;
    background-repeat: repeat;
    background-color: ${Colores.colorCinco};
    opacity: 0.8;
    animation: slide 5s;
  }

  h2 {
    font-family: ${Fuentes.fuenteDos};
    font-size: 28px;
    line-height: 50px;
  }
  .spanUno {
    margin-left: 80px;
    color: ${Colores.colorCinco};
    background-color: ${Colores.colorUno};
    border-radius: 8px;
    padding: 5px;
  }
  .spanDos {
    margin-left: 10px;
    color: ${Colores.colorTres};
  }
  .spanTres {
    margin-left: 30px;
    color: ${Colores.colorDos};
  }
  @media only screen and (min-width: 768px) {
    #slide-uno {
      min-height: 300px;
      background-size: 110%;
      background-position: 100px -390px;
    }

    #slide-dos {
      min-height: 300px;
      background-size: 150%;
      background-position: 100px -390px;
    }

    h2 {
      font-size: 50px;
      line-height: 70px;
    }
    .spanUno {
      margin-left: 40px;
    }
    .spanDos {
      margin-left: 115px;
    }
    .spanTres {
      margin-left: 300px;
    }
  }
  @media only screen and (min-width: 1024px) {
    #slide-dos {
      min-height: 300px;
      background-size: 100%;
      background-position: 100px -300px;
    }
  }
`;
