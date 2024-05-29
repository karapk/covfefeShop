import React, { useState, useEffect } from 'react';
import MenuItem from './MenuItem';
import { covfefeMenuItems, covfefeDessertItems } from '../covfefeData';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Home() {
  const [menuItems, setMenuItems] = useState([]);
  const [dessertItems, setDessertItems] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setMenuItems(covfefeMenuItems);
      setDessertItems(covfefeDessertItems);
    }, 1000);
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="my-3 text-center">Covfefe Shop Menu</h1>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-12">
            <h3 className="text-center text-white">Coffee</h3>
          </div>
          {menuItems && menuItems.length > 0 && menuItems.map((menuItem) => (
            <MenuItem key={menuItem.id} item={menuItem.item} price={menuItem.price} image={menuItem.image} altText={menuItem.item} />
          ))}
        </div>
        <div className="row">
          <div className="col-12">
            <h3 className="text-center text-white">Desserts</h3>
          </div>
          {dessertItems && dessertItems.length > 0 && dessertItems.map((dessertItem) => (
            <MenuItem key={dessertItem.id} item={dessertItem.item} price={dessertItem.price} image={dessertItem.image} altText={dessertItem.item} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
