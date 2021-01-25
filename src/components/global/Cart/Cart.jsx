import { useState } from "react";
import { CartStyle, Delete } from "./CartStyle";
import CountContainer from "../Count/CountContainer";
const Cart = ({ item, removeItem }) => {
  const [count, setCount] = useState(item && item.amount ? item.amount : 1);
  return (
    <CartStyle>
      <div className="detalle">
        <img
          src={item.data.imagen || "https://placehold.it/100x120"}
          alt="imagen-producto"
        />
        <div className="info">
          <h2>{item.data.nombre}</h2>
          <h3>${item.data.precio}</h3>
        </div>
      </div>
      <div className="count">
        <CountContainer
          max={item.data.stock}
          count={count}
          addCount={() => setCount(count + 1)}
          substCount={() => setCount(count - 1)}
        />
        {!!item.stock > 1 ? (
          <span>1 elemento disponible</span>
        ) : (
          <span>{item.data.stock} elementos disponibles</span>
        )}
      </div>

      <div className="sub-total">
        {(item.data.precio * item.amount).toLocaleString("es-AR", {
          style: "currency",
          currency: "ARS",
        })}
      </div>
      <Delete onClick={() => removeItem(item.id)}>X</Delete>
    </CartStyle>
  );
};
export default Cart;
