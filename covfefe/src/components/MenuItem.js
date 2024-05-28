import React, { useEffect, useRef } from 'react';
import Swal from 'sweetalert2'



export default function MenuItem({ image, altText, price, item }) {

  useEffect(() => {
    Swal.fire({
      title: 'Memorial Week Discount!!!',
      text: `Memorial Week Discount: ${item}, buy one get one free!`,
      icon: 'info',
      confirmButtonText: 'Claim Discount',
    })
  }, []);

  return (
    <div className="col-4 mb-4">
      <div className="card h-100">
        <img src={image} className="card-img-top" alt={altText} />
        <div className="card-body">
          <h5 className="card-title">{item}</h5>
          <p className="card-text">{`$${price}`}</p>
          <button type="button" className="btn btn-outline-secondary" onClick={() => console.log('clicked')}>Add to cart</button>
        </div>
      </div>
    </div>
  );
}
