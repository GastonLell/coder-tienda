import Cart from './Cart';
import {CartContStyle, FootCart, BtnFinalizar} from './CartStyle';
import {Store} from '../../../store/CartContext';
import {useContext, useEffect} from 'react';

const CartContainer = () => {
    const [data, setData] = useContext(Store);
    const totalVenta = () => {
        let resultado = 0;
        let subTotal;
        data.items.map((item, index) => {
            subTotal = item.precioProducto * data.cantidadItem[index];
            resultado += subTotal;
        })
        return resultado;
    }
    useEffect(() => {
        let num = totalVenta();
        setData({
            ...data,
            totalVenta: num
        })
    }, [])
    return (
        <CartContStyle>
            <h2 className="count-carrito">Tu carrito ({data.cantidad})</h2>
            {
                !!data.items &&
                data.items.map((item, index) => <Cart item={item} cantidadItem={data.cantidadItem[index]} idVenta={index} />)
            }
            <FootCart>
                <h2>Total</h2>
                <span>
                    {
                        data.totalVenta ? `$ ${data.totalVenta}` : "No hay producto/s seleccionado/s"
                    }
                </span>
            </FootCart>
            <FootCart>
                <BtnFinalizar className="btn-mas">Elegir mas productos</BtnFinalizar>
                <BtnFinalizar>Finalizar compra</BtnFinalizar>
            </FootCart>
        </CartContStyle>
    )
}
export default CartContainer;