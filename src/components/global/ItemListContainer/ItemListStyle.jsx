import styled from 'styled-components';
import { Colores, Fuentes } from '../../utils/Constants';

export const Item = styled.article `
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

export const Contador = styled.div`
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
        background-color: ${Colores.colorTres};
        
    }
    button{
        width: 30px;
        height: 40px;
        background-color: ${Colores.colorDos};
        border: none;
        //border-radius: 10px;
        font-size: 20px;
    }
`