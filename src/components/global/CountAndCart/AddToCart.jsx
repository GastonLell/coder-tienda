import {AddCartStyle} from './CountStyled';
import { MdShoppingCart } from "react-icons/md";

const AddToCart = ({handleClickCart}) => {

    return (
        <AddCartStyle onClick={handleClickCart} >
            Agregar al carrito
        </AddCartStyle>
    )
}
export default AddToCart;