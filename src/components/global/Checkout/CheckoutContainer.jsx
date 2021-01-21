import { Store } from "../../../store/CartContext";
import firebase from "firebase/app";
import { useState, useContext, useEffect } from "react";
import { CheckoutStyle } from "./CheckoutStyle";
import { getFireStore } from "../../../db/config";
import FormCheckout from "./FormCheckout";
import DetailProductsCart from "./DetailProductsCart";
import SaleConfirmed from "./SaleConfirmed";
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
      .then(({ id }) => setIdVenta(id))

      .then(() => document.getElementById("formCheckout").reset())

      .catch((e) => console.log(e));
  };
  useEffect(() => {
    setIdVenta("");
  }, []);
  return (
    <CheckoutStyle>
      {/* <DetailProductsCart /> */}

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
