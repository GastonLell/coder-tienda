import ProductDetail from './ProductDetail';
import aProducos from '../../assets/imagenes/aProductos';
import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';

const DetailContainer = () => {
    const {idProducto} = useParams();

    const [item, setItem] = useState([]);

    const getItems = new Promise((resolve, reject) => {
        if(!!aProducos){
            setTimeout(() => {
                const productoSeleccionado = aProducos.find(producto => producto.idProducto == idProducto)

                resolve(productoSeleccionado)
            }, 100)
        } else {
            reject("No hay productos disponibles...")
        }
    })
    
    useEffect(() => {
        getItems
        .then(rta => setItem(rta))
        .catch(rta => console.log(rta))            
    }, [item])

    return (
        <ProductDetail item={item} />
    )
}
export default DetailContainer;