import { useState, useContext, useEffect } from "react";

import firebase from "firebase/app";
import { getFireStore } from "../../../db/config";

import { Store } from "../../../store/CartContext";

import getFullPrice from "../../../helpers/cart/getFullPrice";

import { CheckoutStyle } from "./CheckoutStyle";
import FormCheckout from "./FormCheckout";
import SaleConfirmed from "./SaleConfirmed";
import CartListNabvar from "../Navbar/CartListNavbar";

const Checkout = () => {
  const db = getFireStore();

  const [data, setData] = useContext(Store);

  const [idVenta, setIdVenta] = useState();

  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    tel: "",
    localidad: "",
    provincia: "",
    CP: "",
    comentario: "",
  });

  const compra = {
    user: formData,
    items: data.items,
    totalCompra: getFullPrice(data.items),
    date: firebase.firestore.Timestamp.fromDate(new Date()),
  };

  const handleChangeInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    db.collection("ventas")
      .add(compra)
      .then(({ id }) => setIdVenta(id))

      .catch((e) => console.log(e));
    setData({
      items: [],
    });
  };
  useEffect(() => {
    setIdVenta("");
  }, []);
  return (
    <CheckoutStyle>
      <CartListNabvar data={data} />

      {idVenta ? (
        <SaleConfirmed idVenta={idVenta} />
      ) : (
        <FormCheckout
          handleChangeInput={handleChangeInput}
          handleSubmitForm={handleSubmitForm}
        />
      )}
    </CheckoutStyle>
  );
};
export default Checkout;
