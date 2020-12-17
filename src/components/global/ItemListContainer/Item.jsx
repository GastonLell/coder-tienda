import {useState} from 'react';
import {ItemStyle} from './Style';
import CountContainer from './CountContainer';
import AddToCart from './AddToCart';

const Item = ({producto, precio, descripcion, imagenProducto}) => {
    //estado del contador
    const [count, setCount] = useState(1);

    //funciones de botones contador
    const handleClickSubst = () => {
        setCount(count -1);
    }

    const handleClickAdd = () => {
        setCount(count + 1);
    }

    const addToCart = () => {
        alert(`agregaste ${count} productos al carrito`);
    }

    return(
        <ItemStyle>
            <img src={imagenProducto || "https://placehold.it/200x310" } alt="imagen producto"/>
            <div className="info">
                <h2 className="detalle-producto" >{producto}</h2>
                <h5 className="detalle-producto" >{descripcion}</h5>
                <h3 className="detalle-producto" >${precio}</h3>
            </div>
            <CountContainer handleClickSubst={handleClickSubst} handleClickAdd={handleClickAdd} count={count} />
            <AddToCart handleClickCart={addToCart} />
        </ItemStyle>
    )
}
export default Item;