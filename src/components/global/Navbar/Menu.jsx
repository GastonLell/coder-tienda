import {useState} from 'react'
import {MenuNav, CartList} from './Style'
import CartWidget from './CartWidget';

const Menu = () => {
    const [openCart, setOpenCart] = useState(false);
    const openClosedCart = () => {
        setOpenCart(!openCart)
    }
    return (
        <MenuNav>
            <a href="https://google.com" target="__blank">Instrumentos de cuerda</a>
            <a href="https://google.com" target="__blank">Teclados y pianos</a>
            <a href="https://google.com" target="__blank">Bateria y Percusion</a>
            <a href="https://google.com" target="__blank">Estudio de grabacion</a>
            <a href="https://google.com" target="__blank">Amplificadores</a>
            <a href="https://google.com" target="__blank">Accesorios</a>
            <CartWidget  openClosedCart={openClosedCart} />
            {
                openCart && 
                //cartList es un Modal, creado a traves de styled components, 
                //usando como componente el componente padre Modal
                // esto me deja darle una ubicacion especifica y poder darle estilos a este componente
                <CartList>
                    <tr>
                        <th>Cantidad</th>
                        <th>Producto</th>
                        <th>Subtotal</th>
                    </tr>
                    
                    <tr>
                        <td>1</td>
                        <td>Guitarra</td>
                        <td>30000</td>
                    </tr>
                </CartList>             
            }        
        </MenuNav>
    )
}
export default Menu;