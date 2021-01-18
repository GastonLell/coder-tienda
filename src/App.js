import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CartContext from "./store/CartContext";
import DBContext from "./store/dbContext";
import Navbar from "./components/global/Navbar/Navbar";
import Home from "./components/containers/Home/Home";
import ItemListContainer from "./components/global/ItemListContainer/ItemListContainer";
import DetailContainer from "./components/Detail/DetailContainer";
import CartContainer from "./components/global/Cart/CartContainer";
import Checkout from "./components/global/Checkout/CheckoutContainer";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <DBContext>
          <CartContext>
            <Navbar />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/cart">
                <CartContainer />
              </Route>
              <Route exact path="/checkout">
                <Checkout />
              </Route>
              <Route exact path="/:categoria">
                <ItemListContainer />
              </Route>
              <Route exact path="/:categoria/:idProducto">
                <DetailContainer />
              </Route>
            </Switch>
          </CartContext>
        </DBContext>
      </BrowserRouter>
    </div>
  );
}

export default App;
