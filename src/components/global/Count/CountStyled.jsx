import styled from 'styled-components';
import {Colores, Fuentes} from '../../utils/Constants';
import {ModalStyled} from '../Modal/StyledModal';

export const CountStyle = styled.div`
    display: flex;
    align-items: center;
    font-family: ${Fuentes.fuenteUno};
    margin-bottom: 10px;
    border: 1px solid ${Colores.colorCuatro};
    width: 90px;
    max-height: 40px;
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
        border: none;
        font-size: 20px;
        background-color: transparent;
    }
`
