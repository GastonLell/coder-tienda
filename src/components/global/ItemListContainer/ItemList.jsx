import Item from "./Item";
import { ItemListStyle, Subtitle } from "./Style";

// paso por props el nombre de la categoria y el array de productos
const ItemList = ({ categoria, productos }) => {
  return (
    <ItemListStyle>
      {/* le doy el nombre de la categoria */}
      <Subtitle>{categoria}</Subtitle>

      {/* dentro del div productos recorro el array para imprimir una lista productos
            pasando por props cada producto al componente item*/}
      <div className="productos">
        {productos.map((item) => (
          <Item
            idProducto={item.id}
            nombre={item.data.nombre}
            precio={item.data.precio}
            descripcion={item.data.detalle}
            imagen={item.data.imagen}
            categoria={item.data.categoria}
            stock={item.data.stock}
            key={item.id}
          />
        ))}
      </div>
    </ItemListStyle>
  );
};

export default ItemList;
