import styled from 'styled-components';
import { Colores, Fuentes } from '../../utils/Constants';

export const Subtitle = styled.h2 `
    font-size: 30px;
    margin-top: 10px;
    text-align: left;
    font-family: ${Fuentes.fuenteDos};
    padding: 20px;
    color: ${Colores.colorUno};
`

export const ItemStyle = styled.article `
    min-height: 450px;
    width: 18%;
    background-color: #fff;
    border-radius: 8px;
    text-align: left;
    margin: 10px 25px;
    padding-top: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    color: ${Colores.colorUno};
    font-family: ${Fuentes.fuenteDos};

    .detalle-producto{
        margin: 5px;
        padding: 0 8px;
    }
    h5{
        color: ${Colores.colorTres};
    }
    img{
        max-width: 100%;
        object-fit: cover;
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
