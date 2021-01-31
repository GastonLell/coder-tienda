import { BrowserRouter, Route, Switch } from "react-router-dom";

import CartContext from "./store/CartContext";
import DBContext from "./store/dbContext";

//  Routes components
import Navbar from "./components/global/Navbar/Navbar";
import Home from "./components/containers/Home/Home";
import Category from "./components/containers/Category/Category";
import Detail from "./components/containers/Detail/Detail";
import Cart from "./components/containers/Cart/Cart";
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
            <Detail />
          </Route>
        </Switch>

        <Footer />
      </CartContext>
    </DBContext>
  </BrowserRouter>
);

export default Routes;
