import {Cart, Contador} from './Styled'
import { MdShoppingCart } from "react-icons/md";

const CartWidget = ({openClosedCart}) => {

    return(
        <Cart onClick={openClosedCart}>
            <MdShoppingCart/>
            <Contador>0</Contador>
        </Cart>
    )
}
export default CartWidget;