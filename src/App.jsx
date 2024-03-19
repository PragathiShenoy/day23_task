import React, { useState } from 'react';
import AppRoutes from './Components/Front/Routes/Routes';
import { BrowserRouter as Router } from 'react-router-dom';
import Data from "./Components/Back/Data/Data";
import Header from './Components/Front/header/Header';
import Footer from './Components/Footer/Footer';

const App = () => {
  const { productItems } = Data;
  const [cartItems, setCartItems] = useState([]);

  const handleAddProduct = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist) {
      setCartItems(cartItems.map((item) => item.id === product.id ? { ...productExist, quantity: productExist.quantity + 1 } : item));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  }

  const handleRemoveProduct = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ?
            { ...productExist, quantity: productExist.quantity - 1 } :
            item
        )
      );
    }
  }

  const handleCartClearance = () => {
    setCartItems([]);
  };

  return (
    <div>
      <Router>
        <Header cartItems={cartItems} />
        <AppRoutes productItems={productItems} cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleCartClearance={handleCartClearance} />
        <Footer />
      </Router>
    </div>
  );
};



export default App;
