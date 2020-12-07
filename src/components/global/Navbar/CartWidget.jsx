import {Cart} from './Styled'
import { MdShoppingCart } from "react-icons/md";

const CartWidget = ({openClosedCart}) => {

    return(
        <Cart onClick={openClosedCart}>
            <MdShoppingCart/>
        </Cart>
    )
}
export default CartWidget;