import ProductDetail from "./ProductDetail";
import Loading from "../global/Loading/Loading";
import { useEffect, useState, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Store } from "../../store/CartContext";
import { StoreProduct } from "../../store/dbContext";

const DetailContainer = () => {
  const [producto, setProducto] = useState({});
  const [productos, setProductos] = useContext(StoreProduct);
  const [data] = useContext(Store);
  const history = useHistory();
  const { idProducto } = useParams();

  const handleRedirect = () => {
    history.push("/cart");
  };
  const getProductById = () => {
    if (!!productos) {
      console.log("detailcontainerfuncion");
      let productoFiltrado = productos.filter((item) => item.id == idProducto);
      setProducto({ productoFiltrado });
    }
  };

  useEffect(() => {
    getProductById();
    console.log("detail container use effect");
  }, []);
  return (
    <>
      <h1>Detail container</h1>
      {productos ? (
        <ProductDetail producto={producto} handleRedirect={handleRedirect} />
      ) : (
        <Loading />
      )}
    </>
  );
};
export default DetailContainer;

/*

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
