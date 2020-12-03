import styled from 'styled-components';
import {Colores} from '../../utils/Constants';

export const Navbar = styled.div `
    display: flex;
    justify-content: space-around;

    background: ${Colores.colorCuatro};
    height: 15vh;

    h1{
      color: ${Colores.colorDos};
      line-height: 15vh;
    }
`
export const MenuNav = styled.div `
    width: 70%;
    display: flex; 
    flex-direction: column;
    justify-content: space-around;
    line-height: 15vh;

    a{
        text-decoration: none;
        color: ${Colores.colorUno};
    }


  @media only screen and (min-width: 624px) {
    flex-direction: row;
  }
`

