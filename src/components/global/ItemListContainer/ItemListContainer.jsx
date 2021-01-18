import ItemList from "./ItemList";
import Loading from "./../Loading/Loading";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { StoreProduct } from "../../../store/dbContext";

const ItemListContainer = () => {
  const [items, setItems] = useState({});
  const { categoria } = useParams();

  const [productos, setProductos] = useContext(StoreProduct);

  const getProductsFromDB = () => {
    if (productos) {
      console.log(productos);
      if (!!categoria) {
        let arrFiltrado = productos.filter(
          (item) => item.data.categoria == categoria
        );
        setItems(arrFiltrado);
      } else {
        let arrFiltrado = productos.filter(
          (item) => item.data.destacado == true
        );
        setItems(arrFiltrado);
      }
    }
  };

  useEffect(() => {
    getProductsFromDB();
    console.log("console de itemlistcontainer");
  }, []);
  return (
    <>
      {items.length ? (
        <ItemList
          categoria={
            !!categoria ? `Productos de ${categoria}` : "Productos destacados"
          }
          productos={items}
        />
      ) : (
        <Loading />
      )}
    </>
  );
};

export default ItemListContainer;
