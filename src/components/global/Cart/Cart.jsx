import {CartStyle, Delete} from './CartStyle';
import Count from '../Count/CountContainer';

const Cart = ({item}) => {
    return(        
        <CartStyle>
            <div className="detalle">
                <img src="https://placehold.it/100x120" alt="imagen-producto"/>
                <div className="info">
                    <h2>{item.nombre}</h2>
                    <h3>${item.precio}</h3>
                </div>
            </div>
            <div className="count"> 
                <Count count={item.count} stock={item.stock}/>
                {
                    item.stock > 1 ? <span>1 elemento disponible</span> : <span>{item.stock} elementos disponibles</span>
                }
            </div>
            <div className="sub-total">
                {item.precio}
            </div>
            <Delete onClick={() => alert("hola Santi!")}>X</Delete> 
        </CartStyle>
    )
    
}
export default Cart;