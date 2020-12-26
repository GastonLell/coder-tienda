import {ItemStyle} from './Style';
import {Link} from 'react-router-dom';

const Item = ({producto, precio, descripcion, imagenProducto, idProducto, category}) => {

    return(
        <ItemStyle>
            <Link className="link-route" to={`/${category}/${idProducto}`}>

            <img src={imagenProducto || "https://placehold.it/200x250" } alt="imagen producto"/>
            <div className="info">
                <h2 className="detalle-producto" >${precio}</h2>
                <h3 className="detalle-producto" >{producto}</h3>
                <h5 className="detalle-producto" >{descripcion}</h5>
            </div>
            </Link>
        </ItemStyle>
    )
}
export default Item;