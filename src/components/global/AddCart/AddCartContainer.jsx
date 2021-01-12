import { useContext, useState } from "react";
import { Store } from "../../../store/CartContext";

import AddToCart from "../AddCart/AddToCart";
import { AlertMessageStyle } from "./AddCartStyle";

const AddCartContainer = ({ handleRedirect, item, count }) => {
  const [message, setMessage] = useState({});

  const [data, setData] = useContext(Store);


  const handleClickCart = () => {
    if (item.stock > 0) {
      // agrego la cantidad al items de cada producto que comprara
      setData({
        ...data,
        // cantidad: data.cantidad + count,
        items: [...data.items, { ...item, amount: count }],
      });
      setMessage({
        text:
          count === 1
            ? `Agregaste ${count} producto al carrito`
            : `Agregaste ${count} productos al carrito`,
        messageColor: "#528852",
      });
    } else {
      setMessage({
        text: "No hay stock disponible",
        messageColor: "#885252",
      });
    }
    // setTime para que desaparezca mensaje en 10 seg
    setTimeout(() => setMessage({}), 10000);
  };
  return (
    <>
      <AddToCart
        handleClickCart={handleClickCart}
        handleRedirect={handleRedirect}
      />

      {
        // si existe un mensaje se muestra
        message.text && (
          <AlertMessageStyle menssageColor={message.messageColor}>
            {message.text}
          </AlertMessageStyle>
        )
      }
    </>
  );
};

export default AddCartContainer;
