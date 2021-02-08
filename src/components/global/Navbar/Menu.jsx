import { MenuNav } from "./Style";
import CartWidget from "./CartWidget";
import CartListNavbar from "./CartListNavbar";
import { NavLink } from "react-router-dom";
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

      <NavLink className="menu-item" activeClassName="selected" to="/accesorio">
        Accesorios
      </NavLink>

      {data.items.length >= 1 && <CartWidget openClosedCart={openClosedCart} />}

      {!!openCart && <CartListNavbar data={data} />}
    </MenuNav>
  );
};
export default Menu;
