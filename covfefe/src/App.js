import React, {useState, useEffect} from 'react';
import './App.css';
import MenuItem from './components/MenuItem';
import { covfefeMenuItems } from './covfefeData';

function App() {
  
  const [menuItems, setMenuItems] = useState(covfefeMenuItems);
  const [covfefeDessertItems, setCovfefeDessertItems] = useState(covfefeDessertItems);
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1 className="my-3 text-center">Covfefe Shop Menu</h1>
        </div>
      </div>
      <div className="row my-5">
        <div className="h3">Coffee</div>
        {menuItems && menuItems.length > 0 && menuItems.map((menuItem) => (
            <MenuItem key={menuItem.id} item={menuItem.item} price={menuItem.price} image={menuItem.image} altText={menuItem.item} />
        ))}
      </div>
      <div className="row">
        <div className="h3">Desserts</div>
        {covfefeDessertItems && covfefeDessertItems.length > 0 && covfefeDessertItems.map((dessertItem) => (
            <MenuItem key={dessertItem.id} item={dessertItem.item} price={dessertItem.price} image={dessertItem.image} altText={dessertItem.item} />
        ))}
      </div>
      
    </div>
  );
}

export default App;
