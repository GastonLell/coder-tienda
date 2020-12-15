import styled from 'styled-components'
import {Colores} from '../../utils/Constants';

export const ModalStyled = styled.span `
    height: 90vh;
    width: 375px;
    position: absolute;
    top: 0;
    right: 0;
    background: ${Colores.colorCuatro};
    border-radius: 10px 0px 10px 10px;
    padding: 10px 20px;
    opacity: 1;
`