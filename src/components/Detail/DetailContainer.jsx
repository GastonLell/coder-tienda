import ProductDetail from "./ProductDetail";
import { useEffect, useState, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Store } from "../../store/CartContext";
import { getFireStore } from "../../db/config";

const DetailContainer = () => {
  const db = getFireStore();
  const { idProducto } = useParams();
  const [producto, setProducto] = useState({});
  const [data] = useContext(Store);
  const history = useHistory();

  const handleRedirect = () => {
    history.push("/cart");
  };
  useEffect(() => {
    db.collection("productos")
      .doc(idProducto)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setProducto({ data: doc.data(), id: doc.id });
        }
      })
      .catch((e) => console.log(`error en DetailContainer ${e}`));
  }, []);

  return <ProductDetail producto={producto} handleRedirect={handleRedirect} />;
};
export default DetailContainer;

//promesa buscando producto en array de productos y guardo en el estado de items
/*   const getItems = new Promise((resolve, reject) => {
    if (!!aProducos) {
      setTimeout(() => {
        const productoSeleccionado = aProducos.find(
          (producto) => producto.idProducto == idProducto
        );

        resolve(productoSeleccionado);
      }, 100);
    } else {
      reject("No hay productos disponibles...");
    }
  }); 

  useEffect(() => {
    getItems
      .then((res) => {
        const cartItem = data.items.find(
          ({ idProducto }) => idProducto === res.idProducto
        );
        setItem({ ...res, amount: cartItem ? cartItem.amount : 1 });
      })
      .catch((err) => console.log(err));
  }, []);
  */
