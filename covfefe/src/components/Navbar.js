import React from 'react';
import { Link } from 'react-router-dom';
import { TiShoppingCart } from "react-icons/ti";
import ShoppingCart from './ShoppingCart'; // Import ShoppingCart component

export default function Navbar({ toggleCart, cartVisible, cartItems }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Covfefe</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/menu">Menu</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/aboutUS">About Us</Link>
            </li>
            {/* <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Menu
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Coffee</a></li>
                <li><a className="dropdown-item" href="#">Dessert</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Coming Soon</a></li>
              </ul>
            </li> */}
          </ul>
          <span className="navbar-text mx-auto">
            Covfefe Simply, The Best
          </span>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-light" type="submit">Search</button>
          </form>
          <button className="btn btn-outline-light ms-2" onClick={toggleCart}>
            <TiShoppingCart />
          </button>
        </div>
      </div>
      <ShoppingCart cartItems={cartItems} isVisible={cartVisible} toggleCart={toggleCart} />
    </nav>
  );
}
