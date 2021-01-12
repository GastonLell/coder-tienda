import Cart from './Cart';
import {CartContStyle, FootCart, BtnFinalizar} from './CartStyle';
import {Store} from '../../../store/CartContext';
import {useContext, useEffect} from 'react';

const CartContainer = () => {

    const [data, setData] = useContext(Store);

    //funcion calcular total de la venta
    const totalVenta = () => {
        let resultado = 0;
        let subTotal;
        data.items.map((item, index) => {
            subTotal = item.precioProducto * data.cantidadItem[index];
            resultado += subTotal;
        })
        return resultado;
    }
    
    // funcion eliminar item cart, pasando id del producto y id de la venta
    const removeItem = async (id, idVenta) => {
        //creo nuevo array sin el producto eliminado
        const arrayEditado = data.items.filter((item) => item.idProducto !== id )
        //primero agrego el nuevo array de productos al estado y descuento la cantidad de productos
        //que fueron agregados a la cantidad general
        await setData({
            ...data,
            items: arrayEditado,
            cantidad: data.cantidad - data.cantidadItem[idVenta],
        })
        //luego elimino la cantidad de cada producto de su array, con el id del mismo
        await setData({
            ...data,
            cantidadItem: data.cantidadItem.splice(idVenta, 1)
        })
    }
    // cada vez que cambie un item se va a ir modificando el precio total
    useEffect(() => {
        let num = totalVenta();
        setData({
            ...data,
            totalVenta: num
        })
    }, [data.items])

    return (
        <CartContStyle>
            <h2 className="count-carrito">Tu carrito ({data.cantidad})</h2>

            {
                !!data.items &&
                data.items.map((item, index) => <Cart 
                                                    item={item} 
                                                    cantidadItem={data.cantidadItem[index]}
                                                    idVenta={index} 
                                                    removeItem={removeItem}
                                                />
                )
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