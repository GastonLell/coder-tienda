import ItemList from "./ItemList";
import Loading from "./../Loading/Loading";
import { useState, useEffect, useContext } from "react";
// import aProductos from '../../../assets/imagenes/aProductos';
import { useParams } from "react-router-dom";
import { getFireStore } from "../../../db/config";

const ItemListContainer = () => {
  const db = getFireStore();
  const [productos, setProductos] = useState([]);
  const { categoria } = useParams();

  const getProductsFromDB = () => {
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
    getProductsFromDB();
  }, []);
  return (
    <>
      {productos.length ? (
        <ItemList
          categoria={
            !!categoria ? `Productos de ${categoria}` : "Productos destacados"
          }
          productos={productos}
        />
      ) : (
        <Loading />
      )}
    </>
  );
};

export default ItemListContainer;

/*     const getProducts = new Promise((resolve, reject) => {

        if(aProductos) {
            if(!!category){
                const productosCategory = aProductos.filter(producto => producto.categoria == category)
                setTimeout(() => {
                    resolve(productosCategory);
                }, 500) 
            } else {
                setTimeout(()=> {
                    let destacados = aProductos.filter(producto => producto.destacado === true)
                    resolve(destacados);
                }, 500)
            } 
            
        } else {
            reject('No hay productos disponibles...')
        }
    }) 
    

    useEffect(() => {
        getProducts
        .then(rta => {setProductos(rta)})
        .catch(error => console.log(error))
    }, [category])
*/
