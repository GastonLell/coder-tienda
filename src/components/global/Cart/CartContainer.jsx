import Cart from './Cart';
import {CartContStyle, FootCart, BtnFinalizar} from './CartStyle';
import {Store} from '../../../store/ProductContext';
import {useContext} from 'react';

const CartContainer = () => {
    const [data, setData] = useContext(Store);

    return (
        <CartContStyle>
            <h2 className="count-carrito">Tu carrito ({data.cantidad})</h2>
            {
                data.items &&
                data.items.map(item => <Cart item={item}/>)
            }
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