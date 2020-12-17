import './App.css';
import Navbar from './components/global/Navbar/Navbar';
import ItemListContainer from './components/global/ItemListContainer/ItemListContainer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer/>
    </div>
  );
}

export default App;
