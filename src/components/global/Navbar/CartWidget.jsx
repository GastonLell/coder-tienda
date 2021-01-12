import { Cart, Contador } from "./Style";
import { MdShoppingCart } from "react-icons/md";
import { Store } from "../../../store/CartContext";
import { useContext } from "react";
import getItemsAmount from '../../../helpers/cart/getItemsAmount';

const CartWidget = ({ openClosedCart }) => {
  const [data, setData] = useContext(Store);
  return (
    <Cart onClick={openClosedCart}>
      <MdShoppingCart />
      <Contador>{getItemsAmount(data.items)} </Contador>
    </Cart>
  );
};
export default CartWidget;
