import styled from "styled-components";
import { Colores, Fuentes } from "../../utils/Constants";
import imagenNav from "../../../assets/imagenes/imagenInstrumentos.jpg";
import { ModalStyled } from "../Modal/StyledModal";

export const Navbar = styled.header`
  width: 100%;
  height: auto;
  background-image: url(${imagenNav});
  background-position: -85px 140px;
  background-attachment: fixed;
  background-color: ${Colores.colorUno};
  background-blend-mode: soft-light;
  position: sticky;
  top: -85px;

  h1 {
    width: 100%;
    margin-bottom: 10px;
    padding-top: 10px;
    color: ${Colores.colorCinco};
    font-family: ${Fuentes.fuenteDos};
    font-size: 50px;
    font-weight: bold;
  }
  .link-route {
    text-decoration: none;
  }
`;
export const MenuNav = styled.nav`
  height: auto;
  line-height: 30px;
  text-align: left;
  padding: 20px 25px 10px;
  opacity: 0.9;
  background-color: ${Colores.colorDos};
  flex-direction: column;
  display: ${(props) => (props.openMenu ? "flex" : "none")};

  .menu-item {
    animation-duration: 1s;
    animation-name: sliden;
  }

  @keyframes sliden {
    0% {
      margin-left: -500px;
    }
    100% {
      margin-left: 0;
    }
  }
  .selected {
    border-bottom: 2px solid ${Colores.colorCinco};
  }
  a {
    color: ${Colores.colorCinco};
    font-family: ${Fuentes.fuenteDos};
    font-weight: bold;
    padding-bottom: 8px;
    text-decoration: none;
  }
  a:hover {
    border-bottom: 2px solid ${Colores.colorCinco};
  }

  @media only screen and (min-width: 750px) {
    font-size: 15px;
    flex-direction: row;
    height: 65px;
    align-items: center;
    display: flex;
    justify-content: space-around;
  }
`;
export const Cart = styled.button`
  background-color: transparent;
  color: ${Colores.colorCinco};
  font-size: 40px;
  border: none;
  text-align: center;
  animation: entradaCart 1s;
  @keyframes entradaCart {
    0% {
      margin-top: -100%;
    }
    50% {
      margin-top: 5%;
    }
    100% {
      margin-top: 0%;
    }
  }
`;

export const Contador = styled.span`
  position: relative;
  font-size: 18px;
  right: 18px;
  padding: 0 3px;
  bottom: 30px;
  background-color: ${Colores.colorDos};
  border-radius: 40px;

  @media only screen and (min-width: 750px) {
    position: relative;
    font-size: 18px;
    right: 13px;
    bottom: 30px;
  }
`;

export const CartList = styled(ModalStyled)`
  padding-top: 20px;
  position: absolute;
  top: 147px;
  right: 0;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  background-color: ${Colores.colorUno} !important;

  &::-webkit-scrollbar {
    -webkit-appearance: none;
  }

  &::-webkit-scrollbar:vertical {
    width: 10px;
  }

  &::-webkit-scrollbar-button:increment,
  &::-webkit-scrollbar-button {
    display: none;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #797979;
    border-radius: 20px;
    border: 2px solid #f1f2f3;
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
  }

  img {
    border-radius: 8px;
    height: 70px;
    margin-right: 10px;
    width: 60px;
    object-fit: scale-down;
  }

  td {
    color: ${Colores.colorCinco};
    padding-top: 10px;
    font-size: 18px;
  }

  .amount-item {
    color: ${Colores.colorTres};
  }

  .widgetToCart {
    text-align: right;
  }

  .widgetToCart:hover {
    border-bottom: none;
    color: ${Colores.colorCuatro};
  }
`;

export const BtnMenu = styled.button`
  height: auto;
  line-height: 30px;
  text-align: left;
  padding: 10px 20px;
  font-size: 40px;
  width: 100%;
  opacity: 0.9;
  background-color: ${Colores.colorDos};
  color: ${Colores.colorCuatro};
  border: none;

  @media only screen and (min-width: 750px) {
    display: none;
  }
`;
