
import {AddCart} from './Style';
import { MdShoppingCart } from "react-icons/md";

const AddToCart = ({handleClickCart}) => {
    return (
        <AddCart onClick={handleClickCart} >
            <MdShoppingCart/>
        </AddCart>
    )
}
export default AddToCart;