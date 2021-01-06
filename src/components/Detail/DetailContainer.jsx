import ProductDetail from './ProductDetail';
import aProducos from '../../assets/imagenes/aProductos';
import { useEffect, useState } from 'react';
import {useParams, useHistory} from 'react-router-dom';

const DetailContainer = () => {

    const {idProducto} = useParams();

    const [item, setItem] = useState([]);

    const history = useHistory();

    const handleRedirect = () => {
        history.push("/cart")
    }

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
        <ProductDetail 
            item={item}
            handleRedirect={handleRedirect}
        />
    )
}
export default DetailContainer;