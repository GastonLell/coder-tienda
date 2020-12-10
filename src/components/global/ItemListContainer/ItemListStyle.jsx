import styled from 'styled-components';
import { Colores } from '../../utils/Constants';

export const Item = styled.div `
    min-height: 300px;
    width: 15%;
    background-color: ${Colores.colorTres};
    border-radius: 8px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-top: 0;
    color: ${Colores.colorUno};
    text-align: left;

    .detalle-producto{
        margin: 5px;
    }
    h3:hover{
        text-decoration: underline;
    }
    img{
        max-width: 100%;
        object-fit: cover;
        border-radius: 8px;
    }
    img:hover{
        opacity: 0.8;
    }

    
`