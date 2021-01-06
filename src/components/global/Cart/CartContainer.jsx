import Cart from './Cart';
import {CartContStyle, FootCart, BtnFinalizar} from './CartStyle';

const CartContainer = () => {

    return (
        <CartContStyle>
            <h2 className="count-carrito">Tu carrito (2)</h2>
            <Cart/>
            <Cart/>
            <FootCart>
                <h2>Total</h2>
                <span>$4900</span>
            </FootCart>
            <FootCart>
                <BtnFinalizar className="btn-mas">Elegir mas productos</BtnFinalizar>
                <BtnFinalizar>Finalizar compra</BtnFinalizar>
            </FootCart>
        </CartContStyle>
    )
}
export default CartContainer;