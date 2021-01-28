import Cart from "./Cart";
import { CartContStyle, FootCart, BtnFinalizar } from "./CartStyle";
import { Store } from "../../../store/CartContext";
import { useContext, useEffect, useState } from "react";
import getItemsAmount from "../../../helpers/cart/getItemsAmount";
import getFullPrice from "../../../helpers/getFullPrice";
import { Link } from "react-router-dom";

const CartContainer = () => {
  const [data, setData] = useContext(Store);
  const [precioTotal, setPrecioTotal] = useState();

  const removeItem = (idParams) => {
    const arrayEditado = data.items.filter(
      (itemObj) => itemObj.item.id !== idParams
    );
    setData({
      ...data,
      items: arrayEditado,
    });
  };

  const clearCart = () => {
    setData({
      ...data,
      items: [
        {
          item: [],
          cantidad: 0,
        },
      ],
    });
  };

  useEffect(() => {
    setPrecioTotal(getFullPrice(data.items));
  }, []);

  return (
    <CartContStyle>
      <h2 className="count-carrito">
        Tu carrito ({getItemsAmount(data.items)})
      </h2>

      {!!data.items &&
        data.items.map((item) => (
          <Cart
            item={item.item}
            data={data}
            setData={setData}
            cantidad={item.cantidad}
            removeItem={removeItem}
          />
        ))}

      <FootCart>
        {precioTotal !== "0,00" ? (
          <>
            <h2>Total</h2>
            <span>{precioTotal}</span>
          </>
        ) : (
          <span>No hay productos seleccionados</span>
        )}
      </FootCart>

      <FootCart>
        <BtnFinalizar onClick={clearCart} className="btn-clear">
          Limpiar carrito
        </BtnFinalizar>
        <Link to="/">
          <BtnFinalizar className="btn-mas">Elegir mas productos</BtnFinalizar>
        </Link>
        <Link to="/checkout">
          <BtnFinalizar>Finalizar compra</BtnFinalizar>
        </Link>
      </FootCart>
    </CartContStyle>
  );
};
export default CartContainer;
