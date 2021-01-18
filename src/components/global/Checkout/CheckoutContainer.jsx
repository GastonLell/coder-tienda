import { Store } from "../../../store/CartContext";
import firebase from "firebase/app";
import { useState, useContext } from "react";
import { CheckoutStyle } from "./CheckoutStyle";
import { getFireStore } from "../../../db/config";

const Checkout = () => {
  const db = getFireStore();

  const [data, setData] = useContext(Store);

  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    tel: "",
  });

  const compra = {
    user: formData,
    items: data.items,
    totalCompra: data.totalVenta,
    date: firebase.firestore.Timestamp.fromDate(new Date()),
  };

  const handleChangeInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmitForm = (e) => {
    e.preventDefault();
    db.collection("ventas")
      .add(compra)
      .then(({ id }) => console.log(id))
      .catch((e) => console.log(e));
  };

  return (
    <CheckoutStyle>
      <form onSubmit={handleSubmitForm}>
        <input
          type="text"
          onChange={handleChangeInput}
          name="nombre"
          placeholder="Nombre"
        />
        <input
          type="text"
          onChange={handleChangeInput}
          name="apellido"
          placeholder="Apellido"
        />
        <input
          type="email"
          onChange={handleChangeInput}
          name="email"
          placeholder="E-mail"
        />
        <input
          type="tel"
          onChange={handleChangeInput}
          name="Telefono"
          placeholder="Telefono"
        />
        <button type="submit">Pagar</button>
      </form>
    </CheckoutStyle>
  );
};
export default Checkout;
