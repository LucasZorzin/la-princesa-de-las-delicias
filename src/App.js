import './App.scss';
import Navbar from './components/Navbar/Navbar.jsx';
import Home from './components/Home/Home.jsx';
import Products from './components/Products/Products';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Products/>
      {/* <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> */}
    </div>
  );
}

export default App;
