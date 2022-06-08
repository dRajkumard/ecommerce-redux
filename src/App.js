
import './App.css';
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Header from './containers/Header';
// import ProductComponent from './containers/ProductComponent';
import ProductDetail from './containers/ProductDetail';
import ProductLisiting from './containers/ProductLisiting';


function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <Routes>
      <Route path="/"  exact element={<ProductLisiting/>}/>
      <Route path="/product/:productId" exact element={<ProductDetail/>}/>
      <Route>404 Not fount</Route>
      </Routes>
      </Router>
    
    </div>
  );
}

export default App;
