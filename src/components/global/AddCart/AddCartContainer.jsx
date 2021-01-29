import { useContext, useState } from "react";
import { Store } from "../../../store/CartContext";
import AddToCart from "../AddCart/AddToCart";
import { AlertMessageStyle } from "./AddCartStyle";

const AddCartContainer = ({ handleRedirect, producto, count }) => {
  const [message, setMessage] = useState({});
  const [data, setData] = useContext(Store);
  const handleClickCart = () => {
    const isInCart = data.items.find((cart) => cart.item.id === producto.id);
    if (isInCart) {
      setMessage({
        text: `${producto.data.nombre} ya está seleccionado`,
        messageColor: "#885252",
      });
    } else {
      if (producto?.data?.stock > 0) {
        setData({
          ...data,
          items: [...data.items, { item: producto, cantidad: count }],
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

      {message.text && (
        <AlertMessageStyle menssageColor={message.messageColor}>
          {message.text}
        </AlertMessageStyle>
      )}
    </>
  );
};

export default AddCartContainer;
