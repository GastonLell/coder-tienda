import styled from 'styled-components';
import {Colores, Fuentes} from '../../utils/Constants';
import {ModalStyled} from '../Modal/StyledModal';

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
        background-color: ${Colores.colorCuatro};
        border: none;
        border-radius: 10px;
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
    background-color: ${Colores.colorCuatro}
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