import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Navbar from './components/Navbar';
import ShoppingCart from './components/ShoppingCart';

function App() {
  const [cartVisible, setCartVisible] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const toggleCart = () => {
    setCartVisible(!cartVisible);
  };

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevItems.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  return (
    <Router>
      <Navbar toggleCart={toggleCart} cartItems={cartItems} /> {/* Pass toggleCart and cartItems to Navbar */}
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} /> {/* Pass addToCart to Home */}
        <Route path="/aboutUS" element={<AboutUs />} />
      </Routes>
      {cartVisible && (
        <ShoppingCart cartItems={cartItems} toggleCart={toggleCart} /> /* Conditionally render ShoppingCart */
      )}
    </Router>
  );
}

export default App;
  