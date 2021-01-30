import { CartList } from "./Style";
import { Link } from "react-router-dom";

const CartListNavbar = ({ data }) => {
  return (
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
                    src={
                      item.item.data.imagen || "https://placehold.it/100x130"
                    }
                  />
                </td>
                <td>
                  {item.item.data.nombre}
                  <span className="amount-item">({item.cantidad})</span>
                </td>
              </tr>
            </table>
          );
        })}
    </CartList>
  );
};
export default CartListNavbar;
