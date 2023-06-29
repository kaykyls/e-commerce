import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';
import Cart from './pages/cart/Cart';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Product from './pages/product/Product';
import Register from './pages/register/Register';
import Checkout from './pages/checkout/Checkout';
import Account from './pages/account/Account';
import { useLocation } from 'react-router-dom';

const Router = () => {
  const {pathname} = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product/:id" element={<Product/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/register" element={<Register fromLogin={false}/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/account" element={<Account/>}/>
      </Routes>
  )
}

export default Router