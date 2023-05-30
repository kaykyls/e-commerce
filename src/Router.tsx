import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Cart from './pages/cart/Cart';
import Home from './pages/home/Home';
import Product from './pages/product/Product';

const Router = () => {
  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product/:id" element={<Product/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
  )
}

export default Router