import {MenuNav, CartList} from './Style'
import CartWidget from './CartWidget';
import {NavLink} from 'react-router-dom'


const Menu = ({openCart, openClosedCart, openMenu}) => {

    return (
        <MenuNav openMenu={openMenu} >        
            <NavLink className="menu-item" activeClassName="selected" to="/cuerdas">Instrumentos de cuerda</NavLink>
            <NavLink className="menu-item" activeClassName="selected" to="/teclados">Teclados y pianos</NavLink>
            <NavLink className="menu-item" activeClassName="selected" to="/percusion">Bateria y Percusion</NavLink>
            <NavLink className="menu-item" activeClassName="selected" to="/grabacion">Estudio de grabacion</NavLink>
            <NavLink className="menu-item" activeClassName="selected" to="/amplificacion">Amplificadores</NavLink>
            <NavLink className="menu-item" activeClassName="selected" to="/accesorio">Accesorios</NavLink>
        
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