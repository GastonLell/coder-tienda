import { ItemStyle } from "./Style";
import { Link } from "react-router-dom";

const Item = ({
  nombre,
  precio,
  descripcion,
  imagen,
  idProducto,
  categoria,
}) => {
  return (
    <ItemStyle>
      <Link className="link-route" to={`/${categoria}/${idProducto}`}>
        <img
          src={imagen || "https://placehold.it/200x250"}
          alt="imagen producto"
        />

        <div className="info">
          <h2 className="detalle-producto">${precio}</h2>
          <h3 className="detalle-producto">{nombre}</h3>
          <h5 className="detalle-producto">{descripcion}</h5>
        </div>
      </Link>
    </ItemStyle>
  );
};
export default Item;
