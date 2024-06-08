import React, { useState, useEffect } from 'react';
import MenuItem from '../components/MenuItem';
import Weather from '../components/Weather';
import { covfefeMenuItems, covfefeDessertItems } from '../covfefeData';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
import ShoppingCart from '../components/ShoppingCart';
// import AboutUs from './AboutUs';

export default function Home() {
  const weatherApiKey = '8a4a659f034f1c9c5b0e86ce24c04de9';
  const [menuItems, setMenuItems] = useState([]);
  const [dessertItems, setDessertItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartVisible, setCartVisible] = useState(false);
  const [userCity, setUserCity] = useState(null);
  const [currentTemp, setCurrentTemp] = useState(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log('position', position)
          const { latitude, longitude } = position.coords;
          // //Anchorage 61.2181, -149.9003
          // getWeatherData(61.2181, -149.9003)
          // // Death Valley 36.4614, -116.8656
          // getWeatherData(36.4614, -116.8656)
          // //browser
          getWeatherData(latitude, longitude)
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    }
  }, [])

  async function getWeatherData(lat, lon){
    console.log(lat)
    console.log(lon)
    let weatherAPIResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherApiKey}&units=imperial`);
    console.log('weatherAPIResponse', weatherAPIResponse)
    if(weatherAPIResponse.status != 200){
      alert('could not get weather data')
    }
    let jsonData = await weatherAPIResponse.json()
    console.log('jsonData', jsonData)
    setUserCity(jsonData.name)
    setCurrentTemp(Math.round(jsonData.main.temp))
  }
  
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
      {/* <Navbar toggleCart={toggleCart} /> */}
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
      {/* <Footer />
      <ShoppingCart cartItems={cartItems} isVisible={cartVisible} toggleCart={toggleCart} /> */}
    </>
  );
}
