import Cart from "./Cart";
import { CartContStyle, FootCart, BtnFinalizar } from "./CartStyle";
import { Store } from "../../../store/CartContext";
import { useContext, useEffect } from "react";
import getItemsAmount from "../../../helpers/cart/getItemsAmount";

const CartContainer = () => {
  const [data, setData] = useContext(Store);

  //funcion calcular total de la venta
  const totalVenta = () => {
    let resultado = 0;
    let subTotal;

    data.items.map((item, index) => {
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

  // cada vez que cambie un item se va a ir modificando el precio total
  useEffect(() => {
    let num = totalVenta();
    setData({
      ...data,
      totalVenta: num,
    });
  }, []);

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
            : "No hay producto/s seleccionado/s"}
        </span>
      </FootCart>

      <FootCart>
        <BtnFinalizar className="btn-mas">Elegir mas productos</BtnFinalizar>
        <BtnFinalizar>Finalizar compra</BtnFinalizar>
      </FootCart>
    </CartContStyle>
  );
};
export default CartContainer;
