import {CartStyle, Delete} from './CartStyle';
import Count from '../CountAndCart/Count';

const Cart = () => {
    return(        
        <CartStyle>
            <div className="detalle">
                <img src="https://placehold.it/100x120" alt="imagen-producto"/>
                <div className="info">
                    <h2>Ukelele soprano Bamboo Rojo con funda</h2>
                    <h3>$2450</h3>
                </div>
            </div>
            <div className="count"> 
                <Count count={2} />
                <span>4 disponibles</span>
            </div>
            <div className="sub-total">
                $4900
            </div>
            <Delete onClick={() => alert("hola Santi!")}>X</Delete> 
        </CartStyle>
    )
    
}
export default Cart;