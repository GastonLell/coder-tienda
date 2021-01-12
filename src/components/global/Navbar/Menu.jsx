import {MenuNav, CartList} from './Style'
import CartWidget from './CartWidget';
import {NavLink} from 'react-router-dom'
import {Store} from '../../../store/CartContext';
import {useContext} from 'react';

const Menu = ({openCart, openClosedCart, openMenu}) => {

    const [data, setData] = useContext(Store);

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
                        {
                            data.items &&
                            data.items.map(item => {
                                return(
                                    <table>
                                        <tr>
                                            <td>
                                                <img src={item.imagenProducto || "https://placehold.it/75x100"}/>    
                                            </td>
                                            <td>
                                                {item.nombreProducto}
                                            </td>
                                        </tr> 
                                    </table>
                                )
                            })
                            
                        }

                    </CartList>             
                }        
        </MenuNav>
    )
}
export default Menu;