import styled from 'styled-components';
import {Colores, Fuentes} from '../../utils/Constants';
import {ModalStyled} from '../Modal/StyledModal';

export const AddCartStyle = styled.button`
    width: 100%;
    display: block;
    cursor: pointer;
    padding: 10px;
    border: none;
    border-radius: 8px;
    align-items: center;
    font-size: 15px;
    background-color: ${Colores.colorDos};
    color: ${Colores.colorCuatro};
    margin: 20px auto;

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