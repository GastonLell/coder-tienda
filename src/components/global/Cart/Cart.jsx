import {CartStyle, Delete} from './CartStyle';
import CountContainer from '../Count/CountContainer';

const Cart = ({item, cantidadItem}) => {
    return(
        <CartStyle>
            <div className="detalle">
                <img src="https://placehold.it/100x120" alt="imagen-producto"/>
                <div className="info">
                    <h2>{item.nombreProducto}</h2>
                    <h3>${item.precioProducto}</h3>
                </div>
            </div>
            <div className="count">
                {/* contador: le paso la cantidad seleccionada del item
                para poder agregarle esa cantidad en cart */}
                <CountContainer cantidadItem={cantidadItem} stock={item.stock}/>
                {
                    !!item.stock > 1 ? <span>1 elemento disponible</span> : <span>{item.stock} elementos disponibles</span>
                }
            </div>
            <div className="sub-total">
                ${item.precioProducto * cantidadItem}
            </div>
            <Delete onClick={() => alert("hola!")}>X</Delete> 
        </CartStyle>
    )
    
}
export default Cart;