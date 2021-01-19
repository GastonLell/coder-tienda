import { MenuNav, CartList } from "./Style";
import CartWidget from "./CartWidget";
import { Link, NavLink } from "react-router-dom";
import { Store } from "../../../store/CartContext";
import { useContext } from "react";

const Menu = ({ openCart, openClosedCart, openMenu }) => {
  const [data, setData] = useContext(Store);

  return (
    <MenuNav openMenu={openMenu}>
      <NavLink className="menu-item" activeClassName="selected" to="/cuerdas">
        Instrumentos de cuerda
      </NavLink>
      <NavLink className="menu-item" activeClassName="selected" to="/teclados">
        Teclados y pianos
      </NavLink>
      <NavLink className="menu-item" activeClassName="selected" to="/percusion">
        Bateria y Percusion
      </NavLink>
      <NavLink className="menu-item" activeClassName="selected" to="/grabacion">
        Estudio de grabacion
      </NavLink>
      <NavLink
        className="menu-item"
        activeClassName="selected"
        to="/amplificacion"
      >
        Amplificadores
      </NavLink>
      <NavLink className="menu-item" activeClassName="selected" to="/accesorio">
        Accesorios
      </NavLink>
      {data.items.length >= 1 && <CartWidget openClosedCart={openClosedCart} />}
      {openCart && (
        //cartList es un Modal, creado a traves de styled components,
        //usando como componente el componente padre Modal
        // esto me deja darle una ubicacion especifica y poder darle estilos a este componente
        <CartList>
          <Link className="widgetToCart" to="/cart">
            Ir al carrito
          </Link>
          {data.items &&
            data.items.map((item) => {
              return (
                <table>
                  <tr>
                    <td>
                      <img
                        src={item.data.imagen || "https://placehold.it/100x130"}
                      />
                    </td>
                    <td>
                      {item.data.nombre}
                      <span className="amount-item">({item.amount})</span>
                    </td>
                  </tr>
                </table>
              );
            })}
        </CartList>
      )}
    </MenuNav>
  );
};
export default Menu;
