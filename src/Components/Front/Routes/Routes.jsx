import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Products from '../Products/Products';
import Signup from '../Signup/Signup';
import Cart from '../Cart/Cart';

const AppRoutes = ({ productItems, cartItems, handleAddProduct, handleRemoveProduct, handleCartClearance }) => {
  return (
    <Routes>
      <Route path='/' element={<Products productItems={productItems} handleAddProduct={handleAddProduct} />} />
      <Route path='/SignUp' element={<Signup />} />
      <Route path='/Cart' element={<Cart cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleCartClearance={handleCartClearance} />} />
    </Routes>
  );
}

export default AppRoutes;
