import Item from './Item';
import aProductos from '../../../assets/imagenes/aProductos';
import {ItemListStyle, Subtitle} from './Style';

const ItemList = ({categoria}) => {

    return (
        <ItemListStyle>
            <Subtitle>{categoria}</Subtitle>
            <div className="productos">
            {
                aProductos.map(producto =>  <Item producto={producto.nombreProducto} precio={producto.precioProducto} descripcion={producto.detalleProducto} imagenProducto={producto.imagenProducto} /> )
            }
            </div>
        </ItemListStyle>
    )
}

export default ItemList;