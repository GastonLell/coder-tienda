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
    const arrayEditado = data.items.filter((item) => item.id !== idParams);
    setData({
      ...data,
      items: arrayEditado,
    });
  };
  const clearCart = () => {
    setData({
      ...data,
      items: [],
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
        data.items.map((item, index) => (
          <Cart
            item={item}
            data={data}
            setData={setData}
            idVenta={index}
            removeItem={removeItem}
          />
        ))}

      <FootCart>
        {getFullPrice(data.items) !== "0,00" ? (
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
