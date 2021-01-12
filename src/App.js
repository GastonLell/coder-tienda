import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import CartContext from './store/CartContext';

import Navbar from './components/global/Navbar/Navbar';
import Home from './components/containers/Home/Home';
import ItemListContainer from './components/global/ItemListContainer/ItemListContainer';
import DetailContainer from './components/Detail/DetailContainer';
import CartContainer from './components/global/Cart/CartContainer';

function App() {

  return (
      <div className="App">
      <CartContext>
        <BrowserRouter>
        <Navbar/>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/cart">
              <CartContainer/>
            </Route>
            <Route exact path="/:category">
              <ItemListContainer/>
            </Route>
            <Route exact path="/:category/:idProducto">
              <DetailContainer/>
            </Route>
          </Switch>
        </BrowserRouter>
      </CartContext>
      </div>
  );
}

export default App;
