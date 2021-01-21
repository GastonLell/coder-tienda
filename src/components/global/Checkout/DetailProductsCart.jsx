import { DetailProductsCartStyle } from "./CheckoutStyle";

const DetailProductsCart = () => {
  /* probar hacer lista en vez de etiqueta */
  return (
    <DetailProductsCartStyle>
      <img src="https://placehold.it/100x150" alt="detalle imagen" />
      <h4>nombre producto</h4>
      <h4>precio</h4>
    </DetailProductsCartStyle>
  );
};
export default DetailProductsCart;
