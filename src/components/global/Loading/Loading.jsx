import styled from 'styled-components';
import {Colores} from '../../utils/Constants';

const Spinner = styled.div`
    margin: 10px auto;
    border: 4px solid rgba(0,0,0, .1);
    width: 36px; 
    height: 36px;
    border-radius: 50%;
    border-left-color: ${Colores.colorDos};
    background: white;
    animation: spin 1s linear infinite;

    @keyframes spin {
        0%{
            transform: rotate(0deg);
        }
        100%{ 
            transform: rotate(360deg)
        }
    }

`

const Loading = () => {

    return (
        <Spinner/>
    )
}
export default Loading;