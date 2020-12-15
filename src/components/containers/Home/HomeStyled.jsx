import styled from 'styled-components';
import {Colores, Fuentes} from '../../utils/Constants';


export const Subtitulo = styled.h2 `
    color: ${Colores.colorUno};
    font-size: 30px;
    margin-top: 20px;
    font-family: ${Fuentes.fuenteDos};

`

export const Destacados = styled.section `
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 20px auto 20px;
`