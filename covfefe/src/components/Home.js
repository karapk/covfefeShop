import React, { useState, useEffect } from 'react';
import MenuItem from './MenuItem';
import { covfefeMenuItems, covfefeDessertItems } from '../covfefeData';
import Navbar from './Navbar';
import Footer from './Footer';

function App() {
  const [menuItems, setMenuItems] = useState([]);
  const [dessertItems, setDessertItems] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setMenuItems(covfefeMenuItems);
      setDessertItems(covfefeDessertItems);
    }, 1000); 
  }, []); // Empty dependency array means this runs once on component mount

  return (
    <div className="container">
      <Navbar />
      <div className="row">
        <div className="col-12">
          <h1 className="my-3 text-center">Covfefe Shop Menu</h1>
        </div>
      </div>
      <div className="row my-5 height: 50px;">
        <div className="h3 d-inline-block">Coffee</div>
        {menuItems && menuItems.length > 0 && menuItems.map((menuItem) => (
          <MenuItem key={menuItem.id} item={menuItem.item} price={menuItem.price} image={menuItem.image} altText={menuItem.item} />
        ))}
      </div>
      <div className="row">
        <div className="h3">Desserts</div>
        {dessertItems && dessertItems.length > 0 && dessertItems.map((dessertItem) => (
          <MenuItem key={dessertItem.id} item={dessertItem.item} price={dessertItem.price} image={dessertItem.image} altText={dessertItem.item} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
