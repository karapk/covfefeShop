import React from 'react';

export default function ShoppingCart({ cartItems, isVisible, toggleCart }) {
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  return (
    <div className={`shopping-cart ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="shopping-cart-header">
        <h5>Shopping Cart</h5>
        <button onClick={toggleCart} className="close-cart">X</button>
      </div>
      <ul className="list-group">
        {cartItems.map((item, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            {item.item} x{item.quantity}
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </li>
        ))}
      </ul>
      <div className="shopping-cart-total">
        <strong>Total:</strong> ${calculateTotal()}
      </div>
    </div>
  );
}
