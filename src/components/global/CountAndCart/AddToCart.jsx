import {AddCartStyle} from './CountStyled';

const AddToCart = ({handleClickCart, handleRedirect}) => {

    return (
        <>
        <AddCartStyle onClick={handleClickCart} >
            Agregar al carrito
        </AddCartStyle>
        <AddCartStyle onClick={handleRedirect}>
            Ir al carrito
        </AddCartStyle>
        </>
    )
}
export default AddToCart;