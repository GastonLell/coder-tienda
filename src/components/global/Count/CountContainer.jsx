import {useContext, useState, useEffect} from 'react';
import Count from './Count';
import {Store} from '../../../store/CartContext';
// componente con la logica de Count
const CountContainer = ({stock,idVenta, cantidadItem}) => {
    const [count, setCount] = useState(
        !cantidadItem ? 1 : cantidadItem
    );

    //estado global
    const [data, setData] = useContext(Store);
    
    // restar contador
    const handleClickSubst = () => {
        setCount(
            count - 1
        )
    };
    // sumar contador
    const handleClickAdd = () => {
        setCount(
            count + 1
        )
    };  
    // una vez montado, si cambia el contador se modifica el estado global del contador
    // para poder agregarlo en widget cart
    useEffect(() => {
        setData({
            ...data,
            countGlobal: count
        })
    }, [count])

    // si contador es igual a 1 desactivo el boton
    const disabledMenos = count ===  1 ? 'disabled' : null;

    // si el contador es igual al stock dsponible desactivo el boton
    const disabledMas = count === stock || count === 0 ? 'disabled' : null;

    return(
        <Count
            handleClickSubst={handleClickSubst} 
            handleClickAdd={handleClickAdd} 
            disabledMenos={disabledMenos}
            disabledMas={disabledMas}
            count={count}
            cantidadItem={cantidadItem}
        />
    )
}

export default CountContainer;