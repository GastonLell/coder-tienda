import { useState } from "react";
import { CartStyle, Delete } from "./CartStyle";
import CountContainer from "../Count/CountContainer";

const Cart = ({ data, setData, item, removeItem, cantidad }) => {
  const [count, setCount] = useState(!!cantidad ? cantidad : 0);
  const handleClickSubst = () => {
    setCount(count - 1);

    console.log("console desde count cart");

    /* data.items.map((producto) => {
      if (producto.id === item.id) {
        producto.amount = producto.amount - 1;
        setCount(producto.amount);
      }
    }); */
  };
  const handleClickAdd = () => {
    setCount(count + 1);
    const newDataCart = data.items.map((itemCart) => {
      if (itemCart) {
        console.log(itemCart);
      }
    });
    setData({
      ...data,
      data: [...data.items, { cantidad: count }],
    });
    console.log(data.items);
  };
  return (
    <CartStyle>
      <div className="detalle">
        <img
          src={item.data.imagen || "https://placehold.it/100x120"}
          alt="imagen-producto"
        />
        <div className="info">
          <h2>{item?.data.nombre}</h2>
          <h3>${item?.data.precio}</h3>
        </div>
      </div>
      <div className="count">
        <CountContainer
          max={item?.data.stock}
          count={count}
          handleClickAdd={handleClickAdd}
          handleClickSubst={handleClickSubst}
        />
        {!!item.stock > 1 ? (
          <span>1 elemento disponible</span>
        ) : (
          <span>{item.data.stock} elementos disponibles</span>
        )}
      </div>

      <div className="sub-total">
        {(item.data.precio * cantidad).toLocaleString("es-AR", {
          style: "currency",
          currency: "ARS",
        })}
      </div>
      <Delete onClick={() => removeItem(item.id)}>X</Delete>
    </CartStyle>
  );
};
export default Cart;
