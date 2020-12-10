import styled from 'styled-components';
import {Colores, Fuentes} from '../../utils/Constants';
import imagenNav from '../../../assets/imagenes/imagenInstrumentos.jpg';

export const Navbar = styled.div `
    background-image: url(${imagenNav});
    height: 45vh;
    position: relative;
    background-position: 25% 90%;

    &:before{
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      background-color: rgb(0, 0, 0 ,0.8);
    }  


    h1{
      width: 100%;
      margin-bottom: 100px;
      padding-top: 35px;
      color: ${Colores.colorCuatro};
      font-family: ${Fuentes.fuenteDos} ;
      position: relative;
      font-size: 60px;
      font-weight: bold;
    }
`
export const MenuNav = styled.nav `
    width: 90%;
    display: flex; 
    flex-direction: column;
    justify-content: space-around;
    position: relative;

    a{
      height: 30px;
      padding-bottom: 5px;
      text-decoration: none;
      position: relative;
      color: ${Colores.colorTres};
      font-family: ${Fuentes.fuenteDos};
      font-weight: bold;
    }
    a:hover{
      border-bottom: 1px solid ${Colores.colorTres};
    }

  @media only screen and (min-width: 624px) {
    flex-direction: row;
  }
`
export const Cart = styled.button `
  padding: 5px;
  background-color: transparent;
  color: ${Colores.colorTres};
  left: 600px;
  position: relative;
  font-size: 50px;
  border: none;
  bottom: 50px;
`
