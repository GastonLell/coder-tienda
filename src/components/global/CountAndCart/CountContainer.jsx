import {useState} from 'react';
import Count from './Count';
import AddToCart from './AddToCart';
import {AlertMessageStyle} from './CountStyled';

// componente con la logica de Count y AddToCart
const CountContainer = ({stock}) => {

    //estado del contador
    const [count, setCount] = useState(1);

    //funciones de botones contador
    const handleClickSubst = () => setCount(count -1);

    const handleClickAdd = () => setCount(count + 1);
    
    // estado mensajes si compran algo aparece
    const [message, setMessage] = useState({});

    //aparece mensaje de agregar al al carrito
    const handleClickCart = () => {
        setMessage({
            text: count === 1 ? `Agregaste ${count} producto al carrito` : `Agregaste ${count} productos al carrito`,
            messageColor: '#528852'
        })
        // setTime para que desaparezca mensaje en 10 seg
        setTimeout(() => setMessage({}), 10000)
    }

    return(
        <>
            <Count
                handleClickSubst={handleClickSubst} 
                handleClickAdd={handleClickAdd} 
                count={count}
                stock={stock} //stock para funcion desactivar boton + si no hay stock
            >
            </Count>

            <AddToCart handleClickCart={handleClickCart} />

            { // si existe un mensaje se muestra
                message.text && 
                    <AlertMessageStyle menssageColor={message.messageColor}>
                        {message.text}
                    </AlertMessageStyle>
            }

        </>
    )
}

export default CountContainer;