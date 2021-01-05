import styled from 'styled-components';
import {Colores, Fuentes} from '../../utils/Constants';
import {ModalStyled} from '../Modal/StyledModal';

export const CountStyle = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    font-family: ${Fuentes.fuenteUno};
    margin-bottom: 20px;
    span{
        width: 70px;
        height: 40px;
        text-align: center;
        padding-top: 8px;
        font-size: 20px;        
    }
    button{
        width: 30px;
        height: 40px;
        background-color: ${Colores.colorCuatro};
        border: none;
        border-radius: 150%;
        font-size: 20px;
    }
`
export const AddCartStyle = styled.button`
    min-width: 200px;
    display: block;
    cursor: pointer;
    padding: 10px;
    border: none;
    border-radius: 8px;
    align-items: center;
    font-size: 15px;
    background-color: ${Colores.colorDos};
    color: ${Colores.colorCuatro};
    margin: 10px auto;

    &:hover{
        opacity: 0.8;
    }
    
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