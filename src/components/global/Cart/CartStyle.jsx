import styled from 'styled-components';
import {Colores, Fuentes} from '../../utils/Constants';

export const CartContStyle = styled.div`
    min-height: 500px;
    width: 80%;
    margin: 20px auto;
    background-color: #fff;
    border: 1px solid ${Colores.colorCuatro};
    color: ${Colores.colorUno};
    box-shadow: 1px 2px 2px #ccc;
    .count-carrito{
        padding: 30px 0 10px 0;
        text-align: left;
        border-bottom:1px solid ${Colores.colorCuatro};
        width: 90%;
        margin: 0 auto;
    }
`

export const CartStyle = styled.div`
    display: flex;
    justify-content: space-between;
    min-height: 130px;
    width: 90%;
    margin: 0 auto;
    padding: 25px 0;
    border-bottom:1px solid ${Colores.colorCuatro};
    
    .detalle{
        display: flex;
    }
    .info{
        margin-left: 15px;
        text-align: left;
    }
    h2{
        font-size: 25px;
        margin-bottom: 10px;
    }
    h3{
        font-size: 20px;
        color: ${Colores.colorDos};
    }
    .count{
        padding-top: 35px;
    }
    .count > span{
        color: ${Colores.colorTres};
        font-size: 15px;
    }
    .sub-total{
        font-size: 25px;
        text-align: center;
        line-height: 130px;

    }
`
export const FootCart = styled.div`
    min-height: 130px;
    line-height: 130px;
    border-bottom:1px solid ${Colores.colorCuatro};
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: flex-end;
    
    h2{
        padding-right: 60px;
    }
    span{
        font-size: 25px;
    } 
    .btn-mas{
        background-color: #fff;
        color: ${Colores.colorDos};
    }
`
export const BtnFinalizar = styled.button`
    background-color: ${Colores.colorDos};
    margin: 40px 0px 20px 20px;
    padding: 5px;
    height: 40px;
    width: 150px;
    border: none;
    opacity: 0.9;
    color: #fff;
    border-radius: 8px;
    cursor: pointer;
    &:hover{
        opacity: 0.8;
    }
`
export const Delete = styled.button`
    height: 30px;
    width: 30px;
    border-radius: 50%;
    border: none;
    background-color:${Colores.colorCinco};
    color: ${Colores.colorUno};
    font-size: 20px;
    font-family: ${Fuentes.fuenteUno};
    margin-top: -20px;
    &:hover{
        background-color: #993a3a;
        color: #fff
    }
`