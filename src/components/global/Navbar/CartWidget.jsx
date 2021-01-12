import {Cart, Contador} from './Style'
import { MdShoppingCart } from "react-icons/md";
import {Store} from '../../../store/CartContext';
import {useContext} from 'react';

const CartWidget = ({openClosedCart}) => {
    const [data, setData] = useContext(Store)
    return(
        <Cart onClick={openClosedCart}>
            <MdShoppingCart/>
            <Contador>{data.cantidad} </Contador>
        </Cart>
    )
}
export default CartWidget;