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
    min-height: 300px;
    width: 18%;
    background-color: ${Colores.colorCuatro};
    border-radius: 8px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-top: 0;
    color: ${Colores.colorUno};
    text-align: left;
    font-family: ${Fuentes.fuenteUno};
    box-shadow: 2px 2px 5px #999;

    .detalle-producto{
        margin: 5px;
        padding: 0 8px;
    }
    
    h3:hover{
        text-decoration: underline;
    }
    img{
        max-width: 100%;
        object-fit: cover;
        border-radius: 8px 8px 0 0;
    }
    img:hover{
        opacity: 0.8;
    }
`
export const ItemListStyle = styled.section `
    .productos{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
`
export const CountStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    font-family: ${Fuentes.fuenteUno};
    
    span{
        width: 30px;
        height: 40px;
        text-align: center;
        padding-top: 8px;
        font-size: 20px;        
    }
    button{
        width: 30px;
        height: 40px;
        background-color: ${Colores.colorDos};
        border: none;
        border-radius: 40px;
        font-size: 20px;
    }
`
export const AddCartStyle = styled.button`
    padding-top: 10px;
    cursor: pointer;
    line-height: 30px;
    border: none;
    border-radius: 8px;
    align-items: center;
    font-size: 30px;
    background-color: ${Colores.colorTres}
`
export const AlertMessageStyle = styled(ModalStyled)`
    background-color: ${props => props.menssageColor};
    position: fixed;
    bottom: 10px;
    right: 40px;
    height: 45px;
    font-size: 18px;
    border-radius: 8px;
`