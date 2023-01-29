import React from 'react';
import BasketPage from './Pages/BasketPage/BasketPage';
import ProductsPage from './Pages/ProductsPage/ProductsPage';
import LoginPage from './Pages/LoginPage/LoginPage';
import GoodsPage from './Pages/GoodsPage/GoodsPage';
import RegisterPage from './Pages/RegisterPage/RegisterPage';
import { Routes, Route, Navigate } from "react-router-dom"
import './App.css';

export const routes = {
  menu: '/',
  cart: '/cart',
  login: '/login',
  goods: '/goods',
  register: '/register'
}

function App() {

  return (
    <Routes>
      <Route path={routes.menu} exact={true} element={<ProductsPage />} />
      <Route path={routes.cart} exact={true} element={<BasketPage />} />
      <Route path={routes.login} exact={true} element={<LoginPage />} />
      <Route path={routes.register} exact={true} element={<RegisterPage />} />
      <Route path="/goods/:id" exact={true} element={<GoodsPage />} />
      <Route path="*" element={<Navigate to={routes.menu} replace />}/>
    </Routes>
  );
}

export default App;
