import React, { useState, useEffect } from 'react';
import MenuItem from './MenuItem';
import { covfefeMenuItems, covfefeDessertItems } from '../covfefeData';
import Navbar from './Navbar';
import Footer from './Footer';
import ShoppingCart from './ShoppingCart';

export default function Home() {
  const [menuItems, setMenuItems] = useState([]);
  const [dessertItems, setDessertItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartVisible, setCartVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setMenuItems(covfefeMenuItems);
      setDessertItems(covfefeDessertItems);
    }, 1000);
  }, []);

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
      <Navbar toggleCart={toggleCart} />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="my-3 text-center">Covfefe Shop Menu</h1>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-12">
            <h3 className="text-center">Coffee</h3>
          </div>
          {menuItems && menuItems.length > 0 && menuItems.map((menuItem) => (
            <MenuItem key={menuItem.id} item={menuItem.item} price={menuItem.price} image={menuItem.image} altText={menuItem.item} addToCart={() => addToCart(menuItem)} />
          ))}
        </div>
        <div className="row">
          <div className="col-12">
            <h3 className="text-center">Desserts</h3>
          </div>
          {dessertItems && dessertItems.length > 0 && dessertItems.map((dessertItem) => (
            <MenuItem key={dessertItem.id} item={dessertItem.item} price={dessertItem.price} image={dessertItem.image} altText={dessertItem.item} addToCart={() => addToCart(dessertItem)} />
          ))}
        </div>
      </div>
      <Footer />
      <ShoppingCart cartItems={cartItems} isVisible={cartVisible} toggleCart={toggleCart} />
    </>
  );
}
