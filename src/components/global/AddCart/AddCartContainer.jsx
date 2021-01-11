import {useContext, useState} from 'react';
import {Store} from '../../../store/ProductContext';

import AddToCart from '../AddCart/AddToCart';
import {AlertMessageStyle} from './AddCartStyle';

const AddCartContainer = ({handleRedirect, item}) => {
    
    // estado mensajes si compran algo aparece
    const [message, setMessage] = useState({});

    //traer contexto de cart
    const [data, setData] = useContext(Store);
    //aparece mensaje de agregar al al carrito
    const handleClickCart = () => {
        if(item.stock > 0){
            //agrego la cantidad al items de cada producto que comprara
            setData({
                ...data,
                cantidad: data.cantidad + data.countGlobal,
                items: [...data.items, item],
                cantidadItem: [...data.cantidadItem, data.countGlobal]
            })
            setMessage({
                text: data.countGlobal === 1 ? `Agregaste ${data.countGlobal} producto al carrito` : `Agregaste ${data.countGlobal} productos al carrito`,
                messageColor: '#528852'
            })
        } else {
            setMessage({
                text: "No hay stock disponible",
                messageColor: '#885252'
            })
        }
        // setTime para que desaparezca mensaje en 10 seg
        setTimeout(() => setMessage({}), 10000)            
    }
    return(
        <>
        <AddToCart handleClickCart={handleClickCart} handleRedirect={handleRedirect} />

        { // si existe un mensaje se muestra
            message.text && 
                <AlertMessageStyle menssageColor={message.messageColor}>
                    {message.text}
                </AlertMessageStyle>
        }    
        </>
    )
}

export default AddCartContainer;