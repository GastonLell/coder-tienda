import {useState} from 'react';
import {ItemStyle, AlertMessage} from './Style';
import CountContainer from './CountContainer';
import AddToCart from './AddToCart';

const Item = ({producto, precio, descripcion, imagenProducto, stock}) => {

    //estado del contador
    const [count, setCount] = useState(1);
    // estado mensajes
    const [message, setMessage] = useState({});

    //funciones de botones contador
    const handleClickSubst = () => {
        setCount(count -1);
    }
    const handleClickAdd = () => {
        setCount(count + 1);
    }

    //mensaje de agregar al al carrito

    const handleClickCart = () => {
        setMessage({
            type: 'success',
            text: count === 1 ? `Agregaste ${count} producto al carrito` : `Agregaste ${count} productos al carrito`
        })
        setTimeout(() => setMessage({}), 10000)
    }

    return(
        <ItemStyle>
            <img src={imagenProducto || "https://placehold.it/200x310" } alt="imagen producto"/>
            <div className="info">
                <h2 className="detalle-producto" >{producto}</h2>
                <h5 className="detalle-producto" >{descripcion}</h5>
                <h3 className="detalle-producto" >${precio}</h3>
            </div>
            <CountContainer handleClickSubst={handleClickSubst} handleClickAdd={handleClickAdd} count={count} stock={stock} />
            <AddToCart handleClickCart={handleClickCart} />
            {
                message.text && 
                    <AlertMessage>
                        {message.text}
                    </AlertMessage> 

            }

        </ItemStyle>
    )
}
export default Item;