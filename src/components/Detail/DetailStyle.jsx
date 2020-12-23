import styled from 'styled-components';
import {Colores, Fuentes} from '../utils/Constants';

export const DetailStyle = styled.article`
    display: flex;
    justify-content: center;
    margin: 20px;
    width: 90%;
    font-family: ${Fuentes.fuenteDos};
    color: ${Colores.colorUno};
    h2{
        margin-bottom: 15px;
    }
    h3{
        font-size: 40px;
        font-weight: 300;
    }
    h6{
        margin-bottom: 35px;
    }
    .credit-card{
        display: flex;

    }
    .credit-card > div{
        margin-right: 10px;
    }

    .credit-card .entidades{
        font-size: 25px;
        color: #174a5a;
    }

    & > div {
        padding: 15px;
        border: 1px solid #ccc;
        background-color: #fff;

    }

    .slide-img{
        width: 50%;
        text-align: center;
    }
    .detalle-producto{
        width: 30%;
        text-align: left;        
    }

`