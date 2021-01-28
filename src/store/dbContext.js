import { createContext, useState, useEffect } from "react";
import { getFireStore } from "../db/config";

export const StoreProduct = createContext();
const db = getFireStore();

const DBContext = ({ children }) => {
  const [productos, setProductos] = useState([]);
  const getProducts = () => {
    db.collection("productos")
      .get()
      .then((docs) => {
        let arr = [];
        docs.forEach((doc) => {
          arr.push({ data: doc.data(), id: doc.id });
        });
        setProductos(arr);
      })
      .catch((e) => console.log(e));
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <StoreProduct.Provider value={[productos, setProductos]}>
        {children}
      </StoreProduct.Provider>
    </>
  );
};

export default DBContext;
