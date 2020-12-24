import ItemList from './ItemList';
import {useState, useEffect} from 'react';
import aProductos from '../../../assets/imagenes/aProductos';

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);

    const getProducts = new Promise((resolve, reject) => {
        if(aProductos) {
            setTimeout(()=> {
                resolve(aProductos);
            }, 2000)
        } else {
            reject('No hay productos disponibles...')
        }
    })
    useEffect(() => {
        getProducts
        .then(rta => {setProductos(rta)})
        .catch(error => console.log(error))
    }, [])

    return(       
        
        <>
            {productos.length ? 
                <ItemList categoria="Productos destacados" productos={productos} /> : 
                <p>Cargando productos...</p>
            }
        </>
    )
}

export default ItemListContainer;