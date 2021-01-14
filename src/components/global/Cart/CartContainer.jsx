import Cart from "./Cart";
import { CartContStyle, FootCart, BtnFinalizar } from "./CartStyle";
import { Store } from "../../../store/CartContext";
import { useContext, useEffect } from "react";
import getItemsAmount from "../../../helpers/cart/getItemsAmount";
import { Link } from "react-router-dom";

const CartContainer = () => {
  const [data, setData] = useContext(Store);

  //funcion calcular total de la venta
  const totalVenta = () => {
    let resultado = 0;
    let subTotal;

    data.items.map((item) => {
      subTotal = item.precioProducto * item.amount;
      resultado += subTotal;
    });
    return resultado;
  };

  // funcion eliminar item cart
  const removeItem = (id) => {
    //creo nuevo array sin el producto eliminado
    const arrayEditado = data.items.filter(
      ({ idProducto }) => idProducto !== id
    );
    setData({
      ...data,
      items: arrayEditado,
    });
  };
  const clearCart = () => {
    setData({
      ...data,
      totalVenta: NaN,
      items: [],
    });
  };

  // cada vez que cambie cart se modifica el precio
  useEffect(() => {
    let num = totalVenta();
    setData({
      ...data,
      totalVenta: num,
    });
  }, [data.items]);

  return (
    <CartContStyle>
      <h2 className="count-carrito">
        Tu carrito ({getItemsAmount(data.items)})
      </h2>

      {!!data.items &&
        data.items.map((item, index) => (
          <Cart item={item} idVenta={index} removeItem={removeItem} />
        ))}

      <FootCart>
        <h2>Total</h2>
        <span>
          {data.totalVenta
            ? `$ ${data.totalVenta}`
            : "No hay productos seleccionados"}
        </span>
      </FootCart>

      <FootCart>
        <BtnFinalizar onClick={clearCart} className="btn-clear">
          Limpiar carrito
        </BtnFinalizar>
        <Link to="/">
          <BtnFinalizar className="btn-mas">Elegir mas productos</BtnFinalizar>
        </Link>
        <BtnFinalizar>Finalizar compra</BtnFinalizar>
      </FootCart>
    </CartContStyle>
  );
};
export default CartContainer;
