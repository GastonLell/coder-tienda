import { BrowserRouter, Route, Switch } from "react-router-dom";

import CartContext from "./store/CartContext";
import DBContext from "./store/dbContext";

//  Routes components
import Navbar from "./components/global/Navbar/Navbar";
import Home from "./components/containers/Home/Home";
import Category from "./components/global/Category/Category";
import DetailContainer from "./components/Detail/DetailContainer";
import Cart from "./components/global/Cart/Cart";
import Checkout from "./components/global/Checkout/CheckoutContainer";
import Footer from "./components/global/Footer/Footer";

const Routes = () => (
  <BrowserRouter>
    <DBContext>
      <CartContext>
        <Navbar />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/cart">
            <Cart />
          </Route>

          <Route exact path="/checkout">
            <Checkout />
          </Route>

          <Route exact path="/:categoria">
            <Category />
          </Route>

          <Route exact path="/:categoria/:idProducto">
            <DetailContainer />
          </Route>
        </Switch>

        <Footer />
      </CartContext>
    </DBContext>
  </BrowserRouter>
);

export default Routes;
