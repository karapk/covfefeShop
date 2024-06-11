// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import MenuItem from '../components/MenuItem';
import Weather from '../components/Weather';
import { covfefeMenuItems, covfefeDessertItems } from '../covfefeData';

export default function Home({ addToCart }) {
  const weatherApiKey = '8a4a659f034f1c9c5b0e86ce24c04de9';
  const [menuItems, setMenuItems] = useState([]);
  const [dessertItems, setDessertItems] = useState([]);
  const [userCity, setUserCity] = useState(null);
  const [currentTemp, setCurrentTemp] = useState(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          getWeatherData(latitude, longitude);
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    }
  }, []);

  async function getWeatherData(lat, lon) {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherApiKey}&units=imperial`);
      if (!response.ok) throw new Error('Failed to fetch weather data');
      const jsonData = await response.json();
      setUserCity(jsonData.name);
      setCurrentTemp(Math.round(jsonData.main.temp));
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setMenuItems(covfefeMenuItems);
      setDessertItems(covfefeDessertItems);
    }, 1000);
  }, []);

  return (
    <div className="container">
      <Weather currentTemp={currentTemp} userCity={userCity} />
      <div className="row">
        <div className="col-12">
          <h1 className="my-3 text-center">Covfefe Shop Menu</h1>
        </div>
      </div>
      <div className="row my-5">
        <div className="col-12">
          <h3 className="text-center">Coffee</h3>
        </div>
        {menuItems.length > 0 && menuItems.map((menuItem) => (
          <MenuItem key={menuItem.id} item={menuItem.item} price={menuItem.price} image={menuItem.image} altText={menuItem.item} addToCart={() => addToCart(menuItem)} />
        ))}
      </div>
      <div className="row">
        <div className="col-12">
          <h3 className="text-center">Desserts</h3>
        </div>
        {dessertItems.length > 0 && dessertItems.map((dessertItem) => (
          <MenuItem key={dessertItem.id} item={dessertItem.item} price={dessertItem.price} image={dessertItem.image} altText={dessertItem.item} addToCart={() => addToCart(dessertItem)} />
        ))}
      </div>
    </div>
  );
}
