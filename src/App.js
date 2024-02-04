import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import './App.css';
import SignIn from './pages/SignIn';
import Register from './pages/Register';
import MyAccount from './pages/MyAccount';
import ProductDetails from './pages/ProductDetails';
import { CartProvider } from 'react-use-cart';

const App = () => {
  return (
    <>
      <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/register' element={<Register />} />
          <Route path='/my-account' element={<MyAccount/>} />
          <Route path='/product-details/:id' element={<ProductDetails/>} />

        </Routes>
        </CartProvider>

      </BrowserRouter>


    </>
  )
}

export default App;

