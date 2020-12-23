import styled from 'styled-components';
import { Colores, Fuentes } from '../../utils/Constants';
import {ModalStyled} from '../Modal/StyledModal';

export const Subtitle = styled.h2 `
    font-size: 30px;
    text-align: center;
    font-family: ${Fuentes.fuenteDos};
    padding: 20px;
`

export const ItemStyle = styled.article `
    min-height: 250px;
    width: 18%;
    background-color: #fff;
    border-radius: 8px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-top: 0;
    color: ${Colores.colorUno};
    text-align: left;
    font-family: ${Fuentes.fuenteDos};

    .detalle-producto{
        margin: 5px;
        padding: 0 8px;
    }

    img{
        max-width: 100%;
        object-fit: cover;
        border-radius: 8px 8px 0 0;
    }
    &:hover{
        box-shadow: 2px 2px 5px #999;
    }
`
export const ItemListStyle = styled.section `
    .productos{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
`
