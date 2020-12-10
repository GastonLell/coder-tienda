import ItemList from '../global/ItemListContainer/ItemList';
import aProductos from '../../assets/imagenes/aProductos';

const Home = () => {
    return (
        <>
            {
                aProductos.map(producto =>  <ItemList producto={producto.nombreProducto} precio={producto.precioProducto} descripcion={producto.detalleProducto} imagenProducto={producto.imagenProducto} /> )
            }
        </>
    )
}
export default Home;