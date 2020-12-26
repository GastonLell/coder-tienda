import './App.css';
import Navbar from './components/global/Navbar/Navbar';
import ItemListContainer from './components/global/ItemListContainer/ItemListContainer';
import DetailContainer from './components/Detail/DetailContainer';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (

      <div className="App">
        <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <ItemListContainer/>
          </Route>
          <Route exact path="/:category">
            <ItemListContainer/>
          </Route>
          <Route exact path="/:category/:idProducto">
            <DetailContainer/>
          </Route>
        </Switch>
      </BrowserRouter>

      </div>
  );
}

export default App;
