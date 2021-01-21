import { SaleConfirmedStyle } from "./CheckoutStyle";

const SaleConfirmed = ({ idVenta }) => {
  return (
    <SaleConfirmedStyle>
      <h2>
        Su compra ah sido exitosa! Su numero de seguimiento es: {idVenta}{" "}
      </h2>
    </SaleConfirmedStyle>
  );
};
export default SaleConfirmed;
