import Item from './Item';
import {ItemListStyle, Subtitle} from './Style';

// paso por props el nombre de la categoria y el array de productos
const ItemList = ({categoria, productos}) => {

    return (
        <ItemListStyle>
            {/* le doy el nombre de la categoria */}
            <Subtitle>{categoria}</Subtitle>

            {/* dentro del div productos recorro el array para imprimir una lista productos
            pasando por props cada producto al componente item*/}
            <div className="productos">
            {
                productos.map((producto, index) =>  <Item
                    producto={producto.nombreProducto} 
                    precio={producto.precioProducto}
                    descripcion={producto.detalleProducto} 
                    imagenProducto={producto.imagenProducto} 
                    stock={producto.stock}
                    key={index}
                    />
                )
            }
            </div>
        </ItemListStyle>
    )
}

export default ItemList;