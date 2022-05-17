import React from 'react'
import './App.css';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import ProductList from './components/ProductList/ProductList';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
            <Route path='/' exact element={<ProductList/>}></Route>
            <Route path='/product/:productID' element={<ProductDetail/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
