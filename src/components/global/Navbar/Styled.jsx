import styled from 'styled-components';
import {Colores, Fuentes} from '../../utils/Constants';
import imagenNav from '../../../assets/imagenes/imagenInstrumentos.jpg';
import {ModalStyled} from '../Modal/StyledModal';

export const Navbar = styled.header `

    
    h1{
      width: 100%;
      margin-bottom: 10px;
      padding-top: 10px;
      color: ${Colores.colorCuatro};
      font-family: ${Fuentes.fuenteDos} ;
      font-size: 50px;
      font-weight: bold;
    }
    @media only screen and (min-width: 624px) {
      width: 100%;
      height: 147px;
      background-image: url(${imagenNav});
      background-position: -1100px 500px;
      background-attachment: fixed;
      background-color: rgba(0, 0, 0, .5);
      background-blend-mode: soft-light;
      position: sticky;
      top: -85px;
    }
`
export const MenuNav = styled.nav `
    display: flex; 
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    opacity: 0.9;
    height: 65px;
    background-color: ${Colores.colorUno};
    padding-top: 20px;
    padding-bottom: 10px;

    a{
      color: ${Colores.colorTres};
      font-family: ${Fuentes.fuenteDos};
      font-weight: bold;
      padding-bottom: 8px;
      text-decoration: none;
    }
    a:hover{
      border-bottom: 2px solid ${Colores.colorTres};
    }

    @media only screen and (min-width: 624px) {
      flex-direction: row;
    }
`
export const Cart = styled.button `
  background-color: transparent;
  color: ${Colores.colorTres};
  font-size: 40px;
  border: none;
  text-align: center;
`
export const Contador = styled.span `
  position: relative;
  font-size: 20px;
  right: 15px;
  bottom: 30px;
  background-color: ${Colores.colorUno}; 
  border-radius: 40px;
  padding: 3px;
`

export const CartList = styled(ModalStyled) `
  position: absolute;
  top: 147px;
  right: 0;
  
  th{
    padding: 5px 20px;
    border-bottom: 1px solid  ${Colores.colorDos};
  }
  td{
    border-bottom: 1px solid  ${Colores.colorTres};
  }

`