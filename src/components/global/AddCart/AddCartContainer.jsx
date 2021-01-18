import { useContext, useState } from "react";
import { Store } from "../../../store/CartContext";
import AddToCart from "../AddCart/AddToCart";
import { AlertMessageStyle } from "./AddCartStyle";

const AddCartContainer = ({ handleRedirect, producto, count }) => {
  const [message, setMessage] = useState({});

  const [data, setData] = useContext(Store);

  const handleClickCart = () => {
    //variable para guardar valor booleano si el item esta en el array
    const isInCart = data.items.find(({ id }) => id === producto.id);

    //si el item esta en el array productos, se informa con un msj
    if (isInCart) {
      setMessage({
        text: `${producto.data.nombre} ya está seleccionado`,
        messageColor: "#885252",
      });
    } else {
      // su item no esta en el array de productos se guarda en el mismo
      if (producto?.data?.stock > 0) {
        // agrego item en data (context)
        // agrego la cantidad a cada item que compra
        setData({
          ...data,
          items: [...data.items, { ...producto, amount: count }],
        });
        // mensaje de confirmacion
        setMessage({
          text:
            count === 1
              ? `Agregaste ${count} producto al carrito`
              : `Agregaste ${count} productos al carrito`,
          messageColor: "#528852",
        });
      } else {
        //mensaje si no hay stock
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
