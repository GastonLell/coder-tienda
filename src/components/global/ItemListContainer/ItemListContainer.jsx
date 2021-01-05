import ItemList from './ItemList';
import Loading from './../Loading/Loading';
import {useState, useEffect} from 'react';
import aProductos from '../../../assets/imagenes/aProductos';
import {useParams} from 'react-router-dom';

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const {category} = useParams();

    const getProducts = new Promise((resolve, reject) => {

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

    return(       
        
        <>
            {productos.length ? 
                <ItemList 
                    categoria={!!category ? `Productos de ${category}` : "Productos destacados"} 
                    productos={productos} /> : 
                <Loading/>
            }
        </>
    )
}

export default ItemListContainer;