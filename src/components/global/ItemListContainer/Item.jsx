import {ItemStyle, AlertMessage} from './Style';
import CountContainer from './CountContainer';

const Item = ({producto, precio, descripcion, imagenProducto, stock}) => {

    return(
        <ItemStyle>
            <img src={imagenProducto || "https://placehold.it/200x310" } alt="imagen producto"/>
            <div className="info">
                <h2 className="detalle-producto" >{producto}</h2>
                <h5 className="detalle-producto" >{descripcion}</h5>
                <h3 className="detalle-producto" >${precio}</h3>
            </div>
            <CountContainer stock={stock} />
        </ItemStyle>
    )
}
export default Item;