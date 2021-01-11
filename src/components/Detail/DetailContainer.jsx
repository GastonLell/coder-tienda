import ProductDetail from './ProductDetail';
import aProducos from '../../assets/imagenes/aProductos';
import { useEffect, useState, useContext } from 'react';
import {useParams, useHistory} from 'react-router-dom';
import {Store} from '../../store/ProductContext';

const DetailContainer = () => {
    //tomo el id del producto para mostrar
    const {idProducto} = useParams();

    // estado para guardar el items y mostrar
    const [item, setItem] = useState([]);

    //estado global de la app
    const [data, setData] = useContext(Store);        
    
    //para redireccionar la pagina sin recargar
    const history = useHistory();

    //funcion para redireccionar a cart
    const handleRedirect = () => {
        history.push("/cart")
    }

    //promesa buscando producto en array de productos y guardo en el estado de items
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