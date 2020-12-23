import {ItemStyle} from './Style';
import CountContainer from '../CountAndCart/CountContainer';

const Item = ({producto, precio, descripcion, imagenProducto, stock}) => {

    return(
        <ItemStyle>
            <img src={imagenProducto || "https://placehold.it/200x310" } alt="imagen producto"/>
            <div className="info">
                <h2 className="detalle-producto" >${precio}</h2>
                <h3 className="detalle-producto" >{producto}</h3>
                <h5 className="detalle-producto" >{descripcion}</h5>
            </div>
        </ItemStyle>
    )
}
export default Item;