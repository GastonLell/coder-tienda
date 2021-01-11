import {CountStyle} from './CountStyled';

const Count = ({handleClickSubst, handleClickAdd, cantidadItem, count, disabledMenos, disabledMas}) => {
    
    return(
        <CountStyle>
            <button
                disabled={disabledMenos} 
                onClick={handleClickSubst}
            >-</button>

            <span> {count} </span>
            

            <button 
                disabled={disabledMas}
                onClick={handleClickAdd}
            >+</button>

        </CountStyle>
    )
}
export default Count;