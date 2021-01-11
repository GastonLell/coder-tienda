import './App.css';
import {useState} from 'react';
import Navbar from './components/global/Navbar/Navbar';
import Home from './components/containers/Home/Home';
import ItemListContainer from './components/global/ItemListContainer/ItemListContainer';
import DetailContainer from './components/Detail/DetailContainer';
import CartContainer from './components/global/Cart/CartContainer';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Store} from './store/ProductContext';

function App() {
  const [data, setData] = useState({
    items: [],
    cantidad: 0,
    countGlobal: 0
  })

  return (
      <div className="App">
        <Store.Provider value={[data, setData]}>
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
      </Store.Provider>
      </div>
  );
}

export default App;
