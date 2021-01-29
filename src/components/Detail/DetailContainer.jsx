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
      let productoFiltrado = productos.filter((item) => item.id == idProducto);
      setProducto(productoFiltrado[0]);
    }
  };
  //para mostrar la cantidad ya agregada al count
  const cantAmount = data.items.find(({ id }) => id === idProducto);
  useEffect(() => {
    getProductById();
  }, []);
  return (
    <>
      {productos ? (
        <ProductDetail
          producto={producto}
          handleRedirect={handleRedirect}
          //amount={cantAmount?.amount}
        />
      ) : (
        <Loading />
      )}
    </>
  );
};
export default DetailContainer;
