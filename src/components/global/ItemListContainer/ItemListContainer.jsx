import ItemList from "./ItemList";
import Loading from "./../Loading/Loading";
import { useState, useEffect, useContext } from "react";
import { StoreProduct } from "../../../store/dbContext";

const ItemListContainer = ({ categoria }) => {
  const [items, setItems] = useState({});

  const [productos] = useContext(StoreProduct);

  const getProductsFromDB = () => {
    if (productos) {
      if (!!categoria) {
        let arrFiltrado = productos.filter(
          (item) => item.data.categoria === categoria
        );

        setItems(arrFiltrado);
      } else {
        let arrFiltrado = productos.filter(
          (item) => item.data.destacado === true
        );

        setItems(arrFiltrado);
      }
    }
  };

  useEffect(() => {
    getProductsFromDB();
  }, [categoria]);

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
