import { CartList } from "./Style";
import { Link } from "react-router-dom";
import getFullPrice from "../../../helpers/cart/getFullPrice";

const CartListNavbar = ({ data }) => {
  return (
    <CartList>
      <span className="full-price">Total: {getFullPrice(data.items)}</span>
      <Link className="to-cart" to="/cart">
        Ir al carrito
      </Link>

      <table>
        {data.items.map((item) => {
          return (
            <tr key={item.item.id}>
              <td>
                <img
                  src={item.item.data.imagen || "https://placehold.it/100x130"}
                />
              </td>
              <td>
                {item.item.data.nombre}
                <span className="amount-item">({item.cantidad})</span>
              </td>
            </tr>
          );
        })}
      </table>
    </CartList>
  );
};
export default CartListNavbar;
