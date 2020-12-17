import {Contador} from './Style';

const ContadorProductos = ({handleClickSubst, handleClickAdd, count}) => {

    return(
        <Contador>
            <button disabled={count === 1 ? 'disabled' : null} onClick={handleClickSubst}>-</button>
                <span> {count} </span>
            <button onClick={handleClickAdd}>+</button>
        </Contador>
    )
}
export default ContadorProductos;