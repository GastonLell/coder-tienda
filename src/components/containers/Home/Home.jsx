import ItemList from '../../global/ItemListContainer/ItemList';
import './HomeStyled';
import aProductos from '../../../assets/imagenes/aProductos';
import { Subtitulo, Destacados } from './HomeStyled';

const Home = () => {
    return (
        <>

            <section>
                <Subtitulo>Productos destacados</Subtitulo>

                <Destacados>
                    {
                        aProductos.map(producto =>  <ItemList producto={producto.nombreProducto} precio={producto.precioProducto} descripcion={producto.detalleProducto} imagenProducto={producto.imagenProducto} /> )
                    }
                </Destacados>
            </section>

        </>
    )
}
export default Home;