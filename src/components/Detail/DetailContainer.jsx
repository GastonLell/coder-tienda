import ProductDetail from "./ProductDetail";
import aProducos from "../../assets/imagenes/aProductos";
import { useEffect, useState, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Store } from "../../store/CartContext";

const DetailContainer = () => {
  //tomo el id del producto para mostrar
  const { idProducto } = useParams();

  // estado para guardar el items y mostrar
  const [item, setItem] = useState({});

  //estado global de la app
  const [data] = useContext(Store);

  //para redireccionar la pagina sin recargar
  const history = useHistory();

  //funcion para redireccionar a cart
  const handleRedirect = () => {
    history.push("/cart");
  };

  //promesa buscando producto en array de productos y guardo en el estado de items
  const getItems = new Promise((resolve, reject) => {
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

  return <ProductDetail item={item} handleRedirect={handleRedirect} />;
};
export default DetailContainer;
