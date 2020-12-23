import {CountStyle} from './CountStyled';

const Count = ({handleClickSubst, handleClickAdd, count, stock}) => {

    return(
        <CountStyle>
            <button
                disabled={count === 1 ? 'disabled' : null} 
                onClick={handleClickSubst}
            >-</button>

            <span> {count} </span>

            <button 
                disabled={count === stock ? 'disabled' : null}
                onClick={handleClickAdd}
            >+</button>

        </CountStyle>
    )
}
export default Count;