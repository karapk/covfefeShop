import React, { useEffect } from 'react';
import Swal from 'sweetalert2';

export default function MenuItem({ image, altText, price, item, addToCart }) {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      Swal.fire({
        title: 'Memorial Week Discount!!!',
        text: `Memorial Week Discount: ${item}, buy one get one free!`,
        icon: 'info',
        confirmButtonText: 'Claim Discount',
      });
    }, 5000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [item]);

  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">
        <img src={image} className="card-img-top" alt={altText} />
        <div className="card-body text-center">
          <h5 className="card-title">{item}</h5>
          <p className="card-text">{`$${price}`}</p>
          <button type="button" className="btn btn-outline-secondary" onClick={addToCart}>Add to cart</button>
        </div>
      </div>
    </div>
  );
}
