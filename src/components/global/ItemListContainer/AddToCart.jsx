import {AddCartStyle} from './Style';
import { MdShoppingCart } from "react-icons/md";

const AddToCart = ({handleClickCart}) => {

    return (
        <AddCartStyle onClick={handleClickCart} >
            <MdShoppingCart/>
        </AddCartStyle>
    )
}
export default AddToCart;