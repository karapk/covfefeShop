// import React from 'react';
import './App.css'
import React, { useState } from 'react'
import Home from './pages/Home'
import {
  BrowserRouter as Router,
  Routes, 
  Route,
  // createBrowserRouter,
  // RouterProvider,
} from "react-router-dom";
// import Layout from './components/Layout'
import AboutUs from './pages/AboutUs';
import Navbar from './components/Navbar';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout/>,

//     children: [
//       {path:"", element: <Home />},
//       {path: "AboutUs",element:<AboutUs/> },
//     ]
//   }
// ]);

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cartVisible, setCartVisible] = useState(false);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((cartItem) => cartItem.item === item.item);
      if (existingItem) {
        return prevItems.map((cartItem) =>
          cartItem.item === item.item ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  const toggleCart = () => {
    setCartVisible(!cartVisible);
  };
  return (
    <>
     <Router>
      <Navbar toggleCart={toggleCart} cartVisible={cartVisible} cartItems={cartItems} />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
       <Route path="aboutUs" element={<AboutUs/>} /> 
      </Routes>
    </Router>
    </>
  );
}

export default App;