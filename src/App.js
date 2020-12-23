import './App.css';
import Navbar from './components/global/Navbar/Navbar';
import ItemListContainer from './components/global/ItemListContainer/ItemListContainer';
import DetailContainer from './components/Detail/DetailContainer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      {<ItemListContainer/>}
      <DetailContainer/>
    </div>
  );
}

export default App;
