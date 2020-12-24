import ProductDetail from './ProductDetail';
import aProducos from '../../assets/imagenes/aProductos';
import { useEffect, useState } from 'react';

const DetailContainer = () => {

    const [item, setItem] = useState([]);

    const getItems = new Promise((resolve, reject) => {
        if(!!aProducos){
            setTimeout(() => {
                resolve(aProducos[1])
            }, 2000)
        } else {
            reject("No hay productos disponibles...")
        }
    })
    
    useEffect(() => {
        getItems
        .then(rta => setItem(rta))
        .catch(rta => console.log(rta))            
    }, [])

    return (
        <ProductDetail item={item} />
    )
}
export default DetailContainer;