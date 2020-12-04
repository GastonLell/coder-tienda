import styled from 'styled-components';
import {Colores, Fuentes} from '../../utils/Constants';
import imagenNav from '../../../assets/imagenes/imagenInstrumentos.jpg';

export const Navbar = styled.div `
    background-image: url(${imagenNav});
    height: 40vh;
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
      padding-top: 20px;
      margin-bottom: 85px;
      color: ${Colores.colorCuatro};
      font-family: ${Fuentes.fuenteDos} ;
      position: relative;
      font-size: 60px;
      font-weight: bold;
    }
`
export const MenuNav = styled.div `
    width: 100%;
    display: flex; 
    flex-direction: column;
    justify-content: space-around;
    position: fixed;

    a{
      padding: 10px;
      text-decoration: none;
      position: relative;
      color: ${Colores.colorTres};
      font-family: ${Fuentes.fuenteDos};
      font-weight: bold;
      transition: 1s box-shadow;
    }
    a:hover{
      box-shadow: 0 5px 35px 0px rgba(0,0,0,.1);
      color: ${Colores.colorUno};
    }

    a:hover::before, a:hover::after {
      display: block;
      content: '';
      position: absolute;
      width: 100%;
      height: 35px;
      background: ${Colores.colorUno};
      border-radius: 8px;
      z-index: -1;
      animation: 1s clockwise infinite;
    }

    a:hover:after {
      background: ${Colores.colorTres};
      animation: 2s counterclockwise infinite;
    }

    @keyframes clockwise {
      0% {
        top: -3px;
        left: 0;
      }
      12% {
        top: -1px;
        left: 1px;
      }
      25% {
        top: 0;
        left: 3px;    
      }
      37% {
        top: 1px;
        left: 1px;
      }
      50% {
        top: 3px;
        left: 0;    
      }
      62% {
        top: 1px;
        left: -1px;
      }
      75% {
        top: 0;
        left: -3px;
      }
      87% {
        top: -1px;
        left: -1px;
      }
      100% {
        top: -3px;
        left: 0;    
      }
    }

    @keyframes counterclockwise {
      0% {
        top: -3px;
        right: 0;
      }
      12% {
        top: -1px;
        right: 1px;
      }
      25% {
        top: 0;
        right: 3px;    
      }
      37% {
        top: 1px;
        right: 1px;
      }
      50% {
        top: 3px;
        right: 0;    
      }
      62% {
        top: 1px;
        right: -1px;
      }
      75% {
        top: 0;
        right: -3px;
      }
      87% {
        top: -1px;
        right: -1px;
      }
      100% {
        top: -3px;
        right: 0;    
      }
    }

  @media only screen and (min-width: 624px) {
    flex-direction: row;
  }
`

